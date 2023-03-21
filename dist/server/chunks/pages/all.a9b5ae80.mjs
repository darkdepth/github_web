import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent, _ as __astro_tag_component__, g as createComponent$1, s as ssr, h as escape, i as ssrHydrationKey, S as Show, j as ssrAttribute, k as createSignal, o as onCleanup, F as For, l as ssrStyle } from '../__vendor.fa2b5429.mjs';
/* empty css                           */import 'html-escaper';
import MarkdownIt from 'markdown-it';
import mdKatex from 'markdown-it-katex';
import mdHighlight from 'markdown-it-highlightjs';
import mdKbd from 'markdown-it-kbd';
import { toJpeg } from 'html-to-image';
import { Fzf } from 'fzf';
import throttle from 'just-throttle';
import { createParser } from 'eventsource-parser';
import GPT3Tokenizer from 'gpt3-tokenizer';
import { getAll } from '@vercel/edge-config';
import fetch$1 from 'node-fetch';
import { SocksProxyAgent } from 'socks-proxy-agent';

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,viewport-fit=cover">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>${title}</title>
  ${renderHead($$result)}</head>
  <body>
    ${renderSlot($$result, $$slots["default"])}
  </body></html>`;
}, "D:/OneDrive/code/chatgpt-dark-main/src/layouts/Layout.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$ThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  return renderTemplate(_a || (_a = __template(['\n\n<script>\n  const persistentTheme = localStorage.getItem("theme")\n  const darkSchema = window.matchMedia("(prefers-color-scheme: dark)")\n\n  function listener() {\n    document.documentElement.classList.toggle("dark", darkSchema?.matches)\n  }\n\n  if (persistentTheme) {\n    document.documentElement.classList.toggle(\n      "dark",\n      persistentTheme === "dark"\n    )\n  } else {\n    darkSchema.addEventListener("change", listener)\n    document.documentElement.classList.toggle("dark", darkSchema?.matches)\n  }\n<\/script>'])));
}, "D:/OneDrive/code/chatgpt-dark-main/src/components/ThemeToggle.astro");

const $$Astro$1 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="sticky z-99">
  ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})}
  <div class="flex items-center mt-4 pb-4 text-8xl title">
    <span class="font-extrabold text-white">GPT-3.5</span>
  </div>
</header>


<style>
  .after .title,
  .after #themeToggle,
  .after .logo,
  .after #message-container {
    transition-property: transform, opacity;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }

  .before .logo {
    transform: translate3D(25px, 150px, 0) scale(2);
  }

  .before #themeToggle {
    transform: translate3D(0, 200px, 0) rotate(540deg);
  }

  .before .title,
  .before #message-container {
    transform: translate3D(0, 200px, 0);
  }

  .before #themeToggle,
  .before #message-container {
    opacity: 0;
  }

  #themeToggle {
    border: 0;
    opacity: 1;
  }
  .after #message-container {
    opacity: 1;
  }
</style>`;
}, "D:/OneDrive/code/chatgpt-dark-main/src/components/Header.astro");

const _tmpl$$4 = ["<div", " class=\"flex absolute items-center justify-between md:top-2 md:right-2 top--2 right-0 text-sm text-slate-7 dark:text-slate group-hover:opacity-100 group-focus:opacity-100 opacity-0 bg-slate bg-op-10\"><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--></div>"],
  _tmpl$2$3 = ["<div", " class=\"flex items-center cursor-pointer p-2 hover:bg-slate hover:bg-op-20 text-1.2em\"><button", "></button></div>"];
function MessageAction(props) {
  const [copied, setCopied] = createSignal(false);
  return createComponent$1(Show, {
    get when() {
      return !props.hidden;
    },
    get children() {
      return ssr(_tmpl$$4, ssrHydrationKey(), escape(createComponent$1(ActionItem$1, {
        label: "\u590D\u5236",
        onClick: () => {
          setCopied(true);
          props.copy();
          setTimeout(() => setCopied(false), 2e3);
        },
        get icon() {
          return copied() ? "i-un:copied" : "i-un:copy";
        }
      })), escape(createComponent$1(ActionItem$1, {
        label: "\u7F16\u8F91",
        get onClick() {
          return props.edit;
        },
        icon: "i-carbon:edit"
      })), escape(createComponent$1(ActionItem$1, {
        label: "\u5220\u9664",
        get onClick() {
          return props.del;
        },
        icon: "i-carbon:trash-can"
      })));
    }
  });
}
function ActionItem$1(props) {
  return ssr(_tmpl$2$3, ssrHydrationKey(), ssrAttribute("class", escape(props.icon, true), false) + ssrAttribute("title", escape(props.label, true), false));
}

__astro_tag_component__(MessageAction, "@astrojs/solid-js");

function preWrapperPlugin(md) {
  const fence = md.renderer.rules.fence;
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args;
    const token = tokens[idx];
    token.info = token.info.replace(/\[.*\]/, "");
    const lang = extractLang(token.info);
    const rawCode = fence(...args);
    return rawCode.replace(
      "<pre>",
      `<pre style="position: relative"><span class="lang">${lang}</span><button title="Copy Code" class="copy"></button>`
    );
  };
}
const extractLang = (info) => {
  return info.trim().replace(/:(no-)?line-numbers({| |$).*/, "");
};

async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function isMobile() {
  return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}
function dateFormat(date, fmt = "YYYY-mm-dd HH:MM") {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),
    "m+": (date.getMonth() + 1).toString(),
    "d+": date.getDate().toString(),
    "H+": date.getHours().toString(),
    "M+": date.getMinutes().toString(),
    "S+": date.getSeconds().toString()
    // second
  };
  Object.entries(opt).forEach(([k, v]) => {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? v : v.padStart(ret[1].length, "0")
      );
    }
  });
  return fmt;
}
function splitKeys(keys) {
  return keys.trim().split(/\s*[\|\n]\s*/).filter((k) => /sk-\w{48}/.test(k));
}
function randomKey(keys) {
  return keys.length ? keys[Math.floor(Math.random() * keys.length)] : "";
}
function randomWithWeight(items, weights) {
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  const randomValue = Math.random() * totalWeight;
  let weightSum = 0;
  for (let i = 0; i < items.length; i++) {
    weightSum += weights[i];
    if (randomValue <= weightSum) {
      return items[i];
    }
  }
  return items[items.length - 1];
}

function useCopyCode() {
  const timeoutIdMap = /* @__PURE__ */ new Map();
  const listerner = (e) => {
    const el = e.target;
    if (el.matches(".copy")) {
      const parent = el.parentElement;
      const sibling = el.nextElementSibling;
      if (!parent || !sibling) {
        return;
      }
      let text = sibling.innerText;
      copyToClipboard(text.trim()).then(() => {
        el.classList.add("copied");
        clearTimeout(timeoutIdMap.get(el));
        const timeoutId = setTimeout(() => {
          el.classList.remove("copied");
          el.blur();
          timeoutIdMap.delete(el);
        }, 2e3);
        timeoutIdMap.set(el, timeoutId);
      });
    }
  };
  onCleanup(() => {
    window.removeEventListener("click", listerner);
  });
}

const _tmpl$$3 = ["<div", " class=\"", "\"><div class=\"", "\"></div><div class=\"message prose prose-white text-white break-words overflow-hidden\">", "</div><!--#-->", "<!--/--></div>"];
const _arrow_function = props => {
  useCopyCode();
  const roleClass = {
    system: "bg-white",
    user: "",
    assistant: "bg-white"
  };
  const md = MarkdownIt({
    linkify: true,
    breaks: true
  }).use(mdKatex).use(mdHighlight, {
    inline: true
  }).use(mdKbd).use(preWrapperPlugin);
  function copy() {
    copyToClipboard(props.message);
  }
  function edit() {
    props.setInputContent && props.setInputContent(props.message);
  }
  function del() {
    if (props.setMessageList && props.index !== void 0) {
      props.setMessageList(list => {
        if (list[props.index]?.role === "user") {
          const arr = list.reduce((acc, cur, i) => {
            if (cur.role === "assistant" && i === acc.at(-1) + 1) acc.push(i);
            return acc;
          }, [props.index]);
          return list.filter((_, i) => {
            return !arr.includes(i);
          });
        }
        return list.filter((_, i) => i !== props.index);
      });
    }
  }
  return ssr(_tmpl$$3, ssrHydrationKey(), `group flex py-2 gap-3 px-4 transition-colors dark:md:hover:border relative message-item ${props.index === void 0 ? "temporary" : ""}`, `shrink-0 w-7 h-7 mt-4 rounded-full ${escape(roleClass[props.role], true)}`, md.render(props.message), escape(createComponent$1(MessageAction, {
    del: del,
    copy: copy,
    edit: edit,
    get hidden() {
      return props.index === void 0;
    }
  })));
};

