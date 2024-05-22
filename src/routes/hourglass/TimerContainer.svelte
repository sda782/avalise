<script lang="ts">
  import { afterUpdate, onDestroy, onMount } from "svelte";
  import {
    calc_total_duration,
    type TimerData,
    type TimerInterval,
  } from "$lib/timer";
  import {
    get_display_time_from_unix_time,
    display_time_to_string,
  } from "$lib/render";
  import { storage_timers } from "../../lib/storage_manager";

  export var timer: TimerData;
  export var delete_timer: (id: string) => void;

  var display_time: string = "00:00:00";
  var display_total_time: string = "00:00:00";
  var is_editing_name: boolean = false;
  var currentInterval: TimerInterval;

  function update_timer() {
    timer.currentTime = Date.now();
    display_time = get_display_time_from_unix_time(
      timer.currentTime - currentInterval.startTime,
    );
  }

  function start_timer() {
    var ti: TimerInterval = {
      startTime: Date.now(),
      stopTime: 0,
    };
    timer.timerIntervals.push(ti);
    currentInterval = ti;
    timer.isRunning = true;
    interval = setInterval(update_timer, 1000);
    $storage_timers = [...$storage_timers];
  }

  function stop_timer() {
    timer.timerIntervals[timer.timerIntervals.length - 1].stopTime = Date.now();
    timer.isRunning = false;
    $storage_timers = [...$storage_timers];
    update_total_time();
    display_time = "00:00:00";
  }

  function toggle_name_edit() {
    is_editing_name = !is_editing_name;
  }

  function update_total_time(): void {
    display_total_time = get_display_time_from_unix_time(
      calc_total_duration(timer.timerIntervals),
    );
  }

  onMount(() => {
    if (timer.isRunning) {
      currentInterval = timer.timerIntervals[timer.timerIntervals.length - 1];
    }
    update_total_time();
  });

  afterUpdate(() => {
    update_total_time();
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  let interval = setInterval(update_timer, 1000);
  $: if (!timer.isRunning) clearInterval(interval);
</script>

<div class="card px-4 w-80 pt-5 h-full">
  <!--    TIMERS DISPLAY    -->

  <h2 class="h2">
    {display_time}
  </h2>
  <h4 class="h5 m-2">
    {display_total_time}
  </h4>
  <!--    NAME LABEL    -->
  <div
    class="mb-5"
    on:dblclick={(e) => {
      e.preventDefault();
      if (!is_editing_name) toggle_name_edit();
    }}
    role="button"
    tabindex="0">
    {#if is_editing_name}
      <input
        class="input text-center"
        bind:value={timer.name}
        on:keypress={(event) => {
          if (event.key === "Enter") {
            toggle_name_edit();
          }
        }} />
    {:else}
      <p>{timer.name}</p>
    {/if}
  </div>
  <table class="w-full">
    <tbody>
      <tr>
        <th>start</th>
        <th>end</th>
        <th>time</th>
      </tr>
      {#each timer.timerIntervals as time_int}
        <tr>
          <td>
            {display_time_to_string(time_int.startTime)}
          </td>
          <td>
            {#if time_int.stopTime}
              {display_time_to_string(time_int.stopTime)}
            {/if}
          </td>
          <td>
            {#if time_int.stopTime}
              {get_display_time_from_unix_time(
                time_int.stopTime - time_int.startTime,
              )}
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <!--    BUTTONS    -->
  <div class="card-footer bottom-0 mt-2 flex gap-2">
    {#if !timer.isRunning}
      <button
        class="btn btn-sm variant-filled-primary flex-1"
        on:click={start_timer}><p>start</p></button>
    {:else}
      <button
        class="btn btn-sm variant-filled-error flex-1"
        on:click={stop_timer}><p>stop</p></button>
    {/if}
    <button
      class="btn btn-sm variant-outline-primary flex-1"
      on:click={() => delete_timer(timer.id)}><p>remove</p></button>
  </div>
</div>
