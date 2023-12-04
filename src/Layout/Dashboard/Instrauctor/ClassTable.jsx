
import { useContext } from "react";
import { RxPencil1, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const ClassTable = ({ Class, myClass, setMyClass }) => {
    const{user}=useContext(AuthContext)
    const { _id } = Class;
    console.log(Class);
    const deleteFood = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addclass/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Car has been deleted.',
                                'success'
                            )
                            const remaining = myClass.filter(c => c._id !== id);
                            setMyClass(remaining);
                        }
                    })
            }
        })
    }
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={Class.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {Class.title}
                    
                    </h2>
                    <p className="font-semibold">Email:{user?.email} </p>
                    <p className="font-semibold">Price: ${Class.price}</p>
                    <p className="font-semibold">Description: {Class.description} </p>
                    <div className="card-actions justify-between pb-3">
                        <div className=""><RxCross1 onClick={() => deleteFood(Class?._id)} className="p-3 text-5xl rounded" style={{ color: '#774320', background: 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)' }}></RxCross1></div>
                        <div className=""> {/* The button to open modal */}
            <Link to={`update/${Class?._id}`} htmlFor="my-modal"><RxPencil1 className="p-3 text-5xl rounded" style={{ color: '#774320', background: 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)' }}></RxPencil1></Link></div>
            
                    </div>
                   
                   <button className="bg-cyan-500 rounded-lg py-1">See Details</button>
                   
                </div>
            </div>


            
           





        </>
    );
};

export default ClassTable;





