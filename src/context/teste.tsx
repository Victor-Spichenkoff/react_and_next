import { ReactNode, createContext, useState } from "react"

interface MeuContextType  {
    txt: string
    setTxt: (t: string) => void
}


export const MeuContext = createContext<MeuContextType | null>(null)

type MeuContextProviderType = { children: ReactNode }




export default function MeuContextProvider ({ children }: MeuContextProviderType) {
    const [txt, setTxt] = useState('')

    return (
      <MeuContext.Provider value={{ txt, setTxt }}>
      
      </MeuContext.Provider>
    )
}