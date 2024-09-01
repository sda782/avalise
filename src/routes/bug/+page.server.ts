import { post_bug_report } from "$lib/supabase_api"

/** @type {import('./$types').Actions} */
export const actions = {
    bug: async ({ request }) => {
        const data = await request.formData()
        if (data) {
            if (!data.get("pin")) return {
                error: "Pin is required"
            }
            const pin = parseInt(data.get("pin") as string)
            if (data.get("bug_report") == "") return {
                error: "Bug report is required"
            }
            const r = await post_bug_report(data.get("bug_report") as string, pin)
            if (r?.status == 201) {
                return {
                    success: true
                }
            }
            return {
                error: "Something went wrong"
            }
        }
    }
}