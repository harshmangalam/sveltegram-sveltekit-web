<script>
  import { snackbar } from "$lib/store/ui";
  import { onMount } from "svelte";
  import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";
  import {
    Button,
    Col,
    Icon,
    Row,
    Textarea,
    TextField,
  } from "svelte-materialify";

  import { post } from "$lib/store/post";
  import { goto } from "$app/navigation";
  import { auth } from "$lib/store/auth";

  let axiosApi;

  onMount(async () => {
    if (!$auth.isAuthenticated) {
      goto("/login");
    }
    axiosApi = await import("$lib/utils/axiosApi");
  });

  let title = "";
  let description = "";
  let image = "";

  const handleCreatePost = async () => {
    try {
      const res = await axiosApi.createPost({ title, description, image });

      snackbar.showSnackbar({
        msg: res.message,
        open: true,
        type: res.type,
      });

      if (res.type === "success") {
        post.addPost(res.data.post);
        return goto("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
</script>

<svelte:head>
  <title>Create Post | Sveltegram</title>
</svelte:head>

<Row>
  <Col cols={12} md={6} offset_md={3}>
    <div class="mt-16 mb-16">
      <TextField bind:value={title} style="width: 100%;" outlined
        >Post About...</TextField
      >
      <Textarea
        bind:value={description}
        style="width: 100%;"
        class="mt-2"
        outlined>Write Something...</Textarea
      >
      <TextField bind:value={image} style="width: 100%;" outlined
        >Image URL</TextField
      >
    </div>
    <div class="d-flex justify-center">
      <Button fab class="red white-text" on:click={() => goto("/")}>
        <Icon path={mdiArrowLeft} />
      </Button>

      <Button on:click={() => handleCreatePost()} fab class="blue white-text">
        <Icon path={mdiArrowRight} />
      </Button>
    </div>
  </Col>
</Row>
