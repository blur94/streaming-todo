"use client";

import { Todo as ITodo } from "@/actions/todo";
import { List, Text } from "@mantine/core";
import React, { use } from "react";

interface TodoProps {
  todoPromise: Promise<ITodo>;
}
export default function Todo({ todoPromise }: TodoProps) {
  const todo = use(todoPromise);
  return (
    <List type="unordered" className="list-disc list-inside">
      {Object.entries(todo).map(([key, value]) => (
        <List.Item key={key}>
          <Text size="sm" c="dimmed">
            {key}: {key === "completed" ? (value ? "Yes" : "No") : value}
          </Text>
        </List.Item>
      ))}
    </List>
  );
}
