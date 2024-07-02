<script lang="ts">
  import OutputCsv from "./OutputCSV.svelte";
  import PreviewCSV from "./PreviewCSV.svelte";
  import rbql from "rbql";
  console.log(rbql);
</script>

<svelte:head>
  <title>Arithmometer</title>
</svelte:head>
<div class="container h-full flex justify-center mx-auto pt-10">
  <div class="w-4/12 text-left pr-2">
    <div class="w-full h-[50%]">
      <PreviewCSV />
    </div>
    <div class="w-full h-[50%]">
      <PreviewCSV />
    </div>
  </div>
  <div class="w-8/12 pl-2"><OutputCsv /></div>
</div>
