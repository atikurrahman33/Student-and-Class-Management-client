import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";


const AllCourseCard = ({ popular }) => {
    const { title, instructor, price, image ,description, total_enrollment} = popular;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl h-[500px]">
                <figure className="px-10 pt-10 h-[200px]">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p className="font-semibold">INstructor: {instructor}</p>
                    <p className="font-semibold">Price: ${price}</p>
                    <p className="font-semibold">Total Enrollment: {total_enrollment}</p>
                    <p className="font-semibold">Description:{description}</p>
                    <div>
                <button className= "bg-cyan-500 rounded-lg py-1 px-3">Enroll</button>
                </div>
                   
                </div>
                
            </div>

        </div>
    );
};

export default AllCourseCard;