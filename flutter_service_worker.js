'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "19843bfef5b6016817e07ba69457be45",
"/": "19843bfef5b6016817e07ba69457be45",
"main.dart.js": "889183e56196787688308e3e2682d58e",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "7083684b9f63ad4c41c5a6711fb7c2a0",
"icons/Icon-192.png": "3ea69b07616163a6850fcc257725511a",
"icons/Icon-maskable-192.png": "3ea69b07616163a6850fcc257725511a",
"icons/Icon-maskable-512.png": "da091ff98d4cad00aaa8613865f7f9e2",
"icons/Icon-512.png": "da091ff98d4cad00aaa8613865f7f9e2",
"manifest.json": "9929283dc4f618e646e2b7d31bc656e2",
"assets/AssetManifest.json": "9b57d598a82a857b4ca41d4184c14d2d",
"assets/NOTICES": "26af1ecacedb748e4aae5e3691e1ae2d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "606a2f2b739b18b8250709b90b7419fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8c5115ffb991fe50cf08a88989fca6da",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/ui/figma.svg": "b3325a61e6b19911f1b26062a046e6b1",
"assets/assets/images/databases/firebase.svg": "63a193f6bd8c8d8716468a27b55227c0",
"assets/assets/images/databases/postgresql.svg": "864da52b1932f0bf963daf2e62394f8d",
"assets/assets/images/databases/mongo%2520db.png": "689bb66f5af8080e4f79ffeb16202f6a",
"assets/assets/images/apis/rest%2520api.png": "50c7dc7819a6d9895de4c1261899ae40",
"assets/assets/images/apis/postman.png": "d16d21bc3f6287bcad18246ab23da7d9",
"assets/assets/images/app_icon.png": "4b4300a0f6e5f44008c2edf033ba9de5",
"assets/assets/images/projects/bharatlaw.jpg": "36fe307daaae93571750ecd130c70bc8",
"assets/assets/images/projects/logisticaforce/login.jpg": "9b99b6f2f6ee8c0f7928d3f5c24726f3",
"assets/assets/images/projects/logisticaforce/search_customer.jpg": "b507cd33db9f0b7b375c11d8826a5ce2",
"assets/assets/images/projects/logisticaforce/order_guide.jpg": "60db3472c8f994c64bab241fcac70a64",
"assets/assets/images/projects/logisticaforce/filter_1.jpg": "a54b804bfc0a16d9374d72a80fc944f3",
"assets/assets/images/projects/logisticaforce/filter_2.jpg": "b6d54f321a9ecfbc6b43ae40256a840a",
"assets/assets/images/projects/logisticaforce/search.jpg": "5226e16f56c5621398d77b6235d8df58",
"assets/assets/images/projects/logisticaforce/quote_2.jpg": "89ec0365a92b248b7a3a4f384d3014c5",
"assets/assets/images/projects/logisticaforce/quote_1.jpg": "0a648b3f25bbbfba5bd41da30223a97e",
"assets/assets/images/projects/logisticaforce/add_quote_1.jpg": "38fd8e7f1707d3003acb0593f21f4bdf",
"assets/assets/images/projects/logisticaforce/add_quote_2.jpg": "55133557d755aa4d2784a94e12715204",
"assets/assets/images/projects/logisticaforce/add_quote_3.jpg": "04cf8af22080f81cf0495c09119dfcbe",
"assets/assets/images/projects/logisticaforce/product_details.jpg": "210bee7c28b393832f1667dc5dbac8af",
"assets/assets/images/projects/bharatlaw/bharatlaw-3.png": "cdae7d5224d7c45cbe340e5d06faabd3",
"assets/assets/images/projects/bharatlaw/bharatlaw-2.png": "94de47259e3d2ab0e2b1b1c746c8fdf9",
"assets/assets/images/projects/bharatlaw/bharatlaw-1.png": "6c1a4128ad241169464332597a056de4",
"assets/assets/images/projects/bharatlaw/bharatlaw-5.png": "866fbdb0b91223878ca9937c25070bf5",
"assets/assets/images/projects/bharatlaw/bharatlaw-4.png": "c9e330541802ec816f23275b159cbb15",
"assets/assets/images/projects/bharatlaw/bharatlaw-6.png": "a5c1bf8f6176a508cd8182a067d4edc8",
"assets/assets/images/projects/bharatlaw/bharatlaw-7.png": "5ce8e4d5a9b0e302ec21d6d42e4f51a6",
"assets/assets/images/projects/logistica_force.png": "dc8e73d3a2af82803bf8adfd335c6aef",
"assets/assets/images/vcs_projects/github.svg": "0d75c10ae1e1d4ceef8f9d5606a9765f",
"assets/assets/images/vcs_projects/jira.svg": "7b9c8242b9057351077d4db7ef357b40",
"assets/assets/images/languages/node_js.svg": "db14bcdb9353c934047560ba392f1053",
"assets/assets/images/languages/flutter.svg": "fe8fc92df24e337a48b940b4f1753ade",
"assets/assets/images/languages/python.svg": "36972298f00e75c4f7eabe5d81883695",
"assets/assets/images/languages/dart.svg": "dfdbca005e5da5061325a8245fb65580",
"assets/assets/images/dev_tools/jupyter.svg": "db4427647d406ed999c238a63a3c48ae",
"assets/assets/images/dev_tools/pycharm.svg": "1d9a1fa3624ef72f30d20c67987286c0",
"assets/assets/images/dev_tools/vs_code.svg": "a17799b66e70b9a3720d538b0a29cd00",
"assets/assets/images/dev_tools/android%2520studio.svg": "468bc9662ce3f01c6c37bacf38827642",
"assets/assets/images/dev_tools/google-colab.svg": "b9412cf8c87a2cf222b66280be2fa59e",
"assets/assets/images/frameworks/socket_io.svg": "73342c25b9a70f33d2cdc5788846fff1",
"assets/assets/images/frameworks/pandas.svg": "711a49bb1787364bd9f39effd17f4380",
"assets/assets/images/frameworks/matplotlib.png": "47221d5e13972ebed6e1e8b8fadbd582",
"assets/assets/images/frameworks/express_js.svg": "4e80b58386faee5602f9ea02899407ae",
"assets/assets/images/frameworks/provider.png": "7bbd6b127537d107727ab4a6fa4ff9db",
"assets/assets/images/frameworks/getx.png": "998e02935101fb1b5be3c991136406d7",
"assets/assets/images/frameworks/numpy.svg": "9ccb4cf12b4bbfacd9cd3cb740e3ec00",
"assets/assets/images/deployments/appstore.svg": "40621c8b95c82b1b7faee66cb6cf8574",
"assets/assets/images/deployments/testflight.svg": "4d7c0c51f21c4bf447a9cdcd786e6a7f",
"assets/assets/images/deployments/playstore.svg": "7fb201595e5d5a475c5166cbdeeb61d0",
"assets/assets/images/download_badges/app_store.svg": "2928664fe1fc6aca88583a6f606d60ba",
"assets/assets/images/download_badges/play_store.png": "e6d552c5deec92675d47f9b89d816ab8",
"assets/assets/images/company/brainybeam_logo.jpg": "5306f6b6d6091c033f87b0ec63d63490",
"assets/assets/images/company/promactinfo_logo.jpg": "c466852ec42a5ccfbc3e78b6057108f7",
"assets/assets/images/company/niyantras_logo.jpg": "ed4522a1a02c60bd577b1289b3c806fc",
"assets/assets/lottie/portfolio.json": "8afb4689bfb741cf6cabe46e316f863c",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
