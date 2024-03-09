import { create } from "zustand";
import { UserState } from "./store-types";
import { immer } from "zustand/middleware/immer";
import axios from "axios";

export const useUsersStore = create<UserState>()(
  immer((set) => ({
    users: [],
    page: 1,
    getUsersList: async () => {
      const { data } = await axios.get(
        "http://jsonplaceholder.typicode.com/users?_start=0&_limit=10"
      );
      set({ users: data });
    },
  }))
);
