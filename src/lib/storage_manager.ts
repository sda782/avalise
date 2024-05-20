import { writable } from "svelte/store";
import type { TimerData } from "./timer";
import { browser } from "$app/environment";


export const storage_timers = writable<Array<TimerData>>([])

storage_timers.subscribe((st: Array<TimerData>) => {
    if (browser && st.length > 0) {
        window.localStorage.setItem('timers', JSON.stringify(st))
    }
})