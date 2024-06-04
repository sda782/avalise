<script lang="ts">
  var base_spec_url = "https://www.usaskateshop.com/media/wysiwyg/icons/";
  export let spec_name: string;
  export let icon_name: string = "no_spec_icon";
  function open_input() {
    let res = prompt("Spec name", icon_name);
    if (res) icon_name = res;
  }
</script>

<div class="w-full">
  <img
    class="h-[35px] max-w-[35px] inline mr-2 invert"
    src={base_spec_url + icon_name + ".png"}
    alt={icon_name}
    on:dblclick={open_input} /><input
    class="input mb-2 inline"
    bind:value={spec_name} />
</div>

<style>
  input {
    width: calc(100% - 35px - 0.5em);
  }
</style>
