<script>
  import { auth } from "$lib/store/auth";
  import { onMount } from "svelte";
  import { snackbar, theme } from "$lib/store/ui";
  import { mdiHeart, mdiHeartOutline } from "@mdi/js";

  import {
    Card,
    CardTitle,
    CardSubtitle,
    CardActions,
    Button,
    Icon,
    Divider,
    Avatar,
    Chip,
  } from "svelte-materialify";

  import { post as postState } from "$lib/store/post";
  let axiosApi;
  onMount(async () => {
    axiosApi = await import("$lib/utils/axiosApi");
  });
  import PostActionMenu from "./PostActionMenu.svelte";

  export let post;

  async function handleLikePost() {
    try {
      const res = await axiosApi.likePost(post._id);
      if (res.type === "success") {
        postState.updatePost(res.data.post);
      }
      snackbar.showSnackbar({ open: true, type: res.type, msg: res.message });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDislike() {
    try {
      const res = await axiosApi.disLike(post._id);
      if (res.type === "success") {
        postState.updatePost(res.data.post);
      }
      snackbar.showSnackbar({ open: true, type: res.type, msg: res.message });
    } catch (error) {
      console.log(error);
    }
  }

  $: isLiked = () => {
    let findPost = $postState.posts.find((p) => p._id == post._id);
    let like = findPost.likes.find((u) => u._id == $auth.user._id);

    if (like && like._id) {
      return true;
    } else {
      return false;
    }
  };
</script>

<Card>
  <div class="theme-{$theme} d-flex align-center pa-2 justify-space-between">
    <div class=" d-flex align-center pa-2">
      {#if post.user.profilePic}
        <Avatar size={60}
          ><img src={post.user.profilePic} alt={post.user.name} /></Avatar
        >
      {:else}
        <Avatar class="blue white-text">
          {post.user.name.split("")[0].toUpperCase()}
        </Avatar>
      {/if}
      <h6 class="ml-4 font-weight-bold">
        {post.user.name}
      </h6>
    </div>
    {#if $auth.isAuthenticated && $auth.user._id == post.user._id}
      <PostActionMenu postId={post._id} />
    {/if}
  </div>
  {#if post.image}
    <img
      style="object-fit: cover;"
      width="100%"
      height="500px"
      src={post.image}
      alt={post.user.name}
    />
  {/if}
  <CardTitle>{post.title}</CardTitle>
  <CardSubtitle>{post.description}</CardSubtitle>
  {#if $auth.isAuthenticated}
    <CardActions>
      {#if isLiked()}
        <Button fab icon class="pink-text" on:click={() => handleDislike()}>
          <Icon path={mdiHeart} />
        </Button>
      {:else}
        <Button fab icon class="blue-text" on:click={() => handleLikePost()}>
          <Icon path={mdiHeartOutline} />
        </Button>
      {/if}

      <Chip class="ml-2">{post.likes.length || 0}</Chip>
    </CardActions>
  {/if}
</Card>
