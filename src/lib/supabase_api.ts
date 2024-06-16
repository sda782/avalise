const api_url = "https://uwsxrqazwmqdynzhovqf.supabase.co/rest/v1"
const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3c3hycWF6d21xZHluemhvdnFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MzYyOTQsImV4cCI6MjAzMTIxMjI5NH0.nmJxwHjCuwniqK3SlrYn6A1cHo270E2ipXnyVrEwKvA"

export async function get_icons() {
    const res = await fetch(api_url + "/icons", {
        headers: {
            "apikey": anon_key
        }
    })

    return res.json()
}

export async function post_icon(icon_name: string) {
    const r = await fetch(api_url + "/icons", {
        method: "POST",
        headers: {
            "apikey": anon_key,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            icon_name: icon_name
        })
    })
    return r
}

export async function get_presets() {
    const res = await fetch(api_url + "/description_preset", {
        headers: {
            "apikey": anon_key
        }
    })

    return res.json()
}