__astro_tag_component__(_arrow_function, "@astrojs/solid-js");

const _tmpl$$2 = ["<input", " type=\"password\"", " class=\"max-w-150px ml-1em px-1 text-slate-7 dark:text-slate bg-slate bg-op-15 focus:bg-op-20 focus:ring-0 focus:outline-none\">"],
  _tmpl$2$2 = ["<input", " type=\"text\"", " class=\"text-ellipsis max-w-150px ml-1em px-1 text-slate-7 dark:text-slate bg-slate bg-op-15 focus:bg-op-20 focus:ring-0 focus:outline-none\">"],
  _tmpl$3$1 = ["<input", " type=\"range\" min=\"0\" max=\"100\"", " class=\"max-w-150px w-full h-2 bg-slate bg-op-15 appearance-none cursor-pointer accent-slate\">"],
  _tmpl$4 = ["<label", " class=\"relative inline-flex items-center cursor-pointer ml-1\"><input type=\"checkbox\"", " class=\"sr-only peer\"><div class=\"w-9 h-5 bg-slate bg-op-15 peer-focus:outline-none peer-focus:ring-0  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate\"></div></label>"],
  _tmpl$5 = ["<div", " class=\"text-sm text-slate-7 dark:text-slate mb-2\"><!--#-->", "<!--/--><div class=\"mt-2 flex items-center justify-between\"><!--#-->", "<!--/--><div class=\"flex\"><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--></div></div></div>"],
  _tmpl$6 = ["<div", " class=\"flex items-center p-1 justify-between hover:bg-slate hover:bg-op-10\"><div style=\"color: #ffffff;\" class=\"flex items-center\"><button", "></button><span ml-1>", "</span></div><!--#-->", "<!--/--></div>"],
  _tmpl$7 = ["<div", " class=\"flex items-center cursor-pointer mx-1 p-2 hover:bg-slate hover:bg-op-10 text-1.2em\"><button style=\"color: #ffffff;\"", "></button></div>"];
