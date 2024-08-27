import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { status: false },
  reducers: {
    isLoginIn: (state) => {
      state.status = true;
    },
  },
});

export const { isLoginIn } = loginSlice.actions;
export default loginSlice.reducer;
