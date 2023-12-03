import { useEffect, useState } from "react";
import AllCourseCard from "./AllCourseCard";


const AllCourses = () => {
    const[popular, setPopular] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allClass')
      .then(response => response.json())
      .then(data =>{
        
        setPopular(data)
      } )
    },[])
    return (
        <div >
            <h2 className="text-3xl text-cyan-600 text-center font-bold">Most popular courses </h2>
           <div  className="grid grid-cols-1 md:grid-cols-3 gap-6 py-9">
           {
                popular.map(popular=> <AllCourseCard key={popular.id} popular={popular}></AllCourseCard> )
            }
            
           </div>
                     
        </div>
    );
};

export default AllCourses;