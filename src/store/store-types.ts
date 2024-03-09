type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export type UserState = {
  users: User[];
  getUsersList: () => void;
  page: number;
};
