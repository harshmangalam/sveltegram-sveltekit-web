<script>
  import { goto } from "$app/navigation";

  import { Button } from "svelte-materialify";
</script>

<div class="text-center">
  <h4>You are missing something behind lets explore</h4>
  <Button class="blue white-text mt-6" on:click={() => goto("/")}>Home</Button>
</div>
