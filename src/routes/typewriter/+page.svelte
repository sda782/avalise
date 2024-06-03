<script lang="ts">
  import ImportModal from "./ImportModal.svelte";
  import PresetSpecs from "./specs/PresetSpecs.svelte";
  var show_modal: boolean;
</script>

<svelte:head>
  <title>Typewriter</title>
</svelte:head>

<div
  class="container w-full h-full pl-10 pr-10 pt-10 flex justify-center mx-auto">
  <div class="w-1/4 pr-10 sidebar overflow-scroll hide-scrollbar">
    <h2 class="h2 mb-2">Presets:</h2>
    <ul>
      <li>
        <button class="btn variant-filled-primary w-full mb-2"
          >Description</button>
      </li>
    </ul>
  </div>
  <div class="w-3/4 text-center">
    <PresetSpecs bind:show_import_modal={show_modal} />
  </div>
</div>
<ImportModal bind:show={show_modal} />

<style>
  .sidebar {
    max-height: calc(100vh - 38px);
  }
</style>
