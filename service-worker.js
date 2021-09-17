/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "1df0c5e40f748b98f6cf8b9f45c55627"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.69db7c62.css",
    "revision": "bbf8ae2128478b2fad5b79a3a68e331a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e50a5206.js",
    "revision": "6f27c3532be60e76bca8e5465568abd1"
  },
  {
    "url": "assets/js/11.9e2b9dd3.js",
    "revision": "5a22a1cca167c9fbcdea0c8d96dd5fbf"
  },
  {
    "url": "assets/js/12.649e8ffe.js",
    "revision": "ae9ed2f6e474bfdb9e7097f00a62b0d8"
  },
  {
    "url": "assets/js/13.a2ef7a68.js",
    "revision": "365b23ebc6911529167d61c8edda2f6b"
  },
  {
    "url": "assets/js/14.5f4d8f6c.js",
    "revision": "5fb0f1b4aff3efbe080d5d16044c8418"
  },
  {
    "url": "assets/js/15.8d0d7979.js",
    "revision": "c373d1a0c72d994da632cbff2fd2574f"
  },
  {
    "url": "assets/js/16.8c581582.js",
    "revision": "8c9747b1d884aaec9d9dbda7e4800ecd"
  },
  {
    "url": "assets/js/17.10ad4eb3.js",
    "revision": "e36d62e325278d3ed3dcd7db4adb5529"
  },
  {
    "url": "assets/js/18.2a3cd9a3.js",
    "revision": "133eb6130bdfa8346194c84b472f468b"
  },
  {
    "url": "assets/js/19.12aaef58.js",
    "revision": "7d8f2c82c30907e7f6cb81f1aa572d9c"
  },
  {
    "url": "assets/js/2.9e1876f8.js",
    "revision": "196a36d44058665bb53200a35170526f"
  },
  {
    "url": "assets/js/20.98a48788.js",
    "revision": "80a6156abf50bc78e42bf37abbd9623f"
  },
  {
    "url": "assets/js/21.1fce7026.js",
    "revision": "48661b30af7c0df3b7d37b865a23530a"
  },
  {
    "url": "assets/js/22.322715b2.js",
    "revision": "289b9a82dbe18021c9a001f8f1b5f7c6"
  },
  {
    "url": "assets/js/23.655b243b.js",
    "revision": "ad0b7838e0ec0548d24c9c3eb2032dca"
  },
  {
    "url": "assets/js/24.31f4dd13.js",
    "revision": "dad725d1d88b1d221ee3d0c6e088e537"
  },
  {
    "url": "assets/js/25.4030eae2.js",
    "revision": "48b41c07258313d9d2b8c7d17b6d23e0"
  },
  {
    "url": "assets/js/26.a1ce5b76.js",
    "revision": "9e7c5a361a41098fb47a8e5465dfeee8"
  },
  {
    "url": "assets/js/3.3f1297c0.js",
    "revision": "b55efa3cb25f7fec33bb1af7ec580bf6"
  },
  {
    "url": "assets/js/4.1edd8bc8.js",
    "revision": "42c744e5b7528d02d3d3b9b8777aea4f"
  },
  {
    "url": "assets/js/5.483a9289.js",
    "revision": "dcd61b1c564fe750e3216be088163f0a"
  },
  {
    "url": "assets/js/6.11c5e5d2.js",
    "revision": "4f2b142bb834e26388af5dbcf9575fae"
  },
  {
    "url": "assets/js/7.dac019ed.js",
    "revision": "0363aadd197cb9a2db71b6f88d55c1c8"
  },
  {
    "url": "assets/js/8.de49d965.js",
    "revision": "aa1b34d336ed37fa024324e5b24bf90d"
  },
  {
    "url": "assets/js/9.60c9ff1e.js",
    "revision": "3f8ddb5f8354d3e17434d92a1cfd928a"
  },
  {
    "url": "assets/js/app.fa4e37a1.js",
    "revision": "60eebca0264f72f9063fec5fb09174be"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f35f3c566c323196fcec0cdc38efff0e"
  },
  {
    "url": "design/index.html",
    "revision": "b1b83302f403fb79e8743ec37906122a"
  },
  {
    "url": "index.html",
    "revision": "9bec8310240d2d59aa7329e34eea307d"
  },
  {
    "url": "intro/index.html",
    "revision": "4136322a587e2c9f376a7d1dd2f0fde1"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "d970edc75ef959221b035cdd4d53875a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "132587c05819d4e7cf77f06716ab2d97"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "690255b904a8dc6b8cabfb31ebaf93b3"
  },
  {
    "url": "software/index.html",
    "revision": "797e31c44d3d57af378aaecd3ccb53e3"
  },
  {
    "url": "test/index.html",
    "revision": "2106650f84245d2d127884a54c0a813a"
  },
  {
    "url": "use cases/index.html",
    "revision": "cb3d3aa9244b87ca70213a9887efe282"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
