import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const params = useParams()
    const sClass = useLoaderData();
    console.log(sClass);
    console.log(params);
    const navigate = useNavigate();

    const updateClass = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.name.value;
        const price = form.price.value;
        const enroll = form.enroll.value;

        const description = form.description.value;

        const updateClassInfo = { // Use a different variable name
            title:title,
            price,
            total_enrollment:enroll,                       
            description:description
        };

        try {
            const response = await fetch(`https://edu-mentor-server-blush.vercel.app/updateClass/${params.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateClassInfo),
            });

            const data = await response.json();
            console.log(data);
            if (data.modifiedCount>0) {
                Swal.fire(
                    'Thank you!',
                    'Your food is now available',
                    'success'
                )
                form.reset();
                navigate('/dashboard/insclass');
            } else {
                Swal.fire('Error', 'Failed to update food', 'error');
            }
        } catch (error) {
            console.error('Error updating food:', error);
            Swal.fire('Error', 'An unexpected error occurred', 'error');
        }
    }

    return (
<div>
        
        <h1 className="font-bold text-orange-700 md:text-4xl text-center">ADD YOUR Class</h1>
               <div className=" flex-shrink-0 mx-auto bg-[#F3F3F3] md:p-10 my-10">
               
                   <div className="card-body ">
                       <form onSubmit={updateClass}>
                           <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
                               <div className="form-control">
                               <label className="mb-2 font-bold">Course Name</label>
                                   <input type="text" name="name" placeholder="Title" defaultValue={sClass.title} className="input input-bordered" />
                               </div>
                            
                               <div className="form-control">
                               <label className="mb-2 font-bold"> Price</label>
                                   <input type="number" name="price" placeholder='Price' defaultValue={sClass.price} className="input input-bordered" required />
                               </div>
                               <div className="form-control">
                               <label className="mb-2 font-bold"> Total Enrollment</label>
                                   <input type="number" name="enroll" placeholder='Total Enrollment' defaultValue={sClass.total_enrollment} className="input input-bordered" required />
                               </div>
                             
                           </div>
                           
                           <div className="form-control">
                               <textarea className="textarea textarea-bordered h-52 mt-4" defaultValue={sClass.description} name="description" placeholder="Detail description"></textarea>
                           </div>
                           <div className="form-control mt-6">
                               {/* <button className="btn border-0 bg-[#FF3811] hover:bg-orange-500">Order Confirm</button> */}
                               <input className="btn border-0 bg-sky-600 hover:bg-blue-700" type="submit" value="Update CLASS" />
                           </div>
                       </form>
                   </div>
               </div>
         
        
       </div>
    );
};

export default Update;
