<script lang="ts">
  import { onMount } from "svelte";

  let card_input: number, card_output: number;
  let textarea_value: any;
  let output_view: HTMLDivElement;

  onMount(() => {
    card_output = card_input;
  });
</script>

<div class="container h-full mx-auto flex justify-center">
  <div class="w-full text-center">
    <h1 class="h1 my-10">Typewriter</h1>
    <div class="w-full inline-grid grid-cols-2 gap-5 px-10">
      <div
        class="card"
        bind:clientHeight={card_input}
        on:change={(e) => {
          card_output = card_input;
        }}>
        <textarea
          class="w-full h-full bg-inherit"
          bind:value={textarea_value}
          on:input={() => {
            console.log(output_view);
            if (output_view) output_view.innerHTML = textarea_value;
          }} />
      </div>
      <div class="card text-left p-5" bind:clientHeight={card_output}>
        <div bind:this={output_view}></div>
      </div>
    </div>
  </div>
</div>
