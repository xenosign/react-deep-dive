import { createStore } from "redux";
import { TodoItem } from "./todoType";

export interface TodoListState {
  fetchTodo: {
    data?: TodoItem[];
    isLoading: boolean;
    error?: Error;
  };
  postTodo: {
    isLoading: boolean;
    error?: Error;
  };
}

// 초기 상태
const initialState: TodoListState = {
  fetchTodo: {
    data: [{ id: 1, content: "발표자료 준비" }],
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

// 액션 타입
interface RequestFetchAction {}
interface SuccessFetchAction extends Action<typeof SUCCESS_FETCH> {
  payload: TodoItem[];
}
interface ErrorFetchAction extends Action<typeof ERROR_FETCH> {
  payload: Error;
}

interface RequestPostAction extends Action<typeof REQUEST_POST> {}
interface SuccessPostAction extends Action<typeof SUCCESS_POST> {}
interface ErrorPostAction extends Action<typeof ERROR_POST> {
  payload: Error;
}

type ActionTypes =
  | RequestFetchAction
  | SuccessFetchAction
  | ErrorFetchAction
  | RequestPostAction
  | SuccessPostAction
  | ErrorPostAction;

// 액션 생성자
export const requestFetch = (): RequestFetchAction => ({ type: REQUEST_FETCH });
export const successFetch = (data: TodoItem[]): SuccessFetchAction => ({
  type: SUCCESS_FETCH,
  payload: data,
});
export const errorFetch = (error: Error): ErrorFetchAction => ({
  type: ERROR_FETCH,
  payload: error,
});

export const requestPost = (): RequestPostAction => ({ type: REQUEST_POST });
export const successPost = (): SuccessPostAction => ({ type: SUCCESS_POST });
export const errorPost = (error: Error): ErrorPostAction => ({
  type: ERROR_POST,
  payload: error,
});

// 리듀서
const todoReducer = (
  state = initialState,
  action: ActionTypes
): TodoListState => {
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
