<script>
  import {
    List,
    ListItemGroup,
    ListItem,
    Subheader,
    Avatar,
  } from "svelte-materialify";

  import { auth } from "$lib/store/auth";
  import { goto } from "$app/navigation";

  export let users;
</script>

<List class="elevation-0" style="width:300px">
  <Subheader>
    {#if $auth.isAuthenticated}
      Suggestions for you
    {:else}
      Connected users
    {/if}
  </Subheader>
  <ListItemGroup value="[1]">
    {#each users as user (user._id)}
      <ListItem on:click={() => goto(`/profile/${user._id}`)}>
        <span slot="prepend">
          {#if user.profilePic}
            <Avatar size={40}
              ><img src={user.profilePic} alt={user.name} /></Avatar
            >
          {:else}
            <Avatar class="blue white-text">
              {user.name.split("")[0].toUpperCase()}
            </Avatar>
          {/if}
        </span>
        {user.name}
      </ListItem>
    {/each}
  </ListItemGroup>
</List>
