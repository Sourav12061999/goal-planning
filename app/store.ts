import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import {userReducers} from "./features/user/userSlice";
import personalReducer from "./features/Personal/personalSlice";
const store = configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        user:userReducers,
        personal:personalReducer,
    },
    middleware: (getDefaultMiddleware) =>(
     getDefaultMiddleware().concat(authApi.middleware)
    )
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;