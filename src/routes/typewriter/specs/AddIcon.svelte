<script lang="ts">
  import { enhance } from "$app/forms";
  import Modal from "../../../misc/Modal.svelte";
  import ViewIcons from "./ViewIcons.svelte";
  export var show: boolean;
</script>

<Modal bind:show confirm_text="Add">
  <h2 class="h2 text-left w-fit float-start">Add icon</h2>
  <form
    method="post"
    action="typewriter?/addicon"
    class="w-1/2 flex float-end"
    use:enhance>
    <input
      class="input me-2"
      type="text"
      name="icon_name"
      placeholder="icon name"
      required />
    <button class="btn variant-filled-primary" type="submit">Add</button>
  </form>
  <ViewIcons selectable={false} />
</Modal>
