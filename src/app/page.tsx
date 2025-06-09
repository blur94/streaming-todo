import { getTodos } from "@/actions/todo";
import TodoList from "./todoList";
import CustomSuspense from "@/component/CustomSuspense";

export default function Home() {
  const todos = getTodos();

  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <p>Welcome back</p>

      <CustomSuspense>
        <TodoList todosPromise={todos} />
      </CustomSuspense>

      <p>Random text</p>
    </div>
  );
}
