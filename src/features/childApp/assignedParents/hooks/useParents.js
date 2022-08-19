import {IArticle} from "../types";
import {useAppDispatch, useAppSelector} from "../../../helpers/hooks";
import {fetchArticles} from "../fetchArticles";

interface ArticleHookResults {
  articles: IArticle[];
  isLoading: boolean;
  loadArticles: () => void;
  error: string | null;
}

export function useArticles(): ArticleHookResults {
  const dispatch = useAppDispatch();
  return {
    articles: useAppSelector(({articles}) => articles.articles),
    isLoading: useAppSelector(({articles}) => articles.fetchArticles.pending),
    loadArticles: () => dispatch(fetchArticles({})),
    error: useAppSelector(({articles}) => articles.fetchArticles.error)
  }
}
