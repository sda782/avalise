<script lang="ts">
  export var files: FileList;
</script>

<div class="input-group input-group-divider grid-cols-[1fr_auto]">
  <input class="input" type="file" multiple bind:files />
  <button class="variant-filled-primary">Submit</button>
</div>
