<script lang="ts">
  import IconSelector from "./IconSelector.svelte";

  var base_spec_url = "https://www.usaskateshop.com/media/wysiwyg/icons/";
  export let spec_name: string;
  export let icon_name: string = "no_spec_icon";
  var show_icon_selector: boolean;
</script>

<div class="w-full text-left">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <img
    class="h-[35px] max-w-[35px] inline mr-2 invert"
    src={base_spec_url + icon_name + ".png"}
    alt={icon_name}
    on:click={() => (show_icon_selector = true)} /><input
    class="input mb-2 inline"
    bind:value={spec_name} />
</div>
<IconSelector bind:show={show_icon_selector} bind:selected_icon={icon_name}
></IconSelector>

<style>
  input {
    width: calc(100% - 35px - 0.5em);
  }
</style>
