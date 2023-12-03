import { useEffect, useState } from "react";
import CourseCart from "./CourseCart";
import { Link } from "react-router-dom";


const POpularCourse = () => {
    const[popular, setPopular] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allClass')
      .then(response => response.json())
      .then(data =>{
        const sortedCourses = data.sort((a, b) => b.rating - a.rating);

        // Take the top 6 courses
        const top6Courses = sortedCourses.slice(0, 6);
        setPopular(top6Courses)
      } )
    },[])
    return (
        <div >
            <h2 className="text-3xl text-cyan-600 text-center font-bold">Most popular courses </h2>
           <div  className="grid grid-cols-1 md:grid-cols-3 gap-6 py-9">
           {
                popular.map(popular=> <CourseCart key={popular.id} popular={popular}></CourseCart> )
            }
           </div>           
        </div>
    );
};

export default POpularCourse;