<script lang="ts">
  export var show: boolean = false;
</script>

{#if show}
  <div class="backdrop-blur-md p-10 fixed top-0 left-0 right-0 bottom-0">
    <h3 class="h3 float-start text-left">Import</h3>
    <button
      class="btn variant-filled-surface float-end"
      on:click={() => (show = false)}>Close</button>
  </div>
{/if}
