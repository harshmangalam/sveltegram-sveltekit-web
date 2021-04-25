<script>
  import { goto } from "$app/navigation";

  import { Avatar, List, ListItem, Subheader } from "svelte-materialify";

  export let users;
</script>

<List>
  <Subheader>Connected Users</Subheader>
  {#each users as user}
    <ListItem on:click={() => goto(`/profile/${user?._id}`)}>
      <span slot="prepend" class="ml-n2">
        {#if user?.profilePic}
          <Avatar size={60}><img src={user.profilePic} alt="profile" /></Avatar>
        {:else}
          <Avatar class="blue white-text">
            {user?.name.split("")[0].toUpperCase()}
          </Avatar>
        {/if}
      </span>
      <span slot="subtitle">{user?.email}</span>
      <div class="text-h6">{user?.name}</div>
    </ListItem>
  {/each}
</List>
