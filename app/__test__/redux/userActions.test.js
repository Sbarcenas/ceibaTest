import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../../redux/actions/usersActions";
import reqresClient from "../../service/reqresApi";

import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  GET_USERS,
  GET_USERS_SUCCESS,
  SET_PAGE,
  USERS_LOADING
} from "../../redux/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Users Actions", () => {
  const store = mockStore({ users: { usersList: [] } });

  it("Get users", () => {
    reqresClient.get("/users?page=1").then(res => {
      const expectedActions = [
        { type: USERS_LOADING },
        { type: GET_USERS, payload: res.data.data },
        { type: GET_USERS_SUCCESS },
        { type: SET_PAGE },
        { type: USERS_LOADING }
      ];
      return store.dispatch(actions.getUsers(1)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  it("Create user", () => {
    const user = {
      first_name: "Sebastian",
      last_name: "Barcenas",
      email: "sbarcenas00@gmail.com",
      avatar: "N/A"
    };
    reqresClient.post("/users", user).then(res => {
      const expectedActions = [
        { type: USERS_LOADING },
        { type: CREATE_USER, payload: res.data },
        { type: CREATE_USER_SUCCESS }
      ];
      return store.dispatch(actions.addUser(user)).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
