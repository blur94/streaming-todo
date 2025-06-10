import { getTodo } from "@/actions/todo";
import { Center, Divider, Text, Title } from "@mantine/core";
import React, { Suspense } from "react";
import Todo from "./Todo";

interface SingleTodoProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function SingleTodo({ params }: SingleTodoProps) {
  const { id } = await params;
  const todo = getTodo(id);

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
