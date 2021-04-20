<script context="module">
  import { BASE_URL } from "$lib/config";

  export async function load({ fetch, page }) {
    const { postId } = page.params;
    const res = await fetch(`${BASE_URL}/api/post/${postId}`);
    const data = await res.json();

    return {
      props: {
        post: data.data.post,
      },
    };
  }
</script>

<script>
  import { snackbar } from "$lib/store/ui";
  import { onMount } from "svelte";
  import { mdiArrowLeft, mdiArrowRight, mdiImage, mdiPlus } from "@mdi/js";
  import {
    Button,
    Col,
    Icon,
    Row,
    Textarea,
    TextField,
  } from "svelte-materialify";

  export let post;
  import { post as postState } from "$lib/store/post";
  import { goto } from "$app/navigation";

  let axiosApi;

  onMount(async () => {
    axiosApi = await import("$lib/utils/axiosApi");
  });

  let title = post.title || "";
  let description = post.description || "";
  let image = post.image || "";

  const handleUpdate = async () => {
    try {
      const res = await axiosApi.updatePost(post._id, {
        title,
        description,
        image,
      });

      snackbar.showSnackbar({
        msg: res.message,
        open: true,
        type: res.type,
      });

      if (res.type === "success") {
        postState.updatePost(res.data.post);
        return goto("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
</script>

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
      <Button fab class="green white-text ml-4 mr-4">
        <Icon path={mdiImage} />
      </Button>

      <Button on:click={() => handleUpdate()} fab class="blue white-text">
        <Icon path={mdiArrowRight} />
      </Button>
    </div>
  </Col>
</Row>
