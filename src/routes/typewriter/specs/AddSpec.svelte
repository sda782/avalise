<script lang="ts">
  import Modal from "../../../misc/Modal.svelte";
  import SpecsField from "./SpecsField.svelte";

  export var show: boolean;
  export var add_spec: (nin: string, nsn: string) => void;
  var new_spec_name: string;
  var new_icon_name: string;
  function confirm() {
    add_spec(new_icon_name, new_spec_name);
    new_spec_name = "";
    new_icon_name = "no_spec_icon";
  }
</script>

<Modal bind:show onConfirm={() => confirm()} confirm_text="Add Spec">
  <SpecsField bind:icon_name={new_icon_name} bind:spec_name={new_spec_name} />
</Modal>
