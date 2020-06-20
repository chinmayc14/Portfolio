'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "2e9356e2c75c3c555b5db02910542838",
"/assets/assets/00000IMG_00000_BURST20190531130249595_COVER~2.jpg": "b2c0f386996cc32957e36b51da4cbe72",
"/assets/assets/2019-06-13%252012.14.41%25201.jpg": "3346038a75093c7100f853e96f0a556c",
"/assets/assets/about.html": "cca535e84bb3f1ad20cd1423638d0253",
"/assets/assets/avatar.jpg": "3dec4062030a5629a6967e9c98b0992e",
"/assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"/assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"/assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"/assets/assets/glass.png": "82a6bab146321073448b927615faed73",
"/assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"/assets/assets/IMG_20181108_100139.jpg": "f64ace0bb355ea19834257404fc2eed3",
"/assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"/assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"/assets/assets/mac.png": "c3f1f3b025df96f370c007600dad5304",
"/assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"/assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"/assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"/assets/assets/snippet.png": "43ec1ef4aea219ccecd44fddf0fcb233",
"/assets/assets/store.png": "847a72dccfc36fe6eb06b61d349bb89c",
"/assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"/assets/assets/works/cocoapay.png": "1a116679a577ef4af05f6e3c7f6f23be",
"/assets/assets/works/facelyt.png": "9c21f203fc4d3a9ca53455c525b63f94",
"/assets/assets/works/kharedi_now.png": "d0c478d3e7e33419a8f48b34bf1207e3",
"/assets/assets/works/messio.png": "827f062f04c16a164d9d7e9d13f24916",
"/assets/assets/works/mydealer.png": "14f62eb3413897290d2b2a248dcd8931",
"/assets/assets/works/mynewcar.png": "a856c91717e8817762660e95e591a10f",
"/assets/assets/works/railenq.png": "7982d54f1972d96a8f10a389ad354db2",
"/assets/assets/works/rajasthan_tourism.png": "d7e838f9f73511fc7038a05b60859356",
"/assets/assets/works/savaari_consumer.png": "480950a09ee167d32cdabea4b45b676f",
"/assets/assets/works/savaari_partner.png": "05e90af963f924eeac54490a5a2dcd38",
"/assets/assets/works/stattion.png": "3e39fc6c1f96b3201cb661452edc6d7f",
"/assets/assets/works/trivz.png": "4fc7b4922689e1508fdbd35a9b1785ee",
"/assets/assets/works/truelancer.png": "1126f584894fa84c5c052ec625ebf54e",
"/assets/assets/works/vdrone.png": "f9817772bfa75c8d65c62810d83be284",
"/assets/assets/works/wheelie_repairs.png": "cd0c2be230c6e7b9cb6224da0726d7ca",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "7431fead841506f32ca3b208b1135307",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "e628df5386a3c060c2e7795d22261752",
"/main.dart.js": "930f278a52fcc3bd956a68a76e3997bc",
"/manifest.json": "52ff1128e3e6c09f6fc9629836eaa3a5"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
