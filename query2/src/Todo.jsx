import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  errorFetch,
  errorPost,
  fetchTodo,
  postTodo,
  requestFetch,
  requestPost,
  successFetch,
  successPost,
} from "./store";
import { getTodo, addTodo } from "./api";

export default function Todo() {
  const inputRef = useRef();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchTodo.data);
  const fetchIsLoading = useSelector((state) => state.fetchTodo.isLoading);
  const fetchError = useSelector((state) => state.fetchTodo.error);

  const postIsLoading = useSelector((state) => state.postTodo.isLoading);
  const postError = useSelector((state) => state.postTodo.error);

  // const fetchTodo = async () => {
  //   try {
  //     dispatch(requestFetch());
  //     const todoList = await getTodo();
  //     dispatch(successFetch(todoList));
  //   } catch (err) {
  //     dispatch(errorFetch(err));
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     dispatch(requestPost());
  //     await addTodo(inputRef.current.value);
  //     dispatch(successPost());
  //     fetchTodo();
  //   } catch (err) {
  //     dispatch(errorPost(err));
  //   }
  // };

  useEffect(() => {
    fetchTodo();
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleSubmit = (e) => {
    dispatch(postTodo(inputRef.current.value));
  };

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
