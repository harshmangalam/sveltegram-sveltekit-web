import { writable, derived } from "svelte/store";

const { set, subscribe, update } = writable({
  posts: [],
});

const createPost = () => {
  return {
    subscribe,
    addPosts: (data) => set({ posts: data }),
    addPost: (data) => update((p) => ({ posts: [data, ...p.posts] })),
    addMorePosts: (data) => update((p) => ({ posts: [...p.posts, ...data] })),
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
