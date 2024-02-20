import { writable } from "svelte/store";
import type { TimerData } from "./timer";


export const storage_timers = writable<Array<TimerData>>([])