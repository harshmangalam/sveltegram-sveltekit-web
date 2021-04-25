<script>
  import { Button, Icon, Snackbar } from "svelte-materialify";

  import { snackbar } from "$lib/store/ui";
  import { mdiClose } from "@mdi/js";

</script>

<Snackbar
  absolute
  active={$snackbar.open}
  bottom
  right
  timeout={3000}
  class="{$snackbar.type}-color d-flex justify-space-between"
  style="position: fixed"
>
  <span class="font-weight-bold">
    {$snackbar.msg}
  </span>
  <Button icon on:click={() => snackbar.hideSnackbar()}>
    <Icon path={mdiClose} />
  </Button>
</Snackbar>
