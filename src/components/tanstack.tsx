"use client"

import { getPosts, usePosts } from "@/utils/api"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"

export default function Tanstack() {
    const [canLoad, setCanLoad] = useState<boolean>(false)
    const posts = usePosts({ enabled: canLoad })

    function handleGetPostButton () {
        setCanLoad(!canLoad)
    }


    return(
        <>
            <h1>Testando Tanstack</h1>
            <div></div>
            <button onClick={handleGetPostButton}
                className="border-2 border-blue-400 p-3"
            >Mudar carregamento,atual:{canLoad ? 'true' : 'false'}</button>

            { posts.isFetching && canLoad && 'Carregando...........' }

            {
                posts.data && <p>{ posts.data[0].title }</p>
            }
        </>
    )
}