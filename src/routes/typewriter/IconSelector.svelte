<script lang="ts">
  import { enhance } from "$app/forms";
  import Modal from "../../misc/Modal.svelte";
  import ViewIcons from "./ViewIcons.svelte";

  export var selected_icon: string;
  export var show: boolean;
  var icon_name: string;
  var base_spec_url = "https://www.usaskateshop.com/media/wysiwyg/icons/";
  function select(i_name: string) {
    icon_name = i_name;
  }
  function set_icon() {
    selected_icon = icon_name;
    show = false;
  }
</script>

<Modal bind:show confirm_text="Add" onConfirm={set_icon}>
  <h2 class="h2 text-left w-fit float-start">Select icon</h2>
  <div class=" w-2/12 float-right mt-16">
    <img
      class="invert w-[200px]"
      src={base_spec_url + (icon_name ?? selected_icon) + ".png"}
      alt="selected_icon"
    />
    <h3 class="h3">{selected_icon}</h3>
  </div>
  <ViewIcons {select} />
  <form
    method="post"
    action="typewriter?/addicon"
    class="w-1/2 flex"
    use:enhance
  >
    <input
      class="input me-2"
      type="text"
      name="icon_name"
      placeholder="icon name"
      required
    />
    <button class="btn variant-filled-primary" type="submit">Add</button>
  </form>
</Modal>
