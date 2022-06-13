import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userDataStateType } from "../../../GlobalTypes";
const initialState: userDataStateType = {
  loading: false,
  user: null,
  error: undefined,
  signedin:false,
};
export const fetchUser = createAsyncThunk("user/fetchUser", async (userToken) => {
  return axios
    .get(`${userToken}`) // Here I have to pass the JWT token as parameter in the URL
    .then((response) => {
      return response.data;
    });
});

export const signupUser = createAsyncThunk("user/signup",async (data) =>{
  return axios.post("/api/Authentication/signup",data)
         .then((response) =>{
           if(window){
             localStorage.setItem("userid",response.data.id);
             // Here if I am in the frontend I will set the gotten id from the server to the localStorage
           }
           return {
             name:response.data.email,
             email:response.data.email,
             password:response.data.password
           };
         })
})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    // This is for if user exist then just get the data from id
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = undefined;
      state.signedin=true;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.error.message;
      state.signedin=false;
    });
    // This is for creating a new user and returning that userdata
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = undefined;
      state.signedin=true;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.error.message;
      state.signedin=false;
    });
    
  },
});
export default userSlice.reducer;