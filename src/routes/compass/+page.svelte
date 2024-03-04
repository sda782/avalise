<script lang="ts">
  import { links } from "$lib/compass";

  var form_search_word: string = "";
</script>

<div class="container w-10/12 h-full flex justify-center mx-auto">
  <div class="w-full text-center">
    <h1 class="h1 my-10">Compass</h1>
    <input
      class="input mb-10"
      type="text"
      placeholder="Search term..."
      bind:value={form_search_word} />
    <div>
      {#each links as link}
        <a
          class="btn variant-filled-surface"
          target="_blank"
          href={"https://" +
            link.link +
            "/catalogsearch/result/?q=" +
            form_search_word}
          ><img
            class="w-10 h-7"
            src="https://flagcdn.com/{link.country_code}.svg"
            alt={link.country_code} /></a>
      {/each}
    </div>
  </div>
</div>
