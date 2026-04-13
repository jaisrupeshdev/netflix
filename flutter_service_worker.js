'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/config": "4df0dfdcb98edf451ba39ce2050d7268",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "15acdb5b9130e58897130f2dec25a8ff",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e8a778cb3e6df13f7e7d54e52d442f2d",
".git/logs/refs/heads/main": "df977452f5e533af6ec1873ce4756fcf",
".git/objects/03/55d9b8d4c5f1506665803a821aee4bf12ad0f2": "800b5e570029128fb78c7217092465bc",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "a2c957fcd2f5f0e686f9a496d6e3a59d",
".git/objects/0a/6d95fec91f8e3f32e133c25e57fddbc63c9cff": "eff76e28f2ea2d3f4c189c048c078582",
".git/objects/0c/8d43892e48a0c4e04866ab9af1a846fc234dfe": "77ffad2004022dc9c387871a2dedb328",
".git/objects/0c/9519bef63774f311ab6407b74b8c41ca440a94": "f05acda5ecdbc5ad40e9ed7c93999782",
".git/objects/11/a2e4bae654456626f34089a90314564396ff85": "6f46f57476749beb4f25ad1e91770a1c",
".git/objects/15/43660daf312c87535cb387f57da10c2e626626": "312a65456bafcd994bb1279bbc1130dc",
".git/objects/22/1366ff8f27b9fde816de5e258ced0df9698ef8": "0032708f37514219c5c911645df53d00",
".git/objects/24/01c2d464204e7f62a5d289fcdfcfb31c4660c8": "ac0134427db77fe2e162d8d9c47e2f75",
".git/objects/24/c7b8985f572f075735a89bff30bb633112cad0": "a9dd9cd2cf0308f523b215b7271f5316",
".git/objects/26/224fb533ea3dd1003bb2ef0e297564099de2d1": "e67bfb6fee2206f1ae75eda9e6f2c5a3",
".git/objects/2d/fad65cf309c04cb04251c72738d01c187f26cb": "f323a869127dce61dd04a45cf6bf1239",
".git/objects/2f/fb069a688381388bda58203baa5ca0473d271a": "5cfba1fe552509668383694c72717714",
".git/objects/34/3c5d68b885bae3a5de4ce07e996d56af85127d": "0f2f8ff3f51ae0f685a472eed9f873ec",
".git/objects/35/1c75e94166d4b907f1d6a810df8564fd2a86e2": "1d2a827626424f04f169d5f8b19fa55c",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "b92a0f6b7400ff035ef092a8709952e1",
".git/objects/3e/d21a100b8b73c6292c73ae02401689da67e139": "13d4da81b89cde981e5225864c6daccf",
".git/objects/46/b6cea1a26148f475b724c5e6642592fd1cf927": "e99a60d037bb044d886dc89646c03110",
".git/objects/4d/12884561a79143587c9bde2520756ac94fee9b": "0b2e00b22080ffdae8267bbb85c9c58b",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "70d096a1769c7715b67dc1b780a35781",
".git/objects/52/b9cb313af579f47fffb9f34072e84036b8362f": "448daa012fab0ebe3fe5cbbcf6c343b9",
".git/objects/56/7c7fcd5b3a18dc3206d5ea3b9d7c1ba81677f9": "6135133494a00faf9a5c5bccbbccd972",
".git/objects/60/006cac141f4b2a8262fc8d7f76158a1cd45fc1": "b8638bce79f45512f6928d1f9ea2abd7",
".git/objects/62/66dd0176379cfedbddc08fc015e6bbc685c327": "411f7d1d36f7ee80754bdced3025a4ea",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "50f3380c9772e107150d87533c44f28d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/6d/6edecf04258e6953dfafdbff540476f413092f": "d7a1ee1b67bbc0ea5a08967e5f706562",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "27692dea2feef734dbb4475191d0b203",
".git/objects/73/e262af66f2b429ad8b82989dbe3cfd196858c5": "436f1fe8c5b4184dd21cbbc096334c79",
".git/objects/75/d7ac3558000fc22d31677149e27053a7380d89": "13eb333d1dd9a5efcc93ede7d3f75930",
".git/objects/76/a3c3fe09e657f30adee3d31a530cb304809f22": "9c210272c72dee7d6a12abc56cced847",
".git/objects/79/027cbf669e5988d760bbae7e01ad2c939accb4": "6d2a71f60c7ff8e35b6baf9b9ceb22bb",
".git/objects/7b/6b7e810d849b593cc0840de6996bd2ba9d68ca": "ac0517516805d6d4a26cc6dce8b61611",
".git/objects/7c/1667bbfbcfb996e5a59e725602158537da20b6": "2ffc24fe2431691f2e21903d5a4fc3b0",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "85fb081f640fd858e1baa68db8f3e55d",
".git/objects/80/497666ec8ca0abb81ce5bd9ce649896555753e": "40fbfed41e2afafb9acf4b3d04bef0b9",
".git/objects/80/e55c59fe055ec402b4e21ddf9792d97e51cd3c": "dc2024f6073a0e541e0bd16e24bd2bef",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "bb5ad116423ddf07049c2730cdb0c772",
".git/objects/86/e9ed3155ec880e94392c678117f0f5442e43da": "73a68fcdbcb6a80317a1624a15a99d73",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "71bcd051deb6c0e4fc5282bccd29ff28",
".git/objects/92/20c30aa36b86b63712885c4e434221594b5108": "9e38945a51e813959f692196697ff27a",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c5c14c6ba3bb02da4e5392d205ee6267",
".git/objects/97/542f8b66360bb2a7e109844857249520ff8117": "b883cbe10b2e6844c6cc8e94f625c8ec",
".git/objects/9d/de8c68f0a9d860c0e0c0cae1e233d94c7c005a": "4ebc2c0848ede5c2731aab187f2d90a2",
".git/objects/a1/e16071c06b80217725da8a300b01a28e3f9c51": "50f19a0ba6732d9ee16602e43cbbdeea",
".git/objects/a4/ccb6665b311ea87a0f360195a3486f6d4e6192": "eb355859198188df9fab08c52c10d033",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "0fe4f050c87bca1468613450a7fbfaea",
".git/objects/a8/d131e5435c1f67bfa5c5d2562d3518357c27cc": "01db3117ce676ed54f1c3e938d87f5f2",
".git/objects/a9/28d7da6ea66787165149f9ccf344aca5faa3e6": "39b6593d3b2856e708e5eb56efdf8df6",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "fb5577649705851ebb4de54e7f29e2ab",
".git/objects/ad/7f67bdf0e858b26b8b701da82fd6a3fba89795": "e5da55c6ebc2e2d7b90b0670ec530bfd",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "572f37892d3ef53b60b273b30f6436e4",
".git/objects/b9/150fe4a18c297d4b76ac0987994333a5de8885": "208a00ebce162e3d4711b69e318fc5ef",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "96233f83e8615fc3bc2c252e4aaa5698",
".git/objects/bc/5d7be8a23c2c23a0e1bee62debb51d33bcaafa": "a8120c68410253149c84f0d957354b2c",
".git/objects/bf/b1a2cd2c63a5dd176fe273c06a19184ce556fb": "57535dedc1b10c06c92c0e5c039dfc5b",
".git/objects/c1/017e5d7bf417916d5904ceffa48de9dbc0f4cd": "3e16c754b41f3e7fa913c535738a2a77",
".git/objects/c2/67ecd4855980e309520cb912b876f385de20e7": "c8fb9bd27f5057d2ef671ad12fcf3fcf",
".git/objects/c6/ded8e85c8307954f2422462feee155a3a01465": "2d2c6d082a4ca50606f0afb215d67176",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "4938f34d9cc8dae979506ac87d0a571f",
".git/objects/d1/5529bd477316988c7aca09a698008fbe036e17": "f156fb8e6eee87380509d74a483cda29",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d5/52f69a0b45f51a9ecfa3236dd45e982f7186d7": "9236e7f0246f901cef86e50fde3b8636",
".git/objects/d5/a51a3db8b9f589d68e6eedfecdfa338ca74fe8": "ba2feb0f56f9fb773d220382ab14dd80",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "ae4ee21bd71069c6e962deed7485df4f",
".git/objects/da/f769ac30d8e476225b277436e5510a5ea6013d": "5c68f325a5c8d41b4cd60bc284aa8d8d",
".git/objects/e6/60b7a4aa21c59aaad71ceee23b0bcc809d0018": "daa3eaf2648b69f13e37fa98568b7d20",
".git/objects/e9/40d022ecbcfe05b53085f48a871ce39509fa30": "de5d278881bad6e2dfe121365e14ea92",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/eb/134222838fc3173ea1dcc3ce03badca4543ee3": "e7c02f27aceb6304d30ec475a7ee1079",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ec/ba1f4285b3bd0925cdd7b5d32f22c2c2d3a499": "b628f438c590a66bc6856aaaef239765",
".git/objects/f2/2e21fceb6ff933b45fb9c3cf47e3cad364067c": "a8159ced98fc4ddfe5cf5f822f3c133a",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "cb1ad23398d21b0518b0805134ac5acc",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/f6/35b953dca0fb50f1407519f81cab1fc03d164e": "3383edcab3beca19d1cf164d4c92deee",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "badc782b67bf359bcce68100f8fe4312",
".git/objects/f8/254cfe1f2c8f43b0bb831dfe8e62fba2970239": "2ebdd0827e7de4c654fcf738d3b0d85f",
".git/objects/f8/bb3bb174206c23ee554d555c7e09418acacbea": "68e3464a2595a21ee14f037531e82ddc",
".git/objects/f9/411e0809b17492219fdae8679a575daacba3e5": "9a598928d78237b1fceeb50c77aa15eb",
".git/objects/f9/68cd13da020abb87761ef262e771f289c2c254": "098bcb19e7518ab0653a98aa8d769155",
".git/objects/fa/a69a290952baed4a031d63478f76fa8f2659aa": "0210c0c2456a31916ecc2ac27ed573fb",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "d534e39531c224a748c356a964b910b0",
".git/objects/fd/3e42eba696db3965767c729fbf18829717ddeb": "26863b00542dc7a90e7f36e4e0700183",
".git/refs/heads/main": "aaf4e129a70f1b49246e8ac4158a6ecc",
"assets/AssetManifest.bin": "0de9846c6c09a36da63c00785f0806e7",
"assets/AssetManifest.bin.json": "cd7cbd2f39cce57c9b879ad10af87d77",
"assets/assets/fonts/product-sans/bold-italic.ttf": "90773b6158663ab0fe78b32680733677",
"assets/assets/fonts/product-sans/bold.ttf": "4457817ac2b9993c65e81aa05828fe9c",
"assets/assets/fonts/product-sans/italic.ttf": "0ecddcdeccb7761ce899aa9ad9f0ac3f",
"assets/assets/fonts/product-sans/medium-italic.ttf": "8fd3737925e83c87d78a13700ccf9a62",
"assets/assets/fonts/product-sans/medium.ttf": "8d57e4014b18edef070d285746485115",
"assets/assets/fonts/product-sans/regular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/images/1.5x/app_icon.png": "986c60fc4410af242b49daa9ff696dae",
"assets/assets/images/2.0x/app_icon.png": "477911ed3dd94b1aed8dd1e9fbd41e73",
"assets/assets/images/3.0x/app_icon.png": "14a9c4b1e2541e63d68972b1c272cfc7",
"assets/assets/images/4.0x/app_icon.png": "1c1ac60648abb35a41cf2335ebdffffa",
"assets/assets/images/app_icon.png": "c28c2097000ad3fdc9e388182d925d8b",
"assets/assets/images/app_logo.png": "ed0265f59f0af5ca84c4e0caa17d8562",
"assets/assets/images/end_game.jpg": "1438d3b03d2bb9cc9b9a7f75dd66d3c4",
"assets/assets/images/iron_man.jpg": "e0525108c978e202905b7e75080a307a",
"assets/assets/images/love_and_thunder.jpg": "30c7147bab1a3f266631c2ef1b97ad78",
"assets/assets/images/no_way_home.jpg": "d1b17e144e3f24f234438a6414744474",
"assets/assets/images/user.png": "3d78be0fd923fa38dcc3351e9e24c6e4",
"assets/assets/video/app_intro.mp4": "2fdd9aa0e0a33ca885759426b1306315",
"assets/assets/video/end_game.mp4": "7c22a584e7a7051b27217ea1fb006a7e",
"assets/assets/video/iron_man.mp4": "ad63aad947e866779cb363e1ad15aa5f",
"assets/assets/video/love_and_thunder.mp4": "aa5dfa263b1d3336c90760bf0a54d050",
"assets/assets/video/netflix_intro.mp4": "2fdd9aa0e0a33ca885759426b1306315",
"assets/assets/video/no_way_home.mp4": "f6cab717569fbf1cb7cd0fa124c0e0c3",
"assets/FontManifest.json": "c28f1684a17f9c2af0c3a5f22e209544",
"assets/fonts/MaterialIcons-Regular.otf": "3384482bea070c51c01dc1b8476dbd5a",
"assets/NOTICES": "1856a4977fb79cba45c81c3d68b03c45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/screenshots/explore.gif": "ce173418586b81513ddf0ed556fe1fdf",
"assets/screenshots/flutter_01.png": "0f01523128b92a76739ca8e255963160",
"assets/screenshots/flutter_02.png": "77ee8d0d5a66bdbd4743ce7e8a329884",
"assets/screenshots/flutter_03.png": "59b3cda60d84fa811622f6918c921dc8",
"assets/screenshots/flutter_04.png": "bd2972f846aa32ed19b2e5e7c6fb7a7a",
"assets/screenshots/info.gif": "f71d3b298c2f642c0f9fda77f91aff1d",
"assets/screenshots/intro-video.gif": "3bec5cc9c1efc4d61a5bd880cd51fd85",
"assets/screenshots/splash.gif": "d2439c1aaf4d676d88dd294c4a194fd6",
"assets/screenshots/video-interaction.gif": "82086e5311ec7a88d6f35c5075d5d491",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "c28c2097000ad3fdc9e388182d925d8b",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "5723ca2f579a6630ea76343545d128b0",
"icons/Icon-192.png": "c28c2097000ad3fdc9e388182d925d8b",
"icons/Icon-512.png": "c28c2097000ad3fdc9e388182d925d8b",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "76a589038df951919b5fd07394d5531a",
"/": "76a589038df951919b5fd07394d5531a",
"main.dart.js": "4cbeb5a3d0df2a94d5bb030498764d3b",
"manifest.json": "25c0d22f6606e3da5cb5b15778434fbf",
"version.json": "ed01ff1500faabde5c366727dc9d74ce"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
