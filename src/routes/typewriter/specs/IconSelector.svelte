<script lang="ts">
  import { page } from "$app/stores";
  import Modal from "../../../misc/Modal.svelte";
  export var show: boolean;
  export var selected_icon: string;
  var base_spec_url = "https://www.usaskateshop.com/media/wysiwyg/icons/";
  function select(i_name: string) {
    selected_icon = i_name;
    show = false;
  }
</script>

<Modal bind:show confirm_text="Add">
  <h2 class="h2 mb-2">Select icon</h2>
  <div class="w-full flex">
    {#each $page.data.icons as icon}
      <button
        class="w-fit"
        on:click={() => {
          select(icon.icon_name);
        }}>
        <img
          src={base_spec_url + icon.icon_name + ".png"}
          alt={icon.icon_name}
          class="invert" />
        <p>{icon.icon_name}</p>
      </button>
    {/each}
  </div>
</Modal>
