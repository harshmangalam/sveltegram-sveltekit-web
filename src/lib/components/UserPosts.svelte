<script>
  import { Row, Col } from "svelte-materialify";

  export let posts;
</script>

<div class="elevation-0 rounded pa-3" style="width: 100%;">
  <Row>
    {#each posts as post (post._id)}
      <Col md={6} cols={12}>
        {#if post.image}
          <img src={post.image} alt="profile" height="100%" width="100%" />
        {/if}
      </Col>
    {/each}
  </Row>
</div>
