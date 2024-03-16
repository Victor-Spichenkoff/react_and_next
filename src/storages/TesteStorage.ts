import { create } from "zustand"

interface User {
    name: string
    age: number
}


interface States {
    users: User[] 
}

interface Actions {
    addUser: (user: User) => void
}


export const useStore = create<States & Actions>(set => {
    return {
        users: [],
        addUser: (newUser) => set((state) => {
            const all:User[] = [...state.users, newUser]

            return { users: all }
        }),
    }
})
// export const useStore = create<States & Actions>(set => ({// mesma coisa do outro retorno 
//     users: [],
//     addUser: (newUser) => set((state) => {
//         const all:User[] = [...state.users, newUser]

//         return { users: all }
//     }),
// }))