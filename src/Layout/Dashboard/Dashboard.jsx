import { FaAd, FaBook, FaBookmark, FaCalendar, FaHome,  FaList,  FaMailBulk,   FaSearch, FaShoppingCart, FaUsers, FaUtensilSpoon, FaWallet } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    // TODO
    const isAdmin= false;
    const isTeacher= true;
    
    return (
        <div className="flex">
            <div className="w-64 min h-screen bg-cyan-500 h-full">
                <ul className="menu p-4">
                {
                    isAdmin ? <> <li><Link><FaHome></FaHome> User Admin</Link></li>
                    {/* <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li> */}
                    <li><NavLink to="/dashboard/manageClasses"><FaWallet></FaWallet> Manage Classes</NavLink></li>
                    <li><NavLink to="/dashboard/allusers"><FaWallet></FaWallet>Manage Users</NavLink></li>
                    </> : <>
                        {
                            isTeacher ?  <> <li><Link><FaHome></FaHome> User Instructor</Link></li>
                            {/* <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li> */}
                            <li><NavLink to="/dashboard/addClass">Add A Class</NavLink></li>
                            <li><NavLink to="/dashboard/insClass">My Classes</NavLink></li>
                            <li><NavLink to="/dashboard/insprofile">Profile</NavLink></li>
                             </> : 
                             <> <li><Link><FaHome></FaHome> User Home</Link></li>
                             {/* <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li> */}
                             <li><NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                             <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Enrolled Classes</NavLink></li>
                             <li>
                                 <NavLink to="/dashboard/myclasses"><FaShoppingCart></FaShoppingCart> My selecting Classes
                                     {/* <span className="badge inl badge-secondary">+{cart?.length || 0}</span> */}
                                 </NavLink>
         
                             </li> </>
                        }
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