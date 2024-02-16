import { fetchTodoList, postTodo } from "../api"; // API 호출을 하는 함수들
import {
  requestFetch,
  successFetch,
  errorFetch,
  requestPost,
  successPost,
  errorPost,
} from "./actions"; // 액션 크리에이터들

export const fetchTodo = () => {
  return async (dispatch) => {
    dispatch(requestFetch());
    try {
      const data = await fetchTodoList(); // API 호출
      dispatch(successFetch(data)); // 성공 액션 디스패치
    } catch (error) {
      dispatch(errorFetch(error)); // 에러 액션 디스패치
    }
  };
};

export const addTodo = (content) => {
  return async (dispatch) => {
    dispatch(requestPost());
    try {
      await postTodo(content); // API 호출
      dispatch(successPost()); // 성공 액션 디스패치
    } catch (error) {
      dispatch(errorPost(error)); // 에러 액션 디스패치
    }
  };
};
