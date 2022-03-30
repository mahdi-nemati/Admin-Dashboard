import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// get data
export const getAsyncArticle = createAsyncThunk(
  "Article/getAsyncArticle",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:3001/Article");
      return data;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);
// post data
export const postAsyncArticle = createAsyncThunk(
  "Article/postAsyncArticle",
  async (payload, { rejectWithValue }) => {
    try {
      //must be full
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);
// delete data
export const deleteAsyncArticle = createAsyncThunk(
  "contact/deleteAsyncArticle",
  async (payload, { rejectWithValue }) => {
    try {
      // must be complete !
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);
// put data

///////must be complate !

// initial
const initialState = {
  Article: [],
  error: null,
  loading: false,
};
const ArticleSlice = createSlice({
  name: "Article",
  initialState,
  extraReducers: {
    [getAsyncArticle.fulfilled]: (state, action) => {
      return { ...state, error: null, loading: false, Article: action.payload };
    },
    [getAsyncArticle.pending]: (state, action) => {
      return { ...state, error: null, loading: true, Article: [] };
    },
    [getAsyncArticle.rejected]: (state, action) => {
      return { ...state, error: action.error, loading: false, Article: [] };
    },
  },
});
export default ArticleSlice.reducer;
