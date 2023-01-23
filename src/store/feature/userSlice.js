import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    level: 0,
  },
  reducers: {
    login: (state, action) => {
      console.log(typeof action.payload)
      state.name = action.payload;
    },

    logout: (state, action) => {
      state.name = "";
      state.level = 0;
    },
  },
});

export const {
  login,
  logout,
} = UserSlice.actions;

export default UserSlice.reducer;