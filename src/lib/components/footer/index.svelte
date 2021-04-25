<script>
  import { Footer } from "svelte-materialify";

  import { theme } from "$lib/store/ui";
</script>

<Footer padless class="theme-{theme}  justify-center flex-column">
  <div class="theme-{theme} pa-2 text-center" style="width:100%">
    {new Date().getFullYear()} &copy;
    <b>Sveltegram</b>
  </div>
</Footer>
