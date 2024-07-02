<script lang="ts">
  import ImportCsv from "./ImportCSV.svelte";
  var files: FileList;
  function removeFileFromFileList(fileNameToRemove: string) {
    const filesArray: File[] = Array.from(files);
    const filteredFiles = filesArray.filter(
      (file) => file.name !== fileNameToRemove,
    );
    const dataTransfer = new DataTransfer();
    filteredFiles.forEach((file) => dataTransfer.items.add(file));
    files = dataTransfer.files;
  }
</script>

<ImportCsv bind:files />
<div class="mt-2">
  <h3 class="h3">View Files</h3>
  {#if files}
    <ul>
      {#each files as file}
        <li class="w-full flex border-b-2 border-surface-500">
          <span class="w-11/12 overflow-y-hidden">{file.name}</span>
          <button
            class="btn btn-sm variant-outline-warning w-1/12"
            on:click={() => removeFileFromFileList(file.name)}>x</button>
        </li>
      {/each}
    </ul>
  {/if}
</div>
