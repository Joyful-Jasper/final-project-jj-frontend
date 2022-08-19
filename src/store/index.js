import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    tes: "tes",
    user: registerReducer,
  },
});

export default store;
