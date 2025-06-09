"use client";
import { Todo } from "@/actions/todo";
import React, { use } from "react";

interface TodoListProps {
  todosPromise: Promise<Todo[]>;
}

export default function TodoList({ todosPromise }: TodoListProps) {
  const todos = use(todosPromise);
  return (
    <ul>
      {todos.map((todo) => (
        <li
          className="cursor-pointer tracking-[-.05em]"
          key={todo.id}
          onClick={() => alert(todo.userId)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}
