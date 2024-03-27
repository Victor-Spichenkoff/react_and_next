import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'user',
    initialState: { name: 'Victor', age: '17' },
    reducers: {
        setName: (state, action) => { //state== dados atuais
            state.name = action.payload
        },
        setAge: (state, action) => { //state== dados atuais
            state.age = action.payload
        },
    }
}) 


export const { setName, setAge } = slice.actions

export default slice.reducer