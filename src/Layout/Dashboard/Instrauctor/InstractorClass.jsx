import { useContext, useEffect, useState } from "react";
import ClassTable from "./ClassTable";
import { AuthContext } from "../../../Provider/AuthProvider";


const InstractorClass = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const [myClass, setMyClass] = useState([]);
    const url = `http://localhost:5000/addclass/?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyClass(data);
            })
    }, [url])
    console.log(myClass);



    return (
        <div className="w-full">


            {
                myClass.map(Class => <ClassTable key={Class._id} Class={Class} myClass={myClass} setMyClass={setMyClass}></ClassTable>)
            }

        </div>
    );
};

export default InstractorClass;