import { writable, derived } from "svelte/store";

const { set, subscribe, update } = writable({
  users: [],
});

const createUser = () => {
  return {
    subscribe,

    addUsers: (data) => update((u) => ({ ...u, users: data })),
  };
};

export const user = createUser();
