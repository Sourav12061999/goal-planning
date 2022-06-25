import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {userDataType} from "../../GlobalTypes";
export const authApi = createApi({
    reducerPath:"authApis",
    baseQuery:fetchBaseQuery({
        baseUrl:"/",
    }),
    endpoints:(builder) => ({
        signin:builder.mutation<userDataType, userDataType>({
            query:(data) => ({
                url:"/api/Authentication/signin",
                method:"POST",
                body:JSON.stringify(data),
            })
        }),
        signup:builder.mutation<string,userDataType>({
            query:(data) => ({
               url:"/api/Authentication/signup",
               body:JSON.stringify(data),
               method:"POST", 
            })
        }),
        getUser:builder.mutation<userDataType,string>({
            query:(id)=> ({
                url:`/api/Authentication/${id}`,
            })
        })
     })
})
export const { useSigninMutation,useGetUserMutation} = authApi;