<script lang="ts">
  import { languages } from "$lib/global";
  import { page } from "$app/stores";
  import { type preset_data } from "$lib/typewriter";

  import { generate_output_html, type spec_field } from "$lib/typewriter";
  import { product_description_store } from "$lib/storage_manager";
  import AddIcon from "./AddIcon.svelte";
  import AddSpec from "./AddSpec.svelte";
  import Settings from "./Settings.svelte";
  import SpecsField from "./SpecsField.svelte";
  import TextOutputView from "./TextOutputView.svelte";
  import Tabs from "./Tabs.svelte";

  var current_preset: string;
  var output_text: string;

  var show_add_spec_modal: boolean;
  var show_output_modal: boolean;
  var show_add_new_icon_modal: boolean;
  var show_settings_modal: boolean;
  var inner_ai_disclaimer_html: HTMLDivElement;

  function remove_spec(spec: spec_field) {
    const index = $product_description_store.specs_data.specs.indexOf(spec);
    if (index !== -1) {
      $product_description_store.specs_data.specs =
        $product_description_store.specs_data.specs.filter(
          (_, i) => i !== index,
        );
    }
  }

  function clear_all() {
    $product_description_store = {
      product_title: "",
      product_description: "",
      spec_title: "",
      specs_data: {
        builder: false,
        specs: [],
        specs_text: "",
      },
      footer: "",
      ai_robot: "",
      export_setting: {
        style: true,
        product_header: true,
        product_body: true,
        specs_header: true,
        specs_body: true,
        footer: true,
        ai_disclaimer: true,
      },
    };
  }

  function set_preset(country: string) {
    var c: preset_data = $page.data.presets.find(
      (x: preset_data) => x.country_code == country,
    );
    if (c == undefined) return;
    $product_description_store.product_title = c.product_title;
    $product_description_store.spec_title = c.spec_title;
    $product_description_store.ai_robot = c.ai_robot;

    current_preset = country;
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

  $: if (
    $product_description_store != null &&
    $product_description_store.product_title == ""
  ) {
    current_preset = "";
  }
</script>

<svelte:head>
  <title>Typewriter</title>
</svelte:head>

<div
  class="container w-full h-full pl-10 pr-10 pt-10 flex justify-center mx-auto"
>
  <div class="w-1/4 pr-10 sidebar overflow-scroll hide-scrollbar">
    <h2 class="h2 mb-2">Presets: {current_preset ?? ""}</h2>
    <div>
      {#each languages as country}
        <button
          class="btn bg-cover bg-center mx-1 mb-2 w-[5em] h-[2.5em]"
          style="background-image: url('https://flagcdn.com/{country}.svg');"
          data-country-code={country}
          on:click={() => set_preset(country)}
        ></button>
      {/each}
    </div>
  </div>
  <div class="w-3/4 text-center">
    <button
      class="btn variant-filled-primary mb-2 mr-2 float-start"
      on:click={() => {
        output_text = generate_output_html();
        show_output_modal = true;
      }}>Generate HTML Code</button
    ><button
      class="btn variant-filled-primary mb-2 mr-2 float-start"
      on:click={() => (show_settings_modal = true)}>Settings</button
    ><button
      class="btn variant-filled-primary mb-2 mr-2 float-start"
      on:click={() => (show_add_new_icon_modal = true)}>Add new icon</button
    >
    <button
      class="btn variant-filled-surface mb-2 float-end"
      on:click={clear_all}>Clear All</button
    >
    <input
      bind:value={$product_description_store.product_title}
      class="input mb-2"
      placeholder="product information"
    /><br />
    <textarea
      bind:value={$product_description_store.product_description}
      class="textarea h-[15em] mb-2 resize-none"
      placeholder="description"
    /><br />
    <div class="border-dotted border-surface-500 border-4 p-2">
      <Tabs />
      <input
        class="input my-2"
        placeholder="features"
        bind:value={$product_description_store.spec_title}
      /><br />
      {#if $product_description_store.specs_data.builder}
        {#if $product_description_store.specs_data.specs}
          {#each $product_description_store.specs_data.specs as spec}
            <div class="flex">
              <SpecsField
                bind:spec_name={spec.spec_name}
                bind:icon_name={spec.icon_name}
              />
              <button
                class="max-w-10 max-h-10 btn variant-outline-surface ml-2"
                on:click={() => remove_spec(spec)}>x</button
              >
            </div>
          {/each}
        {/if}
        <AddSpec bind:show={show_add_spec_modal} />
        <button
          class="btn variant-filled-primary w-full"
          on:click={() => (show_add_spec_modal = true)}>Add Spec</button
        >
      {:else}
        <textarea
          bind:value={$product_description_store.specs_data.specs_text}
          class="textarea h-[15em] resize-none"
          placeholder="description"
        />
      {/if}
    </div>
    <textarea
      class="textarea h-[10em] my-2 resize-none"
      placeholder="description footer text"
      bind:value={$product_description_store.footer}
    ></textarea>
    <div class="h-[10em] text-left" bind:this={inner_ai_disclaimer_html}></div>
    <TextOutputView bind:show={show_output_modal} {output_text} />
    <AddIcon bind:show={show_add_new_icon_modal} />
    <Settings bind:show={show_settings_modal} />
  </div>
</div>

<style>
  .sidebar {
    max-height: calc(100vh - 38px);
  }
</style>
