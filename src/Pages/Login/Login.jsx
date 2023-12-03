
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from "sweetalert2";
import { AuthContext } from '../../Provider/AuthProvider';
import Google from './Google';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const[disabled, setDisable]=useState(true)
    const captchaRef= useRef(null)
    const{signIn}= useContext(AuthContext)

    const navigate =useNavigate();
    const location =useLocation();

    const from =location.state?. from?.pathname || "/";
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])


    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
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
            navigate(from,{replace:true});
        })
    }

    const handleCaptcha = () =>{
        const user_captcha_value =captchaRef.current.value;
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)==true) {
            setDisable(false)
        }
   
        else {
            setDisable(true)
        }

    }
    return (
        <section className="flex flex-col md:flex-row h-screen items-center py-10">
            <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src="https://source.unsplash.com/random" alt="" className="w-full h-full object-cover"/>
            </div>

            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center">

                <div className="w-full h-100">

                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

                    <form onSubmit={handleSubmit} className="mt-6" action="#" method="POST">
                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input type="email" name="email" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required/>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>
                            <input type="password" name="password" id="" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                focus:bg-white focus:outline-none" required/>
                        </div>

                        <div className="text-right mt-2">
                        <LoadCanvasTemplate />
                        <input onBlur={handleCaptcha} type="text" ref={captchaRef} name="text" id="" placeholder="Enter Captcha" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                focus:bg-white focus:outline-none" required/>
                               
                        </div>

                        <button disabled={disabled} type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                            px-4 py-3 mt-6">Log In</button>
                    </form>

                    <hr className="my-6 border-gray-300 w-full" />

                    <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                        
                           
                           <Google></Google>
                        
                    </button>

                    <p className="mt-8">Need an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold"><Link to={'/signup'}>Create an
                            account</Link></a></p>
                </div>
            </div>
        </section>
    );
};

export default Login;
