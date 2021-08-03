import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import newsReducer from "./news/news.reducer";
import searchedNewsReducer from "./searchedNews/searchedNews.reducer";
import favouritesReducer from "./favourites/favourites.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favourites"],
};

const rootReducer = combineReducers({
  news: newsReducer,
  searchedNews: searchedNewsReducer,
  favourites: favouritesReducer,
});

export default persistReducer(persistConfig, rootReducer);
