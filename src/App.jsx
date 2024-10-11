import React from "react";
import { Link, Route,  Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import CreateProduct from "./components/CreateProduct";

const App = () => {

 let {search , pathname} =   useLocation()
 
  return (
    <div className="h-screen  w-full flex  ">
      {(pathname != "/" ||search.length > 0)&&(
        <Link className='text-sm absolute top-[1%] left-[22%]  text-black/80 font-semibold px-4 py-2 bg-blue-500 rounded-lg' to='/'>Back to Home</Link>
      )}
      <Routes>
         <Route path="" element={<Home/>}   />
         <Route path="/product" element={<CreateProduct/>}/>
         <Route path="/details/:id" element={<Details/>}   />
      </Routes>
      
    </div>
  );
};

export default App;
