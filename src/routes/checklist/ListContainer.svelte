<script lang="ts">
  import type { check_list } from "$lib/checklist";
  import List from "./List.svelte";

  export var remove: (id: string) => void;
  export var list_data: check_list;
</script>

<div class="text-right">
  <button
    class=" btn variant-filled-surface"
    on:click={() => remove(list_data.id)}>Remove</button>
</div>
<div class="border-dotted border-surface-500 border-4 p-2 my-2 text-left">
  {#each list_data.list_items as country}
    <List {country} />
  {/each}
</div>
