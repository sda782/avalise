import { post_bug_report } from "$lib/supabase_api"

/** @type {import('./$types').Actions} */
export const actions = {
    bug: async ({ request }) => {
        const data = await request.formData()
        if (data) {
            if (!data.get("pin")) return
            const pin = parseInt(data.get("pin") as string)
            await post_bug_report(data.get("bug_report") as string, pin)
        }
    }
}