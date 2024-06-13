import { writable } from "svelte/store";
import type { TimerData } from "./timer";
import { browser } from "$app/environment";
import { type description, type icon_data } from "./typewriter";

export const product_description_store = writable<description>({
    product_title: "",
    product_description: "",
    spec_title: "",
    specs: [],
    footer: "",
})
export const storage_timers = writable<Array<TimerData>>([])
export const storage_specs_icons = writable<Array<icon_data>>()

storage_timers.subscribe((st: Array<TimerData>) => {
    if (browser && st.length > 0) {
        window.localStorage.setItem('timers', JSON.stringify(st))
    }
})