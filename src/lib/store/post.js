import { writable, derived } from "svelte/store";

const { set, subscribe, update } = writable({
  posts: [],
  loading: false,
});

const createPost = () => {
  return {
    subscribe,
    setLoading: (v) => update((p) => ({ posts: p.posts, loading: v })),
    addPosts: (data) => set({ posts: data }),
    addPost: (data) => update((p) => ({ posts: [data, ...p.posts] })),
    removePost: (postId) =>
      update((p) => {
        let filterPost = p.posts.filter((p) => p._id != postId);
        return {
          posts: filterPost,
        };
      }),
    updatePost: (post) =>
      update((p) => {
        let filteredPosts = p.posts.map((n) => {
          if (n._id == post._id) {
            return post;
          }
          return n;
        });
        return {
          posts: filteredPosts,
        };
      }),
  };
};

export const post = createPost();
