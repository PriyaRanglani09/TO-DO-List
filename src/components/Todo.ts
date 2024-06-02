export interface Todo {
  id: string;
  text: string;
  status: boolean;
  onToggleStatus?: (id: string) => void;
  onDelete?: (id: string) => void;
}
