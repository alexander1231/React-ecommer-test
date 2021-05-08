import React,{useState, useEffect}  from 'react';
//import Products from './components/products/products'
//import Navbar from './components/Navbar/Navbar'

import {Products, Navbar} from './components'
import { commerce } from './lib/commerce';
import axios from "axios";


const App = () =>{
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const url_products = "http://127.0.0.1:9000/api/products";
        var data = {}
        await axios.get(url_products).then(response=>{       
             data= response.data     
            console.log(response.data);
        }).catch(error =>{
            console.log(error => {
                console.log(error.message)
            })
        })

        console.log(data);
        setProducts(data);
    }

    

    useEffect(() => {
        fetchProducts();
    },[])

    //console.log(products.data)

    return (
    <div>
        <Navbar></Navbar>
        <Products products={products}></Products>
    </div>
    )
}

export default App;