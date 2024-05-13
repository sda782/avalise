<script lang="ts">
  var barcode: string = "";
</script>

<div class="container w-10/12 h-full flex justify-center mx-auto">
  <div class="w-full text-center mt-10">
    <input class="input my-10" type="text" bind:value={barcode} />
    <h1 class="h1 libre-barcode">{barcode}</h1>
  </div>
</div>

<style>
  .libre-barcode {
    font-family: "Libre Barcode 128";
    font-size: 120px;
  }
</style>
