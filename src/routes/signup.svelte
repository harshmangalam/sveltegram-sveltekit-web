<script>
  import {
    mdiAccount,
    mdiEmail,
    mdiEye,
    mdiEyeOff,
    mdiFacebook,
    mdiLock,
  } from "@mdi/js";

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
  import { onMount } from "svelte";
  import { emailRules, passwordRules } from "$lib/utils/validation";
  import { goto } from "$app/navigation";

  let axiosApi;

  onMount(async () => {
    axiosApi = await import("$lib/utils/axiosApi");
  });

  let show = false;

  let error = {};
  let name = "";
  let email = "";
  let password = "";

  async function handleSignup() {
    try {
      const res = await axiosApi.signupUser({ name, email, password });

      snackbar.showSnackbar({
        open: true,
        type: res.type,
        msg: res.message,
      });

      if (res.type === "success") {
        goto("/login");
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
      <div class="mb-8 mt-4">
        <!-- logo  -->
        <h4 class="text-center">Sveltegram</h4>
        <!-- header text  -->
        <p class="text-center grey-text mt-4 font-weight-bold">
          Sign up to see photos and videos from your friends.
        </p>
      </div>
      <form on:submit|preventDefault={handleSignup}>
        <TextField
          error={Boolean(error?.email)}
          messages={error?.email?.msg || ""}
          outlined
          clearable
          bind:value={email}
          rules={emailRules}
        >
          <div slot="prepend">
            <Icon path={mdiEmail} />
          </div>
          Email
        </TextField>

        <TextField
          error={Boolean(error?.name)}
          messages={error?.name?.msg || ""}
          outlined
          clearable
          bind:value={name}
          rules={[(v) => !!v || "Name must be required"]}
        >
          <div slot="prepend">
            <Icon path={mdiAccount} />
          </div>
          Full Name
        </TextField>

        <TextField
          outlined
          clearable
          type={show ? "text" : "password"}
          error={Boolean(error?.password)}
          messages={error?.password?.msg || ""}
          rules={passwordRules}
          bind:value={password}
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
          Sign up
        </Button>
        <p class="mt-4 mb-4">
          By signing up, you agree to our Terms , Data Policy and Cookies Policy
          .
        </p>
      </form>
    </Card>

    <Card class="pa-6 mt-4 elevation-0" style="border: 1px solid lightgrey;">
      <p class="text-center">
        Have an account ? <a href="login" class="text-decoration-none">Login</a>
      </p>
    </Card>
  </Col>
</Row>
