import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/usersReducer";

export const store = configureStore({
    reducer: {//união de reducers
        user: userReducer//type == nome e age (string e number)
        // theme: themeReducer //pode ter varios
    }
})

//type de todos os reducers (uninão deles)
export type RootState = ReturnType<typeof store.getState>