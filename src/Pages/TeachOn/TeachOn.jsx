

import Swal from 'sweetalert2';

import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

function TeachOn() {
    
    const { user } = useContext(AuthContext);

    const handleUser = e => {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        const form = e.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const category = form.category.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const quantity = form.quantity.value;
        const description = form.description.value;

        const userObj = { // Use a different variable name
            name,
            picture: photoURL,
            userName,
            email: userEmail,
            availableQuantity: quantity,
            category,
            price,
            rating,
            description
        };

        console.log(userObj);

        fetch('https://simple-brand-server-bnt1savmi-atikur-rahmans-projects-28d664b2.vercel.app/users', {
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
                    'Your car is now available',
                    'success'
                )
                form.reset()
            }
        });
    }

  return (
    <div>
     <h1 className="font-bold text-blue-900 md:text-4xl text-center">ADD YOUR NEW CAR</h1>
            <div className=" flex-shrink-0 mx-auto bg-[#F3F3F3] md:p-10 my-10">
            
                <div className="card-body ">
                    <form onSubmit={handleUser}>
                        <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
                            <div className="form-control">
                                <input type="text" name="photoURL" placeholder="Photo url link..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
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
                                    <option value="Toyota">Toyota</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Ford">Ford</option>
                                    <option value="Chevrolet">Chevrolet</option>
                                    <option value="Nissan">Nissan</option>
                                    <option value="Bmw">BMW</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="number" name="quantity" placeholder="Available quantity" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <textarea className="textarea textarea-bordered h-52 mt-4" name="description" placeholder="Detail description"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn border-0 bg-[#FF3811] hover:bg-orange-500">Order Confirm</button> */}
                            <input className="btn border-0 bg-blue-500 hover:bg-blue-700" type="submit" value="ADD CAR" />
                        </div>
                    </form>
                </div>
            </div>
      
     
    </div>
  )
}

export default TeachOn