const BASE_URL = "http://localhost:4000";

export async function fetchTodoList() {
  const url = `${BASE_URL}/todo`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
