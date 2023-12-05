import Swal from "sweetalert2";
import useRequest from "../../../hooks/useRequest";
import { useState } from "react";

const TeacherRequest = () => {
    const [requests, ,refetch] = useRequest();
    console.log(requests);
    const [status, setStatus] = useState('pending')
    const handleInstructor = (email) => {
        fetch(`https://edu-mentor-server-blush.vercel.app/users/instructor/${email}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setStatus('accept')
                }
            })
    };
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr> 
                            <th>Name</th>
                            <th>Experience</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requests.map(request => <tr key={request._id}>
                            
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={request.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{request?.userName}</div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {request?.experience}
                                </td>
                                <td>
                                    {request.title}
                                </td>
                                <td>
                                    {request?.category}
                                </td>
                                <td>
                                    {status}
                                </td>
                                <td>
                                    <button onClick={() => handleInstructor(request?.email)} className="btn btn-ghost btn-xs">Approved</button>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Reject</button>
                                </td>
                            </tr>)
                        }                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherRequest;