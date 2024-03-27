import React, { createContext, ReactNode, useReducer, useState } from "react"
import { ContextTestType, useContextReducer, withContextInitialData, withContextType } from '../reducers/withContext'
//o reducer; dados inicicias; 


interface DadosIniciaisType {
    pessoa: withContextType
}


interface ContextType {
    state: DadosIniciaisType
    dispatch: React.Dispatch<any>
}

const dadosIniciais:DadosIniciaisType = {
    pessoa: withContextInitialData
    // theme: themeReducerInitialData caso tivesse mais
}




export const ContextAndReducer = createContext<ContextType>({
    state: dadosIniciais,//dados = de todos os dados(mesmo tendo mais)
    dispatch: () => null
})




//todos devem ser reunidos em um unico
const allReducers = (state: DadosIniciaisType, action:ContextTestType) => ({//retorno em uma linha
    pessoa: useContextReducer(state.pessoa, action) 
})

export default function ProviderWithReducer(
    {children} : {children: ReactNode}
) {
    const [state, dispatch] = useReducer(allReducers, dadosIniciais)

    return (
        <ContextAndReducer.Provider value={{ state, dispatch }}>
            {children}
        </ContextAndReducer.Provider>
    )
}


// ********************************
//  USO
//****************************** */
//const { state, dispatch } = useContext(ContextAndReducer)

//state.pessoas.nome

//dispatch({
// type: 'CHANGE_NAME',
// paload: { nome: 'Victor' }
// })