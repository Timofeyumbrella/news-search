import { combineReducers } from "redux";

import newsReducer from "./news/news.reducer";
import searchedNewsReducer from "./searchedNews/searchedNews.reducer";

const rootReducer = combineReducers({
  news: newsReducer,
  searchedNews: searchedNewsReducer,
});

export default rootReducer;
