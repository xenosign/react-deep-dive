import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo, postTodo } from "./store";

export default function Todo() {
  const inputRef = useRef();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchTodo.data);
  const fetchIsLoading = useSelector((state) => state.fetchTodo.isLoading);
  const fetchError = useSelector((state) => state.fetchTodo.error);

  const postIsLoading = useSelector((state) => state.postTodo.isLoading);
  const postError = useSelector((state) => state.postTodo.error);

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
