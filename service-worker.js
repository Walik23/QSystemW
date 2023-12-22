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
    "url": "404.html",
    "revision": "6cb92c4a2a33f4cfe68da9767bcc3a39"
  },
  {
    "url": "assets/css/0.styles.74d9654a.css",
    "revision": "2d22d34861b6c3c1793b0d586a670940"
  },
  {
    "url": "assets/img/delete.485f45ea.png",
    "revision": "485f45eadea9840dcd737f8f6b056a3c"
  },
  {
    "url": "assets/img/get.51c2ffba.jpg",
    "revision": "51c2ffbac8e2380d35c8b5b30a58d5e6"
  },
  {
    "url": "assets/img/get2.9286c92e.png",
    "revision": "9286c92e02f0368944c5631dd78010a0"
  },
  {
    "url": "assets/img/post.8ca1d5a2.png",
    "revision": "8ca1d5a27e78274bc0bd85ca322e730d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.98b1d7e6.js",
    "revision": "2ae075bcbfc3d9d9d9f3658deff768ee"
  },
  {
    "url": "assets/js/11.bb753238.js",
    "revision": "94c1a8e8d7722081c445a569b3133dc3"
  },
  {
    "url": "assets/js/12.022538e1.js",
    "revision": "a603ee8224338f0bd66f9a1169297313"
  },
  {
    "url": "assets/js/13.698c8118.js",
    "revision": "8d9da4ed3e33e8e34806ea43a66888a1"
  },
  {
    "url": "assets/js/14.270df476.js",
    "revision": "51e09efc5fd2d50d650b061b37711cc2"
  },
  {
    "url": "assets/js/15.29e947fa.js",
    "revision": "179a5f75ba42176ae752a5ec5db116f7"
  },
  {
    "url": "assets/js/16.78572606.js",
    "revision": "d02c91e163d3a48afb7df6480b5d6c83"
  },
  {
    "url": "assets/js/17.a0c81efb.js",
    "revision": "385943034686dc9f2987a2c76799c459"
  },
  {
    "url": "assets/js/18.1d7b9325.js",
    "revision": "18f09c9677ab442e4b17814fab2bbc68"
  },
  {
    "url": "assets/js/19.ba4685d2.js",
    "revision": "f0bae812da65827cd37daf00b803f325"
  },
  {
    "url": "assets/js/2.9d484972.js",
    "revision": "387eee010feff9b8611d6af5bb53808e"
  },
  {
    "url": "assets/js/20.f1f6b975.js",
    "revision": "7c98e59f2e1fc9465a8208eac64a9770"
  },
  {
    "url": "assets/js/21.272b2d12.js",
    "revision": "2f1d8df518007bb2111ec0f1488fc210"
  },
  {
    "url": "assets/js/22.bfa593f8.js",
    "revision": "0ea4b4c15b96af89f70db9ef798914eb"
  },
  {
    "url": "assets/js/23.168f7bf8.js",
    "revision": "9a332dbce3335d9c99846384de0f9eb1"
  },
  {
    "url": "assets/js/24.4c63abc0.js",
    "revision": "bb66195ca1fd631e01dabc99421c9ac5"
  },
  {
    "url": "assets/js/26.50db2776.js",
    "revision": "2366541b1883d3ba3aaa9fc6a045dc87"
  },
  {
    "url": "assets/js/3.7a0abf1c.js",
    "revision": "3d17207ea65a50f85ad24055a3868e63"
  },
  {
    "url": "assets/js/4.64ce8d43.js",
    "revision": "44433b336bda494fae94e7f5cee652cf"
  },
  {
    "url": "assets/js/5.e9a692b2.js",
    "revision": "4df2ad404675fbb3db645e412652ce8b"
  },
  {
    "url": "assets/js/6.e06c244c.js",
    "revision": "b895ea23a0f1edb3394fe034b0f57492"
  },
  {
    "url": "assets/js/7.115ef3ab.js",
    "revision": "469233d70a9cfcd04a89e81e32f4fff8"
  },
  {
    "url": "assets/js/8.fdcdae34.js",
    "revision": "422e098e9d18ed44904bf0437c31e62c"
  },
  {
    "url": "assets/js/9.63d364d4.js",
    "revision": "80683277c6f12d517c9194192b7106d7"
  },
  {
    "url": "assets/js/app.763faac3.js",
    "revision": "5f729268e482ed490a7925a02fd946d6"
  },
  {
    "url": "conclusion/index.html",
    "revision": "ab625a1395cad950c2afd37d59fe68fb"
  },
  {
    "url": "delete.png",
    "revision": "485f45eadea9840dcd737f8f6b056a3c"
  },
  {
    "url": "design/index.html",
    "revision": "1836fca8790e5cc46e4e5c21729e01ec"
  },
  {
    "url": "get.jpg",
    "revision": "51c2ffbac8e2380d35c8b5b30a58d5e6"
  },
  {
    "url": "get2.png",
    "revision": "9286c92e02f0368944c5631dd78010a0"
  },
  {
    "url": "image_2023-11-27_12-34-32.png",
    "revision": "820893c679183a2ec1c77e6f83142a24"
  },
  {
    "url": "index.html",
    "revision": "7ee8e757575dad183c2af104e950881c"
  },
  {
    "url": "intro/index.html",
    "revision": "c3c4b72d3e36e76f325fea646bdd8987"
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
    "url": "post.png",
    "revision": "8ca1d5a27e78274bc0bd85ca322e730d"
  },
  {
    "url": "requirements/index.html",
    "revision": "0da501c67a58d6807f6ef81935fd02d0"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6049e734a3dba048a6ba351891aa9cc5"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "a363d5758bfaf8e28639c526070fd592"
  },
  {
    "url": "software/index.html",
    "revision": "cb0ca31ee4f01b5ea68bbb29c1d08da0"
  },
  {
    "url": "test/index.html",
    "revision": "97d7cdc3192e34a3242d58395b52df63"
  },
  {
    "url": "use cases/index.html",
    "revision": "a9fcad498b414e986198e947c8bb507b"
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
