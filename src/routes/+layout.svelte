<script lang="ts">
  import "../app.postcss";
  import { AppBar, AppShell } from "@skeletonlabs/skeleton";
  import { AppRail, AppRailTile, AppRailAnchor } from "@skeletonlabs/skeleton";
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <AppRail>
      <svelte:fragment slot="lead">
        <AppRailAnchor href="/"
          ><img
            width="32"
            src="/favicon.png"
            alt="compass"
            class="m-auto" /></AppRailAnchor>
        <AppRailAnchor href="/compass" class="relative inset-0 flex">
          <img
            width="32"
            src="/menu_icons/compass.png"
            alt="compass"
            class="m-auto invert" />
        </AppRailAnchor>
        <AppRailAnchor href="/hourglass" class="relative inset-0 flex">
          <img
            width="32"
            src="/menu_icons/hourglass.png"
            alt="hourglass"
            class="m-auto invert" />
        </AppRailAnchor>
        <AppRailAnchor href="/typewriter" class="relative inset-0 flex">
          <img
            width="32"
            src="/menu_icons/typewriter.png"
            alt="typewriter"
            class="m-auto invert" />
        </AppRailAnchor>
        <AppRailAnchor href="/globe" class="relative inset-0 flex">
          <img
            width="32"
            src="/menu_icons/internet.png"
            alt="globe"
            class="m-auto invert" />
        </AppRailAnchor>
      </svelte:fragment>
    </AppRail>
  </svelte:fragment>
  <slot />
</AppShell>
