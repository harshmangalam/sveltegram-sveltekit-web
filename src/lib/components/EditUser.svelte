<script>
  import { auth } from "$lib/store/auth";
  import { snackbar } from "$lib/store/ui";
  import { mdiPencil } from "@mdi/js";
  import { onMount } from "svelte";

  import {
    Avatar,
    Button,
    Container,
    Dialog,
    Icon,
    Textarea,
    TextField,
  } from "svelte-materialify";
  let active = false;

  let axiosApi;
  onMount(async () => {
    axiosApi = await import("$lib/utils/axiosApi");
  });
  let name = $auth.user.name || "";
  let email = $auth.user.email || "";
  let bio = $auth.user.bio || "";
  let profilePic = $auth.user.profilePic || "";

  async function handleEdit() {
    const res = await axiosApi.editUser($auth.user._id, {
      name,
      email,
      bio,
      profilePic,
    });

    snackbar.showSnackbar({ open: true, type: res.type, msg: res.message });
    if (res.type === "success") {
      window.location.reload();
    }
    try {
    } catch (error) {
      console.log(error);
    }
  }
</script>

<div class="text-center">
  <Button
    on:click={() => (active = true)}
    rounded
    class="yellow-text ml-4"
    fab
    icon
  >
    <Icon path={mdiPencil} />
  </Button>
</div>

<Dialog class="pa-4 text-center" bind:active>
  <Container>
    <div
      style="display: flex;align-items: center;justify-content: center;flex-direction: column;"
    >
      {#if $auth.user?.profilePic}
        <Avatar size={180}
          ><img src={$auth.user.profilePic} alt="profile" /></Avatar
        >
      {:else}
        <Avatar class="blue white-text text-h1" size={180}>
          {$auth.user?.name.split("")[0].toUpperCase()}
        </Avatar>
      {/if}

      <div class="mt-8">
        <TextField bind:value={name} class="mt-2 mb-2" rounded outlined
          >Name</TextField
        >
        <TextField bind:value={email} class="mt-2 mb-2" rounded outlined
          >Email</TextField
        >
        <Textarea bind:value={bio} class="mt-2 mb-2" rounded outlined
          >Bio</Textarea
        >
        <TextField rounded outlined bind:value={profilePic} class="mt-2 mb-2"
          >Profile Image Url</TextField
        >
      </div>
      <div class="mt-8 mb-8">
        <Button on:click={() => handleEdit()} class="blue" rounded size="large"
          >Update</Button
        >
      </div>
    </div>
  </Container>
</Dialog>
