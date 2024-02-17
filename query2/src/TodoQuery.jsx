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

// React Query
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function TodoQuery() {
  const inputRef = useRef();
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["todo"],
    queryFn: () => getTodo(),
  });

  const postTodoMutation = useMutation({
    mutationFn: (todo) => {
      addTodo(todo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    postTodoMutation.mutate(inputRef.current.value, {
      onSuccess: () => alert("Todo 등록 성공"),
      onError: () => alert(" 등록 실패"),
    });

    inputRef.current.value = "";
    queryClient.invalidateQueries();
  };

  if (isLoading) return <h1>로딩 중</h1>;

  if (isError) return <h1>에러 발생</h1>;

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
