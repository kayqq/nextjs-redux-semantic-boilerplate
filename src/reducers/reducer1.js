import { ACTION_ONE } from "../actions/constants";

const initialState = {
  running: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ONE:
      return { running: action.payload };
    default:
      return state;
  }
};
