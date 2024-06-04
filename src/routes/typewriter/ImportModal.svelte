<script lang="ts">
  import { product_description } from "$lib/storage_manager";
  import type { description, spec_field } from "$lib/typewriter";

  export let show: boolean = false;

  let importText: string = "";

  const titleRegex = /(?<=<b>)w+:/;
  const iconsRegex = /(?<=icons\/)[a-z-]+(?=.png'}})/;
  const specsNameRegex =
    /(?<=src="{{media url='\/wysiwyg\/icons\/[^"]+}}">)[A-Za-z: &]+/;

  function parseText() {
    const titles = titleRegex.exec(importText);
    const icons = iconsRegex.exec(importText);
    const specsNames = specsNameRegex.exec(importText);

    const specs: spec_field[] = [];
    const length = icons?.length ?? 0;
    console.log(icons);

    for (let i = 0; i < length; i++) {
      const specName = specsNames?.[i] ?? "no_spec_icon";
      const iconName = icons?.[i] ?? "spec name";
      specs.push({ spec_name: specName, icon_name: iconName });
    }

    const description: description = {
      product_title: titles?.[0] ?? "product information:",
      product_description: "",
      spec_title: titles?.[1] ?? "features:",
      specs,
      footer: "",
    };
    console.log(description);
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
