export interface ListItem {
    text: string
    id: number
    done: boolean
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
export type ListAction = EditTextAction | RemoveAction | ToggleDoneAction


//list == state
export const listReducer = (list: ListItem[], action: ListAction) => {
    /*
    action.type//ex: editar um item so
    action.payload//carga(dado que vem com a ação, ex: novo texto)
    */
    switch(action.type) {
        case 'remove':
            return list.filter( i => i.id !== action.payload.id )

        case 'toggleDone':
            return list.map(i => {
                if(i.id == action.payload.id) i.done = !i.done
                return i
        })
        default://padrao, se não tiver nada
            return list//só devolve
    }
}



