import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../utils/Context"
import { useNavigate, useParams } from "react-router-dom"

const EditProduct = () => {

    let navigate =  useNavigate()
   
     const [products, setproducts] = useContext(ProductContext)
     let {id} =  useParams()
     const [product, setproduct] = useState({
      title:"",
      image:"",
      category:"",
      price:"",
      description:""
     })
 
     const changeHanlder  = (e) =>{
        setproduct({...product , [e.target.name]: e.target.value})
        
     }

    useEffect( () =>{
      setproduct(products.filter(p => p.id == id)[0])
    },[id])
    
   
    
     
     const AddProductHandler = (e) => {
      e.preventDefault()
     
       if(
        product.title.trim().length < 5 ||
         product.image.trim().length < 10 ||
         product.category.trim().length < 2 ||
         product.price.trim().length < 2 ||
         product.description.trim().length < 10 )
     {
        alert("All fields should be at least 5 characters long")
        return;
   
     }
   
      const productIndex  =  products.findIndex((p) => p.id == id);
      const copyData =  [...products]  
      copyData[productIndex] = {...products[productIndex] ,...product}  
      setproduct(copyData)
      localStorage.setItem("products" , JSON.stringify(copyData))
      navigate(-1) 

       
     }


  return (
    <div className="h-screen  w-full bg-blue-200 flex flex-col  gap-4 justify-center items-center ">
    <h1 className="text-3xl font-semibold capitalize">Edit Product</h1>
    <form onSubmit={AddProductHandler} className="flex flex-col   h-[60%] w-1/2  ">
      <input
        type="text"
        className="py-3 px-2 rounded text-xl mb-3 outline-none"
        placeholder="Product Name"
        value={product && product.title}
        onChange={changeHanlder}
        name="title"
      />
      <input
        type="url"
        className="py-3 px-2 rounded text-[3vh] mb-3 outline-none"
        placeholder="image link"
        value={product &&  product.image}
        onChange={changeHanlder}
        name="image"
      />
      <div className=" flex justify-between mb-3">
      <input
        type="number"
        className="py-3 px-2 rounded  w-[48%] text-[3vh] outline-none "
        placeholder="Price"
        value={product && product.price}
        onChange={changeHanlder}
        name="price"
      />
      <input
        type="text"
        className="py-3 px-2 rounded  w-[48%] text-[3vh] outline-none"
        placeholder="category"
        value={product && product.category}
        onChange={changeHanlder}
        name="category"
      />
      </div>
      <textarea
        className="py-3 px-2 rounded text-[3vh] w-full outline-none mb-3"
        placeholder="Enter Product Description ..."
        rows="10"
        value={product && product.description}
        name="description" 
        onChange={changeHanlder} >
        </textarea>
        <div>

        <button className="py-3 px-4 bg-blue-300 rounded border  ">
          Edit Product
        </button>
        </div>
    </form>
  </div>
    )
}

export default EditProduct