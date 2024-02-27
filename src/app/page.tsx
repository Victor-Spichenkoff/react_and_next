"use client"

import { useContext, useReducer, useState } from "react"
import Square from "@/components/square"
import { listReducer } from "@/reducers/listReducer"
import MeuContextProvider from "@/context/teste"
import { MeuContext } from "@/context/teste"
import DarkTheme from "./darkTheme"
import Tanstack from "@/components/tanstack"
import ReactHookForm from "@/components/reactFormHook"


function MeuHeader() {
    const ctx = useContext(MeuContext)

    ctx?.setTxt('Nhe')

    return <h2>{ctx?.txt}</h2>
}


export default function Page() {

    return (
        <>
            <h1 className="text-2xl">Olá Mundo</h1>
            {/* <MeuContextProvider>
                <MeuHeader></MeuHeader>
            </MeuContextProvider> */}
            <DarkTheme></DarkTheme>
            <Tanstack></Tanstack>
            <ReactHookForm></ReactHookForm>
        </>
    )
}