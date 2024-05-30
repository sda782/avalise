<script lang="ts">
  export let country: string;
  function disable(e: any) {
    var t: HTMLElement = e.target;
    if (t) {
      t.classList.toggle("opacity-0");
    }
  }
</script>

<div
  class="btn bg-cover bg-center mx-1 mb-2 w-[5em] h-[2.5em]"
  style="background-image: url('https://flagcdn.com/{country}.svg');">
  <button
    class="relative z-10 min-w-[4.5em] h-[2em] bg-surface-900 block opacity-0"
    style="border-radius: 25px;"
    on:click={disable}>
  </button>
</div>
