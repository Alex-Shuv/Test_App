export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  isFavorite: boolean;
};

export type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type UserState = {
  users: User[];
  posts: Posts[];
  user: User;
  favoriteUsers: User[];
  getUsersList: (skip: number) => void;
  getPosts: (id: number) => void;
  getUser: (id: number, state?: User) => void;
  toggleFavoriteUser: (id: number) => void;
};
