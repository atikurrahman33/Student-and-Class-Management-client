import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const useAllClasses = () => {
    const [loading, setLoading] = useState(true)
    const {data: allClass = [], refetch} = useQuery({
        queryKey: ['allClass'],
        queryFn: async() => {
            const res = await fetch('https://edu-mentor-server-blush.vercel.app/allClass');
            setLoading(false)
            return res.json();
        }
    })
    return [allClass, loading, refetch]
};

export default useAllClasses;