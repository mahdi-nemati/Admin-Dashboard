import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all Article
export const getAsyncArticle = createAsyncThunk(
  "Article/getAsyncArticle",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:3001/Article");
      return data;
    } catch (error : any) {
      let errorMessage = "Internal Server Error";
      if (error.response) {
        errorMessage = error.response.data.message;
      }
      return rejectWithValue(errorMessage);
    }
  }
);
// get one Article
export const getOneAsyncArticle = createAsyncThunk(
  "Article/getOneAsyncArticle",
  async ({id} : any, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/article/${id}`
      );
      return data;
    } catch (error : any) {
      let errorMessage = "Internal Server Error";
      if (error.response) {
        errorMessage = error.response.data.message;
      }
      return rejectWithValue(errorMessage);
    }
  }
);
// post data
export const postAsyncArticle = createAsyncThunk(
  "Article/postAsyncArticle",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("http://localhost:3001/Article", {
        id: Math.floor(Math.random() * 100),
        title: payload.title,
        author: payload.author,
        body: payload.body,
        upload: payload.upload,
      });
      return data;
    } catch (error : any) {
      let errorMessage = "Internal Server Error";
      if (error.response) {
        errorMessage = error.response.data.message;
      }
      return rejectWithValue(errorMessage);
    }
  }
);

// delete data
export const deleteAsyncArticle = createAsyncThunk(
  "contact/deleteAsyncArticle",
  async ({id} : any, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/article/${id}`
      );
      return data;
    } catch (error : any) {
      let errorMessage = "Internal Server Error";
      if (error.response) {
        errorMessage = error.response.data.message;
      }
      return rejectWithValue(errorMessage);
    }
  }
);
// put data
export const putAsyncArticle = createAsyncThunk(
  "contact/putAsyncArticle",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3001/article/${payload.id}`,
        {
          title: payload.title,
          author: payload.author,
          body: payload.body,
          upload: payload.upload,
        }
      );
      return data;
    } catch (error : any) {
      let errorMessage = "Internal Server Error";
      if (error.response) {
        errorMessage = error.response.data.message;
      }
      return rejectWithValue(errorMessage);
    }
  }
);
// initialState Type
type initial = {
  Article: any;
  error: any;
  loading: boolean;
};
// initial
const initialState = {
  Article: [],
  error: null,
  loading: false,
} as initial;
const ArticleSlice = createSlice({
  name: "Article",
  initialState,
  extraReducers: {
    // get all article actions
    [getAsyncArticle.fulfilled.toString()]: (state: any, { payload, error }: any) => {
      return { ...state, error: null, loading: false, Article: payload };
    },
    [getAsyncArticle.pending.toString()]: (state: any, { payload, error }: any) => {
      return { ...state, error: null, loading: true, Article: [] };
    },
    [getAsyncArticle.rejected.toString()]: (state: any, { payload, error }: any) => {
      return { ...state, error: error, loading: false, Article: [] };
    },
    // get one article actions
    [getOneAsyncArticle.fulfilled.toString()]: (state: any, { payload, error }: any) => {
      return { ...state, error: null, loading: false, Article: payload };
    },
    [getOneAsyncArticle.pending.toString()]: (state: any, { payload, error }: any) => {
      return { ...state, error: null, loading: true, Article: [] };
    },
    [getOneAsyncArticle.rejected.toString()]: (state: any, { payload, error }: any) => {
      return { ...state, error: error, loading: false, Article: [] };
    },
    // post article
    [postAsyncArticle.fulfilled.toString()]: (state: any, { payload, error }: any) => {
      return { ...state, error: null, loading: false, Article: payload };
    },
    [postAsyncArticle.pending.toString()]: (state: any, { payload, error }: any) => {
      return { ...state, error: null, loading: true, Article: [] };
    },
    [postAsyncArticle.rejected.toString()]: (state: any, { payload, error }: any) => {
      return { ...state, error: error, loading: false, Article: [] };
    },
    // put article
    [putAsyncArticle.fulfilled.toString()]: (state: any, { payload, error }: any) => {
      return { ...state, error: null, loading: false, Article: payload };
    },
    [putAsyncArticle.pending.toString()]: (state: any, { payload, error }: any) => {
      return { ...state, error: null, loading: true, Article: [] };
    },
    [putAsyncArticle.rejected.toString()]: (state: any, { payload, error }: any) => {
      return { ...state, error: error, loading: false, Article: [] };
    },
  },
  reducers: {},
});
export default ArticleSlice.reducer;
