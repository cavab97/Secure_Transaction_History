// Define types
export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostAction {
  type: string;
  payload: any;
}
