import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const useRequest = () => {
    const [loading, setLoading] = useState(true)
    const {data: requests = [], refetch} = useQuery({
        queryKey: ['requests'],
        queryFn: async() => {
            const res = await fetch('https://edu-mentor-server-blush.vercel.app/requests/');
            setLoading(false)
            return res.json();
        }
    })
    return [requests, loading, refetch]
};

export default useRequest;