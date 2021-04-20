import { writable, derived } from "svelte/store";

const { subscribe, set, update } = writable({
  open: false,
  msg: "",
  type: "success",
});

const createSnackbar = () => {
  return {
    subscribe,
    showSnackbar: (data) => update(() => ({ ...data, open: true })),
    hideSnackbar: () => update(() => ({ open: false, msg: "", type: "" })),
  };
};

export const snackbar = createSnackbar();

export const darkMode = writable(true);

export const theme = derived(darkMode, (v) => (v ? "dark" : "light"));
