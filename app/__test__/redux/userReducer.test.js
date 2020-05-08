import reducer from "../../redux/reducers/usersReducer";
import * as types from "../../redux/types";

describe("Users reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      page: 1,
      usersList: []
    });
  });

  it("should handle USERS_LOADING", () => {
    expect(
      reducer(
        {},
        {
          type: types.USERS_LOADING
        }
      )
    ).toEqual({
      isLoading: true
    });
  });

  it("should handle USERS_LOADED", () => {
    expect(
      reducer(
        {},
        {
          type: types.USERS_LOADED
        }
      )
    ).toEqual({
      isLoading: false
    });
  });

  it("should handle GET_USERS_SUCCESS", () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_USERS_SUCCESS
        }
      )
    ).toEqual({
      isLoading: false
    });
  });

  it("should handle CREATE_USER_SUCCESS", () => {
    expect(
      reducer(
        {},
        {
          type: types.CREATE_USER_SUCCESS
        }
      )
    ).toEqual({
      isLoading: false
    });
  });

  it("should handle CREATE_USER", () => {
    expect(
      reducer(
        { usersList: [] },
        {
          type: types.CREATE_USER,
          payload: {
            first_name: "morpheus",
            last_name: "leader",
            email: "sbarcenas00@gmail.com",
            createdAt: "2020-05-08T20:22:37.576Z"
          }
        }
      )
    ).toEqual({
      usersList: [
        {
          first_name: "morpheus",
          last_name: "leader",
          email: "sbarcenas00@gmail.com",
          createdAt: "2020-05-08T20:22:37.576Z"
        }
      ]
    });
  });

  it("should handle GET_USERS", () => {
    expect(
      reducer(
        { usersList: [] },
        {
          type: types.GET_USERS,
          payload: [
            {
              first_name: "morpheus",
              last_name: "leader",
              email: "sbarcenas00@gmail.com",
              createdAt: "2020-05-08T20:22:37.576Z"
            }
          ]
        }
      )
    ).toEqual({
      usersList: [
        {
          first_name: "morpheus",
          last_name: "leader",
          email: "sbarcenas00@gmail.com",
          createdAt: "2020-05-08T20:22:37.576Z"
        }
      ]
    });
  });

  it("should handle SET_PAGE", () => {
    expect(
      reducer(
        { page: 1 },
        {
          type: types.SET_PAGE
        }
      )
    ).toEqual({
      page: 2
    });
  });

  it("should handle RESET_SESSION", () => {
    expect(
      reducer(
        { usersList: [], isLoading: true, page: 2 },
        {
          type: types.RESET_SESSION
        }
      )
    ).toEqual({
      usersList: [],
      isLoading: false,
      page: 1
    });
  });
});
