export interface Todo {
  id: string;
  name: string;
  description?: string | null;
}
export interface TodoState {
  todos: Todo[];
  error: string | null;
}
