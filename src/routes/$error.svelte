<script>
  import { goto } from "$app/navigation";

  import { Button } from "svelte-materialify";
</script>

<div class="text-center text-h4">You have left something Behind</div>
<div class="d-flex justify-center mt-8">
    <Button on:click={() => goto("/")}>Home</Button>
</div>
