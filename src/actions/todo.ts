export const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data: Todo[] = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 15000));
  return data;
};

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
