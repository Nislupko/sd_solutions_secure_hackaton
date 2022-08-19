import {createSlice} from '@reduxjs/toolkit';
import {IArticle} from "./types";
import {fetchArticles} from "./fetchArticles";

interface MethodState {
  pending: boolean;
  error: string | null;
}

interface ArticleState {
  articles: IArticle[];
  initiallyFetched: boolean;
  fetchArticles: MethodState;
}

const defaultMethodState: MethodState = {
  pending: false,
  error: null,
}

const initialState: ArticleState = {
  articles: [],
  initiallyFetched: false,
  fetchArticles: defaultMethodState,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state, _action) => {
      state.fetchArticles.pending = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, {payload}) => {
      state.fetchArticles.pending = false;
      state.fetchArticles.error = null;
      state.articles = payload;
      state.initiallyFetched = true;
    });
    builder.addCase(fetchArticles.rejected, (state, {payload}) => {
      state.fetchArticles.pending = false;
      state.fetchArticles.error = payload as string;
      state.initiallyFetched = true;
    });
  },
});

export default articlesSlice.reducer;