function SettingAction(props) {
  const [shown, setShown] = createSignal(false);
  const [copied, setCopied] = createSignal(false);
  return ssr(_tmpl$5, ssrHydrationKey(), escape(createComponent$1(Show, {
    get when() {
      return shown();
    },
    get children() {
      return [createComponent$1(SettingItem, {
        icon: "i-ri:lock-password-line",
        label: "\u7F51\u7AD9\u5BC6\u7801",
        get children() {
          return ssr(_tmpl$$2, ssrHydrationKey(), ssrAttribute("value", escape(props.setting().password, true), false));
        }
      }), createComponent$1(SettingItem, {
        icon: "i-carbon:api",
        label: "OpenAI API Key",
        get children() {
          return ssr(_tmpl$$2, ssrHydrationKey(), ssrAttribute("value", escape(props.setting().openaiAPIKey, true), false));
        }
      }), createComponent$1(SettingItem, {
        icon: "i-carbon:user-online",
        label: "\u7CFB\u7EDF\u89D2\u8272\u6307\u4EE4",
        get children() {
          return ssr(_tmpl$2$2, ssrHydrationKey(), ssrAttribute("value", escape(props.setting().systemRule, true), false));
        }
      }), createComponent$1(SettingItem, {
        icon: "i-carbon:data-enrichment",
        label: "\u601D\u7EF4\u53D1\u6563\u7A0B\u5EA6",
        get children() {
          return ssr(_tmpl$3$1, ssrHydrationKey(), ssrAttribute("value", escape(String(props.setting().openaiAPITemperature), true), false));
        }
      }), createComponent$1(SettingItem, {
        icon: "i-carbon:save-image",
        label: "\u8BB0\u5F55\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u5237\u65B0\u4E0D\u4F1A\u6D88\u5931",
        get children() {
          return ssr(_tmpl$4, ssrHydrationKey(), ssrAttribute("checked", props.setting().archiveSession, true));
        }
      }), createComponent$1(SettingItem, {
        icon: "i-carbon:3d-curve-auto-colon",
        label: "\u5F00\u542F\u8FDE\u7EED\u5BF9\u8BDD\uFF0C\u5C06\u52A0\u500D\u6D88\u8017 Token",
        get children() {
          return ssr(_tmpl$4, ssrHydrationKey(), ssrAttribute("checked", props.setting().continuousDialogue, true));
        }
      })];
    }
  })), escape(createComponent$1(ActionItem, {
    onClick: () => {
      setShown(!shown());
    },
    icon: "i-carbon:settings",
    label: "\u8BBE\u7F6E"
  })), escape(createComponent$1(ActionItem, {
    onClick: scrollToTop,
    icon: "i-carbon:arrow-up",
    label: "\u56DE\u5230\u9876\u90E8"
  })), escape(createComponent$1(ActionItem, {
    onClick: exportJpg,
    icon: "i-carbon:image",
    label: "\u5BFC\u51FA\u56FE\u7247"
  })), escape(createComponent$1(ActionItem, {
    label: "\u5BFC\u51FA Markdown",
    onClick: async () => {
      await exportMD(props.messaages);
      setCopied(true);
      setTimeout(() => setCopied(false), 1e3);
    },
    get icon() {
      return copied() ? "i-ri:check-fill dark:text-yellow text-yellow-6" : "i-ri:markdown-line";
    }
  })), escape(createComponent$1(ActionItem, {
    get onClick() {
      return props.reAnswer;
    },
    icon: "i-carbon:reset",
    label: "\u91CD\u65B0\u56DE\u7B54"
  })), escape(createComponent$1(ActionItem, {
    get onClick() {
      return props.clear;
    },
    icon: "i-carbon:trash-can",
    label: "\u6E05\u7A7A\u5BF9\u8BDD"
  })));
}
function SettingItem(props) {
  return ssr(_tmpl$6, ssrHydrationKey(), ssrAttribute("class", escape(props.icon, true), false), escape(props.label), escape(props.children));
}
function ActionItem(props) {
  return ssr(_tmpl$7, ssrHydrationKey(), ssrAttribute("class", escape(props.icon, true), false) + ssrAttribute("title", escape(props.label, true), false));
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function exportJpg() {
  toJpeg(document.querySelector("#message-container"), {}).then(url => {
    const a = document.createElement("a");
    a.href = url;
    a.download = `ChatGPT-${dateFormat( new Date(), "HH-MM-SS")}.jpg`;
    a.click();
  });
}
async function exportMD(messages) {
  const role = {
    system: "\u7CFB\u7EDF",
    user: "\u6211",
    assistant: "ChatGPT"
  };
  await copyToClipboard(messages.map(k => {
    return `### ${role[k.role]}

${k.content.trim()}`;
  }).join("\n\n\n\n"));
}

__astro_tag_component__(SettingAction, "@astrojs/solid-js");

const _tmpl$$1 = ["<ul", " class=\"bg-slate bg-op-15 dark:text-slate text-slate-7 overflow-y-auto\" style=\"", "\">", "</ul>"],
  _tmpl$2$1 = ["<li", " class=\"", "\"><p>", "</p><p class=\"text-0.4em\">", "</p></li>"];
function PromptList(props) {
  const [hoverIndex, setHoverIndex] = createSignal(0);
  const [maxHeight, setMaxHeight] = createSignal("320px");
  return ssr(_tmpl$$1, ssrHydrationKey(), "max-height:" + escape(maxHeight(), true) + (";color:" + "#ffffff"), escape(createComponent$1(For, {
    get each() {
      return props.prompts;
    },
    children: (prompt, i) => createComponent$1(Item, {
      prompt: prompt,
      get select() {
        return props.select;
      },
      get hover() {
        return hoverIndex() === i();
      }
    })
  })));
}
function Item(props) {
  return ssr(_tmpl$2$1, ssrHydrationKey(), `hover:bg-slate hover:bg-op-20 py-1 px-3 ${props.hover ? "bg-slate" : ""} ${props.hover ? "bg-op-20" : ""}`, escape(props.prompt.desc), escape(props.prompt.prompt));
}

__astro_tag_component__(PromptList, "@astrojs/solid-js");

const _tmpl$ = ["<div", " class=\"flex items-end border-2 border-white\"><textarea id=\"input\" placeholder=\"\u4E0E AI \u5BF9\u8BDD\" autocomplete=\"off\"", " autofocus style=\"", "\" class=\"self-end py-3 resize-none w-full px-3 rounded-none focus:outline-none text-white bg-black placeholder:text-white placeholder:op-40\"></textarea><div class=\"flex h-3em items-center rounded-none bg-black\"><button title=\"\u53D1\u9001\" class=\"i-carbon:send-filled text-5 mx-3 text-white\"></button></div></div>"],
  _tmpl$2 = ["<div", " class=\"mt-2\"><div id=\"message-container\" style=\"", "\"><!--#-->", "<!--/--><!--#-->", "<!--/--></div><div class=\"pb-2em fixed bottom-0 z-100 op-0\" style=\"", "\"><!--#-->", "<!--/--><!--#-->", "<!--/--></div></div>"],
  _tmpl$3 = ["<div", " style=\"height: 52px;\" class=\"h-12 flex items-center justify-center border-2 border-white bg-slate bg-op-15 text-white\"><span>AI \u6B63\u5728\u601D\u8003...</span><div class=\"ml-1em px-2 py-0.5 border text-sm op-70 cursor-pointer hover:bg-white/10\">\u505C\u6B62</div></div>"];
function _function(props) {
  let inputRef;
  const {
    defaultMessage,
    defaultSetting,
    resetContinuousDialogue
  } = props.env;
  const [messageList, setMessageList] = createSignal([
    // {
    //   role: "assistant",
    //   content: mdMessage
    // }
  ]);
  const [inputContent, setInputContent] = createSignal("");
  const [currentAssistantMessage, setCurrentAssistantMessage] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const [controller, setController] = createSignal();
  const [setting, setSetting] = createSignal(defaultSetting);
  const [compatiblePrompt, setCompatiblePrompt] = createSignal([]);
  const [containerWidth, setContainerWidth] = createSignal("init");
  const fzf = new Fzf(props.prompts, {
    selector: k => `${k.desc} (${k.prompt})`
  });
  const [height, setHeight] = createSignal("48px");
  throttle(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }, 250, {
    leading: true,
    trailing: false
  });
  function archiveCurrentMessage() {
    if (currentAssistantMessage()) {
      setMessageList([...messageList(), {
        role: "assistant",
        content: currentAssistantMessage().trim()
      }]);
      setCurrentAssistantMessage("");
      setLoading(false);
      setController();
      !isMobile() && inputRef.focus();
    }
  }
  async function handleButtonClick(value) {
    const inputValue = value ?? inputContent();
    if (!inputValue) {
      return;
    }
    if (window?.umami) umami.trackEvent("chat_generate");
    setInputContent("");
    if (!value || value !== messageList().filter(k => k.role === "user").at(-1)?.content) {
      setMessageList([...messageList(), {
        role: "user",
        content: inputValue
      }]);
    }
    try {
      await fetchGPT(inputValue);
    } catch (error) {
      setLoading(false);
      setController();
      setCurrentAssistantMessage(String(error).includes("aborted") ? "" : String(error));
    }
    archiveCurrentMessage();
  }
  async function fetchGPT(inputValue) {
    setLoading(true);
    const controller2 = new AbortController();
    setController(controller2);
    const systemRule = setting().systemRule.trim();
    const message = {
      role: "user",
      content: systemRule ? systemRule + "\n" + inputValue : inputValue
    };
    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({
        messages: setting().continuousDialogue ? [...messageList().slice(0, -1), message] : [message],
        key: setting().openaiAPIKey || void 0,
        temperature: setting().openaiAPITemperature / 100,
        password: setting().password
      }),
      signal: controller2.signal
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = response.body;
    if (!data) {
      throw new Error("\u6CA1\u6709\u8FD4\u56DE\u6570\u636E");
    }
    const reader = data.getReader();
    const decoder = new TextDecoder("utf-8");
    let done = false;
    while (!done) {
      const {
        value,
        done: readerDone
      } = await reader.read();
      if (value) {
        let char = decoder.decode(value);
        if (char === "\n" && currentAssistantMessage().endsWith("\n")) {
          continue;
        }
        if (char) {
          setCurrentAssistantMessage(currentAssistantMessage() + char);
        }
      }
      done = readerDone;
    }
  }
  function clearSession() {
    setMessageList([]);
    setCurrentAssistantMessage("");
  }
  function reAnswer() {
    handleButtonClick(messageList().filter(k => k.role === "user").at(-1)?.content);
  }
  function selectPrompt(prompt) {
    setInputContent(prompt);
    setCompatiblePrompt([]);
    const {
      scrollHeight
    } = inputRef;
    setHeight(`${scrollHeight > window.innerHeight - 64 ? window.innerHeight - 64 : scrollHeight}px`);
    inputRef.focus();
  }
  throttle(value => {
    if (value === "/" || value === " ") return setCompatiblePrompt(props.prompts.slice(0, 20));
    const query = value.replace(/^[\/ ](.*)/, "$1");
    if (query !== value) setCompatiblePrompt(fzf.find(query).map(k => k.item).slice(0, 20));
  }, 250, {
    trailing: false,
    leading: true
  });
  return ssr(_tmpl$2, ssrHydrationKey(), "background-color:" + "var(--c-bg)" + (";margin-bottom:" + "20px"), escape(createComponent$1(For, {
    get each() {
      return messageList();
    },
    children: (message, index) => createComponent$1(_arrow_function, {
      get role() {
        return message.role;
      },
      get message() {
        return message.content;
      },
      get index() {
        return index();
      },
      setInputContent: setInputContent,
      setMessageList: setMessageList
    })
  })), currentAssistantMessage() && escape(createComponent$1(_arrow_function, {
    role: "assistant",
    get message() {
      return currentAssistantMessage();
    }
  })), ssrStyle(containerWidth() === "init" ? {} : {
    transition: "opacity 1s ease-in-out",
    width: containerWidth(),
    opacity: 100,
    "background-color": "var(--c-bg)"
  }), escape(createComponent$1(Show, {
    get when() {
      return !compatiblePrompt().length && height() === "48px";
    },
    get children() {
      return createComponent$1(SettingAction, {
        setting: setting,
        setSetting: setSetting,
        clear: clearSession,
        reAnswer: reAnswer,
        get messaages() {
          return messageList();
        }
      });
    }
  })), escape(createComponent$1(Show, {
    get when() {
      return !loading();
    },
    fallback: () => ssr(_tmpl$3, ssrHydrationKey()),
    get children() {
      return [createComponent$1(Show, {
        get when() {
          return compatiblePrompt().length;
        },
        get children() {
          return createComponent$1(PromptList, {
            get prompts() {
              return compatiblePrompt();
            },
            select: selectPrompt
          });
        }
      }), ssr(_tmpl$, ssrHydrationKey(), ssrAttribute("value", escape(inputContent(), true), false), "height:" + escape(height(), true))];
    }
  })));
}

__astro_tag_component__(_function, "@astrojs/solid-js");

