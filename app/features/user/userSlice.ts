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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
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
  },
});
export default userSlice.reducer;