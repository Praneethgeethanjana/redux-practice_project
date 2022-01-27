import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    records: [],
  },
  reducers: {
    signup(state, action) {
      const newUser = action.payload;
      state.records.push({
        email: newUser.email,
        name: newUser.name,
        mobile: newUser.mobile,
        password: newUser.password,
      });
    },
  },
});

export const signupActions = signupSlice.actions;

export default signupSlice.reducer;
