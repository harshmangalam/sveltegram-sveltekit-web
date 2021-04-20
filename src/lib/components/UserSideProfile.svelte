<script>
  import { auth } from "$lib/store/auth";
  import { theme } from "$lib/store/ui";
  import { mdiAccount } from "@mdi/js";
  import { Avatar, Icon } from "svelte-materialify";
</script>

<div class="theme-{$theme} d-flex align-center pa-2">
  <Avatar size={60}>
    {#if $auth.isAuthenticated}
      {#if $auth.user.profilePic}
        <Avatar size={60}
          ><img src={$auth.user.profilePic} alt="profile" /></Avatar
        >
      {:else}
        <Avatar class="blue white-text">
          {$auth.user?.name.split("")[0].toUpperCase()}
        </Avatar>
      {/if}
    {:else}
      <Icon path={mdiAccount} />
    {/if}
  </Avatar>

  <h6 class="ml-4 font-weight-bold">
    {#if $auth.isAuthenticated}
      {$auth.user.name}
    {:else}
      Login account
    {/if}
  </h6>
</div>
