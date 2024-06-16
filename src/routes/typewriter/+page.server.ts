import { get_icons, get_presets, post_icon } from "$lib/supabase_api"

export async function load() {
    const icons = await get_icons();
    const presets = await get_presets();
    return { icons, presets };
}

/** @type {import('./$types').Actions} */
export const actions = {
    addicon: async ({ request }) => {
        const data = await request.formData()
        if (data) {
            await post_icon(data.get("icon_name") as string)
        }
    }
}