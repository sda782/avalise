export type site_link = {
    country_code: string,
    link: string,
    full_link: string
}

export type search_history_item = {
    id: number,
    link: string,
    country_code: string | null
}

export const _links: Array<site_link> = [
    {
        country_code: "dk",
        link: "avalise.vercel.app",
        full_link: ""
    }
]
export const links: Array<site_link> = [
    {
        country_code: "cz",
        link: "euroskateshop.cz",
        full_link: ""
    }, {
        country_code: "at",
        link: "euroskateshop.at",
        full_link: ""
    }, {
        country_code: "de",
        link: "euroskateshop.de",
        full_link: ""
    }, {
        country_code: "ch",
        link: "euroskateshop.ch",
        full_link: ""
    }, {
        country_code: "pt",
        link: "euroskateshop.pt",
        full_link: ""
    }, {
        country_code: "es",
        link: "euroskateshop.es",
        full_link: ""

    }, {
        country_code: "fi",
        link: "euroskateshop.fi",
        full_link: ""

    }, {
        country_code: "pl",
        link: "euroskateshop.pl",
        full_link: ""
    }, {
        country_code: "it",
        link: "euroskateshop.it",
        full_link: ""
    }, {
        country_code: "gb",
        link: "euroskateshop.uk", full_link: ""
    }, {
        country_code: "be",
        link: "euroskateshop.be", full_link: ""
    }, {
        country_code: "nl",
        link: "euroskateshop.nl", full_link: ""
    }, {
        country_code: "fr",
        link: "euroskateshop.fr", full_link: ""
    }, {
        country_code: "se",
        link: "euroskateshop.se", full_link: ""
    }, {
        country_code: "dk",
        link: "kitedanmark.dk", full_link: ""
    }, {
        country_code: "no",
        link: "kitenorge.no", full_link: ""
    }, {
        country_code: "us",
        link: "usaskateshop.com", full_link: ""
    }
];
