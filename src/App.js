import React,{useState, useEffect}  from 'react';
//import Products from './components/products/products'
//import Navbar from './components/Navbar/Navbar'

import {Products, Navbar, Cart} from './components'
import axios from "axios";
import { ContactlessOutlined } from '@material-ui/icons';


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
        console.log(productId)
        //const item = await axios.post()
    }

    

    useEffect(() => {        
        fetchProducts();
        fetchCart();
    },[])

    //console.log(products.data)

    return (
    <div>
        <Navbar totalItems={cart.total_items}></Navbar>
        {/*<Products products={products} onAddToCart={handleAddToCart}></Products>*/}
        <Cart cart={cart}></Cart>
    </div>
    )
}

export default App;