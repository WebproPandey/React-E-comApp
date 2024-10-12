import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading';
import { ProductContext } from '../utils/Context';

const Details = () => {
  const [products, setproducts] = useContext(ProductContext)

    const [Product, setProduct] = useState(null)
    let {id} =  useParams()   
  

  // const  getsingleProduct = async  () =>{
  //     try{
  //       const  {data} = await  axios(`/products/${id}`)
  //       setProducts(data)        
  //     }
  //     catch(err) {
  //     console.log( err);
      
  //     }
  // }

  useEffect(() =>{
    if(!Product){
        setProduct(products.filter((p) => p.id == id)[0])
    }
    // getsingleProduct()
  },[])

 
  
  return  Product ? (
    <>
  
    
    <div className='w-[80%] h-full  mx-auto flex justify-center items-center gap-5 '>
        
        <div className="image h-[50%] w-[30%]">
            <img  className="h-full  w-full  object-contain "  src={Product.image} alt="" />
        </div>
        <div className="containe min-h-[50%] w-[40%] bg-gray-200 p-[1rem] flex flex-col justify-around rounded-md">
          <h1 className='text-3xl  font-semibold'>{Product.title.length > 20 ? `${Product.title.substring(0,20)}...` : Product.title }</h1>
          <h3 className='text-xl capitalize font-sans font-semibold '>{Product.category}</h3>
          <h2 className='text-lg font-medium  text-red-300 ' >{Product.price} $</h2>
          <p className='text-[2.4vh] font-sans'>{Product.description}</p>
           <div className='w-fit flex  gap-3 '>
           <Link className='bg-green-400 px-4 py-2 rounded-lg'>Edit</Link>
           <Link className='bg-red-500 px-4 py-2 rounded-lg' >Delete</Link>
           </div>
        </div>
    </div>


    </>

  ) : (
    <Loading />
  )
}

export default Details