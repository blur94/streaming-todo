import { getTodos } from "@/actions/todo";
import TodoList from "./todoList";
import CustomSuspense from "@/component/CustomSuspense";
import { DynamicSkeleton } from "@/component/CustomTable";

export default function Home() {
  const todos = getTodos();

  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <p>Welcome back</p>

      <CustomSuspense headers={header} rows={DynamicSkeleton(header.length)}>
        <TodoList todosPromise={todos} headers={header} />
      </CustomSuspense>

      <p>Random text</p>
    </div>
  );
}

const header = ["ID", "User ID", "Title", "Completed"];
