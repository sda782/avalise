<script lang="ts">
  import { enhance } from "$app/forms";
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
  <h2 class="h2 text-left w-fit float-start">Select icon</h2>
  <form
    method="post"
    action="typewriter?/addicon"
    class="w-1/2 flex float-end"
    use:enhance>
    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
      <div class="input-group-shim">
        <img
          src="/menu_icons/typewriter.png"
          alt="compass"
          class="invert w-[16px]" />
      </div>
      <input type="text" name="icon_name" placeholder="icon name" required />
      <button class="variant-filled-primary" type="submit">Add</button>
    </div>
  </form>
  <div class="w-full flex flex-wrap justify-items-start mt-16 mb-8">
    {#each $page.data.icons as icon}
      <button
        on:click={() => {
          select(icon.icon_name);
        }}>
        <img
          src={base_spec_url + icon.icon_name + ".png"}
          alt={icon.icon_name}
          class="invert" />
      </button>
    {/each}
  </div>
</Modal>
