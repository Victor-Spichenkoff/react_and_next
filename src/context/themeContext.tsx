import { ReactNode, createContext, useContext, useEffect, useState } from "react"

interface DarkThemeContext {
    theme: "light" | "dark" //string
    setTheme: (b: "light" | "dark" ) => void
}

const STORAGE_THEME = '__dark_light'

export const ThemeContext = createContext<DarkThemeContext | null>(null)

export default function ThemeProvider({children}: {children: ReactNode}) {
    const [theme, setTheme] = useState<"light" | "dark" >('dark'/*setarInicial*/)

    function setarInicial() {
        const storage:any = JSON.parse(localStorage.getItem(STORAGE_THEME) || 'light')

        if(storage == 'light' || storage == 'dark') return storage// setTheme(storage)
        else return 'light'//setTheme('dark')
    }

    useEffect(()=> localStorage.setItem(STORAGE_THEME, JSON.stringify(theme)), [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


//para já retornar o state e o set
export const useTheme = () => useContext(ThemeContext)