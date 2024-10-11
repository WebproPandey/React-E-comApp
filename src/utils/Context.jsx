import axios from './axios'
import React, { createContext, useEffect, useState } from 'react'

export const  ProductContext =  createContext()

const Context = (props) => {
    const [Product, setProduct] = useState(null)

    const  getProduct = async () =>{
    try{
        const  {data} =  await axios("/products")
        setProduct(data)
        
    }
    catch(err) {
        console.error(err)
    }
    }
    console.log(Product);
    
    useEffect(() => {
        getProduct()
    },[])

    return (
    <ProductContext.Provider value={[Product, setProduct]}>
        {props.children}
    </ProductContext.Provider>

  )
}

export default Context