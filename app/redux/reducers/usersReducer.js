import {UPDATE_USER} from '../types';

const INITIAL_STATE = {
  id: null,
  email: null,
  first_name: null,
  last_name: null,
  profile_picture: '1',
  status: null,
  role: null,
  facebookId: null,
  gender: null,
  birthday: null,
  token_reset_password: null,
  createdAt: null,
  updatedAt: null,
  isLoading: false,
  addresses: [],
  mainAddress: {address: null},
  cards: [],
  mainCard: {},
};

export default function (state = INITIAL_STATE, {type, payload, id}) {
  switch (type) {
    case UPDATE_USER:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
