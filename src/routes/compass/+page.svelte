<script lang="ts">
  import { links } from "$lib/compass";

  var form_search_word: string;

  function search_website(link: string) {
    var search_url =
      "https://" + link + "/catalogsearch/result/?q=" + form_search_word;
    window.open(search_url, "_blank");
  }
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
        <button
          type="button"
          class="btn variant-filled-surface"
          on:click={() => search_website(link.link)}
          ><img
            class="w-10 h-7"
            src="https://flagcdn.com/{link.country_code}.svg"
            alt={link.country_code} /></button>
      {/each}
    </div>
  </div>
</div>
