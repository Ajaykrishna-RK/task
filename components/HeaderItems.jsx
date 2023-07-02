import React from "react";
import { Companies, CompaniesMob, HeaderItem, HeaderItemMob } from "../api/headerItems";

function HeaderItems() {
  return (
    <>
<div className="justify-evenly items-center hidden md:flex ml-2 mr-2 ">
      <div class="grid  grid-cols-2 md:grid-cols-5 gap-28   ">
        {HeaderItem.map((item) => (
          <div className="text-white text-xs">
            {item?.name} <span className="ml-2">{item?.price}</span>{" "}
            <span className="ml-2">{item?.profit_Loss}</span>
          </div>
        ))}
      </div>
    </div>


    <div className="justify-evenly items-center flex md:hidden ml-2 mr-2 ">
      <div class="grid  grid-cols-2 md:grid-cols-5 gap-2">
        {HeaderItemMob.map((item) => (
          <div className="text-white text-xs">
            {item?.name} <span className="ml-1">{item?.price}</span>{" "}
            <span className="ml-1">{item?.profit_Loss}</span>
          </div>
        ))}
      </div>
    </div>

 <div style={{backgroundColor:"lightgray"}}>
<h1 className=" ml-2 font-semibold" style={{color:"orangered"}} >FEATURED COMPANIES</h1>
</div>
 

<div style={{backgroundColor:"lightblue",height:"50px"}} className="justify-center items-center flex">
<div className="justify-between items-center flex md:hidden " >
        
        <div class="grid  grid-cols-4 md:grid-cols-6 gap-5">
          {CompaniesMob.map((item) => (
            <div className="text-black text-xs">
              {item?.name} 
            </div>
          ))}
        </div>
      </div>
      <div className="justify-between items-center hidden md:flex " >
        
        <div class="grid  grid-cols-4 md:grid-cols-6 gap-5">
          {Companies.map((item) => (
            <div className="text-black text-xs">
              {item?.name} 
            </div>
          ))}
        </div>
      </div>
</div>
   

   

   


    </>
    
  );
}

export default HeaderItems;
