export interface withContextType {//dado do state
    nome: string
    idade: number
}

export type ContextTestType = {
    type: string
    payload: {
        [key: string]: any//qualquer coisa com qualquer valor
    }
}

export const withContextInitialData: withContextType = { nome: '', idade: 0 }

export const useContextReducer = (state: withContextType, action: ContextTestType) => {
    switch(action.type) {
        case 'CHANGE_NAME':
        return {...state, nome: action.payload.nome}        
    }
    switch(action.type) {
        case 'CHANGE_AGE':
        return {...state, idade: action.payload.idade}        
    }

    return state
}