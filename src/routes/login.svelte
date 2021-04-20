<script>
  import { emailRules, passwordRules } from "$lib/utils/validation";
  import {
    mdiEmail,
    mdiEye,
    mdiEyeOff,
    mdiFacebook,
    mdiLock,
    mdiLogin,
  } from "@mdi/js";
  import { onMount } from "svelte";

  import {
    Button,
    Card,
    Col,
    Divider,
    Icon,
    Row,
    TextField,
  } from "svelte-materialify";

  import { snackbar } from "$lib/store/ui";
  import { goto } from "$app/navigation";
  import { auth } from "$lib/store/auth";
  let axiosApi;

  onMount(async () => {
    axiosApi = await import("$lib/utils/axiosApi");
  });

  let show = false;
  let email = "";
  let password = "";

  let error = {};

  async function handleLogin() {
    try {
      const res = await axiosApi.loginUser({ email, password });

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
          error={Boolean(error.email)}
          messages={error.email?.msg || ""}
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
          error={Boolean(error.password)}
          messages={error.password?.msg || ""}
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

        <Button
          size="large"
          block
          type="submit"
          tile
          class="blue white-text mt-4"
        >
          Login
        </Button>
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
