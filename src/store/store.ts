import { Posts, User, UserState } from "./store-types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import axios from "axios";

export const useUsersStore = create<UserState>()(
  persist(
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
        isFavorite: false,
      },
      favoriteUsers: [],

      getUsersList: async (skip: number) => {
        const { data } = await axios.get<User[]>(
          `http://jsonplaceholder.typicode.com/users?_start=${skip}&_limit=10`
        );
        set({ users: data });
      },
      getUser: async (id: number, state?: User) => {
        if (id === state?.id) {
          return;
        }
        const { data } = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        set((state) => {
          const modifiedData = {
            ...data,
            isFavorite: state.favoriteUsers.some((user) => user.id === data.id),
          };
          state.user = { ...modifiedData };
        });
      },
      getPosts: async (id: number) => {
        const { data } = await axios.get<Posts[]>(
          `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        );
        set({ posts: data });
      },
      toggleFavoriteUser: (userId: number) => {
        set((state) => {
          if (state.user && state.user.id === userId) {
            state.user.isFavorite = !state.user.isFavorite;
            if (state.user.isFavorite) {
              state.favoriteUsers.push(state.user);
            } else {
              state.favoriteUsers = state.favoriteUsers.filter(
                (user) => user.id !== state.user.id
              );
            }
          }
        });
      },
    })),
    { name: "users-store", version: 1 }
  )
);
