import { createSlice } from "@reduxjs/toolkit";

const LtrAndRtlSlice = createSlice({
  name: "ltrAndRtl",
  initialState: {
    isRtl: "no",
  },
  reducers: {
    switchTo: (state, action) => {
      switch (action.payload) {
        case "en": {
          state.isRtl = "no";
          return;
        }
        case "fa": {
          state.isRtl = "yes";
          return;
        }
        default: {
          return state;
        }
      }
    },
  },
});
export default LtrAndRtlSlice.reducer;
export const { switchTo } = LtrAndRtlSlice.actions;
