import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../utils/Context'

const Nav = () => {
  let [product] =  useContext(ProductContext)
 
  let uniqueCategory = product && product.reduce((acc, cv) => [...acc , cv.category] ,[] )
  uniqueCategory = [...new Set(uniqueCategory)]  


  return (
      <nav className="w-[20%] bg-gray-200 h-full flex  flex-col items-center py-5">
        <Link to="/product" className="px-3  py-2 bg-blue-300">Add Product</Link>
        <hr className="bg-gray-500  h-[2px] mt-2 w-[80%]" />
        <h1 className="w-[80%] text-2xl font-sans capitalize">Category</h1>
        <div className="w-[80%] py-[0.5rem] flex flex-col">
           {uniqueCategory.map((category , index) =>(
              <Link 
              key={index}
              to={`/?category=${category}`}
              className=" text-xl capitalize">
               <span className="h-[2vh] rounded-full w-[2vh] bg-blue-300 inline-block mr-[1rem]"></span>
               {category}
             </Link>
           ))}
          
        </div>
      </nav> 
    )
}

export default Nav