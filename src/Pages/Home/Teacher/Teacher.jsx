import { Link } from "react-router-dom";


const Teacher = () => {
    return (
        <div className="py-10 px-12">
            <div className="text-center font-bold pb-5">
            <h2 className="text-cyan-600 text-3xl">Became an instructor</h2>
            </div>
            <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="h-[400px] w-[400px]" src="https://i.ibb.co/F7bkPsT/A-12-11.jpg" alt="Movie" /></figure>
                <div className="card-body ml-8">
                    <h2 className="card-title text-3xl">Became an instructor</h2>
                    <p className="font-semibold">Instructor from around the world teach millions os learners on udemy. <br/> We provide the tools and skills to teach what you love. </p>
                   <Link to={'/teachedu'}> <div className="card-actions justify-center">
                        <button className="py-2 px-2 rounded-lg font-semibold mb-16 bg-cyan-500">Start Teaching Today</button>
                    </div></Link>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Teacher;