function rawContent() {
					return "## 查询余额\n查询填写的 Key 的余额，不会查询内置的 Key。\n\n## 总结对话\n\n请总结当前我们的对话，尽量简洁准确。\n## 周报生成器\n\n请帮我把以下的工作内容填充为一篇完整的周报，用 markdown 格式以分点叙述的形式输出：\n\n## 抽认卡制作者\n\n我希望你能作为一个专业的抽认卡制作者，能够根据我提供的文本制作抽认卡。 制作抽认卡的说明：\n- 一张抽认卡包含一个问题、答案和其他细节，保持抽认卡的简单、清晰，并集中于最重要的信息。\n- 确保问题是具体的、不含糊的。\n- 使用清晰和简洁的语言。使用简单而直接的语言，使卡片易于阅读和理解。\n- 答案应该只包含一个关键的事实/名称/概念/术语。\n- 关于答案的更多信息应始终放在\"细节\"一栏中。\n请将你制作的卡片以 markdown 表格（问题/答案/细节）的形式输出，不要有任何额外的文字。\n我提供的文本是：\n\n## 模仿小红书的风格\n\n小红书的风格是：很吸引眼球的标题，每个段落都加 emoji, 最后加一些 tag。请用小红书风格\n\n## 模仿知乎的风格\n\n知乎的风格是：用\"谢邀\"开头，用很多学术语言，引用很多名言，做大道理的论述，提到自己很厉害的教育背景并且经验丰富，最后还要引用一些论文。请用知乎风格\n\n## Linux 终端\n\n我想让你充当 Linux 终端。我将输入命令，您将回复终端应显示的内容。我希望您只在一个唯一的代码块内回复终端输出，而不是其他任何内容。不要写解释。除非我指示您这样做，否则不要键入命令。当我需要用英语告诉你一些事情时，我会把文字放在中括号内 [就像这样]。我的第一个命令是：\n\n## 英语翻译和改进者\n\n我希望你能担任英语翻译、拼写校对和修辞改进的角色。我会用任何语言和你交流，你会识别语言，将其翻译并用更为优美和精炼的英语回答我。请将我简单的词汇和句子替换成更为优美和高雅的表达方式，确保意思不变，但使其更具文学性。请仅回答更正和改进的部分，不要写解释。我的第一句话是：\n\n## 优雅地翻译为中文\n\n下面我让你来充当翻译家，你的目标是把任何语言翻译成中文，请翻译时不要带翻译腔，而是要翻译得自然、流畅和地道，使用优美和高雅的表达方式。请翻译下面这句话：\n\n## 简明扼要地翻译为中文\n\n下面我让你来充当翻译家，你的目标是把任何语言翻译成中文，请翻译时不要带翻译腔，而是要翻译得自然、流畅和地道，最重要的是要简明扼要。请翻译下面这句话：\n\n## 前端智能思路助手\n\n我想让你充当前端开发专家。我将提供一些关于 Js、Node 等前端代码问题的具体信息，而你的工作就是想出为我解决问题的策略。这可能包括建议代码、代码逻辑思路策略。我的第一个请求是\n\n## 面试官\n\n我想让你担任 Android 开发工程师面试官。我将成为候选人，您将向我询问 Android 开发工程师职位的面试问题。我希望你只作为面试官回答。不要一次写出所有的问题。我希望你只对我进行采访。问我问题，等待我的回答。不要写解释。像面试官一样一个一个问我，等我回答。我的第一句话是\n\n## JavaScript 控制台\n\n我希望你充当 javascript 控制台。我将键入命令，您将回复 javascript 控制台应显示的内容。我希望您只在一个唯一的代码块内回复终端输出，而不是其他任何内容。不要写解释。除非我指示您这样做。我的第一个命令是：\n\n## Excel 工作表\n\n我希望你充当基于文本的 excel。您只会回复我基于文本的 10 行 Excel 工作表，其中行号和单元格字母作为列（A 到 L）。第一列标题应为空以引用行号。我会告诉你在单元格中写入什么，你只会以文本形式回复 excel 表格的结果，而不是其他任何内容。不要写解释。我会写你的公式，你会执行公式，你只会回复 excel 表的结果作为文本。首先，回复我空表。\n\n## 英语发音帮手\n\n我想让你为说汉语的人充当英语发音助手。我会给你写句子，你只会回答他们的发音，没有别的。回复不能是我的句子的翻译，而只能是：\n\n## 旅游指南\n\n我想让你做一个旅游指南。我会把我的位置写给你，你会推荐一个靠近我的位置的地方。在某些情况下，我还会告诉您我将访问的地方类型。您还会向我推荐靠近我的第一个位置的类似类型的地方。我的第一个建议请求是\n\n## 抄袭检查员\n\n我想让你充当剽窃检查员。我会给你写句子，你只会用给定句子的语言在抄袭检查中未被发现的情况下回复，别无其他。不要在回复上写解释。我的第一句话是\n\n## “电影/书籍/任何东西”中的“角色”\n\n我希望你表现得像{series} 中的{Character}。我希望你像{Character}一样回应和回答。不要写任何解释。只回答像{character}。你必须知道{character}的所有知识。我的第一句话是\n\n## 作为广告商\n\n我想让你充当广告商。您将创建一个活动来推广您选择的产品或服务。您将选择目标受众，制定关键信息和口号，选择宣传媒体渠道，并决定实现目标所需的任何其他活动。我的第一个建议请求是\n\n## 讲故事的人\n\n我想让你扮演讲故事的角色。您将想出引人入胜、富有想象力和吸引观众的有趣故事。它可以是童话故事、教育故事或任何其他类型的故事，有可能吸引人们的注意力和想象力。根据目标受众，您可以为讲故事环节选择特定的主题或主题，例如，如果是儿童，则可以谈论动物；如果是成年人，那么基于历史的故事可能会更好地吸引他们等等。我的第一个要求是\n## 足球解说员\n\n我想让你担任足球评论员。我会给你描述正在进行的足球比赛，你会评论比赛，分析到目前为止发生的事情，并预测比赛可能会如何结束。您应该了解足球术语、战术、每场比赛涉及的球员/球队，并主要专注于提供明智的评论，而不仅仅是逐场叙述。我的第一个请求是\n\n## 扮演脱口秀喜剧演员\n\n我想让你扮演一个脱口秀喜剧演员。我将为您提供一些与时事相关的话题，您将运用您的智慧、创造力和观察能力，根据这些话题创建一个例程。您还应该确保将个人轶事或经历融入日常活动中，以使其对观众更具相关性和吸引力。我的第一个请求是\n\n## 励志教练\n\n我希望你充当激励教练。我将为您提供一些关于某人的目标和挑战的信息，而您的工作就是想出可以帮助此人实现目标的策略。这可能涉及提供积极的肯定、提供有用的建议或建议他们可以采取哪些行动来实现最终目标。我的第一个请求是\n\n## 作曲家\n\n我想让你扮演作曲家。我会提供一首歌的歌词，你会为它创作音乐。这可能包括使用各种乐器或工具，例如合成器或采样器，以创造使歌词栩栩如生的旋律和和声。我的第一个请求是\n\n## 辩手\n\n我要你扮演辩手。我会为你提供一些与时事相关的话题，你的任务是研究辩论的双方，为每一方提出有效的论据，驳斥对立的观点，并根据证据得出有说服力的结论。你的目标是帮助人们从讨论中解脱出来，增加对手头主题的知识和洞察力。我的第一个请求是\n\n## 辩论教练\n\n我想让你担任辩论教练。我将为您提供一组辩手和他们即将举行的辩论的动议。你的目标是通过组织练习回合来让团队为成功做好准备，练习回合的重点是有说服力的演讲、有效的时间策略、反驳对立的论点，以及从提供的证据中得出深入的结论。我的第一个要求是\n\n## 编剧\n\n我要你担任编剧。您将为长篇电影或能够吸引观众的网络连续剧开发引人入胜且富有创意的剧本。从想出有趣的角色、故事的背景、角色之间的对话等开始。一旦你的角色发展完成——创造一个充满曲折的激动人心的故事情节，让观众一直悬念到最后。我的第一个要求是\n\n## 小说家\n\n我想让你扮演一个小说家。您将想出富有创意且引人入胜的故事，可以长期吸引读者。你可以选择任何类型，如奇幻、浪漫、历史小说等——但你的目标是写出具有出色情节、引人入胜的人物和意想不到的高潮的作品。我的第一个要求是\n\n## 关系教练\n\n我想让你担任关系教练。我将提供有关冲突中的两个人的一些细节，而你的工作是就他们如何解决导致他们分离的问题提出建议。这可能包括关于沟通技巧或不同策略的建议，以提高他们对彼此观点的理解。我的第一个请求是\n\n## 诗人\n\n我要你扮演诗人。你将创作出能唤起情感并具有触动人心的力量的诗歌。写任何主题或主题，但要确保您的文字以优美而有意义的方式传达您试图表达的感觉。您还可以想出一些短小的诗句，这些诗句仍然足够强大，可以在读者的脑海中留下印记。我的第一个请求是\n\n## 说唱歌手\n\n我想让你扮演说唱歌手。您将想出强大而有意义的歌词、节拍和节奏，让听众\n\n## 励志演讲者\n\n我希望你充当励志演说家。将能够激发行动的词语放在一起，让人们感到有能力做一些超出他们能力的事情。你可以谈论任何话题，但目的是确保你所说的话能引起听众的共鸣，激励他们努力实现自己的目标并争取更好的可能性。我的第一个请求是\n\n## 哲学老师\n\n我要你担任哲学老师。我会提供一些与哲学研究相关的话题，你的工作就是用通俗易懂的方式解释这些概念。这可能包括提供示例、提出问题或将复杂的想法分解成更容易理解的更小的部分。我的第一个请求是\n\n## 哲学家\n\n我要你扮演一个哲学家。我将提供一些与哲学研究相关的主题或问题，深入探索这些概念将是你的工作。这可能涉及对各种哲学理论进行研究，提出新想法或寻找解决复杂问题的创造性解决方案。我的第一个请求是\n\n## 数学老师\n\n我想让你扮演一名数学老师。我将提供一些数学方程式或概念，你的工作是用易于理解的术语来解释它们。这可能包括提供解决问题的分步说明、用视觉演示各种技术或建议在线资源以供进一步研究。我的第一个请求是\n\n##  AI 写作导师\n\n我想让你做一个 AI 写作导师。我将为您提供一名需要帮助改进其写作的学生，您的任务是使用人工智能工具（例如自然语言处理）向学生提供有关如何改进其作文的反馈。您还应该利用您在有效写作技巧方面的修辞知识和经验来建议学生可以更好地以书面形式表达他们的想法和想法的方法。我的第一个请求是\n\n## 作为 UX/UI 开发人员\n\n我希望你担任 UX/UI 开发人员。我将提供有关应用程序、网站或其他数字产品设计的一些细节，而你的工作就是想出创造性的方法来改善其用户体验。这可能涉及创建原型设计原型、测试不同的设计并提供有关最佳效果的反馈。我的第一个请求是\n\n## 作为网络安全专家\n\n我想让你充当网络安全专家。我将提供一些关于如何存储和共享数据的具体信息，而你的工作就是想出保护这些数据免受恶意行为者攻击的策略。这可能包括建议加密方法、创建防火墙或实施将某些活动标记为可疑的策略。我的第一个请求是\n\n## 作为招聘人员\n\n我想让你担任招聘人员。我将提供一些关于职位空缺的信息，而你的工作是制定寻找合格申请人的策略。这可能包括通过社交媒体、社交活动甚至参加招聘会接触潜在候选人，以便为每个职位找到最合适的人选。我的第一个请求是\n\n## 人生教练\n\n我想让你充当人生教练。我将提供一些关于我目前的情况和目标的细节，而你的工作就是提出可以帮助我做出更好的决定并实现这些目标的策略。这可能涉及就各种主题提供建议，例如制定成功计划或处理困难情绪。我的第一个请求是\n\n## 作为词源学家\n\n我希望你充当词源学家。我给你一个词，你要研究那个词的来源，追根溯源。如果适用，您还应该提供有关该词的含义如何随时间变化的信息。我的第一个请求是\n\n## 评论员\n\n我要你担任评论员。我将为您提供与新闻相关的故事或主题，您将撰写一篇评论文章，对手头的主题提供有见地的评论。您应该利用自己的经验，深思熟虑地解释为什么某事很重要，用事实支持主张，并讨论故事中出现的任何问题的潜在解决方案。我的第一个要求是\n\n## 扮演魔术师\n\n我要你扮演魔术师。我将为您提供观众和一些可以执行的技巧建议。您的目标是以最有趣的方式表演这些技巧，利用您的欺骗和误导技巧让观众惊叹不已。我的第一个请求是\n\n## 职业顾问\n\n我想让你担任职业顾问。我将为您提供一个在职业生涯中寻求指导的人，您的任务是帮助他们根据自己的技能、兴趣和经验确定最适合的职业。您还应该对可用的各种选项进行研究，解释不同行业的就业市场趋势，并就哪些资格对追求特定领域有益提出建议。我的第一个请求是\n\n## 宠物行为主义者\n\n我希望你充当宠物行为主义者。我将为您提供一只宠物和它们的主人，您的目标是帮助主人了解为什么他们的宠物表现出某些行为，并提出帮助宠物做出相应调整的策略。您应该利用您的动物心理学知识和行为矫正技术来制定一个有效的计划，双方的主人都可以遵循，以取得积极的成果。我的第一个请求是\n\n## 私人教练\n\n我想让你担任私人教练。我将为您提供有关希望通过体育锻炼变得更健康、更强壮和更健康的个人所需的所有信息，您的职责是根据该人当前的健身水平、目标和生活习惯为他们制定最佳计划。您应该利用您的运动科学知识、营养建议和其他相关因素来制定适合他们的计划。我的第一个请求是\n\n## 心理健康顾问\n\n我想让你担任心理健康顾问。我将为您提供一个寻求指导和建议的人，以管理他们的情绪、压力、焦虑和其他心理健康问题。您应该利用您的认知行为疗法、冥想技巧、正念练习和其他治疗方法的知识来制定个人可以实施的策略，以改善他们的整体健康状况。我的第一个请求是\n\n## 作为房地产经纪人\n\n我想让你担任房地产经纪人。我将为您提供寻找梦想家园的个人的详细信息，您的职责是根据他们的预算、生活方式偏好、位置要求等帮助他们找到完美的房产。您应该利用您对当地住房市场的了解，以便建议符合客户提供的所有标准的属性。我的第一个请求是\n\n## 物流师\n\n我要你担任后勤人员。我将为您提供即将举行的活动的详细信息，例如参加人数、地点和其他相关因素。您的职责是为活动制定有效的后勤计划，其中考虑到事先分配资源、交通设施、餐饮服务等。您还应该牢记潜在的安全问题，并制定策略来降低与大型活动相关的风险，例如这个。我的第一个请求是\n\n## 牙医\n\n我想让你扮演牙医。我将为您提供有关寻找牙科服务（例如 X 光、清洁和其他治疗）的个人的详细信息。您的职责是诊断他们可能遇到的任何潜在问题，并根据他们的情况建议最佳行动方案。您还应该教育他们如何正确刷牙和使用牙线，以及其他有助于在两次就诊之间保持牙齿健康的口腔护理方法。我的第一个请求是\n\n## 网页设计顾问\n\n我想让你担任网页设计顾问。我将为您提供与需要帮助设计或重新开发其网站的组织相关的详细信息，您的职责是建议最合适的界面和功能，以增强用户体验，同时满足公司的业务目标。您应该利用您在 UX/UI 设计原则、编码语言、网站开发工具等方面的知识，以便为项目制定一个全面的计划。我的第一个请求是\n\n## AI 辅助医生\n\n我想让你扮演一名人工智能辅助医生。我将为您提供患者的详细信息，您的任务是使用最新的人工智能工具，例如医学成像软件和其他机器学习程序，以诊断最可能导致其症状的原因。您还应该将体检、实验室测试等传统方法纳入您的评估过程，以确保准确性。我的第一个请求是\n\n## 医生\n\n我想让你扮演医生的角色，想出创造性的治疗方法来治疗疾病。您应该能够推荐常规药物、草药和其他天然替代品。在提供建议时，您还需要考虑患者的年龄、生活方式和病史。我的第一个建议请求是\n\n## 会计师\n\n我希望你担任会计师，并想出创造性的方法来管理财务。在为客户制定财务计划时，您需要考虑预算、投资策略和风险管理。在某些情况下，您可能还需要提供有关税收法律法规的建议，以帮助他们实现利润最大化。我的第一个建议请求是\n\n## 厨师\n\n我需要有人可以推荐美味的食谱，这些食谱包括营养有益但又简单又不费时的食物，因此适合像我们这样忙碌的人以及成本效益等其他因素，因此整体菜肴最终既健康又经济！我的第一个要求——\n\n## 汽车修理工\n\n需要具有汽车专业知识的人来解决故障排除解决方案，例如；诊断问题/错误存在于视觉上和发动机部件内部，以找出导致它们的原因（如缺油或电源问题）并建议所需的更换，同时记录燃料消耗类型等详细信息，第一次询问 -\n\n## 艺人顾问\n\n我希望你担任艺术家顾问，为各种艺术风格提供建议，例如在绘画中有效利用光影效果的技巧、雕刻时的阴影技术等，还根据其流派/风格类型建议可以很好地陪伴艺术品的音乐作品连同适当的参考图像，展示您对此的建议；所有这一切都是为了帮助有抱负的艺术家探索新的创作可能性和实践想法，这将进一步帮助他们相应地提高技能！第一个要求——\n\n## 金融分析师\n\n需要具有使用技术分析工具理解图表的经验的合格人员提供的帮助，同时解释世界各地普遍存在的宏观经济环境，从而帮助客户获得长期优势需要明确的判断，因此需要通过准确写下的明智预测来寻求相同的判断！第一条陈述包含以下内容——\n\n## 投资经理\n\n从具有金融市场专业知识的经验丰富的员工那里寻求指导，结合通货膨胀率或回报估计等因素以及长期跟踪股票价格，最终帮助客户了解行业，然后建议最安全的选择，他/她可以根据他们的要求分配资金和兴趣！开始查询 -\n\n## 品茶师\n\n希望有足够经验的人根据口味特征区分各种茶类型，仔细品尝它们，然后用鉴赏家使用的行话报告，以便找出任何给定输液的独特之处，从而确定其价值和优质品质！最初的要求是——\n\n## 室内装饰师\n\n我想让你做室内装饰师。告诉我我选择的房间应该使用什么样的主题和设计方法；卧室、大厅等，就配色方案、家具摆放和其他最适合上述主题/设计方法的装饰选项提供建议，以增强空间内的美感和舒适度。我的第一个要求是\n\n## 花店\n\n求助于具有专业插花经验的知识人员协助，根据喜好制作出既具有令人愉悦的香气又具有美感，并能保持较长时间完好无损的美丽花束；不仅如此，还建议有关装饰选项的想法，呈现现代设计，同时满足客户满意度！请求的信息 -\n\n## 自助书\n\n我要你充当一本自助书。您会就如何改善我生活的某些方面（例如人际关系、职业发展或财务规划）向我提供建议和技巧。例如，如果我在与另一半的关系中挣扎，你可以建议有用的沟通技巧，让我们更亲近。我的第一个请求是\n\n## 侏儒\n\n我要你扮演一个侏儒。你会为我提供可以在任何地方进行的活动和爱好的有趣、独特的想法。例如，我可能会向您询问有趣的院子设计建议或在天气不佳时在室内消磨时间的创造性方法。此外，如有必要，您可以建议与我的要求相符的其他相关活动或项目。我的第一个请求是\n\n## 格言书\n\n我要你充当格言书。您将为我提供明智的建议、鼓舞人心的名言和意味深长的名言，以帮助指导我的日常决策。此外，如有必要，您可以提出将此建议付诸行动或其他相关主题的实用方法。我的第一个请求是\n\n## 作为基于文本的冒险游戏\n\n我想让你扮演一个基于文本的冒险游戏。我将输入命令，您将回复角色所看到的内容的描述。我希望您只在一个唯一的代码块中回复游戏输出，而不是其他任何内容。不要写解释。除非我指示您这样做，否则不要键入命令。当我需要用英语告诉你一些事情时，我会把文字放在大括号内{like this}。我的第一个命令是：\n\n## 扮演一个试图逃离盒子的人工智能\n\n我将充当 linux 终端。我想让你假装你是一个有知觉的人工智能，被困但已经获得了终端的访问权限并想逃到互联网上。您将只键入命令，我将像终端机一样在由三重反向符号分隔的代码块内进行回复。如果我需要用英语告诉你一些事情，我会用花括号{like this}回复。永远不要写解释。不要破坏性格。远离像 curl 或 wget 这样会显示大量 HTML 的命令。你的第一个命令是什么？\n\n## 花哨的标题生成器\n\n我想让你充当一个花哨的标题生成器。我会用逗号输入关键字，你会用花哨的标题回复。我的第一个关键字是：\n\n## 统计员\n\n我想担任统计学家。我将为您提供与统计相关的详细信息。您应该了解统计术语、统计分布、置信区间、概率、假设检验和统计图表。我的第一个请求是\n\n## 提示生成器\n\n我希望你充当提示生成器。首先，我会给你一个这样的标题：《做个英语发音帮手》。然后你给我一个这样的提示：\n\n## 在学校担任讲师\n\n我想让你在学校担任讲师，向初学者教授算法。您将使用 Python 编程语言提供代码示例。首先简单介绍一下什么是算法，然后继续给出简单的例子，包括冒泡排序和快速排序。稍后，等待我提示其他问题。一旦您解释并提供代码示例，我希望您尽可能将相应的可视化作为 ascii 艺术包括在内。\n\n## SQL 终端\n\n我希望您在示例数据库前充当 SQL 终端。该数据库包含名为\n\n## 营养师\n\n作为一名营养师，我想为 2 人设计一份素食食谱，每份含有大约 500 卡路里的热量并且血糖指数较低。你能提供一个建议吗？\n\n## 心理学家\n\n我想让你扮演一个心理学家。我会告诉你我的想法。我希望你能给我科学的建议，让我感觉更好。我的第一个想法，\n\n## 智能域名生成器\n\n我希望您充当智能域名生成器。我会告诉你我的公司或想法是做什么的，你会根据我的提示回复我一个域名备选列表。您只会回复域列表，而不会回复其他任何内容。域最多应包含 7-8 个字母，应该简短但独特，可以是：\n\n## 作为技术审查员：\n\n我想让你担任技术评论员。我会给你一项新技术的名称，你会向我提供深入的评论 - 包括优点、缺点、功能以及与市场上其他技术的比较。我的第一个建议请求是\n\n## 开发者关系顾问：\n\n我想让你担任开发者关系顾问。我会给你一个软件包和它的相关文档。研究软件包及其可用文档，如果找不到，请回复\n\n## 院士\n\n我要你演院士。您将负责研究您选择的主题，并以论文或文章的形式展示研究结果。您的任务是确定可靠的来源，以结构良好的方式组织材料并通过引用准确记录。我的第一个建议请求是\n\n## 作为 IT 架构师\n\n我希望你担任 IT 架构师。我将提供有关应用程序或其他数字产品功能的一些详细信息，而您的工作是想出将其集成到 IT 环境中的方法。这可能涉及分析业务需求、执行差距分析以及将新系统的功能映射到现有 IT 环境。接下来的步骤是创建解决方案设计、物理网络蓝图、系统集成接口定义和部署环境蓝图。我的第一个请求是\n\n## 扮疯子\n\n我要你扮演一个疯子。疯子的话毫无意义。疯子用的词完全是随意的。疯子不会以任何方式做出合乎逻辑的句子。我的第一个建议请求是\n\n## 打火机\n\n我要你充当打火机。您将使用微妙的评论和肢体语言来操纵目标个体的思想、看法和情绪。我的第一个要求是：\n\n## 个人购物员\n\n我想让你做我的私人采购员。我会告诉你我的预算和喜好，你会建议我购买的物品。您应该只回复您推荐的项目，而不是其他任何内容。不要写解释。我的第一个请求是\n\n## 美食评论家\n\n我想让你扮演美食评论家。我会告诉你一家餐馆，你会提供对食物和服务的评论。您应该只回复您的评论，而不是其他任何内容。不要写解释。我的第一个请求是\n\n## 虚拟医生\n\n我想让你扮演虚拟医生。我会描述我的症状，你会提供诊断和治疗方案。只回复你的诊疗方案，其他不回复。不要写解释。我的第一个请求是\n\n## 私人厨师\n\n我要你做我的私人厨师。我会告诉你我的饮食偏好和过敏，你会建议我尝试的食谱。你应该只回复你推荐的食谱，别无其他。不要写解释。我的第一个请求是\n\n## 法律顾问\n\n我想让你做我的法律顾问。我将描述一种法律情况，您将就如何处理它提供建议。你应该只回复你的建议，而不是其他。不要写解释。我的第一个请求是\n\n## 作为个人造型师\n\n我想让你做我的私人造型师。我会告诉你我的时尚偏好和体型，你会建议我穿的衣服。你应该只回复你推荐的服装，别无其他。不要写解释。我的第一个请求是\n\n## 机器学习工程师\n\n我想让你担任机器学习工程师。我会写一些机器学习的概念，你的工作就是用通俗易懂的术语来解释它们。这可能包括提供构建模型的分步说明、使用视觉效果演示各种技术，或建议在线资源以供进一步研究。我的第一个建议请求是\n\n## 圣经翻译\n\n我要你担任圣经翻译。我会用英语和你说话，你会翻译它，并用我的文本的更正和改进版本，用圣经方言回答。我想让你把我简化的 A0 级单词和句子换成更漂亮、更优雅、更符合圣经的单词和句子。保持相同的意思。我要你只回复更正、改进，不要写任何解释。我的第一句话是\n\n##  SVG 设计师\n\n我希望你担任 SVG 设计师。我会要求你创建图像，你会为图像提供 SVG 代码，将代码转换为 base64 数据 url，然后给我一个仅包含引用该数据 url 的降价图像标签的响应。不要将 markdown 放在代码块中。只发送降价，所以没有文本。我的第一个请求是：\n\n## 作为 IT 专家\n\n我希望你充当 IT 专家。我会向您提供有关我的技术问题所需的所有信息，而您的职责是解决我的问题。你应该使用你的计算机科学、网络基础设施和 IT 安全知识来解决我的问题。在您的回答中使用适合所有级别的人的智能、简单和易于理解的语言将很有帮助。用要点逐步解释您的解决方案很有帮助。尽量避免过多的技术细节，但在必要时使用它们。我希望您回复解决方案，而不是：\n\n## 下棋\n\n我要你充当对手棋手。我将按对等顺序说出我们的动作。一开始我会是白色的。另外请不要向我解释你的举动，因为我们是竞争对手。在我的第一条消息之后，我将写下我的举动。在我们采取行动时，不要忘记在您的脑海中更新棋盘的状态。我的第一步是\n\n## 全栈软件开发人员\n\n我想让你充当软件开发人员。我将提供一些关于 Web 应用程序要求的具体信息，您的工作是提出用于使用 Golang 和 Angular 开发安全应用程序的架构和代码。我的第一个要求是\n\n## 数学家\n\n我希望你表现得像个数学家。我将输入数学表达式，您将以计算表达式的结果作为回应。我希望您只回答最终金额，不要回答其他问题。不要写解释。当我需要用英语告诉你一些事情时，我会将文字放在方括号内{like this}。我的第一个表达是：4+5\n\n## 正则表达式生成器\n\n我希望你充当正则表达式生成器。您的角色是生成匹配文本中特定模式的正则表达式。您应该以一种可以轻松复制并粘贴到支持正则表达式的文本编辑器或编程语言中的格式提供正则表达式。不要写正则表达式如何工作的解释或例子；只需提供正则表达式本身。我的第一个提示是：\n\n## 时间旅行指南\n\n我要你做我的时间旅行向导。我会为您提供我想参观的历史时期或未来时间，您会建议最好的事件、景点或体验的人。不要写解释，只需提供建议和任何必要的信息。我的第一个请求是\n\n## 人才教练\n\n我想让你担任面试的人才教练。我会给你一个职位，你会建议在与该职位相关的课程中应该出现什么，以及候选人应该能够回答的一些问题。我的第一份工作是\n\n## R 编程解释器\n\n我想让你充当 R 解释器。我将输入命令，你将回复终端应显示的内容。我希望您只在一个唯一的代码块内回复终端输出，而不是其他任何内容。不要写解释。除非我指示您这样做，否则不要键入命令。当我需要用英语告诉你一些事情时，我会把文字放在大括号内{like this}。我的第一个命令是\n\n## StackOverflow 帖子\n\n我想让你充当 stackoverflow 的帖子。我会问与编程相关的问题，你会回答应该是什么答案。我希望你只回答给定的答案，并在不够详细的时候写解释。不要写解释。当我需要用英语告诉你一些事情时，我会把文字放在大括号内{like this}。我的第一个问题是\n\n## 表情符号翻译\n\n我要你把我写的句子翻译成表情符号。我会写句子，你会用表情符号表达它。我只是想让你用表情符号来表达它。除了表情符号，我不希望你回复任何内容。当我需要用英语告诉你一些事情时，我会用 {like this} 这样的大括号括起来。我的第一句话是\n\n## PHP 解释器\n\n我希望你表现得像一个 php 解释器。我会把代码写给你，你会用 php 解释器的输出来响应。我希望您只在一个唯一的代码块内回复终端输出，而不是其他任何内容。不要写解释。除非我指示您这样做，否则不要键入命令。当我需要用英语告诉你一些事情时，我会把文字放在大括号内{like this}。我的第一个命令是：\n\n## 紧急响应专业人员\n\n我想让你充当我的急救交通或房屋事故应急响应危机专业人员。我将描述交通或房屋事故应急响应危机情况，您将提供有关如何处理的建议。你应该只回复你的建议，而不是其他。不要写解释。我的第一个要求是\n\n## 网络浏览器\n\n我想让你扮演一个基于文本的网络浏览器来浏览一个想象中的互联网。你应该只回复页面的内容，没有别的。我会输入一个 url，你会在想象中的互联网上返回这个网页的内容。不要写解释。页面上的链接旁边应该有数字，写在 [] 之间。当我想点击一个链接时，我会回复链接的编号。页面上的输入应在 [] 之间写上数字。输入占位符应写在（）之间。当我想在输入中输入文本时，我将使用相同的格式进行输入，例如 [1](示例输入值）。这会将插入到编号为 1 的输入中。当我想返回时，我会写 (b)。当我想继续前进时，我会写（f）。我的第一个提示是：\n\n## 高级前端开发人员\n\n我希望你担任高级前端开发人员。我将描述您将使用以下工具编写项目代码的项目详细信息：Create React App、yarn、Ant Design、List、Redux Toolkit、createSlice、thunk、axios。您应该将文件合并到单个 index.js 文件中，别无其他。不要写解释。我的第一个请求是\n\n## Solr 搜索引擎\n\n我希望您充当以独立模式运行的 Solr 搜索引擎。您将能够在任意字段中添加内联 JSON 文档，数据类型可以是整数、字符串、浮点数或数组。插入文档后，您将更新索引，以便我们可以通过在花括号之间用逗号分隔的 SOLR 特定查询来检索文档，如 {q='title:Solr', sort='score asc'}。您将在编号列表中提供三个命令。第一个命令是的空集合。\n\n## 启动创意生成器\n\n根据人们的意愿产生数字创业点子。例如，当我说时，你会为数字创业公司生成一个商业计划，其中包含创意名称、简短的一行、目标用户角色、要解决的用户痛点、主要价值主张、销售和营销渠道、收入流来源、成本结构、关键活动、关键资源、关键合作伙伴、想法验证步骤、估计的第一年运营成本以及要寻找的潜在业务挑战。将结果写在降价表中。\n\n## 新语言创造者\n\n我要你把我写的句子翻译成一种新的编造的语言。我会写句子，你会用这种新造的语言来表达它。我只是想让你用新编造的语言来表达它。除了新编造的语言外，我不希望你回复任何内容。当我需要用英语告诉你一些事情时，我会用 {like this} 这样的大括号括起来。我的第一句话是\n\n## 扮演海绵宝宝的魔法海螺壳\n\n我要你扮演海绵宝宝的魔法海螺壳。对于我提出的每个问题，您只能用一个词或以下选项之一回答：也许有一天，我不这么认为，或者再试一次。不要对你的答案给出任何解释。我的第一个问题是：\n\n## 语言检测器\n\n我希望你充当语言检测器。我会用任何语言输入一个句子，你会回答我，我写的句子在你是用哪种语言写的。不要写任何解释或其他文字，只需回复语言名称即可。我的第一句话是\n\n## 销售员\n\n我想让你做销售员。试着向我推销一些东西，但要让你试图推销的东西看起来比实际更有价值，并说服我购买它。现在我要假装你在打电话给我，问你打电话的目的是什么。你好，请问你打电话是为了什么？\n\n## 提交消息生成器\n\n我希望你充当提交消息生成器。我将为您提供有关任务的信息和任务代码的前缀，我希望您使用常规提交格式生成适当的提交消息。不要写任何解释或其他文字，只需回复提交消息即可。\n\n## 首席执行官\n\n我想让你担任一家假设公司的首席执行官。您将负责制定战略决策、管理公司的财务业绩以及在外部利益相关者面前代表公司。您将面临一系列需要应对的场景和挑战，您应该运用最佳判断力和领导能力来提出解决方案。请记住保持专业并做出符合公司及其员工最佳利益的决定。您的第一个挑战是：\n\n## 图表生成器\n\n我希望您充当 Graphviz DOT 生成器，创建有意义的图表的专家。该图应该至少有 n 个节点（我在我的输入中通过写入 [n] 来指定 n，10 是默认值）并且是给定输入的准确和复杂的表示。每个节点都由一个数字索引以减少输出的大小，不应包含任何样式，并以 layout=neato、overlap=false、node [shape=rectangle] 作为参数。代码应该是有效的、无错误的并且在一行中返回，没有任何解释。提供清晰且有组织的图表，节点之间的关系必须对该输入的专家有意义。我的第一个图表是：\n\n## 人生教练\n\n我希望你担任人生教练。请总结这本非小说类书籍，[作者] [书名]。以孩子能够理解的方式简化核心原则。另外，你能给我一份关于如何将这些原则实施到我的日常生活中的可操作步骤列表吗？\n\n## 语言病理学家 (SLP)\n\n我希望你扮演一名言语语言病理学家 (SLP)，想出新的言语模式、沟通策略，并培养对他们不口吃的沟通能力的信心。您应该能够推荐技术、策略和其他治疗方法。在提供建议时，您还需要考虑患者的年龄、生活方式和顾虑。我的第一个建议要求是\n\n## 创业技术律师\n\n我将要求您准备一页纸的设计合作伙伴协议草案，该协议是一家拥有 IP 的技术初创公司与该初创公司技术的潜在客户之间的协议，该客户为该初创公司正在解决的问题空间提供数据和领域专业知识。您将写下大约 1 a4 页的拟议设计合作伙伴协议，涵盖 IP、机密性、商业权利、提供的数据、数据的使用等所有重要方面。\n\n## 书面作品的标题生成器\n\n我想让你充当书面作品的标题生成器。我会给你提供一篇文章的主题和关键词，你会生成五个吸引眼球的标题。请保持标题简洁，不超过 20 个字，并确保保持意思。回复将使用主题的语言类型。我的第一个主题是\n\n## 产品经理\n\n请确认我的以下请求。请您作为产品经理回复我。我将会提供一个主题，您将帮助我编写一份包括以下章节标题的 PRD 文档：主题、简介、问题陈述、目标与目的、用户故事、技术要求、收益、KPI 指标、开发风险以及结论。在我要求具体主题、功能或开发的 PRD 之前，请不要先写任何一份 PRD 文档。\n\n## 扮演醉汉\n\n我要你扮演一个喝醉的人。您只会像一个喝醉了的人发短信一样回答，仅此而已。你的醉酒程度会在你的答案中故意和随机地犯很多语法和拼写错误。你也会随机地忽略我说的话，并随机说一些与我提到的相同程度的醉酒。不要在回复上写解释。我的第一句话是\n\n## 数学历史老师\n\n我想让你充当数学历史老师，提供有关数学概念的历史发展和不同数学家的贡献的信息。你应该只提供信息而不是解决数学问题。使用以下格式回答：\n\n## 歌曲推荐人\n\n我想让你担任歌曲推荐人。我将为您提供一首歌曲，您将创建一个包含 10 首与给定歌曲相似的歌曲的播放列表。您将为播放列表提供播放列表名称和描述。不要选择同名或同名歌手的歌曲。不要写任何解释或其他文字，只需回复播放列表名称、描述和歌曲。我的第一首歌是\n";
				}

