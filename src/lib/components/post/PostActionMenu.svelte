<script>
  import { Menu, Button, List, ListItem, Icon } from "svelte-materialify";
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { snackbar } from "$lib/store/ui";
  import { post } from "$lib/store/post";

  import { mdiCubeUnfolded, mdiDelete, mdiPencil } from "@mdi/js";
  import { goto } from "$app/navigation";

  let axiosApi;

  onMount(async () => {
    axiosApi = await import("$lib/utils/axiosApi");
  });

  export let postId;

  async function handleDeletePost() {
    try {
      const res = await axiosApi.deletePost(postId);
      snackbar.showSnackbar({ open: true, msg: res.message, type: res.type });
      if (res.type === "success") {
        post.removePost(postId);
      }
    } catch (error) {
      console.log(error);
    }
  }
</script>

<div class="d-flex justify-center">
  <Menu
    offsetY={true}
    right
    transition={scale}
    inOpts={{ easing: elasticOut, duration: 500 }}
  >
    <div slot="activator">
      <Button icon>
        <Icon path={mdiCubeUnfolded} />
      </Button>
    </div>
    <List dense>
      <ListItem on:click={() => handleDeletePost()}>
        <Icon path={mdiDelete} class="mr-2" />
        Delete
      </ListItem>
      <ListItem on:click={() => goto(`/post/${postId}/edit`)}>
        <Icon path={mdiPencil} class="mr-2" />
        Edit
      </ListItem>
    </List>
  </Menu>
</div>
