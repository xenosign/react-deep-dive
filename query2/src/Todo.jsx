import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoList, postTodo } from "./api";
import {
  requestFetch,
  successFetch,
  errorFetch,
  requestPost,
  successPost,
  errorPost,
} from "./store";

export default function Todo() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.fetchTodo.data);
  const fetchIsLoading = useSelector((state) => state.fetchTodo.isLoading);
  const fetchError = useSelector((state) => state.fetchTodo.error);

  const postIsLoading = useSelector((state) => state.postTodo.isLoading);
  const postError = useSelector((state) => state.postTodo.error);

  const inputRef = useRef();

  const fetchTodo = useCallback(async () => {
    try {
      dispatch(requestFetch());
      dispatch(successFetch(await fetchTodoList()));
    } catch (e) {
      dispatch(errorFetch(e));
    }
  }, [dispatch]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        dispatch(requestPost());
        const res = await postTodo(inputRef.current.value);
        dispatch(successPost());
      } catch (error) {
        console.log(error);
        dispatch(errorPost(error));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    console.log("!");
    fetchTodo();
  }, [dispatch]);

  if (fetchIsLoading || postIsLoading) return <h1>로딩 중</h1>;

  if (fetchError || postError) return <h1>에러 발생</h1>;

  if (data === undefined) return <h1>리스트 없음</h1>;

  return (
    <div>
      <ul>
        {data?.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleSubmit}>할일 추가</button>
      </div>
    </div>
  );
}
