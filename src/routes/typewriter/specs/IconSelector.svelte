<script lang="ts">
  import Modal from "../../../misc/Modal.svelte";
  import ViewIcons from "./ViewIcons.svelte";

  export var selected_icon: string;
  export var show: boolean;
  function select(i_name: string) {
    selected_icon = i_name;
    show = false;
  }
</script>

<Modal bind:show confirm_text="Add">
  <h2 class="h2 text-left w-fit float-start">Select icon</h2>
  <ViewIcons {select} />
</Modal>
