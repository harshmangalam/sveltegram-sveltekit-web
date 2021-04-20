<script>
  import { Button, Col, Footer, Row } from "svelte-materialify";

  import { darkMode, theme } from "$lib/store/ui";

  import { goto } from "$app/navigation";
  import { mdiFacebook, mdiInstagram, mdiLinkedin, mdiTwitter } from "@mdi/js";
</script>

<Footer padless class="theme-{theme}  justify-center flex-column">
  <div class="theme-{theme} pa-2 text-center" style="width:100%">
    {new Date().getFullYear()}
    <b>Sveltegram</b>
  </div>
</Footer>
