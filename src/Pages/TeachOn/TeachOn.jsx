

import Swal from 'sweetalert2';

import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

function TeachOn() {
    
    const { user } = useContext(AuthContext);

    const handleUser = e => {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        const form = e.target;
        const photoURL = form.userPhotoURL.value;
        const title = form.title.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const category = form.category.value;
        const experience = form.experience.value;        
        const description = form.description.value;

        const userObj = { // Use a different variable name
            title,
            photoURL: photoURL,
            userName,
            email: userEmail,            
            category,
            experience,            
            description
        };

        console.log(userObj);

        fetch('https://edu-mentor-server-blush.vercel.app/requests', {
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
                    'Your Data is now available',
                    'success'
                )
                form.reset()
            }
        });
    }

  return (
    <div>
     <h1 className="font-bold text-cyan-600 md:text-4xl text-center">ADD YOUR Information</h1>
            <div className=" flex-shrink-0 mx-auto bg-zinc-500 md:p-10 my-10">
            
                <div className="card-body ">
                    <form onSubmit={handleUser}>
                        <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
                            <div className="form-control">
                                <input type="text" name="userPhotoURL" defaultValue={user?.photoURL} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="title" placeholder="Title" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name="userName" defaultValue={user?.displayName} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name="userEmail" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            
                            <div className="form-control">
                                <select
                                    id="category"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none input-bordered"
                                    name="category"

                                >                                    
                                    <option value="" >Select a category</option>
                                    <option value="Programmer">Programmer</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Data science">Data science</option>
                                    <option value="Language">Language</option>
                                    <option value="Design">Design</option>
                                    
                                </select>
                            </div>
                            <div className="form-control">
                                <select
                                    id="experience"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none input-bordered"
                                    name="experience"

                                >                                    
                                    <option value="" >Select experience</option>
                                    <option value="Beginner">Beginner </option>
                                    <option value="Experienced">Experienced</option>
                                    <option value="Some idea">Some idea</option>
                                    
                                </select>
                            </div>
                           
                        </div>
                        <div className="form-control">
                            <textarea className="textarea textarea-bordered h-52 mt-4" name="description" placeholder="Detail description"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn border-0 bg-[#FF3811] hover:bg-orange-500">Order Confirm</button> */}
                            <input className="btn border-0 bg-cyan-600 hover:bg-blue-700" type="submit" value="Submit For Review" />
                        </div>
                    </form>
                </div>
            </div>
      
     
    </div>
  )
}

export default TeachOn