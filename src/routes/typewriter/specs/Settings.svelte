<script lang="ts">
  import Modal from "../../../misc/Modal.svelte";
  import { product_description_store } from "../../../lib/storage_manager";
  export var show: boolean;
</script>

<Modal bind:show>
  <div class="w-full text-left">
    <h2 class="h2 mb-2 text-left">Settings</h2>
    <div class="flex flex-row flex-wrap gap-5">
      <label class="border-dotted border-surface-500 border-4 p-2">
        <input
          class="checkbox"
          type="checkbox"
          bind:checked={$product_description_store.export_setting.style}
        />
        <span>Style</span>
      </label>
      <label class="border-dotted border-surface-500 border-4 p-2">
        <input
          class="checkbox"
          type="checkbox"
          bind:checked={$product_description_store.export_setting
            .product_header}
        />
        <span>Product header</span>
      </label>
      <label class="border-dotted border-surface-500 border-4 p-2">
        <input
          class="checkbox"
          type="checkbox"
          bind:checked={$product_description_store.export_setting.product_body}
        />
        <span>Product body</span>
      </label>
      <label class="border-dotted border-surface-500 border-4 p-2">
        <input
          class="checkbox"
          type="checkbox"
          bind:checked={$product_description_store.export_setting.specs_header}
        />
        <span>Specs Header</span>
      </label>
      <label class="border-dotted border-surface-500 border-4 p-2">
        <input
          class="checkbox"
          type="checkbox"
          bind:checked={$product_description_store.export_setting.specs_body}
        />
        <span>Specs Body</span>
      </label>
      <label class="border-dotted border-surface-500 border-4 p-2">
        <input
          class="checkbox"
          type="checkbox"
          bind:checked={$product_description_store.export_setting.footer}
        />
        <span>Footer</span>
      </label>
      <label class="border-dotted border-surface-500 border-4 p-2">
        <input
          class="checkbox"
          type="checkbox"
          bind:checked={$product_description_store.export_setting.ai_disclaimer}
        />
        <span>AI Disclaimer</span>
      </label>
    </div>
  </div>
</Modal>

<style>
  .flex > label {
    flex-grow: 1;
    min-width: 49%;
    max-width: 49%;
    cursor: pointer;
  }
</style>
