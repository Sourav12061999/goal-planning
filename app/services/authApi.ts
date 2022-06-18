import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {userDataType} from "../../GlobalTypes";
export const authApi = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"/",
    }),
    endpoints:(builder) => ({
        signin:builder.query<userDataType, void>({
            query:() => '/api/Authentication/signin'
        }),
        signup:builder.query<string,userDataType>({
            query:(data) => ({
               url:"/api/Authentication/signup",
               body:JSON.stringify(data),
               method:"POST",
            })
        }),
        getUser:builder.query<userDataType,string>({
            query:(id)=> ({
                url:`/api/Authentication/${id}`,
            })
        })
     })
})
export const { useSigninQuery,useGetUserQuery} = authApi;