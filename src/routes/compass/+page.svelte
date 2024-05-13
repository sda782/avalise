<script lang="ts">
  import { links, type search_history_item } from "$lib/compass";
  var ls = links;
  var form_search_word: string = "";
  var is_url: boolean = false;
  var search_history: Array<search_history_item> = [];
  function add_search(e: any): void {
    console.log(e);
    var t = e.target;
    if (!t) return;
    var p = (t as HTMLElement).parentElement;
    if (!p) return;
    var i: search_history_item = {
      id: Date.now(),
      link: (p as HTMLAnchorElement).href,
      country_code: p.getAttribute("data-country-code"),
    };
    search_history.push(i);
    search_history = [...search_history];
  }

  function clear() {
    search_history = [];
  }
</script>

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
          bind:checked={is_url}
          on:change={(e) => {
            ls = [...links];
          }} />
        <p>category</p>
      </label>
    </div>
    <div>
      {#each ls as link}
        <a
          class="btn variant-filled-surface"
          target="_blank"
          data-country-code={link.country_code}
          href={"https://" +
            link.link +
            (form_search_word.length !== 0
              ? (is_url ? "/" : "/catalogsearch/result/?q=") + form_search_word
              : "")}
          on:click={add_search}
          ><img
            class="w-10 h-7"
            src="https://flagcdn.com/{link.country_code}.svg"
            alt={link.country_code} /></a>
      {/each}
    </div>
    <div>
      <button class="float-end btn variant-outline-secondary" on:click={clear}
        >Clear</button>
      <table class="text-left">
        <thead>
          <tr>
            <th>Search</th>
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
              </tr>
            {/each}
          {/if}
        </tbody>
      </table>
    </div>
  </div>
</div>
