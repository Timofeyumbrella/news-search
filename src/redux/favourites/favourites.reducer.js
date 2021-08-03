import { FavouritesActionTypes } from "./favourites.types";

const INITIAL_STATE = {
  favourites: [],
};

const favouritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavouritesActionTypes.ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...new Set([...state.favourites, action.payload])],
      };
    case FavouritesActionTypes.REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter(
          (article) => article.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
