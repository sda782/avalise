<script lang="ts">
  import { countries } from "$lib/checklist";
  import { onMount } from "svelte";
  var lists: Array<Array<string>> = [];
  function disable(e: any) {
    var t = e.target;
    if (t) {
      t.classList.toggle("opacity-0");
    }
  }

  function add() {
    lists.push(countries);
    lists = [...lists];
  }

  onMount(() => {
    add();
  });
</script>

<svelte:head>
  <title>Checklist</title>
</svelte:head>
<div class="container w-10/12 h-full flex justify-center mx-auto">
  <div class="w-full text-center mt-10">
    <button class="btn variant-filled-primary mb-2" on:click={add}>Add</button>
    <div class="w-full">
      {#each lists as l}
        <div
          class="border-dotted border-surface-500 border-4 p-2 my-2 text-left"
          style="border-radius: 25px;">
          {#each l as c}
            <button
              class="btn bg-cover bg-center mx-1 mb-2 w-[5em] h-[2.5em]"
              style="background-image: url('https://flagcdn.com/{c}.svg');"
              on:click={disable}>
            </button>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>
