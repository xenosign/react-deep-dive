import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// redux-store 액션 함수 가져오기
import {
  errorFetch,
  errorPost,
  requestFetch,
  requestPost,
  successFetch,
  successPost,
} from "./store";

// 비동기 통신 api 함수 가져오기
import { getTodo, addTodo } from "./api";

export default function Todo() {
  const inputRef = useRef();

  // redux 사용을 위한 선언 및 상태값 불러오기
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchTodo.data);
  const fetchIsLoading = useSelector((state) => state.fetchTodo.isLoading);
  const fetchError = useSelector((state) => state.fetchTodo.error);

  const postIsLoading = useSelector((state) => state.postTodo.isLoading);
  const postError = useSelector((state) => state.postTodo.error);

  // todolist 불러오는 함수
  const fetchTodo = async () => {
    try {
      dispatch(requestFetch());
      const todoList = await getTodo();
      dispatch(successFetch(todoList));
    } catch (err) {
      dispatch(errorFetch(err));
    }
  };

  // todolist 추가하는 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(requestPost());
      await addTodo(inputRef.current.value);
      dispatch(successPost());
      fetchTodo();
    } catch (err) {
      dispatch(errorPost(err));
    }
  };

  // 컴포넌트 마운트 시, todolist 불러오는 useEffect
  useEffect(() => {
    fetchTodo();
  }, [dispatch]);

  // redux 의 비동기 상태값을 사용한 에러 핸들링 파트
  if (fetchIsLoading || postIsLoading) return <h1>로딩 중</h1>;

  if (fetchError || postError) return <h1>에러 발생</h1>;

  if (data === undefined) return <h1>리스트 없음</h1>;

  // 렌더링 파트
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
