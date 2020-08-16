import {  LOAD_AUTHOR_SUCCESS } from "./actionTypes";
import { getAuthors } from "../../api/authorApi";

export const loadAuthorsSuccess = (authors) => {
  return { type: LOAD_AUTHOR_SUCCESS, authors };
};

export const loadAuthors = () => async (dispatch) => {
  try {
    const authors = await getAuthors();
    dispatch(loadAuthorsSuccess(authors));
    
  } catch (error) {
    throw error;
  }
};
