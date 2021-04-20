<script>
  import { mdiMenu } from "@mdi/js";
  import { theme, darkMode, snackbar } from "$lib/store/ui";
  import { auth } from "$lib/store/auth";
  import {
    AppBar,
    Button,
    Icon,
    Switch,
    Avatar,
    NavigationDrawer,
    Overlay,
  } from "svelte-materialify";
  import DrawerList from "./DrawerList.svelte";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let axiosApi;

  onMount(async () => {
    axiosApi = await import("$lib/utils/axiosApi");
  });

  let active = false;

  const handleLogout = async () => {
    try {
      const res = await axiosApi.logoutUser();

      snackbar.showSnackbar({
        open: true,
        type: res.type,
        msg: res.message,
      });
      if (res.type === "success") {
        auth.removeUser();
        window.location.reload()
      }
    } catch (error) {
      console.log(error);
    }
  };
</script>

<AppBar fixed={true} class="theme-{theme} elevation-1" style="width: 100%;">
  <div slot="icon">
    <Button fab depressed text on:click={() => (active = !active)}>
      <Icon path={mdiMenu} />
    </Button>
  </div>
  <span slot="title">Sveltegram</span>
  <div style="flex-grow:1" />

  <div class="pt-2">
    <Switch bind:checked={$darkMode} inset />
  </div>

  {#if $auth.isAuthenticated}
    <a href={`/profile/${$auth.user?._id}`} class="text-decoration-none">
      {#if $auth.user?.profilePic}
        <Avatar size={40}
          ><img src={$auth.user.profilePic} alt={$auth.user.name} /></Avatar
        >
      {:else}
        <Avatar class="blue white-text">
          {$auth.user?.name.split("")[0].toUpperCase()}
        </Avatar>
      {/if}
    </a>
  {/if}
</AppBar>

<NavigationDrawer {active} clipped={true} fixed={true}>
  <DrawerList />

  <span slot="append" class="pa-2">
    {#if $auth.isAuthenticated}
      <Button
        on:click={() => handleLogout()}
        class="red white-text"
        size="large"
        block>Logout</Button
      >
    {/if}
  </span>
</NavigationDrawer>
<Overlay index={1} {active} on:click={() => (active = false)} absolute />
