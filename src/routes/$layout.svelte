<script>
  import Navbar from "$lib/components/header/Navbar.svelte";
  import { Container, MaterialApp } from "svelte-materialify";
  import { snackbar, theme } from "$lib/store/ui";
  import Footer from "$lib/components/footer/index.svelte";
  import { onMount } from "svelte";
  import Snackbar from "$lib/components/Snackbar.svelte";
  import { auth } from "$lib/store/auth";
  import { goto } from "$app/navigation";
  import { BASE_URL } from "$lib/config";

  onMount(async () => {
    let axios = await import("axios");
    let {createAxios} = await import("$lib/utils/axiosApi")
   
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.withCredentials = true;

    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      try {
        const res = await axios.get("/api/auth/me");

        if (res.data.type === "success") {
          auth.setUser({ user: res.data.data.user, token });
        }
        if (res.data.type === "error") {
          snackbar.showSnackbar({ ...res.data });
          goto("/login");
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
</script>

<MaterialApp theme={$theme}>
  <div
    class={$theme === "light" ? "grey lighten-4" : ""}
    style="min-height: 100vh;display: flex;flex-direction: column;justify-content: space-between;padding-top: 64px;"
  >
    <nav>
      <Navbar />
    </nav>

    <main style="flex-grow: 1">
      <Container>
        <slot />
      </Container>
    </main>

    <Footer />
  </div>
  <Snackbar />
</MaterialApp>
