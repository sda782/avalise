<script lang="ts">
  import hljs from "highlight.js/lib/core";
  import xml from "highlight.js/lib/languages/xml";
  import { onMount } from "svelte";
  import "highlight.js/styles/github-dark.css";

  let card_input: number, card_output: number;
  let textarea_value: any;
  let textarea_render: HTMLElement;
  let output_view: HTMLDivElement;
  let text_input: any;

  onMount(() => {
    card_output = card_input;
    hljs.registerLanguage("xml", xml);
    text_input.addEventListener("scroll", () => {
      console.log("sdfsd");
      textarea_render.scrollTop = text_input.scrollTop;
      textarea_render.scrollLeft = text_input.scrollLeft;
    });
  });
  function update_code() {
    if (textarea_render) {
      let content = textarea_value;
      if (content) {
        content = content.replace(/&/g, "&amp");
        content = content.replace(/</g, "&lt;");
        content = content.replace(/>/g, "&gt;");

        textarea_render.innerHTML = content;
        hljs.highlightElement(textarea_render);
        textarea_render.dataset.highlighted = "";
      }
    }
  }
</script>

<div class="w-full">
  <div class="w-full h-[88vh] max-h-[88vh] text-center px-5 mt-10">
    <div class="w-full max-w-full h-full inline-grid grid-cols-2">
      <div
        class="card w-full text-left code-wrapper"
        bind:clientHeight={card_input}
        on:change={(e) => {
          card_output = card_input;
        }}>
        <pre class="absolute w-full h-full w-max-[500px]"><code
            class="xml scrollbar-hide"
            bind:this={textarea_render}></code></pre>
        <textarea
          spellcheck="false"
          class="absolute border-transparent focus:border-transparent focus:ring-0 scrollbar-hide"
          bind:value={textarea_value}
          bind:this={text_input}
          on:input={() => {
            if (output_view) output_view.innerHTML = textarea_value;
            if (textarea_render) {
              textarea_render.innerHTML = textarea_value;
              update_code();
            }
          }} />
      </div>
      <div class="card w-full text-left p-5" bind:clientHeight={card_output}>
        <div bind:this={output_view}></div>
      </div>
    </div>
  </div>
</div>

<style>
  textarea {
    font-family: "Courier New", Courier, monospace;
    font-weight: 400;
    font-size: 12pt;
    line-height: 150%;
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100% - 30px);
    width: calc(100% - 30px);
    padding: 15px;
    z-index: 2;
    overflow-x: auto;
    overflow-y: scroll;
    background-color: rgba(0, 0, 0, 0);
    color: rgba(0, 0, 0, 0);
    caret-color: white;
    resize: none;
  }
  pre {
    height: 100%;
    width: 100%;
    position: absolute;
    overflow-x: auto;
    overflow-y: scroll;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    background: transparent;
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word;
  }
  code {
    font-family: "Courier New", Courier, monospace;
    padding: 15px;
    height: calc(100% - 30px);
    width: calc(100% - 30px);
    font-weight: 400;
    font-size: 12pt;
    line-height: 150%;
    overflow-y: scroll;
    overflow-x: auto;
    background-color: transparent;
  }
  .code-wrapper {
    background: #1b1b1b;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* For IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
