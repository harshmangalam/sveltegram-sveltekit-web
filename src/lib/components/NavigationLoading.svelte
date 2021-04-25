<script>
  import { Overlay, ProgressCircular } from "svelte-materialify";

  export let active;
</script>

<Overlay {active}>
  <ProgressCircular color="white" indeterminate size={128} />
</Overlay>
