const sveltePreprocess = require("svelte-preprocess");
const adaper = require("@sveltejs/adapter-vercel");
const pkg = require("./package.json");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ["theme"],
    },
  }),
  kit: {
    adapter: adaper(),

    target: "#svelte",

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
};
