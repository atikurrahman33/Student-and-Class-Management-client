import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";


const AllCourseCard = ({ popular }) => {
    const { title, instructor, rating, image } = popular;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 h-[200px]">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className="font-semibold">INstructor: {instructor}</p>
                    <h2 className="font-semibold"><Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    /> </h2>
                    <div>
                <button className="btn btn-active btn-primary">Primary</button>
                </div>
                   
                </div>
                
            </div>

        </div>
    );
};

export default AllCourseCard;