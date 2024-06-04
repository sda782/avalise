<script lang="ts">
  import { product_description } from "$lib/storage_manager";
  import { matchAll, type description, type spec_field } from "$lib/typewriter";

  export let show: boolean = false;

  let importText: string = "";

  const titleRegex = /(?<=<b>)w+:/g;
  const iconsRegex = /(?<=src="{{media url='\/wysiwyg\/icons\/)[a-zA-Z-]+/g;
  const specsNameRegex =
    /(?<=src="{{media url='\/wysiwyg\/icons\/[^"]+}}">)[A-Za-z: &]+/g;

  function parseText() {
    const specs: spec_field[] = [];
    const titles = matchAll(titleRegex, importText);
    const icons = matchAll(iconsRegex, importText);
    const specNames = matchAll(specsNameRegex, importText);

    icons.forEach((icon, index) => {
      specs.push({
        spec_name: specNames[index] || "",
        icon_name: icon,
      });
    });

    const description: description = {
      product_title: titles[0] || "product information:",
      product_description: "",
      spec_title: titles[1] || "features:",
      specs,
      footer: "",
    };
    $product_description = description;
    show = false;
  }
</script>

{#if show}
  <div class="backdrop-blur-md fixed top-0 left-0 bottom-0 right-0 text-center">
    <div class="w-8/12 mx-auto my-20 bg-surface-900 rounded-3xl p-5">
      <h3 class="h3 text-left mb-2">Import</h3>
      <textarea class="textarea resize-none" bind:value={importText}></textarea>
      <div class="flex mt-2">
        <button
          class="btn variant-filled-primary mr-1 grow"
          on:click={parseText}>Import</button>
        <button
          class="btn variant-filled-primary ml-1 grow"
          on:click={() => (show = false)}>Cancel</button>
      </div>
    </div>
  </div>
{/if}
