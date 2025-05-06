import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './article/getAllAndDelete/articlesReducer';
import usersReducer from './user/userReducer';
import createArticleReducer from './article/createAndEdit/createArticleReducer';
import getArticleReducer from './article/getArticle/getArticleReducer';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    user: usersReducer,
    createArticle: createArticleReducer,
    getArticle: getArticleReducer,
  },
});

export default store;
