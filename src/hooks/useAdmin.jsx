import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey:['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://edu-mentor-server-blush.vercel.app/users/admin/${user?.email}`)
            // return res.data.admin;
            const data = await res.json();
            return data.admin;
            
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;