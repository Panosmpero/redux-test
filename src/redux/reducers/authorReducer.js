import { LOAD_AUTHOR_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";

const authorReducer = (state = initialState.authors, action) => {
  switch (action.type) {
    case LOAD_AUTHOR_SUCCESS:
      return action.authors;

    default:
      return state;
  }
};

export default authorReducer;
