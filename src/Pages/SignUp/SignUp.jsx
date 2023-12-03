import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Google from '../Login/Google';



const SignUp = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser, updateInfo } = useContext(AuthContext);
    const navigate= useNavigate();
    const axiosPublic =useAxiosPublic();

    const handleRegister = async (e) => {
        e.preventDefault();
    
        try {
            const form = e.target; // Access the form directly from the event
            const formData = new FormData(form);
    
            const email = formData.get('email');
            const name = formData.get('name');
            const photoUrl = formData.get('photourl');
            const password = formData.get('password');
    
            const result = await createUser(email, password);
            const loggedUser = result.user;
            console.log(loggedUser);
    
            // Update user information
            await updateInfo(name, photoUrl);
            const userInfo={
                name: formData.get('name'),
                email:formData.get('email'),
                photourl:formData.get('photourl')
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                if(res.data.insertedId){
                    console.log("user added data base")
                    setError('');
                    setSuccess('Successfully registered!');
            
                    // Reset the form
                    form.reset();
            
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully registered!',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/')
                    
                }
            })
    
           
        } catch (error) {
            console.error(error);
            setError(error.message);
            setSuccess('');
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen items-center my-12 mx-4">
           

            <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src="https://source.unsplash.com/random" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-600">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleRegister} className="space-y-6" action="#" method="POST">
                        <div>
                            <label className="block text-sm font-medium leading-6 text-blue-600">Name</label>
                            <div className="mt-2">
                                <input
                                    id="text"
                                    name="name"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-yellow-500 px-2 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-blue-600">Photo URL</label>
                            <div className="mt-2">
                                <input
                                    id="text"
                                    name="photourl"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-yellow-500 px-2 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-blue-600">Email address</label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-yellow-500 px-2 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-blue-600">Password</label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-yellow-500 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                            <Google></Google>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?
                        <Link to={`/login`}>
                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Login
                            </a>
                        </Link>
                    </p>
                </div>
                <label className="label">
                    <p className="label-text-alt text-red-600">{error}</p>
                    <p className="label-text-alt text-green-600">{success}</p>
                </label>
            </div>
        </div>
    );
};

export default SignUp;
