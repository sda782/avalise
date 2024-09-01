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

export async function post_bug_report(bug_report: string, pin: number) {
    if (djb2Hash(pin.toString()) !== 2085776005) {
        return
    }
    const r = await fetch(api_url + "/bugs", {
        method: "POST",
        headers: {
            "apikey": anon_key,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            report: bug_report
        })
    }).then(r => console.log(r)).catch(e => console.log(e))
    return r
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

function djb2Hash(str: string) {
    let hash = 5381; // Initialize with a large prime number
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 33) ^ str.charCodeAt(i); // Multiply hash by 33 and XOR with current character
    }
    return hash >>> 0; // Convert to unsigned 32-bit integer
}