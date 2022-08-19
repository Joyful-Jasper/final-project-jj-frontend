import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  data: [],
};
const SignUp = createSlice({
  name: "user",
  initialState,
  reducers: {
    addSignUp: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addSignUp } = SignUp.actions;
export default SignUp.reducer;
