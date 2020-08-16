import { CREATE_COURSE } from "./actionTypes";

export const createCourse = (course) => {
  // debugger;
  return { type: CREATE_COURSE, course };
};
