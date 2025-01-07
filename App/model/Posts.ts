// Define types
interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostAction {
  type: string;
  payload: any;
}
