import { createSlice } from "@reduxjs/toolkit";
import { userDataType } from "../../../GlobalTypes";
const initialState: userDataType = {
  name:"",
  email:"",
  password:"",
  isSignedin:false,
};

const userSlice = createSlice({
  name:"USER",
  initialState,
  reducers:{
    getUser:(state,action)=>{
      state.email=action.payload.name;
      state.name=action.payload.email;
      state.isSignedin=true;
    }
  }
})

const userAction=userSlice.actions;
const userReducers=userSlice.reducer;

export {userAction,userReducers};
