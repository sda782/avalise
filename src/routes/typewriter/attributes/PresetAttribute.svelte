<script lang="ts">
  import { specs_list_store } from "../../../lib/storage_manager";
  import type { spec_field } from "$lib/typewriter";

  var product_information: string;
  var description: string;

  function genereate_output_html() {
    var output_html = "";
    alert(output_html);
  }

  function remove_spec(spec: spec_field) {
    const index = $specs_list_store.indexOf(spec, 0);
    if (index > -1) {
      $specs_list_store.splice(index, 1);
    }
    $specs_list_store = [...$specs_list_store];
  }

  function clear_all() {
    product_information = "";
    description = "";
  }
</script>

<button
  class="btn variant-filled-primary mb-2 mr-2 float-start"
  on:click={genereate_output_html}>Generate HTML Code</button
><button class="btn variant-filled-surface mb-2 float-end" on:click={clear_all}
  >Clear All</button>
<input
  bind:value={product_information}
  class="input mb-2"
  placeholder="id" /><br />
<input
  bind:value={product_information}
  class="input mb-2"
  placeholder="product information" /><br />
<textarea
  bind:value={description}
  class="textarea h-[15em] mb-2 resize-none"
  placeholder="description" />
