import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import newsReducer from "./news/news.reducer";
import favouritesReducer from "./favourites/favourites.reducer";
import themeReducer from "./theme/theme.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["news", "favourites", "theme"],
};

const rootReducer = combineReducers({
  news: newsReducer,
  favourites: favouritesReducer,
  theme: themeReducer,
});

export default persistReducer(persistConfig, rootReducer);
