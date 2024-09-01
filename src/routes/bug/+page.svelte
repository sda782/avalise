<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<svelte:head>
  <title>Bug</title>
</svelte:head>
<div class="container w-10/12 h-full flex justify-center mx-auto">
  <div class="w-full text-center mt-10">
    <h2 class="h2 mb-4">Submit bug report</h2>
    <form
      method="post"
      action="?/bug"
      on:submit={() => {
        return false;
      }}
      use:enhance
    >
      <textarea name="bug_report" class="textarea mb-2 h-48"></textarea>
      <input
        type="number"
        maxlength="4"
        minlength="4"
        name="pin"
        pattern="\d{4}"
        required
        class="input mb-2 w-1/4"
      /><br />
      <input
        type="submit"
        class="btn variant-filled-primary w-1/4"
        value="Submit"
      />
    </form>
  </div>
</div>
