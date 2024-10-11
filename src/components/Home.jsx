import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [Product] = useContext(ProductContext);
   
  let {search} = useLocation()
  let category = decodeURI(search.split("=")[1])
  const [filterProduct, setfilterProduct] = useState("")
  
  const getproducta = async ()=>{
      try {
         const  {data} =  await axios.get(`products/category/${category}`)
         setfilterProduct(data)
         
      } catch (error) {
        console.log(error);
        
      }
  }

  useEffect(()=>{
    if(!filterProduct || category =="undefined" ) setfilterProduct(Product)
    if(category != "undefined") getproducta()
  },[category, Product ])





  return Product ? (
    <>
      <Nav />
      <div className="home h-full w-[80%] bg-blue-200 flex pl-5 pt-[3rem]  flex-wrap overflow-x-hidden overflow-y-auto">
        {filterProduct &&  filterProduct.map((prod, index) => (
          <Link
            to={`/details/${prod.id}`}
            key={index}
            className="iteamsBox h-[45vh] w-[18vw] bg-white mr-3 mb-3 rounded-lg overflow-hidden"
          >
            <div
              className="hover:scale-[1]  scale-[.8] trans image h-[70%] w-[100%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${prod.image})`, 
              }}
            ></div>
            <div className="bg-gray-100 h-[30%] text-center py-2">
              <div className="h-[8vh] w-full">
              <h1 className="text-[1.6h] text-black font-medium capitalize">
              {prod.title.length > 20 ? `${prod.title.substring(0, 20)}...` : prod.title}
              </h1>
              </div>
              <h1 className="text-xl text-black font-medium capitalize">
                price: ${prod.price} 
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading /> 
  );
};

export default Home;
