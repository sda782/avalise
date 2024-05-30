<script lang="ts">
  import { countries, type check_list } from "$lib/checklist";
  import { onMount } from "svelte";
  import ListContainer from "./ListContainer.svelte";
  var lists: Array<check_list> = [];

  function add() {
    lists.push({ id: crypto.randomUUID(), list_items: countries });
    lists = [...lists];
  }

  onMount(() => {
    add();
  });

  function remove(list_id: string) {
    var remove_index = lists.findIndex((l) => l.id === list_id);
    lists.splice(remove_index, 1);
    lists = [...lists];
  }
</script>

<svelte:head>
  <title>Checklist</title>
</svelte:head>
<div class="container w-10/12 h-full flex justify-center mx-auto">
  <div class="w-full text-center mt-10">
    <button class="btn variant-filled-primary mb-2" on:click={add}>Add</button>
    <div class="w-full">
      {#each lists as list_data}
        <ListContainer {list_data} {remove} />
      {/each}
    </div>
  </div>
</div>
