// Généré à la construction : copie hors ligne de Sillon (version web).
const CACHE = 'sillon-1a78758cf5b4'
const BASE = "/patrimoine-web/"
const FICHIERS = ["/patrimoine-web/","/patrimoine-web/assets/AssuranceVie-B8P6oqWQ.js","/patrimoine-web/assets/BarresAnnees-WqYiGBnc.js","/patrimoine-web/assets/BarresDoubles-zfm6k0QQ.js","/patrimoine-web/assets/BoutonPresentation-BuyHAsul.js","/patrimoine-web/assets/BoutonsExport-BWJvPgUG.js","/patrimoine-web/assets/Budget-CyGE23mP.js","/patrimoine-web/assets/Calendrier-CHymZV4_.js","/patrimoine-web/assets/Champs-DA5yVypd.js","/patrimoine-web/assets/EffetLevier-DzAz6e3-.js","/patrimoine-web/assets/EnteteImpression-B0-b0g0i.js","/patrimoine-web/assets/EpargneSalariale-B1RcYrc4.js","/patrimoine-web/assets/FicheClient-ufE__Haa.js","/patrimoine-web/assets/Immo-DeKkxobS.js","/patrimoine-web/assets/ImportClients-D_uCG5Ql.js","/patrimoine-web/assets/ListeEcheances-BHUqOm4P.js","/patrimoine-web/assets/MesScpi-DxS2gQsa.js","/patrimoine-web/assets/OngletFonds-B6bUhpnP.js","/patrimoine-web/assets/PierreDeuxCoups-DbzeTfbq.js","/patrimoine-web/assets/Prospection-CFkrC4RF.js","/patrimoine-web/assets/Repliable-UuQhmrVu.js","/patrimoine-web/assets/ResidencePrincipale-BsoHqArh.js","/patrimoine-web/assets/ScpiViVp-BEdhvqTN.js","/patrimoine-web/assets/Synthese-DSBruk3i.js","/patrimoine-web/assets/TableauDeBord-D0M-4UL_.js","/patrimoine-web/assets/__vite-browser-external-D2U8RZpp.js","/patrimoine-web/assets/budget-v-G2_OML.js","/patrimoine-web/assets/calendrier-CKzPbq7j.js","/patrimoine-web/assets/commun-DuU2pKyW.js","/patrimoine-web/assets/core-BnbWVz1Z.js","/patrimoine-web/assets/diapositives-gURf-eQC.js","/patrimoine-web/assets/dispositifs-2vLNxW5G.js","/patrimoine-web/assets/format-CGoLEOHU.js","/patrimoine-web/assets/fraunces-latin-ext-wght-normal-Ca2vKHc0.woff2","/patrimoine-web/assets/fraunces-latin-wght-normal-ukD16Tqj.woff2","/patrimoine-web/assets/fraunces-vietnamese-wght-normal-CnvboYUG.woff2","/patrimoine-web/assets/gammeStellium-Dd4Yxwog.js","/patrimoine-web/assets/graphiques-ccChCUNi.js","/patrimoine-web/assets/immo-C1d8oXMA.js","/patrimoine-web/assets/importClients-BMDfcVkT.js","/patrimoine-web/assets/index-BDa3q1_M.js","/patrimoine-web/assets/index-D4JSlQ7C.css","/patrimoine-web/assets/jsx-runtime-CItBDpmr.js","/patrimoine-web/assets/jszip.min-3XXygzvy.js","/patrimoine-web/assets/modelePptx-ihD2mcmk.js","/patrimoine-web/assets/parametres-35C-hHmq.js","/patrimoine-web/assets/partageValeur-zDQ64Pgs.js","/patrimoine-web/assets/pierreDeuxCoups-N1KNgY_G.js","/patrimoine-web/assets/plus-jakarta-sans-latin-ext-wght-normal-DmpS2jIq.woff2","/patrimoine-web/assets/plus-jakarta-sans-latin-wght-normal-eXO_dkmS.woff2","/patrimoine-web/assets/plus-jakarta-sans-vietnamese-wght-normal-qRpaaN48.woff2","/patrimoine-web/assets/pptxgen.es-Dy_K1F2c.js","/patrimoine-web/assets/presentation-BsdUIf9g.js","/patrimoine-web/assets/presentationEpargneSalariale-CZd5_Yt4.js","/patrimoine-web/assets/propositionEpargneSalariale-oxnA5-qJ.js","/patrimoine-web/assets/residencePrincipale-DgrRM0Pu.js","/patrimoine-web/assets/rolldown-runtime-COiEfhsA.js","/patrimoine-web/assets/saisie-BaEztboT.js","/patrimoine-web/assets/scpiViVp-ChkxVfEF.js","/patrimoine-web/assets/synthese-CjTh0Rza.js","/patrimoine-web/assets/tableur-Da0yguZ4.js","/patrimoine-web/assets/useLigneChoisie-Bfneuwrl.js","/patrimoine-web/assets/xlsx-BhFS8cqY.js","/patrimoine-web/budget-client.html","/patrimoine-web/favicon.svg","/patrimoine-web/icones/icone-256.png","/patrimoine-web/icones/icone-512.png","/patrimoine-web/icons.svg","/patrimoine-web/manifest.webmanifest","/patrimoine-web/robots.txt"]

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting()))
})

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(noms => Promise.all(noms.filter(n => n.startsWith('sillon-') && n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', e => {
  const req = e.request
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return
  // La page : d'abord internet (pour avoir la dernière version), sinon la copie.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(() => caches.match(BASE, { ignoreSearch: true })))
    return
  }
  // Le reste porte une empreinte dans son nom : la copie suffit.
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req)))
})
