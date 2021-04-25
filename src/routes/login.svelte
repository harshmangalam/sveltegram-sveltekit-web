<script>
  import { emailRules, passwordRules } from "$lib/utils/validation";
  import { mdiEmail, mdiEye, mdiEyeOff, mdiLock } from "@mdi/js";
  import { onMount } from "svelte";

  import {
    Button,
    Card,
    Col,
    Divider,
    Icon,
    ProgressCircular,
    Row,
    TextField,
  } from "svelte-materialify";

  import { snackbar } from "$lib/store/ui";
  import { goto } from "$app/navigation";
  import { auth } from "$lib/store/auth";

  let api;

  onMount(async () => {
    if($auth.isAuthenticated){
      goto("/")
    }
    api = await import("$lib/utils/axiosApi");
  });

  let show = false;
  let email = "";
  let password = "";

  let error = {};
  let loading = false;

  async function handleLogin() {
    try {
      loading = true;
      const res = await api.loginUser({ email, password });

      loading = false;
      snackbar.showSnackbar({
        open: true,
        type: res.type,
        msg: res.message,
      });

      if (res.type === "success") {
        localStorage.setItem("token", res.data.token);
        auth.setUser(res.data);
        return goto("/");
      }

      if (res.type === "error") {
        error = res.data;
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }
</script>

<svelte:head>
  <title>Login | Sveltegram</title>
</svelte:head>



<Row>
  <Col xl={4} lg={6} md={8} sm={12} offset_xl={4} offset_lg={3} offset_md={2}>
    <Card class="pa-6 elevation-0" style="border: 1px solid lightgray;">
      <!-- header  -->
      <div class="mt-4 mb-16">
        <!-- logo -->
        <h4 class="text-center">Sveltegram</h4>
      </div>

      <!-- login form -->
      <form on:submit|preventDefault={handleLogin}>
        <TextField
          error={Boolean(error?.email)}
          messages={error?.email?.msg || ""}
          outlined
          clearable
          rules={emailRules}
          bind:value={email}
        >
          <div slot="prepend">
            <Icon path={mdiEmail} />
          </div>
          Email
        </TextField>

        <TextField
          bind:value={password}
          class="mt-2"
          outlined
          clearable
          error={Boolean(error?.password)}
          messages={error?.password?.msg || ""}
          type={show ? "text" : "password"}
          rules={passwordRules}
        >
          <div slot="prepend">
            <Icon path={mdiLock} />
          </div>
          <div
            slot="append"
            on:click={() => {
              show = !show;
            }}
          >
            <Icon path={show ? mdiEyeOff : mdiEye} />
          </div>
          Password
        </TextField>

        <div class={loading && "d-flex justify-center"}>
          <Button
            disabled={loading}
            size="large"
            block={!loading}
            type="submit"
            rounded={loading}
            fab={loading}
            tile
            class="blue white-text mt-4"
          >
            {#if loading}
              <ProgressCircular color="white" indeterminate />
            {:else}
              Login
            {/if}
          </Button>
        </div>
      </form>

      <!-- divider  -->
      <div class="mt-4 d-flex align-center">
        <Divider />
        <span class="ml-4 mr-4">Or</span>
        <Divider />
      </div>
    </Card>

    <Card class="pa-6 mt-4 elevation-0" style="border: 1px solid lightgrey;">
      <p class="text-center">
        Don`t have an account ? <a href="signup" class="text-decoration-none"
          >Signup</a
        >
      </p>
    </Card>
  </Col>
</Row>
