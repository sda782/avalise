<script lang="ts">
  import { countries } from "$lib/checklist";
  function disable(e: any) {
    var t = e.target;
    if (t) {
      t.classList.toggle("opacity-25");
    }
  }
</script>

<div class="container w-10/12 h-full flex justify-center mx-auto">
  <div class="w-full text-center">
    <h1 class="h1 my-10">Check List</h1>

    <table class="w-full">
      <thead>
        <tr>
          <th>Add</th>
        </tr>
      </thead>
      <tbody>
        <tr
          ><th>Name</th>
          {#each countries as c}
            <td on:click={disable}
              ><img
                class="w-10 h-7"
                src="https://flagcdn.com/{c}.svg"
                alt={c} /></td>
          {/each}
        </tr>
      </tbody>
    </table>
  </div>
</div>
