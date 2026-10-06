const FILES = ["favicon.svg","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","index.html","manifest.webmanifest"];
const VERSION = 'b461ad9190def166';
const BASE = new URL('./', self.registration.scope);
const SCOPE_KEY = encodeURIComponent(BASE.pathname);
const PREFIX = `until-static-${SCOPE_KEY}-`;
const CACHE = PREFIX + VERSION;
const SHELL = new URL('index.html', BASE).href;
const withinScope = url => url.origin === BASE.origin && url.pathname.startsWith(BASE.pathname);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    try {
      // Installation succeeds only after every application asset is cached.
      await cache.addAll(FILES.map(file => new Request(new URL(file, BASE), { cache: 'reload' })));
    } catch (error) {
      await caches.delete(CACHE);
      throw error;
    }
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await Promise.all((await caches.keys()).filter(key => key.startsWith(PREFIX) && key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('message', event => {
  if (event.data?.type === 'ACTIVATE_UPDATE') event.waitUntil(self.skipWaiting());
  if (event.data?.type === 'CHECK_CACHE' && event.ports?.[0]) event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE);
      const complete = await Promise.all(FILES.map(file => cache.match(new URL(file, BASE).href)));
      event.ports[0].postMessage({ ready: complete.every(Boolean) });
    } catch { event.ports[0].postMessage({ ready: false }); }
  })());
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || !withinScope(url)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = event.request.mode === 'navigate' ? await cache.match(SHELL) : await cache.match(event.request, { ignoreSearch: true });
    return hit || fetch(event.request);
  })());
});
