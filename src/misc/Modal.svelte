<script lang="ts">
  export var show: boolean;
  export var onConfirm: () => void;
  export var confirm_text: string = "Confirm";
</script>

{#if show}
  <div class="backdrop-blur-md fixed top-0 left-0 bottom-0 right-0 text-center">
    <div class="w-8/12 mx-auto my-20 bg-surface-900 rounded-3xl p-5">
      <slot />
      <div class="flex mt-2">
        <button
          class="btn variant-filled-primary mr-1 grow"
          on:click={() => {
            onConfirm();
            show = false;
          }}>{confirm_text}</button>
        <button
          class="btn variant-filled-primary ml-1 grow"
          on:click={() => (show = false)}>Cancel</button>
      </div>
    </div>
  </div>
{/if}
