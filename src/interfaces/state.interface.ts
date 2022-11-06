export interface State<T> {
  data: T[];
  error: Error | null;
  isLoading: boolean;
}