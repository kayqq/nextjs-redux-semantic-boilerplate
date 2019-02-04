import { ACTION_ONE, ACTION_TWO } from "./constants";

export const load = () => {
  return dispatch => {
    dispatch({
      type: ACTION_ONE,
      payload: true
    });

    dispatch({
      type: ACTION_TWO,
      payload: "welcome"
    });
  };
};

export const unload = () => {
  return dispatch => {
    dispatch({
      type: ACTION_ONE,
      payload: false
    });

    dispatch({
      type: ACTION_TWO,
      payload: "good bye"
    });
  };
};
