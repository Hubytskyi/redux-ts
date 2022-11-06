import { State } from './state.interface';

export interface User {
  id: number;
  name: string;
  email: string;
}

export type UserState = State<User>