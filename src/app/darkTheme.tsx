import ThemeProvider, { ThemeContext, useTheme } from "@/context/themeContext"
import { useContext, useState } from "react"


function Button() {
    const ctx = useContext(ThemeContext)
    const nextType = ctx?.theme === 'dark' ? 'light' : 'dark'

    function toggleTheme() {
        ctx?.setTheme(ctx.theme == 'dark' ? 'light' : 'dark')
    }

    return      (
        <button className="
                border-blue-600 p-2 rounded-md m-7 border-2
                hover:bg-blue-600 hover:border-blue-50" 
            onClick={toggleTheme}
        >Mudar para {nextType}</button>
    )
}

function Layout() {
    const ctx = useContext(ThemeContext)



    return(
        <div className={`w-5/6 mx-auto my-5 p-5 border-blue-500 border-4
        ${ctx?.theme == 'dark' ? "bg-black text-white": 'bg-white text-black'}

        "
    `}>
        <h2 className="-4 text-red-600">Tema claro e escuro</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ducimus ipsa, dolorem quisquam veritatis dolore asperiores beatae repudiandae, laboriosam voluptas minus voluptatibus laborum! Sed, cumque! Voluptates assumenda error libero aliquam.
        </p>
        <Button />
    </div>
    )
}


export default function DarkTheme() {
    const ctx = useContext(ThemeContext)
    console.log(ctx)



    return (
        <ThemeProvider>
            <Layout />
        </ThemeProvider>
    )
}