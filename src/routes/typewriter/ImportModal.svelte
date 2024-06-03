<script lang="ts">
  export var show: boolean = false;
  export var parsed_text: string = "";
  var import_text: string = "";

  function parse_text() {
    parsed_text = import_text;
    show = false;
  }
</script>

{#if show}
  <div class="backdrop-blur-md fixed top-0 left-0 bottom-0 right-0 text-center">
    <div class="w-8/12 mx-auto my-20 bg-surface-900 rounded-3xl p-5">
      <h3 class="h3 text-left mb-2">Import</h3>
      <textarea class="textarea resize-none" bind:value={import_text}
      ></textarea>
      <div class="flex mt-2">
        <button
          class="btn variant-filled-primary mr-1 grow"
          on:click={parse_text}>Import</button>
        <button
          class="btn variant-filled-primary ml-1 grow"
          on:click={() => (show = false)}>Cancel</button>
      </div>
    </div>
  </div>
{/if}
