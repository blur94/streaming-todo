export const getTodos = async (): Promise<Todo[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data: Todo[] = await response.json();
    console.time("delay");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.timeEnd("delay");
    return data;
  } catch (error) {
    console.error(error);

    return [];
  }
};

export const getTodo = async (id: string): Promise<Todo> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const data: Todo = await response.json();
    return data;
  } catch (error) {
    console.error(error);

    return {} as Todo;
  }
};

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
