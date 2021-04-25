<script context="module">
  export const hydrate = false;
  export const prerender = true;
</script>

<script>
  import { Avatar } from "svelte-materialify";
</script>

<svelte:head>
  <title>About | Sveltegram</title>
</svelte:head>

<div
  style="display: flex;flex-direction: column;justify-content: center;align-items: center;"
>
  <h3>About Me</h3>

  <Avatar class="mt-8 mb-2" size={200}>
    <img
      src="https://avatars.githubusercontent.com/u/57381638?v=4"
      alt="Harsh Mangalam"
      width="100%"
      height="100%"
    />
  </Avatar>

  <p class="mt-8" style="text-align: justify;">
    I am Fullstack javascript developer working around javascript framework and
    library. I have worked with frontend technology like React , Vue , Svelte
    and backend technology like Nodejs , Mongodb , Expressjs , Mysql, Postgresql
    Since last Year i have explore about JAMStack and Server Side Rendering and
    hence i go through Nextjs (Reactjs),Sapper (Svelte) , SvelteKit (Svelte) ,
    Gatsby (React). Graphql is dominating the world of API hence I have used
    Apollo Graphql with Backend Nodejs and Frontend Reactjs. Urql is emerging
    graphql client and really awesome hence i try it many times. I have always
    explore the new things and the way to do work for client hence i go through
    Prisma ORM the one and only one library in his category and have awesome
    studio features
  </p>

  <p class="mt-8" style="text-align: justify;">
    I am also a Pythonista and Pythoneer . I have used Flask , Django and
    Fastapi for working around api creation . Fastapi is a new guy in the field
    of api and supports async python and hence its performance is as per nodejs.
    I have worked with pygame for game development. Opencv,Numpy , panda,
    matplotlib, seaboarn , scikit-learn for data science I have use beautiful
    soup and selenium for web automation and web scraping.
  </p>

  <p class="" style="text-align: justify;">
    In 1 year i have learned Golang and some of its framework like ( gorilla,
    gin-gonic gofiber ) , Rust-lang, nim-lang, v-lang,C, c++ , Java , Kotlin ,
    ReactNative , Expo , Ionic , Quasar ,and much more
  </p>
</div>
