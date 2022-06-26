import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {FormDataTypes} from "../../../Components/Page/Personal/Form/form.types";
import axios from "axios";

interface InitialStateType{
  isLoading:boolean,
  data:null | FormDataTypes,
  error:string,
}
const initialState:InitialStateType = {
  isLoading: false,
  data: null,
  error: "",
};

export const getPersonal = createAsyncThunk(
  "personal/get",
  async (userid:string) => {
    return axios.get(`/api/Personal/${userid}`).then((res) => res.data[0]);
  }
);

export const createPersonal= createAsyncThunk("personal/post",async (data:FormDataTypes) =>{
    return axios.post('/api/Personal/create',data).then((res) => res.data.data);
})

export const updatePersonal=createAsyncThunk("personal/put", async (data:FormDataTypes) =>{
  return axios.put('/api/Personal/update',data).then((res) => data);
})

const personalSlice=createSlice({
    name:"personal",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        // Getting the Data 
        builder.addCase(getPersonal.pending,state =>{
          state.isLoading=true;
        })
        builder.addCase(getPersonal.fulfilled,(state,action) =>{
            state.isLoading=false;
            state.data=action.payload;
            state.error="";
        })
        builder.addCase(getPersonal.rejected,(state,action) =>{
            state.isLoading=false;
            state.data=null;
            state.error=action.error.message || "";
        })
        // Creating The Data
        builder.addCase(createPersonal.pending,state =>{
          state.isLoading=true;
        })
        builder.addCase(createPersonal.fulfilled,(state,action) =>{
            state.isLoading=false;
            state.data=action.payload;
            state.error="";
        })
        builder.addCase(createPersonal.rejected,(state,action) =>{
            state.isLoading=false;
            state.data=null;
            state.error=action.error.message || "";
        })

        // Updating the data

        builder.addCase(updatePersonal.pending,state =>{
          state.isLoading=true;
        })
        builder.addCase(updatePersonal.fulfilled,(state,action) =>{
            state.isLoading=false;
            state.data=action.payload;
            state.error="";
        })
        builder.addCase(updatePersonal.rejected,(state,action) =>{
            state.isLoading=false;
            state.data=null;
            state.error=action.error.message || "";
        })
    }
})

export default personalSlice.reducer;
