import { n as server_default, p as server_default$1, q as deserializeManifest, t as createExports, u as adapter } from './chunks/__vendor.fa2b5429.mjs';
import { _ as _page0, a as _page1 } from './chunks/pages/all.a9b5ae80.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'node:perf_hooks';
import 'node:stream/web';
import 'undici';
import 'node:timers';
import 'fs';
import 'tls';
import 'string-width';
import 'stream';
import 'https';
import 'path';
import 'url';
import 'http';
import 'send';
import 'server-destroy';
/* empty css                                 */import 'markdown-it';
import 'markdown-it-katex';
import 'markdown-it-highlightjs';
import 'markdown-it-kbd';
import 'html-to-image';
import 'fzf';
import 'just-throttle';
import 'eventsource-parser';
import 'gpt3-tokenizer';
import '@vercel/edge-config';
import 'node-fetch';
import 'socks-proxy-agent';

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/api/index.ts", _page1],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/solid-js","clientEntrypoint":"@astrojs/solid-js/client.js","serverEntrypoint":"@astrojs/solid-js/server.js","jsxImportSource":"solid-js"}, { ssr: server_default$1 }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/node","routes":[{"file":"","links":["_astro/index.e642c666.css","_astro/__vendor.9a41126a.css"],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/api","type":"endpoint","pattern":"^\\/api$","segments":[[{"content":"api","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/index.ts","pathname":"/api","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"propagation":[],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","@astrojs/solid-js/client.js":"_astro/client.75fecfa1.js","~/components/Generator":"_astro/Generator.46239cbb.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/KaTeX_Caligraphic-Bold.34f3681a.eot","/_astro/KaTeX_Caligraphic-Regular.88f36891.eot","/_astro/KaTeX_AMS-Regular.0ca50506.eot","/_astro/KaTeX_Fraktur-Bold.0509488a.eot","/_astro/KaTeX_Fraktur-Regular.27acf4a4.eot","/_astro/KaTeX_Main-Bold.5eec6e6b.eot","/_astro/KaTeX_Main-Italic.a34cfedf.eot","/_astro/KaTeX_Main-Regular.67034028.eot","/_astro/KaTeX_Math-Italic.cd90b072.eot","/_astro/KaTeX_Script-Regular.956b4855.eot","/_astro/KaTeX_SansSerif-Regular.01c8db29.eot","/_astro/KaTeX_Size1-Regular.390ed74f.eot","/_astro/KaTeX_Size2-Regular.2cdc9365.eot","/_astro/KaTeX_Size3-Regular.bae93951.eot","/_astro/KaTeX_Size4-Regular.6fa7e07d.eot","/_astro/KaTeX_Typewriter-Regular.17d25dca.eot","/_astro/KaTeX_Caligraphic-Bold.ca171d35.woff2","/_astro/KaTeX_Caligraphic-Regular.d92a4307.woff2","/_astro/KaTeX_Fraktur-Bold.0b05f41d.woff2","/_astro/KaTeX_Fraktur-Regular.e3129625.woff2","/_astro/KaTeX_Main-Bold.f14fb86c.woff2","/_astro/KaTeX_Main-Italic.f2d5f327.woff2","/_astro/KaTeX_Main-Regular.15acf74f.woff2","/_astro/KaTeX_AMS-Regular.d728466f.woff2","/_astro/KaTeX_Script-Regular.6fde2d4a.woff2","/_astro/KaTeX_SansSerif-Regular.884457a0.woff2","/_astro/KaTeX_Size1-Regular.f3f0f6e8.woff2","/_astro/KaTeX_Math-Italic.812f4c09.woff2","/_astro/KaTeX_Size2-Regular.1c10228b.woff2","/_astro/KaTeX_Size4-Regular.20bc6318.woff2","/_astro/KaTeX_Typewriter-Regular.b9143a75.woff2","/_astro/KaTeX_Caligraphic-Bold.008927b0.woff","/_astro/KaTeX_Caligraphic-Regular.0e42a4b6.woff","/_astro/KaTeX_Fraktur-Bold.2b273844.woff","/_astro/KaTeX_Fraktur-Regular.eb170468.woff","/_astro/KaTeX_Main-Bold.5a0d8c32.woff","/_astro/KaTeX_Main-Italic.d1459a50.woff","/_astro/KaTeX_Main-Regular.016afc3b.woff","/_astro/KaTeX_AMS-Regular.6a6b7a7b.woff","/_astro/KaTeX_SansSerif-Regular.1ef0b02e.woff","/_astro/KaTeX_Script-Regular.1e6d6ebc.woff","/_astro/KaTeX_Size1-Regular.11a78fa1.woff","/_astro/KaTeX_Size3-Regular.509137a9.woff","/_astro/KaTeX_Size2-Regular.3ae10fa0.woff","/_astro/KaTeX_Math-Italic.40c45e20.woff","/_astro/KaTeX_Size4-Regular.b4e0bf91.woff","/_astro/KaTeX_Typewriter-Regular.1413ff97.woff","/_astro/KaTeX_Caligraphic-Regular.7d68fac5.ttf","/_astro/KaTeX_Caligraphic-Bold.459bdcf6.ttf","/_astro/KaTeX_Fraktur-Bold.20186af5.ttf","/_astro/KaTeX_Fraktur-Regular.3879bec9.ttf","/_astro/KaTeX_Main-Italic.1bac98fc.ttf","/_astro/KaTeX_Main-Bold.6722bc6c.ttf","/_astro/KaTeX_Main-Regular.8a69578a.ttf","/_astro/KaTeX_SansSerif-Regular.d41c14bb.ttf","/_astro/KaTeX_Script-Regular.e9db5630.ttf","/_astro/KaTeX_AMS-Regular.b2d9fa87.ttf","/_astro/KaTeX_Size1-Regular.b2a487fd.ttf","/_astro/KaTeX_Size3-Regular.d1cbc7c6.ttf","/_astro/KaTeX_Size2-Regular.a7631dfe.ttf","/_astro/KaTeX_Size4-Regular.fbe14073.ttf","/_astro/KaTeX_Math-Italic.ffdaa149.ttf","/_astro/KaTeX_Typewriter-Regular.025d23e8.ttf","/_astro/__vendor.9a41126a.css","/_astro/index.e642c666.css","/favicon.svg","/_astro/client.75fecfa1.js","/_astro/Generator.46239cbb.js","/_astro/__vendor.52dc6a40.js"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {"mode":"standalone","client":"file:///D:/OneDrive/code/chatgpt-dark-main/dist/client/","server":"file:///D:/OneDrive/code/chatgpt-dark-main/dist/server/","host":false,"port":3000};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers, startServer };
