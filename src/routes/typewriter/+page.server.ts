import { get_icons, post_icon } from "$lib/supabase_api"

export async function load() {
    const r = await get_icons();
    return { icons: r };
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