```js
import { createStore } from "redux";

// 초기 상태
const initialState = {
  fetchTodo: {
    data: [],
    isLoading: false,
    error: undefined,
  },
  postTodo: {
    isLoading: false,
    error: undefined,
  },
};

// 액션 타입 정의
const REQUEST_FETCH = "REQUEST_FETCH";
const SUCCESS_FETCH = "SUCCESS_FETCH";
const ERROR_FETCH = "ERROR_FETCH";

const REQUEST_POST = "REQUEST_POST";
const SUCCESS_POST = "SUCCESS_POST";
const ERROR_POST = "ERROR_POST";

// 액션 생성자
export const requestFetch = () => ({ type: REQUEST_FETCH });
export const successFetch = (data) => ({
  type: SUCCESS_FETCH,
  payload: data,
});
export const errorFetch = (error) => ({
  type: ERROR_FETCH,
  payload: error,
});

export const requestPost = () => ({ type: REQUEST_POST });
export const successPost = () => ({ type: SUCCESS_POST });
export const errorPost = (error) => ({
  type: ERROR_POST,
  payload: error,
});

// 리듀서
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FETCH:
      return {
        ...state,
        fetchTodo: {
          data: undefined,
          isLoading: true,
          error: undefined,
        },
      };
    case SUCCESS_FETCH:
      return {
        ...state,
        fetchTodo: {
          data: action.payload,
          isLoading: false,
          error: undefined,
        },
      };
    case ERROR_FETCH:
      return {
        ...state,
        fetchTodo: {
          data: undefined,
          isLoading: false,
          error: action.payload,
        },
      };
    case REQUEST_POST:
      return {
        ...state,
        postTodo: {
          isLoading: true,
          error: undefined,
        },
      };
    case SUCCESS_POST:
      return {
        ...state,
        postTodo: {
          isLoading: false,
          error: undefined,
        },
      };
    case ERROR_POST:
      return {
        ...state,
        postTodo: {
          isLoading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(todoReducer);

export default store;
```
