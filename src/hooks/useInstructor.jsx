import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useInstructor = () => {
    const { user } = useContext(AuthContext);
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey:['isInstructor', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://edu-mentor-server-blush.vercel.app/users/instructor/${user?.email}`)
            // return res.data.admin;
            const data = await res.json();
            console.log(data);
            return data.instructor;
            
        }
    })
    return [isInstructor, isInstructorLoading];
};

export default useInstructor;