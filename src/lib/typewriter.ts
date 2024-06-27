import { get } from "svelte/store"
import { product_description_store } from "./storage_manager"

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
    ai_robot: string | null,
    export_setting: export_settings
}

export type icon_data = {
    id: number,
    icon_name: string
}

export type preset_data = {
    id: number,
    country_code: string,
    product_title: string,
    spec_title: string,
    ai_robot: string | null
}

export type export_settings = {
    product_header: boolean,
    product_body: boolean,
    specs_header: boolean,
    specs_body: boolean,
    footer: boolean,
    ai_disclaimer: boolean
}

export function matchAll(regex: RegExp, text: string): string[] {
    const matches: string[] = [];
    let match;
    while ((match = regex.exec(text))) {
        matches.push(match[0]);
    }
    return matches;
}

export function format_icon_name(icon_name: string): string {
    return icon_name.replace("icon", "").replaceAll("-", " ")
}

export function generate_output_html(): string {
    const d = get(product_description_store);
    if (!d) return "";

    const formattedSpecsList = d.specs.map(spec =>
        `<div class="feature-badge">
            <img width="20" height="20" src="{{media url='/wysiwyg/icons/${spec.icon_name}.png'}}">${spec.spec_name}
        </div>\n`
    ).join('');

    const styles = d.export_setting.specs_body ? `
        <style>
            .feature-badge {
                margin: 4px auto 4px 0;
                padding: 8px 40px 8px 8px;
                background: #eee5;
                border-radius: 100px;
            }
            .feature-badge > img {
                margin-right: 4px;
                color: #888;
                vertical-align: middle;
            }
        </style>` : '';

    const productHeader = d.export_setting.product_header ? `<p><b>${d.product_title}:</b></p>` : '';
    const productBody = d.export_setting.product_body ? d.product_description : '';
    const productSection = (d.export_setting.product_header || d.export_setting.product_body) ?
        `<div class="col-md-6">${productHeader}${productBody}</div>` : '';

    const specsHeader = d.export_setting.specs_header ? `<p><b>${d.spec_title}:</b></p>` : '';
    const specsBody = d.export_setting.specs_body ? formattedSpecsList : '';
    const specsSection = (d.export_setting.specs_header || d.export_setting.specs_body) ?
        `<div class="col-md-3">${specsHeader}${specsBody}</div>` : '';

    const footer = d.export_setting.footer && d.footer ? d.footer : '';
    const aiDisclaimer = d.export_setting.ai_disclaimer && d.ai_robot ? d.ai_robot : '';

    return `${styles}
    <div class="row"> 
        ${productSection}
        ${specsSection}
    </div>
    ${footer}
    ${aiDisclaimer}`;
}