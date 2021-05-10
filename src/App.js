import React,{useState, useEffect}  from 'react';
//import Products from './components/products/products'
//import Navbar from './components/Navbar/Navbar'

import {Products, Navbar, Cart, Checkout} from './components'
import axios from "axios";
import { ContactlessOutlined } from '@material-ui/icons';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () =>{
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const url_products = "http://127.0.0.1:9000/api/products";
        
        let data = {}
        await axios.get(url_products).then(response=>{       
             data= response.data     
            console.log(response.data);
        }).catch(error =>{
            console.log(error => {
                console.log(error.message);
            })
        })

        console.log(data);
        setProducts(data);
    };

    const fetchCart = async() =>{
        const url_cart = "http://127.0.0.1:9000/api/cart";
        let cart = {}
        await axios.get(url_cart).then(response=>{
            cart = response.data;
            console.log(response.data)
        }).catch(error =>{
            console.log(error => {
                console.log(error.message);
            })
        })

        setCart(cart);
    }

    const handleAddToCart = async(productId, quantity) =>{
        const url_add_cart = "http://127.0.0.1:9000/api/cart"
        await axios.post(url_add_cart, {"id_product":productId, "quantity":quantity}).then(response =>{
            
        }).catch(error=>{
            console.log(error.message);
        })
    }

    const handleRemoveCart = async(cart_id) =>{
        const url_cart = "http://127.0.0.1:9000/api/cart/" + String(cart_id);;
        await axios.delete(url_cart ).then(response =>{
            const rps = response;
            console.log(response);
            fetchCart();
        }).catch(error =>{
            console.log(error.message);
        });
    }

    const handleRemoveFromCart = async(productId) =>  {
        const url_cart = "http://127.0.0.1:9000/api/cart/";
        let cart = {}
        await axios.delete(url_cart, {"productId":productId}).then((response) =>{
            const cart = response.data;
            fetchCart();
        }).catch(error =>{
            console.log(error.message);
        });

        setCart(cart);
    }

    const handleEmptyCart = async() => {
        const url_cart = "http://127.0.0.1:9000/api/cartEmpty";
        await axios.post(url_cart).then(response =>{
            const cart = response.data;
        }).catch(error =>{
            console.log(error.message);
        });

    }

    const handleUpdateCartQty = async(cart_id, quantity) => {
        const url_cart_upt = "http://127.0.0.1:9000/api/quantyCart/" + String(cart_id);
        await axios.put(url_cart_upt, {"quantity": quantity}).then(response =>{
            console.log(response);
            fetchCart();

        }).catch(error => {

        });
    }

    

    useEffect(() => {        
        fetchProducts();
        fetchCart();
    },[])

    //console.log(products.data)

    return (
    <div>
        <Router>
            <div>
                <Navbar totalItems={cart.total_items}></Navbar>
                <Switch>
                    <Route exact path="/">
                        <Products products={products} handleAddToCart={handleAddToCart}></Products>
                    </Route>

                    <Route exact path="/cart">
                        <Cart cart={cart} handleEmptyCart={handleRemoveFromCart} handleRemoveCart={handleRemoveCart} handleUpdateCartQty={handleUpdateCartQty }></Cart>    
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout></Checkout>
                    </Route>
                    
                    
                </Switch>
                
            </div>
        </Router>
    </div>
    )
}

export default App;