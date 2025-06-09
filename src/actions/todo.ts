export const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data: Todo[] = await response.json();
  console.time("delay");
  await new Promise((resolve) => setTimeout(resolve, 15000));
  console.timeEnd("delay");
  return data;
};

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
