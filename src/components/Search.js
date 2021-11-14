import React, { useState } from "react";
import Twitter from "./Twitter"


export default function Search( ) {
    const [value, setValue] = useState("");
   
    var height = 50;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
        //console.log(value);
        window.location.href=`/twitter/${value}`;
        
        // <Twitter data={data} className={"h-" + height}/>
        // <Twitter data={data2} className={"h-" + height + 100}/>
        // fetch(`/${e}`).then(res => res.json()).then(data => {
        //     for(var i = 0; i < data.length; i++)
        //     {
        //         <Twitter data={data[i]}/>
        //     }
            
        // });
    }
    return (
        <div className="absolute left-1/2 bottom-1/2 transform -translate-x-1/2 container">
            <form className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" onSubmit={handleSubmit}>
            <input type="text"  onChange={(e) => setValue(e.target.value)}  placeholder="Search company name" className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" onSubmit={handleSubmit}/>
            </form>
        </div>
    );  
}