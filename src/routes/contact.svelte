<script>
  import { goto } from "$app/navigation";

  import { mdiFacebook, mdiGithub, mdiInstagram, mdiTwitter } from "@mdi/js";

  import { Avatar, Col, Icon, List, ListItem, Row } from "svelte-materialify";

  const items = [
    {
      name: "Facebook",
      icon: mdiFacebook,
      href: "https://www.facebook.com/harsh.mangalam.90",
    },
    {
      name: "Twitter",
      icon: mdiTwitter,
      href: "https://twitter.com/HarshMangalam6",
    },
    {
      name: "Instagram",
      icon: mdiInstagram,
      href: "https://www.instagram.com/dev___harshmangalamdev/",
    },
    {
      name: "Github",
      icon: mdiGithub,
      href: "https://www.github.com/harshmangalam/",
    },
  ];
</script>

<Row>
  <Col cols={12} md={8} offset_md={2}>
    <h4 class="mb-16 text-center">Contact Me</h4>
    <List class="elevation-2">
      {#each items as item, i}
        <ListItem on:click={() => goto(item.href)}>
          <span slot="prepend">
            <Icon path={item.icon} class="blue-text" />
          </span>
          {item.name}
        </ListItem>
      {/each}
    </List>
  </Col>
</Row>
