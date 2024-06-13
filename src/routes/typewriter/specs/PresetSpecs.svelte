<script lang="ts">
  import SpecsField from "./SpecsField.svelte";
  import { product_description_store } from "../../../lib/storage_manager";
  import { genereate_output_html, type spec_field } from "$lib/typewriter";
  import { onMount } from "svelte";
  import AddSpec from "./AddSpec.svelte";
  import TextOutputView from "../TextOutputView.svelte";

  var output_text: string;
  var specs_list: Array<spec_field> = [];

  export var show_import_modal: boolean;
  var show_add_spec_modal: boolean;
  var show_output_modal: boolean;

  function remove_spec(spec: spec_field) {
    const index = $product_description_store?.specs.indexOf(spec, 0);
    if (index && index > -1) {
      $product_description_store?.specs.splice(index, 1);
    }
  }

  function clear_all() {
    $product_description_store = {
      product_title: "",
      product_description: "",
      spec_title: "",
      specs: [],
      footer: "",
    };
  }

  function import_html() {
    show_import_modal = true;
  }

  function get_output() {
    output_text = genereate_output_html();
    show_output_modal = true;
  }

  onMount(() => {
    clear_all();
  });
</script>

<button
  class="btn variant-filled-primary mb-2 mr-2 float-start"
  on:click={get_output}>Generate HTML Code</button
><button
  class="btn variant-filled-primary mb-2 mr-2 float-start"
  on:click={import_html}>Import</button
><button class="btn variant-filled-surface mb-2 float-end" on:click={clear_all}
  >Clear All</button>
<input
  bind:value={$product_description_store.product_title}
  class="input mb-2"
  placeholder="product information" /><br />
<textarea
  bind:value={$product_description_store.product_description}
  class="textarea h-[15em] mb-2 resize-none"
  placeholder="description" /><br />
<div
  class="border-dotted border-surface-500 border-4 p-2"
  style="border-radius: 25px;">
  <input
    class="input mb-2"
    placeholder="features"
    bind:value={$product_description_store.spec_title} /><br />
  {#if $product_description_store.specs}
    {#each $product_description_store.specs as spec}
      <div class="flex">
        <SpecsField
          bind:spec_name={spec.spec_name}
          bind:icon_name={spec.icon_name} />
        <button
          class="max-w-11 max-h-11 btn variant-outline-surface ml-2"
          on:click={() => remove_spec(spec)}>x</button>
      </div>
    {/each}
  {/if}
  <AddSpec bind:show={show_add_spec_modal} />
  <button
    class="btn variant-filled-primary w-full"
    on:click={() => (show_add_spec_modal = true)}>Add Spec</button>
</div>
<textarea
  class="textarea h-[10em] my-2 resize-none"
  placeholder="description footer text"
  bind:value={$product_description_store.footer}></textarea>
<TextOutputView bind:show={show_output_modal} {output_text}></TextOutputView>
