import Swal from "sweetalert2";
import useUsers from "../../../../hooks/useUsers";

const ManageUser = () => {
    const [users, , refetch] = useUsers()
    console.log(users);
    const handleMakeAdmin = (user) => {
        fetch(`https://edu-mentor-server-blush.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>

                        </tr>
                    </thead>
                    <tbody>
                        <>
                            {
                                users.map(user => (<tr key={user._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.photourl} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <th>
                                        <button onClick={() => handleMakeAdmin(user)}
                                        disabled={user.role === 'admin'} className="btn btn-primary btn-xs">Make Admin</button>
                                    </th>
                                </tr>))
                            }
                        </>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;