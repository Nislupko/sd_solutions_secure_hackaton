import {createAsyncThunk} from '@reduxjs/toolkit';
import {IArticle} from "./types";
import {AppCreateAsyncThunkType} from 'project-types';
import {gql} from 'graphql-request';
import {apiRequest} from "../../helpers/apiRequest";

interface FetchArticlesProps {
}

const fetchArticlesQuery = gql`
  query {
    articles {
      id
      text
    }
  }
`;

export const fetchArticles = createAsyncThunk<IArticle[], FetchArticlesProps, AppCreateAsyncThunkType>(
  'articles/fetch',
  async (props, {rejectWithValue}) => {
    try {
      const {articles} = await apiRequest({query: fetchArticlesQuery});
      return articles;
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  },
);
