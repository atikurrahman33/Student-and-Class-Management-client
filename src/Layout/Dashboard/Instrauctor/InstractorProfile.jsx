import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useUsers from "../../../hooks/useUsers";


const InstractorProfile = () => {
    const { user } = useContext(AuthContext);
    const [users, , refetch] = useUsers();
    console.log(users);
    const profileInfo = users.find(singleUser => user?.email == singleUser?.email);
    // console.log(data);
    return (
        <div>
            <div className="flex items-center h-screen w-full justify-center">
                <div className="max-w-xs">
                    <div className="bg-white shadow-xl rounded-lg py-3">
                        <div className="photo-wrapper p-2">
                            <img className="w-32 h-32 rounded-full mx-auto" src={profileInfo?.photourl} alt=" InstractorProfile" />
                        </div>
                        <div className="p-2">
                            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{profileInfo?.name}</h3>

                            <table className="text-xs my-3">
                                <tbody>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Role: </td>
                                        <td className="px-2 py-2">{profileInfo?.role}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                        <td className="px-2 py-2">+977 9955221114</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                        <td className="px-2 py-2">{profileInfo?.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstractorProfile;
