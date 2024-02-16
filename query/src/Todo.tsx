import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./todoType";
import { fetchTodoList } from "./api";
import {
  requestFetch,
  successFetch,
  errorFetch,
  requestPost,
  successPost,
  errorPost,
} from "./store";
import { TodoListState } from "./store"; // TodoListState 타입 import 추가

export default function Todo() {
  const dispatch = useDispatch();

  const data: TodoItem[] | undefined = useSelector(
    (state: TodoListState) => state.fetchTodo.data
  ); // state 타입 지정

  const fetchTodo = useCallback(async () => {
    try {
      dispatch(requestFetch());
      const todoData = await fetchTodoList();
      dispatch(successFetch(todoData)); // fetchTodoList의 결과를 dispatch
    } catch (e: any) {
      dispatch(errorFetch(e));
    }
  }, [dispatch]); // dispatch 추가

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  return (
    <div>
      <ul>
        {data?.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
    </div>
  );
}
