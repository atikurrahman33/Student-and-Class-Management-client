import { useEffect, useState } from "react";


const Review = () => {
    const[review, setReview] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allreview')
      .then(response => response.json())
      .then(data =>{
       
        setReview(data)
      } )
    },[])
    return (
        <div className="py-12 px-8 bg-slate-400 ">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-cyan-900">
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Rating</th>
        <th>review</th>
      </tr>
    </thead>
    <tbody>
     
    {
        review.map((review,index)=> <tr className="bg-base-200 " key={review._id}>
        <th>{index+1}</th>
        <td>{review.name}</td>
        <td>{review.date}</td>
        <td>{review.rating}</td>
        <td>{review.review}</td>
        
      </tr>)
    }
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Review;