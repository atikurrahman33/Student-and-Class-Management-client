import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();
    const { title, instructor, price, image, description, total_enrollment, _id } = details;
    return (
        <div className="py-12 flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl mx-auto"> {/* Add mx-auto to center horizontally */}
                <figure className="px-10 pt-10 h-[200px]">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className="font-semibold">Instructor: {instructor}</p>
                    <p className="font-semibold">Price: $ {price}</p>
                    <p className="font-semibold">Description: {description}</p>
                </div>
                <div className="text-center pb-2">
                    <Link to={'/payment'}><button className="bg-cyan-500 px-4 py-1 rounded-lg">Pay</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Details;
