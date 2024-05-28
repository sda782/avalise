<script lang="ts">
  import { links, type search_history_item } from "$lib/compass";
  import { display_time_to_string } from "$lib/render";
  var ls = links;
  var form_search_word: string = "";
  var is_search: boolean = true;
  var search_history: Array<search_history_item> = [];
  function add_search(e: any): void {
    console.log(e);
    var t = e.target;
    if (!t) return;
    var i: search_history_item = {
      id: Date.now(),
      link: (t as HTMLAnchorElement).href,
      country_code: t.getAttribute("data-country-code"),
      time_stamp: display_time_to_string(Date.now()),
    };
    search_history.push(i);
    search_history = [...search_history];
  }

  function clear() {
    search_history = [];
  }
</script>

<svelte:head>
  <title>Compass</title>
</svelte:head>
<div class="container w-10/12 h-full flex justify-center mx-auto">
  <div class="w-full text-center mt-10">
    <div class="mb-5">
      <input
        class="input mb-5"
        type="text"
        placeholder="Search term..."
        bind:value={form_search_word} />
      <label class="flex items-center space-x-2">
        <input
          class="checkbox"
          type="checkbox"
          bind:checked={is_search}
          on:change={(e) => {
            ls = [...links];
          }} />
        <p>search</p>
      </label>
    </div>
    <div>
      {#each ls as link}
        <a
          class="btn bg-cover bg-center mx-1 mb-2 w-[5em] h-[2.5em]"
          style="background-image: url('https://flagcdn.com/{link.country_code}.svg');"
          target="_blank"
          data-country-code={link.country_code}
          href={"https://" +
            link.link +
            (form_search_word.length !== 0
              ? (is_search ? "/catalogsearch/result/?q=" : "/") +
                form_search_word
              : "")}
          on:click={add_search}><span></span></a>
      {/each}
    </div>
    <div>
      <button class="float-end btn variant-filled-surface" on:click={clear}
        >Clear</button>
      <table class="text-left w-full">
        <thead>
          <tr>
            <th>Search History</th>
          </tr>
        </thead>
        <tbody>
          {#if search_history.length > 0}
            {#each search_history as sh}
              <tr>
                <td
                  ><img
                    class="w-10 h-7"
                    src="https://flagcdn.com/{sh.country_code}.svg"
                    alt={sh.country_code} /></td>
                <td><a target="_blank" href={sh.link}>{sh.link}</a></td>
                <td>{sh.time_stamp}</td>
              </tr>
            {/each}
          {/if}
        </tbody>
      </table>
    </div>
  </div>
</div>
