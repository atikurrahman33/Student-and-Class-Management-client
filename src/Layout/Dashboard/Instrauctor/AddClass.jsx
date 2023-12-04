import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';



function AddClass() {
    
    const { user } = useContext(AuthContext);

    const handleUser = e => {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        const form = e.target;
        const photoURL = form.photoURL.value;
        const title = form.name.value;
        const price = form.price.value;
        const enroll = form.enroll.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;

        const description = form.description.value;

        const userObj = { // Use a different variable name
            title:title,
            image: photoURL,
            instructor:userName,
            email: userEmail,
            price,
            total_enrollment:enroll,                       
            description:description
        };

        console.log(userObj);

        fetch('https://edu-mentor-server-blush.vercel.app/addclass', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj), // Send the userObj instead of user
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            if (json.insertedId) {
                Swal.fire(
                    'Thank you!',
                    'Your food is now available',
                    'success'
                )
                form.reset()
            }
        });
    }

  return (
    <div>
        
     <h1 className="font-bold text-orange-700 md:text-4xl text-center">ADD YOUR Class</h1>
            <div className=" flex-shrink-0 mx-auto bg-[#F3F3F3] md:p-10 my-10">
            
                <div className="card-body ">
                    <form onSubmit={handleUser}>
                        <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
                            <div className="form-control">
                            <label className="mb-2 font-bold">Course Image</label>
                                <input type="text" name="photoURL" placeholder="Photo url link..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="mb-2 font-bold">Course Name</label>
                                <input type="text" name="name" placeholder="Title" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="mb-2 font-bold"> Name</label>
                                <input type="text" name="userName" readOnly defaultValue={user?.displayName} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="mb-2 font-bold"> Email</label>
                                <input type="email" name="userEmail" readOnly defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="mb-2 font-bold"> Price</label>
                                <input type="number" name="price" placeholder='Price' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="mb-2 font-bold"> Total Enrollment</label>
                                <input type="number" name="enroll" placeholder='Total Enrollment' className="input input-bordered" required />
                            </div>
                          
                        </div>
                        
                        <div className="form-control">
                            <textarea className="textarea textarea-bordered h-52 mt-4" name="description" placeholder="Detail description"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn border-0 bg-[#FF3811] hover:bg-orange-500">Order Confirm</button> */}
                            <input className="btn border-0 bg-sky-600 hover:bg-blue-700" type="submit" value="ADD CLASS" />
                        </div>
                    </form>
                </div>
            </div>
      
     
    </div>
  )
}

export default AddClass;
