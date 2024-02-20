<script lang="ts">
  import "../app.postcss";
  import { AppBar, AppShell } from "@skeletonlabs/skeleton";
</script>

<AppShell>
  <svelte:fragment slot="header"
    ><AppBar
      ><svelte:fragment slot="lead"
        ><a href="/"><h1 class="h2">Briefcase</h1></a></svelte:fragment>
      <svelte:fragment slot="trail"
        ><a class="btn variant-filled-surface" href="/compass">compass</a><a
          class="btn variant-filled-surface"
          href="/hourglass">hourglass</a
        ></svelte:fragment
      ></AppBar
    ></svelte:fragment>
  <slot />
</AppShell>
