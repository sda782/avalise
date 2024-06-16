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
    ai_robot: string
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

export function genereate_output_html(): string {
    let formatted_specs_list = "";
    const d = get(product_description_store)
    if (!d) return ""
    d.specs.forEach((spec) => {
        formatted_specs_list += `<div class="feature-badge">
          <img width="20" height="20" src="{{media url='/wysiwyg/icons/${spec.icon_name}.png'}}">${spec.spec_name}</div>\n`;
    });
    const output_text = `<style>
      .feature-badge {
          margin: 4px auto 4px 0;
          padding: 8px 40px 8px 8px;
          background: #eee5;
          border-radius: 100px;
      }
      .feature-badge > img{
          margin-right:4px; 
          color:#888;
          vertical-align:middle;
      }
  </style>
  <div class="row">
      <div class="col-md-6"><p><b>${d.product_title}:</b></p>
          ${d.product_description}
      </div>
      <div class="col-md-3"><p><b>${d.spec_title}:</b></p>
          ${formatted_specs_list}
      </div>
  </div>${d.footer || ""}`;
    return output_text
}

export const presets = {
    "dk": {
        product_title: "Produkt information:",
        spec_title: "Egenskaber",
        ai_robot: ""
    }
}