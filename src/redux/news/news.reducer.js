import { NewsActionTypes } from "./news.types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: "",
  query: "",
  sortBy: "",
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
        data: [...state.data, ...action.payload],
        error: "",
      };
    case NewsActionTypes.GET_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case NewsActionTypes.SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case NewsActionTypes.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
