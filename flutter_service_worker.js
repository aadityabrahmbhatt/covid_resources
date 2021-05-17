'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/objects/02/236b443392fe9d61ceed4b3fe8aafccee51518": "b06e1e8d8828edcfc54b5282619988be",
".git/objects/0a/096dc68ec4d2a2ffe0cb90a8ff3359fa5e3177": "756018e18d54a30d38f15fd7e63c1313",
".git/objects/17/07adb7d4c2bea6eadc543e53b49beba9bbb8ba": "5c359095d4da41f3b65f73ece4ef7dac",
".git/objects/17/ce6fcaea49f2bc326d03618a1d1da6f374ae50": "7c9edf67477f787d01e54ea00ba26918",
".git/objects/18/97bffdfe28fe3de040acd1c5d71a147421eb6f": "8ffc5f9e9b5f46406c384439cd58cc92",
".git/objects/1a/d3184eaf3a00acdf4995bd43ce702bfc9b7574": "c985eec48a8abcb86cb1a2b4facc72c1",
".git/objects/1e/9a998e34150476669555a6c08fd9a3e6175abb": "1d883239a821ee54fb5a064486fd55fe",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/c9de75805aa3ca3fe2cf4b54e69161ea162d23": "c0d99b7ea32924f9ee375f67ccd49531",
".git/objects/2a/2a32b0f91de82306e1ab5e576208e1619e2252": "53416b422525856f11c18a03e40534cb",
".git/objects/2a/6ef33c2f5f54db52e0edd44d6e12bdbfd1107d": "08c549e5afb6ae2e8496d36ba110423d",
".git/objects/31/5df332d75e9667269d95925ceda0015c207650": "2f11a2f2aadacb1a1383f1f6f3150705",
".git/objects/31/92b925cce9512269df99d4f88dc01bab7d0d16": "73d00e9daddc46cd8f9fd1f4db2e4828",
".git/objects/34/8e9eeb8f7e5414fb81ed830cfb7bb12ffbc678": "8bb06ff7bbacf12db8265431579c95a4",
".git/objects/36/b54bb867697ea1f881e9d3025be070c7c2683b": "8b40ceaeb8afa51d674a886690c53c78",
".git/objects/3f/9d316fcc3ff8c98ce486948a2e164926d33f24": "4151349b48f742632b0f4af3d2b7c1ff",
".git/objects/40/d70fd77714baca5b9b0b1a5dae29c1b0008631": "f83d4b1eeaefafb453bf66f11558cce6",
".git/objects/46/03db2bdf04b052aea31dc04bd71c9e3259bc61": "394f7fdf2d443c58d42a7660ed6772b5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/dc72ccb8c156fae141a8d0ee7b554ee5a3283e": "6d83be9093a1961f8f2b75f6facdeebe",
".git/objects/48/d8b7e258ae0aa6c5aeff71012d149f5e117f7d": "7984fede941f5a3826f8223ca08927fe",
".git/objects/49/ba68f75c444d8ad3dade9c2f61c142701133ed": "705bc93fa4aef25640e44c27cae8282a",
".git/objects/4d/fd71d8f18d6903715d336253b4b5c3a00a1ff5": "0a9b003ffc4ef883fbf9150b46f09be7",
".git/objects/50/df36332a64b661b8a3eeb70e8cc17d16cfe5a6": "dc156a768d6544e996358e71071e43c3",
".git/objects/5a/3bc69ecf97eee5bc7a0606b7cdee8e63716f3e": "78ad259bdc25c61c9ed167e319daa302",
".git/objects/5a/ece69e7f426940f0d47178f6773f57d9c0936f": "db4f1e7fd4e683be15dedcfe0ac85e14",
".git/objects/5a/f751a70e5e9cf120cbaa1a7d5d7af80b3810bb": "47c8da0ca381a419e4b20ff87062dc71",
".git/objects/5b/d87c28bf2324584497f6b95ad78ad7c30e8f26": "1ef9c684873734957d8c6a1d524f68b6",
".git/objects/5d/77119bbca104ef72210ae3176a861a281522f6": "9a6a9ca640b95859d1d5cc2e8abea86e",
".git/objects/63/9875f10bf75bae96743f1769d1080a5505588f": "95e3d6e775260203e269dc9a44c60bef",
".git/objects/67/125e09c9c84e77fd1e307147f31f201a377f58": "daadffb3f9a95b583ca7c255fbcedb2e",
".git/objects/70/6a62aa688f178db1aaed7493e2f0ade7e2d373": "44fc6a9a9f3e96ecac8cd2b76f40348f",
".git/objects/71/04768aa96040d89e110e98d53fa201dfc275f7": "db6d217204799f118f5797aee7611839",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/714c59c8f1a6af2455d09108f4235509e0a5df": "d24b7bc401356feedd88e37737154377",
".git/objects/7b/712ab6e249a9ec8139c85b4a35ff361e0f460b": "b4e02540fde23d6f6904cfe86b7b3bc5",
".git/objects/7b/f8ffb21419368da279a4b741e0d56aebbe5c87": "33c79d81009ea84152e86a4ce41f5dd1",
".git/objects/7d/68d215aa4bd4502ec77c6f3a6682ce892f295f": "4d592dc2bbd8e330d12105ff3e2b61a6",
".git/objects/7e/8cd33dc4a6521ab7d40c83c2350ffe2edebf63": "89b5b2c0d4fa8ba67d3a19fdb614f487",
".git/objects/81/bb9d1b30b3143bb2878c05a4e239c44a65ced4": "2383c3a25482bc342687c2312c22ac67",
".git/objects/86/cdb405c4bc889cb5cc9465c0e47dfb0cd15e6d": "43c433b694f6c235761a0d8de9514db7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/c422b81b21018489bc21bd3271fe920a7d7f1c": "aadf14ce60658d2648ff1230a396e7be",
".git/objects/93/781d7d7342153d7496d8c6f062912b1e63bd48": "f78944509b83475f0b1b9fc5c16d958d",
".git/objects/94/c9f89b5e9719a86f8be60511c0a3658d7e034f": "06e9ea817865124272351b32f7a07190",
".git/objects/95/e866207b1d6d686202ad31ec6faa3019e708c9": "4197aeec1e61b2b9470a0d4af1097a1c",
".git/objects/99/68ac470892e5173e8ccf9035b7cc006b9d4718": "58fb259f0c48c2b8b789d4f660380c74",
".git/objects/9f/5a879b9e502ad52d577507a240d7c1117533c0": "071156cd9cfa968e9a8efaf80600f021",
".git/objects/a0/1bf968c085cf170569a25d09d32bfd08f33472": "f16e92454a17d71a7abe697a1d6e3bd6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/e3a54a76f1ff4800a12a46b23f556613517efd": "105b48658a2217219f992a5f6dfba9e7",
".git/objects/a3/0d1858a406ff7cbb56d342090aff6200205314": "9b7a125abb70c0e66fadbc2857153f06",
".git/objects/a3/c6dc0b9b30fb692716756439e5811ada3fe561": "4df6a2a626fabf431d49aba4aba0b255",
".git/objects/a4/1248c8a3c619d53f6bc87002a7ea81ed4e384b": "80a6e5f8ed226667933f40ea68a84176",
".git/objects/a6/2a9ed2b42950c6062d0380b471b7b080bd9a32": "a733a7040814699caaef9c169352920f",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/460e763c559bc469702ec883d723acb23cbcaf": "537750a29dd2e1c850aa7a51bb76953a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/6a1dd13f045a30c3ac57f5f6badb1f9484c91e": "3d97cdd85a1095089dfb2a6a3ffd91cb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/58d9102405c4a925939178f3fc04fcef32f916": "578e61e60365e42908538db5d18e9cc1",
".git/objects/bd/a16c3bcea2ac81798f6307bed62f2610ed9de9": "9c7c6e261fd5bcedc2b9785f788d7fbd",
".git/objects/ca/de0da354399665ea0f0bd6107d4008f1110677": "232a3d080394a9deaa4b8369c0e16293",
".git/objects/cd/21f4c1ed72c3862ad7845ee54f678daa13f9b3": "24110b0039ac4721370bc30a9588e3e0",
".git/objects/d3/239e25725d6edb1dd1d2e28b9ffae6f8b5b91a": "bc9d873cf801056c960bd19fe5846dd1",
".git/objects/d3/51be7de8e3b3269bbc4e4c198b757d71a6b6f3": "c575eced8c336b0d896100eccc8171c1",
".git/objects/e1/900c79dae19cfbb579d6d2f5288486a47d1dd5": "1275a61cd671aac78f8ca3302f6c9d36",
".git/objects/e3/c808189dd830ded7f9a8a8c29d437949ab476b": "75b826c5947bb15292740048b9ca1573",
".git/objects/e5/30cf1f1dcee2a7df5be7cd8561ab6a79dfafa0": "d717a6e69768709fcc6c3260e962e8ca",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f0/16952500ac28eb4c83a93a1167259d6cbcea91": "beaf3724802eb119857d1b8a42d87945",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/03db89ca093fa2d7eb8694eae8670b55834170": "976c0d2c83aaa5b786f5110b090523ef",
".git/objects/f6/805581e254b5c5561c9a3594e8c0b8c3315fa2": "5b3c137488efdc6c35b506ddb838b4d1",
".git/objects/fc/0b7ab129e69a77d0d6282ac30605b60dce5675": "32246a938bf9a7792e0aef045f9a6a04",
".git/ORIG_HEAD": "e0b8e068f0567f86cef1823f94ff539b",
".git/refs/heads/master": "47e3d535392baed8cdc63ef6306e456a",
".git/refs/remotes/origin/master": "47e3d535392baed8cdc63ef6306e456a",
".git/refs/stash": "8c4e8e5c0274584ee5d257dd8550e594",
"assets/AssetManifest.json": "8402b8886ee68cd05de1c1d6478b660a",
"assets/assets/sound.wav": "2a13aeead7578d15778c61ccc9b6b009",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "644161464118a784198db1d8a93f55db",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "8c25493b094ffc83eabf9a39424a27d1",
"icons/Icon-192.png": "9e2d5fa4f78e0ad8850c73944bfd04a1",
"icons/Icon-512.png": "5920278578f73bf31c148dc177375553",
"index.html": "254ad1d42e9c21bfbcd6c3582078bb40",
"/": "254ad1d42e9c21bfbcd6c3582078bb40",
"main.dart.js": "181d6790b2f14ded2b41044732111ed4",
"manifest.json": "36c63e59ceb3c209468c566fb7949e32",
"version.json": "9c68c63324a76e6634d845f8221976a9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
