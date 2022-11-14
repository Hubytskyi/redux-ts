import { State } from './state.interface';

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostProps {
  post: Post;
  update: ({}:Post) => {};
  remove: ({}:Post) => {};
}

export type PostState = State<Post>