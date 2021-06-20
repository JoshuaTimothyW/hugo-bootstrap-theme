const list_cache = [
    'index.html',
    '/css/style.css',
    '/js/index.js',
    '/img/code.png',
    '/css/bootstrap.min.css',
    '/js/bootstrap.bundle.min.js',
    '/android-launchericon-48-48.png',
    '/android-launchericon-72-72.png',
    '/android-launchericon-96-96.png',
    '/android-launchericon-144-144.png',
    '/android-launchericon-192-192.png',
    '/android-launchericon-512-512.png',
  ]
  
  // install service worker
  self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll(list_cache)),
    );
  });
  
  // Fetch content using service worker
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });