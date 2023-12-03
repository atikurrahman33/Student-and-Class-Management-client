import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <div className=" sm:mx-auto">
             <footer className="footer p-10 bg-base-200 text-base-content ">
                <div>
                    <img className="h-[100px] w-[100px]" src="https://i.ibb.co/gTL8yTQ/Edu-Mentor-logos-transparent.png" alt="" />
                <p className="text-xl font-bold">Edu<span className="text-orange-600">Mentor</span> <br/>Providing reliable tech since 1992</p>
                </div>
 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
                <Link className="hover:text-pink-500 link-hover" to='/'>Home</Link>
                <Link  className="hover:text-pink-500 link-hover" to='/addProduct'>Add Product</Link>
                <Link  className="hover:text-pink-500 link-hover" to='/myProduct'>My Product</Link>
                <Link  className="hover:text-pink-500 link-hover" to='/contact'>Contact</Link>
                <Link  className="hover:text-pink-500 link-hover" to='/blog'>Blogs</Link>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;