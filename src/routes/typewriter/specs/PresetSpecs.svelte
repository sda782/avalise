<script lang="ts">
  import SpecsField from "./SpecsField.svelte";
  import { product_description_store } from "../../../lib/storage_manager";
  import { generate_output_html, type spec_field } from "$lib/typewriter";
  import AddSpec from "./AddSpec.svelte";
  import TextOutputView from "../TextOutputView.svelte";
  import AddIcon from "./AddIcon.svelte";
  import Settings from "./Settings.svelte";

  var output_text: string;

  export var show_import_modal: boolean;
  var show_add_spec_modal: boolean;
  var show_output_modal: boolean;
  var show_add_new_icon_modal: boolean;
  var show_settings_modal: boolean;
  var inner_ai_disclaimer_html: HTMLDivElement;

  function remove_spec(spec: spec_field) {
    const index = $product_description_store.specs.indexOf(spec);
    if (index !== -1) {
      $product_description_store.specs =
        $product_description_store.specs.filter((_, i) => i !== index);
    }
  }

  function clear_all() {
    $product_description_store = {
      product_title: "",
      product_description: "",
      spec_title: "",
      specs: [],
      footer: "",
      ai_robot: "",
      export_setting: {
        product_header: true,
        product_body: true,
        specs_header: true,
        specs_body: true,
        footer: true,
        ai_disclaimer: true,
      },
    };
  }

  $: {
    if (inner_ai_disclaimer_html) {
      if ($product_description_store.ai_robot) {
        let formatted_text = $product_description_store.ai_robot.replace(
          'src="{{media url=&quot;.renditions/wysiwyg/icons/robot.jpg&quot;}}"',
          'src="https://www.usaskateshop.com/media/wysiwyg/icons/robot.jpg"',
        );
        inner_ai_disclaimer_html.innerHTML = formatted_text;
      } else {
        inner_ai_disclaimer_html.innerHTML = "";
      }
    }
  }
</script>

<button
  class="btn variant-filled-primary mb-2 mr-2 float-start"
  on:click={() => {
    output_text = generate_output_html();
    show_output_modal = true;
  }}>Generate HTML Code</button
><button
  class="btn variant-filled-primary mb-2 mr-2 float-start"
  on:click={() => (show_import_modal = true)}>Import</button
><button
  class="btn variant-filled-primary mb-2 mr-2 float-start"
  on:click={() => (show_settings_modal = true)}>Settings</button
><button
  class="btn variant-filled-primary mb-2 mr-2 float-start"
  on:click={() => (show_add_new_icon_modal = true)}>Add new icon</button>
<button class="btn variant-filled-surface mb-2 float-end" on:click={clear_all}
  >Clear All</button>
<input
  bind:value={$product_description_store.product_title}
  class="input mb-2"
  placeholder="product information" /><br />
<textarea
  bind:value={$product_description_store.product_description}
  class="textarea h-[15em] mb-2 resize-none"
  placeholder="description" /><br />
<div class="border-dotted border-surface-500 border-4 p-2">
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
          class="max-w-10 max-h-10 btn variant-outline-surface ml-2"
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
<div class="h-[10em] text-left" bind:this={inner_ai_disclaimer_html}></div>
<TextOutputView bind:show={show_output_modal} {output_text} />
<AddIcon bind:show={show_add_new_icon_modal} />
<Settings bind:show={show_settings_modal} />
