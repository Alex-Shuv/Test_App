type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type UserState = {
  users: User[];
  posts: Posts[];
  user: User;
  getUsersList: () => void;
  getPosts: (id: number) => void;
  getUser: (id: number) => void;
  page: number;
};
