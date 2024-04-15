<script lang="ts">
  import { links } from "$lib/compass";
  var ls = links;
  var form_search_word: string = "";
  var is_url: boolean = false;
</script>

<div class="container w-10/12 h-full flex justify-center mx-auto">
  <div class="w-full text-center">
    <h1 class="h1 my-10">Compass</h1>
    <div class="mb-5">
      <input
        class="input mb-5"
        type="text"
        placeholder="Search term..."
        bind:value={form_search_word} />
      <label class="flex items-center space-x-2">
        <input
          class="checkbox"
          type="checkbox"
          bind:value={is_url}
          on:change={() => {
            ls = [...ls];
          }} />
        <p>category</p>
      </label>
    </div>
    <div>
      {#each ls as link}
        <a
          class="btn variant-filled-surface"
          target="_blank"
          href={"https://" +
            link.link +
            (!is_url ? "/catalogsearch/result/?q=" : "") +
            form_search_word}
          ><img
            class="w-10 h-7"
            src="https://flagcdn.com/{link.country_code}.svg"
            alt={link.country_code} /></a>
      {/each}
    </div>
  </div>
</div>
