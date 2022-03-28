import { configureStore } from "@reduxjs/toolkit";
import LtrAndRtlSlice from "./LtrAndRtlSlice";
import ArticleSlice from "./FileSlice";
const store = configureStore({
  reducer: {
    ltr: LtrAndRtlSlice,
    Article: ArticleSlice,
  },
});
export default store;
