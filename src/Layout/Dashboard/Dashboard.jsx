import { FaAd, FaBook, FaBookmark, FaCalendar, FaHome,  FaList,  FaMailBulk,   FaSearch, FaShoppingCart, FaUsers, FaUtensilSpoon } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    // TODO
    const isTeacher= true;
    return (
        <div className="flex">
            <div className="w-64 min h-screen bg-cyan-500">
                <ul className="menu p-4">
                {
                    isTeacher ? 
                    <>
                    <li>
                       
                       <NavLink to={'/dashboard/home'}><FaHome></FaHome> Home</NavLink> </li>
                    <li>
                       
                    <NavLink to={'/dashboard/adminHome'}><FaHome></FaHome>Add Class</NavLink> </li>
                
                 <li>
                    
                     <NavLink to={'/dashboard/myclass'}><FaUtensilSpoon></FaUtensilSpoon> My Class</NavLink> </li>
                 <li>
                    
                     <NavLink to={'/dashboard/manageitem'}> <FaList></FaList> Profile</NavLink> </li>
                </>
                    :
                    
                    <>
                     <li>
                       
                       <NavLink to={'/dashboard/home'}><FaHome></FaHome> Home</NavLink> </li>
                    <li>
                       
                    <NavLink to={'/dashboard/enroll'}><FaHome></FaHome> My enroll class</NavLink> </li>
                
                 <li>
                    
                     <NavLink to={'/dashboard/profile'}> <FaShoppingCart></FaShoppingCart> Profile</NavLink> </li>
                 
                 
                </>
                }
                        <div className="divider"></div> 

                        <li>
                       
                       <NavLink to={'/'}><FaHome></FaHome> Home</NavLink> </li>
                       <li>
                       
                       <NavLink to={'/allclass'}><FaSearch></FaSearch>All Class</NavLink> </li>
                      
                       <li>
                       
                       <NavLink to={'/contact'}><FaMailBulk></FaMailBulk> Contact</NavLink> </li>
                </ul>

            </div>
            <div className="flex-1 p-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;