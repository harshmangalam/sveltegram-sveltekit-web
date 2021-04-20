<script>
  import { goto } from "$app/navigation";
  import { auth } from "$lib/store/auth";

  import {
    mdiAccount,
    mdiAccountCircleOutline,
    mdiContacts,
    mdiHome,
    mdiLogin,
    mdiNetwork,
  } from "@mdi/js";

  import { Avatar, Divider, Icon, List, ListItem } from "svelte-materialify";

  const links = [
    { name: "Login", icon: mdiLogin, to: "/login" },
    { name: "Signup", icon: mdiAccount, to: "/signup" },
  ];

  const pageLinks = [
    { name: "Home", icon: mdiHome, to: "/" },
    { name: "About Us", icon: mdiNetwork, to: "/about" },
    { name: "Contact Us", icon: mdiContacts, to: "/contact" },
  ];
</script>

<List>
  {#if $auth.isAuthenticated}
    <ListItem on:click={() => goto(`/profile/${$auth.user?._id}`)}>
      <span slot="prepend" class="ml-n2">
        {#if $auth.user?.profilePic}
          <Avatar size={60}
            ><img src={$auth.user.profilePic} alt="profile" /></Avatar
          >
        {:else}
          <Avatar class="blue white-text">
            {$auth.user?.name.split("")[0].toUpperCase()}
          </Avatar>
        {/if}
      </span>
      <span slot="subtitle">{$auth.user?.email}</span>
      <div class="text-h6">{$auth.user?.name}</div>
    </ListItem>
    <Divider />
  {:else}
    {#each links as link}
      <ListItem on:click={() => goto(link.to)}>
        <span slot="prepend">
          <Icon path={link.icon} />
        </span>
        {link.name}
      </ListItem>
    {/each}
  {/if}

  <Divider />

  {#each pageLinks as link}
    <ListItem on:click={() => goto(link.to)}>
      <span slot="prepend">
        <Icon path={link.icon} />
      </span>
      {link.name}
    </ListItem>
  {/each}
</List>
