import { FavouritesActionTypes } from "./favourites.types";

export const addToFavourites = (article) => ({
  type: FavouritesActionTypes.ADD_TO_FAVOURITES,
  payload: article,
});

export const removeFromFavourites = (article) => ({
  type: FavouritesActionTypes.REMOVE_FROM_FAVOURITES,
  payload: article,
});
