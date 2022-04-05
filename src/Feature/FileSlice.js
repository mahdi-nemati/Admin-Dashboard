import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// get all Article
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
// get one Article
export const getOneAsyncArticle = createAsyncThunk(
  "Article/getOneAsyncArticle",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/article/${payload}`
      );
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
      const { data } = axios.post("http://localhost:3001/Article", {
        id: Math.floor(Math.random * 100),
        title: payload.title,
        author: payload.author,
        body: payload.body,
        upload: payload.upload,
      });
      return data;
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
      const { data } = axios.delete(`http://localhost:3001/article/${payload}`);
      return data;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);
// put data
export const putAsyncArticle = createAsyncThunk(
  "contact/putAsyncArticle",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = axios.put(
        `http://localhost:3001/article/${payload.id}`,
        {
          title: payload.title,
          author: payload.author,
          body: payload.body,
          upload: payload.upload,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);

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
    // get all article actions
    [getAsyncArticle.fulfilled]: (state, action) => {
      return { ...state, error: null, loading: false, Article: action.payload };
    },
    [getAsyncArticle.pending]: (state, action) => {
      return { ...state, error: null, loading: true, Article: [] };
    },
    [getAsyncArticle.rejected]: (state, action) => {
      return { ...state, error: action.error, loading: false, Article: [] };
    },
    // get one article actions
    [getOneAsyncArticle.fulfilled]: (state, action) => {
      return { ...state, error: null, loading: false, Article: action.payload };
    },
    [getOneAsyncArticle.pending]: (state, action) => {
      return { ...state, error: null, loading: true, Article: [] };
    },
    [getOneAsyncArticle.rejected]: (state, action) => {
      return { ...state, error: action.error, loading: false, Article: [] };
    },
    // post article
    [postAsyncArticle.fulfilled]: (state, action) => {
      return { ...state, error: null, loading: false, Article: action.payload };
    },
    [postAsyncArticle.pending]: (state, action) => {
      return { ...state, error: null, loading: true, Article: [] };
    },
    [postAsyncArticle.rejected]: (state, action) => {
      return { ...state, error: action.error, loading: false, Article: [] };
    },
    // put article
    [putAsyncArticle.fulfilled]: (state, action) => {
      return { ...state, error: null, loading: false, Article: action.payload };
    },
    [putAsyncArticle.pending]: (state, action) => {
      return { ...state, error: null, loading: true, Article: [] };
    },
    [putAsyncArticle.rejected]: (state, action) => {
      return { ...state, error: action.error, loading: false, Article: [] };
    },
  },
});
export default ArticleSlice.reducer;
