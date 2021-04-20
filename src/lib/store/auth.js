import { writable } from "svelte/store";

const state = {
  isAuthenticated: false,
  user: null,
  token: "",
};

const createAuth = () => {
  const { set, subscribe, update } = writable(state);

  const setUser = (data) => update(() => ({ isAuthenticated: true, ...data }));

  const removeUser = () => set(state);
  return {
    subscribe,
    setUser,
    removeUser,
  };
};
export const auth = createAuth();
