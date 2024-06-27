<script lang="ts">
  import { product_description_store } from "$lib/storage_manager";
  import Modal from "../../../misc/Modal.svelte";
  import AddIcon from "./AddIcon.svelte";
  import SpecsField from "./SpecsField.svelte";

  export var show: boolean;
  var spec_name: string;
  var icon_name: string;

  function confirm() {
    $product_description_store.specs = [
      ...$product_description_store.specs,
      {
        icon_name,
        spec_name,
      },
    ];
    spec_name = "";
    icon_name = "no_spec_icon";
  }
</script>

<Modal bind:show onConfirm={() => confirm()} confirm_text="Add Spec">
  <h2 class="h2 mb-2 text-left">Add Spec</h2>
  <SpecsField bind:icon_name bind:spec_name />
</Modal>
