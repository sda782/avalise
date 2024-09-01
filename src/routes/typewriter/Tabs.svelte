<script>
  import { product_description_store } from "$lib/storage_manager";
</script>

<button
  class="btn {$product_description_store.specs_data.builder
    ? 'variant-filled-primary'
    : 'variant-filled-surface'}"
  on:click={() => ($product_description_store.specs_data.builder = true)}
  >Builder</button
>
<button
  class="btn {$product_description_store.specs_data.builder
    ? 'variant-filled-surface'
    : 'variant-filled-primary'}"
  on:click={() => ($product_description_store.specs_data.builder = false)}
  >Specs</button
>

<style>
  button {
    width: 49.85%;
  }
</style>
