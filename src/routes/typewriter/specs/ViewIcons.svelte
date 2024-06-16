<script lang="ts">
  import { page } from "$app/stores";
  import { format_icon_name } from "$lib/typewriter";

  export var select = (name: string) => {};
  export var selectable: boolean = true;
  var base_spec_url = "https://www.usaskateshop.com/media/wysiwyg/icons/";
</script>

<div class="w-full flex flex-wrap justify-items-start text-nowrap mt-16 mb-8">
  {#each $page.data.icons as icon}
    <button
      on:click={() => {
        select(icon.icon_name);
      }}
      disabled={!selectable}>
      <div class="w-[100px] p-2 overflow-clip text-clip">
        <img
          src={base_spec_url + icon.icon_name + ".png"}
          alt={icon.icon_name}
          class="invert m-auto" />
        <p>{format_icon_name(icon.icon_name)}</p>
      </div>
    </button>
  {/each}
</div>
