import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);

    const [users, setUsers] = useState([]);
    const url = `https://edu-mentor-server-blush.vercel.app/users/?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data); // Log the fetched data for debugging
                setUsers(data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [url]);

    return (
        <div>
            {users.map(users => (
                <div key={user._id} className="flex items-center h-screen w-full justify-center">
                    <div className="max-w-xs">
                        <div className="bg-white shadow-xl rounded-lg py-3">
                            <div className="photo-wrapper p-2">
                                <img className="w-32 h-32 rounded-full mx-auto" src={users.photoURL} alt=" Profile"/>
                            </div>
                            <div className="p-2">
                                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{user.displayName}</h3>

                                <table className="text-xs my-3">
                                    <tbody>
                                        <tr>
                                            <td className="px-2 py-2 text-gray-500 font-semibold">Role: </td>
                                            <td className="px-2 py-2">{users.role}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                            <td className="px-2 py-2">+977 9955221114</td>
                                        </tr>
                                        <tr>
                                            <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                            <td className="px-2 py-2">{users.email}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Profile;
