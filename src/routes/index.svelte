<script context="module">
  import { BASE_URL } from "$lib/config";

  export async function load({ fetch }) {
    const posts = await fetch(`${BASE_URL}/api/post?page=0&limit=3`);
    const users = await fetch(`${BASE_URL}/api/user?page=0&limit=5`);
    const res = await Promise.all([posts, users]);

    return {
      props: {
        posts: await res[0].json(),
        users: await res[1].json(),
      },
    };
  }
</script>

<script>
  import PostCard from "$lib/components/post/PostCard.svelte";
  import UserSideProfile from "$lib/components/UserSideProfile.svelte";
  import UserSuggestions from "$lib/components/UserSuggestions.svelte";
  import { auth } from "$lib/store/auth";
  import {
    Button,
    Card,
    Col,
    Icon,
    ProgressCircular,
    Row,
  } from "svelte-materialify";
  import { post as postState } from "$lib/store/post";
  import { mdiPlus } from "@mdi/js";
  import { goto } from "$app/navigation";
  import { user } from "$lib/store/user";
  import { onMount } from "svelte";

  export let posts;
  export let users;

  let api;
  let page = 0;
  let limit = 3;
  let totalPage = posts.data.pagination.totalPage;
  let loading = false;

  onMount(async () => {
    api = await import("$lib/utils/axiosApi");
  });

  postState.addPosts(posts.data.posts);

  user.addUsers(users.data.users);

  async function loadMore() {
    try {
      loading = true;
      page = page + 1;
      const res = await api.getAllPosts({ page, limit });
      if (res.type === "success") {
        postState.addMorePosts(res.data.posts);
      }
    } catch (error) {
      console.log(error);
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Home | Sveltegram</title>
</svelte:head>

<div style="max-width:1200px ;margin: auto;">
  <Row style="margin:auto">
    <Col sm={12} cols={12} md={8}>
      <!-- create post  -->
      {#if $auth.isAuthenticated}
        <Card
          class="pa-6 mb-8"
          style="display: flex;align-items: center;justify-content: center;"
        >
          <Button
            on:click={() => goto("/createPost")}
            size="large"
            class="blue white-text"
          >
            <Icon path={mdiPlus} />
            Create Post
          </Button>
        </Card>
      {/if}
      <!--  posts -->

      {#each $postState.posts as post (post._id)}
        <div class="mb-8">
          <PostCard {post} />
        </div>
      {/each}

      {#if totalPage >= page + 1}
        <div class="d-flex justify-center">
          <Button on:click={loadMore} class="blue white-text">
            {#if loading}
              <ProgressCircular indeterminate color="white" />
            {:else}
              Load More
            {/if}
          </Button>
        </div>
      {/if}
    </Col>

    <Col sm={12} md={4} class="d-none d-md-block">
      <div style="position: sticky;top: 64px;">
        <UserSideProfile />
        <!-- user profile on large screen -->

        <UserSuggestions users={$user.users} />
      </div>
    </Col>
  </Row>
</div>