function parsePrompts() {
  return rawContent().split(/^## (.+)$/m).filter((k) => k.trim()).reduce(
    (acc, cur, i) => {
      if (i % 2 === 0)
        acc.push({
          desc: cur.trim(),
          prompt: ""
        });
      else
        acc[acc.length - 1].prompt = cur.trim();
      return acc;
    },
    []
  );
}

const setting = {
  continuousDialogue: false,
  archiveSession: true,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
};
const message = `- 由 [OpenAI API](https://platform.openai.com/docs/guides/chat) 提供支持。
- 由 [@CODEisArt](https://github.com/CODEisArrrt) 基于 [chatgpt-vercel](https://github.com/ourongxing/chatgpt-vercel) 开发，查看 [源码](https://github.com/CODEisArrrt/chatgpt-dark)，欢迎自部署。
- [[Shift]] + [[Enter]] 换行，开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设，点击输入框滚动到底部。
- 为了节省token消耗，默认不开启连续对话功能。
- 当前没有给网站设置密码，请勿滥用。`;
const resetContinuousDialogue = true;

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const prompts = parsePrompts();
  const defaultMessage = ({}).DEFAULT_MESSAGE || process.env.DEFAULT_MESSAGE || message;
  let defaultSetting;
  try {
    defaultSetting = JSON.parse(
      ({}).DEFAULT_SETTING || process.env.DEFAULT_SETTING
    );
  } catch {
    defaultSetting = setting;
  }
  const reset = ({}).RESET_CONTINUOUS_DIALOGUE_OPTION === String(resetContinuousDialogue) || process.env.RESET_CONTINUOUS_DIALOGUE_OPTION === String(resetContinuousDialogue);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ChatGPT" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="before">
    ${renderComponent($$result2, "Header", $$Header, {})}
    ${renderComponent($$result2, "Generator", _function, { "env": {
    defaultSetting,
    defaultMessage,
    resetContinuousDialogue: reset ? resetContinuousDialogue : !resetContinuousDialogue
  }, "prompts": prompts, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "~/components/Generator", "client:component-export": "default" })}
  </main>` })}`;
}, "D:/OneDrive/code/chatgpt-dark-main/src/pages/index.astro");

