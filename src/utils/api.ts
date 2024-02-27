import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const getPosts = async () => {
    const  res = await axios('https://jsonplaceholder.typicode.com/posts')

    return res.data
}

export const usePosts = ({ enabled }: {enabled: boolean}) => useQuery({
    queryKey: ['Testes'],//identificador dessa  query
    queryFn: getPosts,
    enabled
})