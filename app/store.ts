import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import { authApi } from "./services/authApi";
const store = configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>(
     getDefaultMiddleware().concat(authApi.middleware)
    )
});

export default store;
export type RootState = ReturnType<typeof store.getState>;