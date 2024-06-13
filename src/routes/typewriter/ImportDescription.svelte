<script lang="ts">
  import { product_description_store } from "$lib/storage_manager";
  import { matchAll, type description, type spec_field } from "$lib/typewriter";
  import Modal from "../../misc/Modal.svelte";

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
    $product_description_store = description;
    show = false;
  }
</script>

<Modal bind:show onConfirm={parseText} confirm_text="Import">
  <h3 class="h3 text-left mb-2">Import</h3>
  <textarea class="textarea resize-none" bind:value={importText}></textarea>
</Modal>
