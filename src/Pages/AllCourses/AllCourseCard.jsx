
import { Link } from "react-router-dom";


const AllCourseCard = ({ popular }) => {
    const { title, instructor, price, image, description, total_enrollment, _id, status } = popular;
    return (
        <div>
            {
                status == 'approved' &&
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
                        <Link to={`/details/${_id}`}>
                            <button className="bg-cyan-500 rounded-lg py-1 px-3">Enroll</button></Link>
                    </div>

                </div>

            </div>
            }

        </div>
    );
};

export default AllCourseCard;