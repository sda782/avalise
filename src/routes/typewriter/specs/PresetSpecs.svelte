<script lang="ts">
  import SpecsField from "./SpecsField.svelte";
  import {
    product_description,
    specs_list_store,
  } from "../../../lib/storage_manager";
  import type { spec_field } from "$lib/typewriter";
  import { onMount } from "svelte";
  import AddSpec from "./AddSpec.svelte";
  import TextOutputView from "../TextOutputView.svelte";

  var product_information: string;
  var description: string;
  var features: string;
  var footer: string;
  var output_text: string;

  export var show_import_modal: boolean;
  var show_add_spec_modal: boolean;
  var show_output_modal: boolean;

  function genereate_output_html() {
    var formatted_specs_list = "";
    $specs_list_store.forEach((spec) => {
      formatted_specs_list += `<div class="feature-badge">
          <img width="20" height="20" src="{{media url='/wysiwyg/icons/${spec.icon_name}.png'}}">${spec.spec_name}</div>\n`;
    });
    output_text = `<style>
      .feature-badge {
          margin: 4px auto 4px 0;
          padding: 8px 40px 8px 8px;
          background: #eee5;
          border-radius: 100px;
      }
      .feature-badge > img{
          margin-right:4px; 
          color:#888;
          vertical-align:middle;
      }
  </style>
  <div class="row">
      <div class="col-md-6"><p><b>${product_information}:</b></p>
          ${description}
      </div>
      <div class="col-md-3"><p><b>${features}:</b></p>
          ${formatted_specs_list}
      </div>
  </div>${footer || ""}`;
    show_output_modal = true;
  }

  function remove_spec(spec: spec_field) {
    const index = $specs_list_store.indexOf(spec, 0);
    if (index > -1) {
      $specs_list_store.splice(index, 1);
    }
    $specs_list_store = [...$specs_list_store];
  }

  function add_spec(new_icon_name: string, new_spec_name: string) {
    $specs_list_store = [
      ...$specs_list_store,
      {
        spec_name: new_spec_name,
        icon_name: new_icon_name,
      },
    ];
  }

  function clear_all() {
    product_information = "";
    description = "";
    features = "";
    footer = "";
    $specs_list_store = [];
    $product_description = null;
  }

  function import_html() {
    show_import_modal = true;
  }

  onMount(() => {
    $product_description = null;
    product_description.subscribe(update_description);
  });

  function update_description() {
    if (!$product_description) return;
    var t = $product_description;
    product_information = t.product_title;
    description = t.product_description;
    features = t.spec_title;
    t.specs.forEach((s) => {
      add_spec(s.icon_name, s.spec_name);
    });
  }
</script>

<button
  class="btn variant-filled-primary mb-2 mr-2 float-start"
  on:click={genereate_output_html}>Generate HTML Code</button
><button
  class="btn variant-filled-primary mb-2 mr-2 float-start"
  on:click={import_html}>Import</button
><button class="btn variant-filled-surface mb-2 float-end" on:click={clear_all}
  >Clear All</button>
<input
  bind:value={product_information}
  class="input mb-2"
  placeholder="product information" /><br />
<textarea
  bind:value={description}
  class="textarea h-[15em] mb-2 resize-none"
  placeholder="description" /><br />
<div
  class="border-dotted border-surface-500 border-4 p-2"
  style="border-radius: 25px;">
  <input
    class="input mb-2"
    placeholder="features"
    bind:value={features} /><br />
  {#if $specs_list_store.length > 0}
    {#each $specs_list_store as spec}
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
  <AddSpec bind:show={show_add_spec_modal} {add_spec} />
  <button
    class="btn variant-filled-primary w-full"
    on:click={() => (show_add_spec_modal = true)}>Add Spec</button>
</div>
<textarea
  class="textarea h-[10em] my-2 resize-none"
  placeholder="description footer text"
  bind:value={footer}></textarea>
<TextOutputView bind:show={show_output_modal} {output_text}></TextOutputView>
