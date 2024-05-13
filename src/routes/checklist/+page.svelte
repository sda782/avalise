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

<div class="container w-10/12 h-full flex justify-center mx-auto">
  <div class="w-full text-center mt-10">
    <button class="btn variant-outline-primary" on:click={add}>Add</button>
    <table class="w-full">
      <tbody>
        {#each lists as l}
          <tr>
            {#each l as c}
              <td
                ><button class="w-10 h-7" on:click={disable}>
                  <img src="https://flagcdn.com/{c}.svg" alt={c} />
                </button></td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
