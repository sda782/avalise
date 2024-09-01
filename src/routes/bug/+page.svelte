<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";
  export let form: ActionData;
</script>

<svelte:head>
  <title>Bug</title>
</svelte:head>
<div class="container w-10/12 h-full flex justify-center mx-auto">
  <div class="w-full text-center mt-10">
    <h2 class="h2 mb-4">Submit bug report</h2>
    {#if form?.success}
      <p>Successfully created bug report</p>
    {:else}
      {#if form?.error}
        <p>{form?.error}</p>
      {/if}
      <form
        method="post"
        action="?/bug"
        on:submit={() => {
          return false;
        }}
        use:enhance
      >
        <textarea name="bug_report" class="textarea mb-2 h-48" required
        ></textarea>
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
    {/if}
  </div>
</div>
