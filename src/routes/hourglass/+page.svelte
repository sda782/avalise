<script lang="ts">
  import { onMount } from "svelte";
  import TimerContainer from "./TimerContainer.svelte";
  import type { TimerData } from "$lib/timer";
  import { storage_timers } from "../../lib/storage_manager";
  import { browser } from "$app/environment";

  var birdnames: Array<string> = [];

  function add_new_timer() {
    var timer: TimerData = {
      id: crypto.randomUUID(),
      currentTime: 0,
      name: getbird(),
      isRunning: false,
      timerIntervals: [],
      visible: true,
    };
    $storage_timers = [...$storage_timers, timer];
  }

  function clear_timers() {
    $storage_timers = [];
  }

  function getbird(): string {
    return birdnames[Math.floor(Math.random() * birdnames.length)];
  }
  function remove_timer(id: string): void {
    var remove_index = $storage_timers.findIndex((i) => i.id === id);
    $storage_timers.splice(remove_index, 1);
    $storage_timers = [...$storage_timers];
  }

  onMount(async () => {
    var res = await fetch("./names.txt");
    var text = await res.text();
    birdnames = [...text.split("\n")];

    if (browser) {
      $storage_timers = JSON.parse(window.localStorage.getItem("timers") || "");
      console.log($storage_timers);
    }
    if ($storage_timers.length <= 0) {
      add_new_timer();
    }
  });
</script>

<div class="container h-full mx-auto flex justify-center">
  <div class="w-full text-center mt-10">
    <button class="btn variant-filled-surface w-32" on:click={add_new_timer}
      >add</button>
    <button class="btn variant-filled-surface w-32" on:click={clear_timers}
      >clear</button>
    <div class="flex flex-row flex-wrap gap-5 mt-5 justify-center">
      {#each $storage_timers as timer}
        <TimerContainer {timer} delete_timer={remove_timer} />
      {/each}
    </div>
  </div>
</div>
