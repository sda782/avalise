<script lang="ts">
  import SpecsField from "./SpecsField.svelte";
  import { specs_list_store } from "../../lib/storage_manager";
  import type { spec_field } from "$lib/typewriter";

  var product_information: string;
  var description: string;
  var features: string;
  var new_spec_name: string;
  var new_icon_name: string;

  function genereate_output_html() {
    var formatted_specs_list = "";
    $specs_list_store.forEach((spec) => {
      formatted_specs_list += `<div class="feature-badge">
        <img width="20" height="20" src="{{media url='/wysiwyg/icons/${spec.icon_name}.png'}}">${spec.spec_name}</div>\n`;
    });
    var output_html = `<style>
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
</div>`;
    alert(output_html);
  }

  function remove_spec(spec: spec_field) {
    const index = $specs_list_store.indexOf(spec, 0);
    if (index > -1) {
      $specs_list_store.splice(index, 1);
    }
    $specs_list_store = [...$specs_list_store];
  }

  function add_spec() {
    $specs_list_store = [
      ...$specs_list_store,
      {
        spec_name: new_spec_name,
        icon_name: new_icon_name,
      },
    ];
    new_spec_name = "";
    new_icon_name = "";
  }
</script>

<svelte:head>
  <title>Typewriter</title>
</svelte:head>

<div class="container w-10/12 h-full flex justify-center mx-auto">
  <div class="w-1/2 text-center mt-10">
    <button
      class="btn variant-filled-primary mb-2"
      on:click={genereate_output_html}>Generate HTML Code</button>
    <input
      bind:value={product_information}
      class="input mb-2"
      placeholder="product information" /><br />
    <textarea
      bind:value={description}
      class="textarea h-[15em] mb-2 resize-none"
      placeholder="description" /><br />
    <input class="input mb-2" placeholder="features" /><br />
    {#each $specs_list_store as spec}
      <div class="flex">
        <SpecsField spec_name={spec.spec_name} icon_name={spec.icon_name} />
        <button
          class="max-w-11 max-h-11 btn variant-outline-surface ml-2"
          on:click={() => remove_spec(spec)}>x</button>
      </div>
    {/each}
    <SpecsField bind:icon_name={new_icon_name} bind:spec_name={new_spec_name}
    ></SpecsField>
    <button class="btn variant-filled-primary w-full" on:click={add_spec}
      >Add Spec</button>
  </div>
</div>