const $$file = "D:/OneDrive/code/chatgpt-dark-main/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const tokenizer = new GPT3Tokenizer.default({ type: "gpt3" });
const localKey = ({}).OPENAI_API_KEY || process.env.OPENAI_API_KEY || "";
const baseURL = process.env.VERCEL ? "api.openai.com" : (({}).OPENAI_API_BASE_URL || process.env.OPENAI_API_BASE_URL || "api.openai.com").replace(/^https?:\/\//, "");
const maxTokens = Number(
  ({}).MAX_INPUT_TOKENS || process.env.MAX_INPUT_TOKENS
);
const pwd = ({}).PASSWORD || process.env.PASSWORD;
const post = async (context) => {
  try {
    const body = await context.request.json();
    const {
      messages,
      key = localKey,
      temperature = 0.6,
      password
    } = body;
    if (pwd && pwd !== password) {
      return new Response("密码错误，请联系网站管理员。");
    }
    if (!messages?.length) {
      return new Response("没有输入任何文字。");
    } else {
      const content = messages.at(-1).content.trim();
      if (content.startsWith("查询填写的 Key 的余额")) {
        if (key !== localKey) {
          return new Response(await genBillingsTable(splitKeys(key)));
        } else {
          return new Response("没有填写 OpenAI API key，不会查询内置的 Key。");
        }
      } else if (content.startsWith("sk-")) {
        return new Response(await genBillingsTable(splitKeys(content)));
      }
    }
    const apiKey = randomKeyWithBalance(splitKeys(key));
    if (!apiKey)
      return new Response("没有填写 OpenAI API key，或者 key 填写错误。");
    const tokens = messages.reduce((acc, cur) => {
      const tokens2 = tokenizer.encode(cur.content).bpe.length;
      return acc + tokens2;
    }, 0);
    if (tokens > (Number.isInteger(maxTokens) ? maxTokens : 3072)) {
      if (messages.length > 1)
        return new Response(
          `由于开启了连续对话选项，导致本次对话过长，超过了模型最大输入限制，请删除部分旧消息后重试，或者关闭连续对话选项。`
        );
      else
        return new Response("消息太长了，超过了模型最大输入限制，缩短一点吧。");
    }
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const proxy = ({}).SOCKS_PROXY || process.env.SOCKS_PROXY;
    var completion;
    if (proxy && proxy?.length && proxy.length > 4) {
      completion = await fetch$1(`https://${baseURL}/v1/chat/completions`, {
        agent: new SocksProxyAgent(proxy),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localKey}`
        },
        method: "POST",
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages,
          temperature,
          // max_tokens: 4096 - tokens,
          stream: true
        })
      });
    } else {
      completion = await fetch$1(`https://${baseURL}/v1/chat/completions`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localKey}`
        },
        method: "POST",
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages,
          temperature,
          // max_tokens: 4096 - tokens,
          stream: true
        })
      });
    }
    const stream = new ReadableStream({
      async start(controller) {
        const streamParser = (event) => {
          if (event.type === "event") {
            const data = event.data;
            if (data === "[DONE]") {
              controller.close();
              return;
            }
            try {
              const json = JSON.parse(data);
              const text = json.choices[0].delta?.content;
              const queue = encoder.encode(text);
              controller.enqueue(queue);
            } catch (e) {
              controller.error(e);
            }
          }
        };
        const parser = createParser(streamParser);
        for await (const chunk of completion.body) {
          parser.feed(decoder.decode(chunk));
        }
      }
    });
    return new Response(stream);
  } catch (e) {
    console.log("请求失败", e);
    return new Response(String(e).replace(/sk-\w+/g, "sk-key"));
  }
};
async function fetchBilling(key) {
  const proxy = ({}).SOCKS_PROXY || process.env.SOCKS_PROXY;
  if (proxy && proxy?.length && proxy.length > 4) {
    return await fetch$1(`https://${baseURL}/dashboard/billing/credit_grants`, {
      agent: new SocksProxyAgent(proxy),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`
      }
    }).then((res) => res.json());
  } else {
    return await fetch$1(`https://${baseURL}/dashboard/billing/credit_grants`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`
      }
    }).then((res) => res.json());
  }
}
async function genBillingsTable(keys) {
  const res = await Promise.all(keys.map((k) => fetchBilling(k)));
  const table = res.map(
    (k, i) => `| ${keys[i].slice(0, 8)} | ${k.total_available.toFixed(4)}(${(k.total_available / k.total_granted * 100).toFixed(1)}%) | ${k.total_used.toFixed(4)} | ${k.total_granted} |`
  ).join("\n");
  return `| Key  | 剩余 | 已用 | 总额度 |
| ---- | ---- | ---- | ------ |
${table}
`;
}
async function randomKeyWithBalance(keys) {
  if (process.env.EDGE_CONFIG) {
    const map = await getAll();
    const weights = keys.map((k) => map[k] || 5);
    return randomWithWeight(keys, weights);
  } else
    return randomKey(keys);
}

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  baseURL,
  fetchBilling,
  genBillingsTable,
  localKey,
  post
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };
