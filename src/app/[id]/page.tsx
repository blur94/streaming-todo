import { getTodo } from "@/actions/todo";
import { Center, Divider, Text, Title } from "@mantine/core";
import React, { Suspense } from "react";
import Todo from "./Todo";

interface SingleTodoProps {
  params: {
    id: string;
  };
}
export default function SingleTodo({ params }: SingleTodoProps) {
  const { id } = params;
  const todo = getTodo(id);
  // console.log(todo)
  return (
    <Center className="min-h-screen">
      <div>
        <Title order={2}>Todo</Title>
        <Text>Display todo details</Text>
        <Divider my="md" />

        <Suspense fallback={<p>Loading...</p>}>
          <Todo todoPromise={todo} />
        </Suspense>
      </div>
    </Center>
  );
}
