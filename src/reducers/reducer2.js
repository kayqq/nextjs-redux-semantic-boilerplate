import { ACTION_TWO } from "../actions/constants";

const initialState = {
  message: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TWO:
      return { message: action.payload };
    default:
      return state;
  }
};
