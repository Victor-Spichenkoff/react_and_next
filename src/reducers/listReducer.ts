export interface ListItem {
    text: string
    id: number
    done: boolean
}


//tipos de acoes
interface AddAction {
    type: 'add'
    payload: {
        text: string//recebe uma string para adicionar
    }
}


interface EditTextAction {
    type: 'editText'
    payload: {//parametros == id e novo texto
        id: number
        text: string
    }
}

interface ToggleDoneAction {
    type: 'toggleDone'
    payload: {id: number}//só id
}
interface RemoveAction {
    type: 'remove'
    payload: {id: number}//só id
}

//junção
export type ListAction = AddAction| EditTextAction | RemoveAction | ToggleDoneAction

export const listReducer = (list: ListItem[], action: ListAction) => {
    /*
    action.type//ex: editar um item so
    action.payload//carga(dado que vem com a ação, ex: novo texto)
    */
    switch(action.type) {
        case 'add':
            return [ ...list, {
                id: list.length,
                text: action.payload.text,
                done: false
            } ]

        case 'remove':
            return list.filter( i => i.id !== action.payload.id )
        case 'editText':
            return list.map(i => {
                if(i.id == action.payload.id) i.text = action.payload.text
                return i
            })

        case 'toggleDone':
            return list.map(i => {
                if(i.id == action.payload.id) i.done = !i.done
                return i
            })
        default://padrao, se não tiver nada
            return list//só devolve
    }
}












//********************************************
//usando na pagina
    //meu reducer, valor inicial
    /*
    const [list, dispatch] = useReducer(listReducer, [])

    const handleAddClick = () => {
        dispatch({
            type: 'add',
            payload: {
                text: 'Novo item. Esse é o texto dele'
            }
        })

        dispatch({
            type: 'toggleDone',
            payload: {
                id: 1
            }
        })

        dispatch({
            type: 'remove',
            payload: {
                id: 2
            }
        })
    }
    const handleToggleClick = () => {
        dispatch({
            type: 'toggleDone',
            payload: {
                id: 2
            }
        })
    }*/