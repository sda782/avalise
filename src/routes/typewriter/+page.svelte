<script lang="ts">
  import { countries } from "$lib/global";
  import ImportModal from "./ImportDescription.svelte";
  import PresetSpecs from "./specs/PresetSpecs.svelte";
  import { product_description_store } from "../../lib/storage_manager";
  import { page } from "$app/stores";
  import { type preset_data } from "$lib/typewriter";

  var show_modal: boolean;

  function set_preset(country: string) {
    var c: preset_data = $page.data.presets.find(
      (x: preset_data) => x.country_code == country,
    );
    $product_description_store.product_title = c.product_title;
    $product_description_store.spec_title = c.spec_title;
    if (c.ai_robot) {
      $product_description_store.ai_robot = c.ai_robot;
    }
  }
</script>

<svelte:head>
  <title>Typewriter</title>
</svelte:head>

<div
  class="container w-full h-full pl-10 pr-10 pt-10 flex justify-center mx-auto">
  <div class="w-1/4 pr-10 sidebar overflow-scroll hide-scrollbar">
    <h2 class="h2 mb-2">Presets:</h2>
    <div>
      {#each countries as country}
        <button
          class="btn bg-cover bg-center mx-1 mb-2 w-[5em] h-[2.5em]"
          style="background-image: url('https://flagcdn.com/{country}.svg');"
          data-country-code={country}
          on:click={() => set_preset(country)}></button>
      {/each}
    </div>
  </div>
  <div class="w-3/4 text-center">
    <PresetSpecs bind:show_import_modal={show_modal} />
  </div>
  <ImportModal bind:show={show_modal} />
</div>

<style>
  .sidebar {
    max-height: calc(100vh - 38px);
  }
</style>
