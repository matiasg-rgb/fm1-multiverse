/* Offline cache for self-contained GPL browser instruments. This caches only same-origin assets. */
const CACHE = 'fm1-lab-2026-11-18-v4';
const URLS = ['./','./index.html','./manifest.webmanifest','./icon.svg','./maradonna.html','./wa-tur.html'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c=>c.addAll(URLS)).then(()=>self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{if(res.ok){const cpy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cpy))}return res})))})
