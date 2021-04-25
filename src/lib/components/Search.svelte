<script>
  import { mdiMagnify } from "@mdi/js";

  import {
    Button,
    Container,
    Dialog,
    Icon,
    TextField,
  } from "svelte-materialify";

  let active = false;
</script>

<Button class="mr-2" text fab on:click={() => (active = true)}>
  <Icon path={mdiMagnify} />
</Button>

<Dialog class="pa-4 text-center" bind:active>
  <Container>
    <h4>Sveltegram</h4>

    <div class="mt-16 mb-16">
      <TextField style="width: 100%;" solo />
    </div>
  </Container>
</Dialog>
