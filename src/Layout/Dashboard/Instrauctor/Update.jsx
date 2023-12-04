import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const foods = useLoaderData();
    const navigate = useNavigate();

    const updateFoodData = async (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.photoURL.value;
        const title = form.name.value;
        const price = form.price.value;

        const updateFood = {
            image,
            title,
            price,
        }

        console.log('Update Food Data:', updateFood);

        try {
            const response = await fetch(`http://localhost:5000/addclass/${foods._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateFood),
            });

            const data = await response.json();

            if (data.success) {
                Swal.fire('Good job!', 'Food updated successfully', 'success');
                form.reset();
                navigate('/insclass');
            } else {
                Swal.fire('Error', 'Failed to update food', 'error');
            }
        } catch (error) {
            console.error('Error updating food:', error);
            Swal.fire('Error', 'An unexpected error occurred', 'error');
        }
    }

    return (
        // ... rest of the component ...
        <div>
             

        <div className="card-body ">
            <form onSubmit={updateFoodData}>
                <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
                    <div className="form-control ">
                        <label className="mb-2 font-bold">Photo URL</label>
                        <input type="text" name="photoURL" defaultValue={foods.image} className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="mb-2 font-bold">Name</label>
                        <input type="text" name="name" defaultValue={foods.title} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="mb-2 font-bold">Status</label>
                        <input type="text" name="price" defaultValue={foods.price} className="input input-bordered"  />
                    </div>

                   
                </div>
               
                <div className="form-control mt-6">
                    {/* <button className="btn border-0 bg-[#FF3811] hover:bg-orange-500">Order Confirm</button> */}
                    <input className="btn border-0 bg-blue-500 hover:bg-blue-700" type="submit" value="Update Food" />
                </div>
            </form>
        </div>
    </div>
    );
};

export default Update;
