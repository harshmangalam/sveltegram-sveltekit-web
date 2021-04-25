<script context="module">
  import { BASE_URL } from "$lib/config";

  export async function load({ fetch }) {
    const res = await fetch(`${BASE_URL}/api/user?page=0&limit=5`);

    return {
      props: {
        users: await res.json(),
      },
    };
  }
</script>

<script>
  import { onMount } from "svelte";
  import Users from "$lib/components/Users.svelte";
  import { Button, Card, Col, Icon, Row, TextField } from "svelte-materialify";
  import { mdiArrowRight, mdiClose, mdiMagnify } from "@mdi/js";

  let api;
  let loading;

  let searchResults = [];
  onMount(async () => {
    api = await import("$lib/utils/axiosApi");
  });

  export let users;

  let search = "";

  $: usersData = search ? searchResults : users.data.users;

  async function handleSearch(e) {
    e.preventDefault();

    try {
      loading = true;
      const res = await api.searchUsers(search);
      searchResults = res.data.users;
    } catch (error) {
      console.log(error);
    } finally {
      loading = false;
    }
  }

  function removeSearch() {
    searchResults = [];
    search = "";
  }
</script>


<svelte:head>
  <title>Users | Sveltegram</title>
</svelte:head>



<Row>
  <Col cols={12} md={6} offset_md={3}>
    <TextField
      solo
      placeholder="Search Users..."
      rounded
      color="blue"
      bind:value={search}
      class="blue-text elevation-0"
    >
      <div slot="prepend">
        <Icon path={mdiMagnify} />
      </div>
      <div slot="append" on:click={handleSearch}>
        {#if search}
          <Button on:click={removeSearch} icon style="cursor: pointer;">
            <Icon path={mdiClose} />
          </Button>
        {/if}
        <Button on:click={handleSearch} icon style="cursor: pointer;">
          <Icon path={mdiArrowRight} />
        </Button>
      </div>
    </TextField>

    {#if loading}
      <Card class="mt-6 mb-6" loading={true} />
    {:else}
      <Users users={usersData} />
    {/if}
  </Col>
</Row>
