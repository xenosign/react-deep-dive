import Todo from "./Todo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TodoQuery from "./TodoQuery";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todo />
      <TodoQuery />
    </QueryClientProvider>
  );
}

export default App;
