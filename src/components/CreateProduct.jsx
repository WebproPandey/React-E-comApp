import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";

import  {nanoid}   from "nanoid"

const CreateProduct = () => {

 const [products, setproducts] = useContext(ProductContext)
  const [title, settitle] = useState("")
  const [image, setimage] = useState("")
  const [category, setcategory] = useState("")
  const [price, setprice] = useState("")
  const [description, setdescription] = useState("")

 
  
  const AddProductHandler = (e) => {

    if(title.trim().length < 5 ||
     image.trim().length < 10 ||
     category.trim().length < 2 ||
     price.trim().length < 2 ||
     description.trim().length < 10 )
  {
     alert("All fields should be at least 5 characters long")
     return;

  }

    e.preventDefault()
     const  product =  
     { 
      id:nanoid(),
      title,
      image,
      category,
      price,
      description
     }
     setproducts([...products , product])
     console.log(product);
     
   
  }
  return (
    <div className="h-screen  w-full bg-blue-200 flex flex-col  gap-4 justify-center items-center ">
      <h1 className="text-3xl font-semibold capitalize">Create New Product</h1>
      <form onSubmit={AddProductHandler} className="flex flex-col   h-[60%] w-1/2  ">
        <input
          type="text"
          className="py-3 px-2 rounded text-xl mb-3 outline-none"
          placeholder="Product Name"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="url"
          className="py-3 px-2 rounded text-[3vh] mb-3 outline-none"
          placeholder="image link"
          value={image}
          onChange={(e) => setimage(e.target.value)}
        />
        <div className=" flex justify-between mb-3">
        <input
          type="number"
          className="py-3 px-2 rounded  w-[48%] text-[3vh] outline-none "
          placeholder="Price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <input
          type="text"
          className="py-3 px-2 rounded  w-[48%] text-[3vh] outline-none"
          placeholder="category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        />
        </div>
        <textarea
          className="py-3 px-2 rounded text-[3vh] w-full outline-none mb-3"
          placeholder="Enter Product Description ..."
          rows="10"
          value={description}
          onChange={(e) => setdescription(e.target.value)} >
          </textarea>
          <div>

          <button className="py-3 px-4 bg-blue-300 rounded border  ">
            Create Product
          </button>
          </div>
      </form>
    </div>
  );
};

export default CreateProduct;
