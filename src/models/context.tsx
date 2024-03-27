import { createContext, ReactNode, useState } from "react"


interface ContextType {
    txt: string
    setTxt: (txt: string) => void
}

export const ContextAndReducer = createContext<ContextType | null>(null)

export default function ProviderWithReducer(
    {children} : {children: ReactNode}
) {
    const [txt, setTxt] = useState<string>('')

    return (
        <ContextAndReducer.Provider value={{ txt, setTxt }}>
            {children}
        </ContextAndReducer.Provider>
    )
}