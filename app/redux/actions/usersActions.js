import { returnErrors } from "./ErrorActions";
import reqresClient from "../../service/reqresApi";
import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  GET_USERS,
  GET_USERS_SUCCESS,
  SET_PAGE,
  USERS_LOADING
} from "../types";

// Login User
export const getUsers = page => async dispatch => {
  // Request body
  dispatch({ type: USERS_LOADING });
  const res = await reqresClient.get(`/users?page=${page}`);
  dispatch({ type: GET_USERS, payload: res.data.data });
  dispatch({ type: GET_USERS_SUCCESS });
  dispatch({ type: SET_PAGE });
};

export const addUser = user => async dispatch => {
  dispatch({ type: USERS_LOADING });
  const res = await reqresClient.post(`/users`, user);
  dispatch({ type: CREATE_USER, payload: res.data });
  dispatch({ type: CREATE_USER_SUCCESS });
};
