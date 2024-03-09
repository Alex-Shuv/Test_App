import { create } from "zustand";
import { UserState } from "./store-types";
import { immer } from "zustand/middleware/immer";
import axios from "axios";

export const useUsersStore = create<UserState>()(
  immer((set) => ({
    users: [],
    posts: [],
    user: {
      id: 0,
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
    },
    page: 1,
    getUsersList: async () => {
      const { data } = await axios.get(
        "http://jsonplaceholder.typicode.com/users?_start=0&_limit=10"
      );
      set({ users: data });
    },
    getUser: async (id: number) => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      set({ user: data });
    },
    getPosts: async (id: number) => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      set({ posts: data });
    },
  }))
);
