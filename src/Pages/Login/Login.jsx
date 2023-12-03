
import { Link } from 'react-router-dom';

import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { AuthContext } from '../../Provider/AuthProvider';
import Google from './Google';



const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = (form.get("email"));
        const password = (form.get("password"));
        console.log(email, password);
        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully login',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(location?.state ? location.state : "/")
                // ...
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: `${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            });
    }
    return (
        <>
            <div className=' lg:p-16 '>
            

                <section className="flex flex-col md:flex-row h-screen items-center ">

                    <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen ">
                        <img src="https://source.unsplash.com/random" alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

                        <div className="w-full h-200 ">


                            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 ">Log in to your account</h1>

                            <form onSubmit={handleLogin} className="mt-6" action="#" method="POST">
                                <div>
                                    <label className="block text-gray-700">Email Address</label>
                                    <input type="email" name="email" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-gray-700">Password</label>
                                    <input type="password" name="password" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
                                </div>

                                <div className="text-right mt-2">
                                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                                </div>

                                <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
                                <hr className="my-6 border-gray-300 w-full" />

                                <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                                    <Google></Google>
                                </button>

                                <Link to={`/signup`}> <p className="mt-8">You have no account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Create an account</a></p></Link>
                            </form>




                        </div>
                    </div>

                </section>

            </div>
        </>
    );
};

export default Login;