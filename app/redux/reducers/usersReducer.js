import {
  GET_USERS,
  CREATE_USER,
  USERS_LOADING,
  USERS_LOADED,
  GET_USERS_SUCCESS,
  CREATE_USER_SUCCESS,
  GET_USERS_FAIL,
  CREATE_USER_FAIL,
  RESET_SESSION,
  SET_PAGE
} from "../types";

const INITIAL_STATE = {
  usersList: [],
  isLoading: false,
  page: 1
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USERS_LOADING:
      return { ...state, isLoading: true };
    case USERS_LOADED:
      return { ...state, isLoading: false };
    case GET_USERS_SUCCESS:
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case GET_USERS_FAIL:
    case CREATE_USER_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case GET_USERS:
      return {
        ...state,
        usersList: [...state.usersList, ...action.payload]
      };
    case CREATE_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload]
      };
    case SET_PAGE:
      return { ...state, page: state.page + 1 };
    case RESET_SESSION:
      return INITIAL_STATE;
    default:
      return state;
  }
}
