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