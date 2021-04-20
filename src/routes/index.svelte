<script>
  import PostCard from "$lib/components/post/PostCard.svelte";
  import UserSideProfile from "$lib/components/UserSideProfile.svelte";
  import UserSuggestions from "$lib/components/UserSuggestions.svelte";
  import { auth } from "$lib/store/auth";
  import { Button, Card, Col, Icon, Row } from "svelte-materialify";
  import { onMount } from "svelte";
  import { post as postState } from "$lib/store/post";
  import { mdiPlus } from "@mdi/js";
  import { goto } from "$app/navigation";
  import { user } from "$lib/store/user";

  let axiosApi;

  onMount(async () => {
    axiosApi = await import("$lib/utils/axiosApi");
    await loadPosts();
    await loadUsers();
  });

  async function loadPosts() {
    try {
      const res = await axiosApi.getAllPosts({ page: 0, limit: 5 });
      if (res.type === "success") {
        postState.addPosts(res.data.posts);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function loadUsers() {
    try {
      const res = await axiosApi.getUsers({ page: 0, limit: 5 });
      if (res.type === "success") {
        user.addUsers(res.data.users);
      }
    } catch (error) {
      console.log(error);
    }
  }
</script>

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
