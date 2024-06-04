import { writable } from "svelte/store";
import type { TimerData } from "./timer";
import { browser } from "$app/environment";
import { type description, type spec_field } from "./typewriter";

export const product_description = writable<description | null>()
export const specs_list_store = writable<Array<spec_field>>([])
export const storage_timers = writable<Array<TimerData>>([])

storage_timers.subscribe((st: Array<TimerData>) => {
    if (browser && st.length > 0) {
        window.localStorage.setItem('timers', JSON.stringify(st))
    }
})