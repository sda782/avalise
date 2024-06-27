<script lang="ts">
  import Modal from "../../../misc/Modal.svelte";
  import { product_description_store } from "../../../lib/storage_manager";
  export var show: boolean;
</script>

<Modal bind:show>
  <div class="w-full text-left">
    <label>
      <input
        class="checkbox"
        type="checkbox"
        bind:checked={$product_description_store.export_setting
          .product_header} />
      <span>Product header</span>
    </label>
    <label>
      <input
        class="checkbox"
        type="checkbox"
        bind:checked={$product_description_store.export_setting.product_body} />
      <span>Product body</span>
    </label>
    <label>
      <input
        class="checkbox"
        type="checkbox"
        bind:checked={$product_description_store.export_setting.specs_header} />
      <span>Specs Header</span>
    </label>
    <label>
      <input
        class="checkbox"
        type="checkbox"
        bind:checked={$product_description_store.export_setting.specs_body} />
      <span>Specs Body</span>
    </label>
    <label>
      <input
        class="checkbox"
        type="checkbox"
        bind:checked={$product_description_store.export_setting.footer} />
      <span>Footer</span>
    </label>
    <label>
      <input
        class="checkbox"
        type="checkbox"
        bind:checked={$product_description_store.export_setting
          .ai_disclaimer} />
      <span>AI Disclaimer</span>
    </label>
  </div>
</Modal>
