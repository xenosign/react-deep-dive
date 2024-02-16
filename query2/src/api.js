const BASE_URL = "http://localhost:4000";

export async function getTodo() {
  const url = `${BASE_URL}/fetch`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

export async function addTodo(todo) {
  const response = await fetch(`${BASE_URL}/post/${todo}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("업로드 실패");
  }

  return await response.json();
}
