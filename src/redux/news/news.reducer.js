import { NewsActionTypes } from "./news.types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: "",
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsActionTypes.GET_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NewsActionTypes.GET_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case NewsActionTypes.GET_MORE_NEWS:
      return {
        ...state,
        loading: false,
        data: [...state.news, ...action.payload],
        error: "",
      };
    case NewsActionTypes.GET_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
