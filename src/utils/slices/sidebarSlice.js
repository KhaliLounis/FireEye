import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,

};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setVisible: (state) => {
      state.visible = !state.visible;
    }
  },
});

export const  {setVisible} = sidebarSlice.actions
export default sidebarSlice.reducer