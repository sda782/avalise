<script lang="ts">
  import Modal from "../../misc/Modal.svelte";
  export var show: boolean;
  export var output_text: string;
  var span: HTMLSpanElement;
  function confirm() {
    navigator.clipboard.writeText(span.innerText);
  }
</script>

<Modal bind:show onConfirm={confirm} confirm_text="Copy">
  <h2 class="h2 mb-2 text-left">Output</h2>
  <div class="text-left mx-5">
    <span bind:this={span}>{output_text}</span>
  </div>
</Modal>
