import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { IMGimg, TEXTimg } from "./Constants";
const CreateAd= () => {
    return (
       <div><Header/>
       <div className="contact-container p-40" >
        <div className=" p-10 m-10 border border-gray-500 flex space-between pl-40">
      
             <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 ">
             <input type="checkbox"className="absolute top-0 left-0 relative"/>                                             
             <img
        className="rounded-lg"
        alt="res-logo"
        src={TEXTimg}
      />       
                    <div className="text-gray-400 text-center">
                      Create
                    </div> 
                    <div className="text-black text-center">
                    <Link to = "/create-add/img"> Text Ad </Link>
                    </div>
                     </div>
                     <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
                     <input type="checkbox"className="absolute top-0 left-0 relative"/>    
                     <img
        className="rounded-lg"
        alt="res-logo"
        src={IMGimg}/>
       
                     <div className="text-gray-400 text-center">
                      Create
                    </div> 
                    <div className="text-black text-center">
                    <Link to = "/create-add/img"> Image Ad </Link>
                    
                    </div>
                  
                     </div>
                 
                  </div>               
 </div>

 </div>
 
 
       
    );
};
export default CreateAd;
