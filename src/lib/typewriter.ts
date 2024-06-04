export type spec_field = {
    spec_name: string,
    icon_name: string
}

export type description = {
    product_title: string,
    product_description: string,
    spec_title: string
    specs: Array<spec_field>
    footer: string
}