import { get_icons } from "$lib/supabase_api"

export async function load() {
    const r = await get_icons();
    return { icons: r };
}
