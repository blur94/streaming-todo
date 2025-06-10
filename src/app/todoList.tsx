"use client";
import { Todo } from "@/actions/todo";
import { CustomTable } from "@/component/CustomTable";
import { ScrollArea, TableTd, TableTr } from "@mantine/core";
import Link from "next/link";
import React, { use } from "react";

interface TodoListProps {
  todosPromise: Promise<Todo[]>;
  headers: string[];
}

export default function TodoList({ todosPromise, headers }: TodoListProps) {
  const todos = use(todosPromise);

  const rows = todos.map((todo) => (
    <TableTr key={todo.id}>
      <TableTd>{todo.id}</TableTd>
      <TableTd>{todo.userId}</TableTd>
      <TableTd className="hover:underline hover:underline-offset-4 active:text-blue-600">
        <Link href={`/${todo.id}`}>{todo.title}</Link>
      </TableTd>
      <TableTd>{todo.completed ? "Yes" : "No"}</TableTd>
    </TableTr>
  ));

  // if (Object.keys(todos).length === 0) {
  //   return <p>Error occurred...</p>;
  // }

  //   if (Array.isArray(todos) && todos.length === 0) {
  //     return <p>Error...</p>;
  //   }

  return (
    <ScrollArea h="calc(100vh - 300px)">
      <CustomTable headers={headers} rows={rows} />
    </ScrollArea>
  );
}

// <ul>
//   {todos?.map((todo) => (
//     <li
//       className="cursor-pointer tracking-[-.05em]"
//       key={todo.id}
//       onClick={() => alert(todo.userId)}
//     >
//       {todo.title}
//     </li>
//   ))}
// </ul>
