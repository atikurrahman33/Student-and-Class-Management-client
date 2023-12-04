import Swal from "sweetalert2";
import useAllClasses from "../../../../hooks/useAllClasses";

const ManageClasses = () => {
    const [allClass, ,refetch] = useAllClasses();
    console.log(allClass);
    const classes = allClass.filter(singleClass => singleClass?.status !== 'approved');
    console.log(classes);
    const handleApprove = (id) =>{
        console.log('approve');
        fetch(`https://edu-mentor-server-blush.vercel.app/allClass/approve/${id}`, {
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
                        title: 'Approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    // https://edu-mentor-server-blush.vercel.app/allClass/approve/:id
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr> 
                            <th>Name</th>
                            <th>Description</th>
                            <th>Approve</th>
                            <th>Reject</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(single => <tr key={single._id}>
                            
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={single.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{single?.title}</div>
                                            <div className="text-sm opacity-50">{single?.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {single?.description}
                                </td>
                                <td>
                                <button onClick={() => handleApprove(single._id)} className="btn btn-ghost btn-xs">Approve</button>
                                </td>
                                <td>
                                <button className="btn btn-ghost btn-xs">Reject</button>
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Progress</button>
                                </th>
                            </tr>)
                        }                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;