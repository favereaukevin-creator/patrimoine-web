// Généré à la construction : copie hors ligne de Sillon (version web).
const CACHE = 'sillon-f10c16408f85'
const BASE = "/patrimoine-web/"
const FICHIERS = ["/patrimoine-web/","/patrimoine-web/assets/AssuranceVie-BVfkKrfu.js","/patrimoine-web/assets/BarresAnnees-E2VSXPD4.js","/patrimoine-web/assets/BarresDoubles-zfm6k0QQ.js","/patrimoine-web/assets/BoutonPresentation-CNO2zHUv.js","/patrimoine-web/assets/BoutonsExport-zj-_JmhG.js","/patrimoine-web/assets/Budget-BGCJX9Qh.js","/patrimoine-web/assets/Calendrier-BqiAIX2x.js","/patrimoine-web/assets/Champs-DA5yVypd.js","/patrimoine-web/assets/EffetLevier-DzAz6e3-.js","/patrimoine-web/assets/EnteteImpression-DSxyZaVs.js","/patrimoine-web/assets/EpargneSalariale-BByOHqiu.js","/patrimoine-web/assets/FicheClient-D3nOjJL-.js","/patrimoine-web/assets/Immo-DjvZdTX8.js","/patrimoine-web/assets/ImportClients-PwNlem9o.js","/patrimoine-web/assets/ListeEcheances-heqz2Yyb.js","/patrimoine-web/assets/MesScpi-DxS2gQsa.js","/patrimoine-web/assets/OngletFonds-B6bUhpnP.js","/patrimoine-web/assets/PierreDeuxCoups-bJ1px51P.js","/patrimoine-web/assets/Prospection-DA_bdpEA.js","/patrimoine-web/assets/Repliable-UuQhmrVu.js","/patrimoine-web/assets/ResidencePrincipale-aV3gn2PT.js","/patrimoine-web/assets/ScpiViVp-CXWRHyNb.js","/patrimoine-web/assets/Synthese-COy5DSC6.js","/patrimoine-web/assets/TableauDeBord-DW5bkXYB.js","/patrimoine-web/assets/__vite-browser-external-D2U8RZpp.js","/patrimoine-web/assets/budget-v-G2_OML.js","/patrimoine-web/assets/calendrier-Dp1E9Oia.js","/patrimoine-web/assets/commun-DuU2pKyW.js","/patrimoine-web/assets/core-BnbWVz1Z.js","/patrimoine-web/assets/diapositives-tyWgpgpF.js","/patrimoine-web/assets/dispositifs-dx7VfHhD.js","/patrimoine-web/assets/format-CGoLEOHU.js","/patrimoine-web/assets/fraunces-latin-ext-wght-normal-Ca2vKHc0.woff2","/patrimoine-web/assets/fraunces-latin-wght-normal-ukD16Tqj.woff2","/patrimoine-web/assets/fraunces-vietnamese-wght-normal-CnvboYUG.woff2","/patrimoine-web/assets/gammeStellium-Dd4Yxwog.js","/patrimoine-web/assets/graphiques-ccChCUNi.js","/patrimoine-web/assets/immo-BtptY6I7.js","/patrimoine-web/assets/importClients-BSqyPZOy.js","/patrimoine-web/assets/index-ByLeOBZP.js","/patrimoine-web/assets/index-ChO9ujeo.css","/patrimoine-web/assets/jsx-runtime-CItBDpmr.js","/patrimoine-web/assets/jszip.min-3XXygzvy.js","/patrimoine-web/assets/modelePptx-BZPbqzpy.js","/patrimoine-web/assets/parametres-DCMmH0NE.js","/patrimoine-web/assets/partageValeur-CltF21Zz.js","/patrimoine-web/assets/pierreDeuxCoups-N1KNgY_G.js","/patrimoine-web/assets/plus-jakarta-sans-latin-ext-wght-normal-DmpS2jIq.woff2","/patrimoine-web/assets/plus-jakarta-sans-latin-wght-normal-eXO_dkmS.woff2","/patrimoine-web/assets/plus-jakarta-sans-vietnamese-wght-normal-qRpaaN48.woff2","/patrimoine-web/assets/pptxgen.es-CsRlQqD_.js","/patrimoine-web/assets/presentation-sPACST8U.js","/patrimoine-web/assets/presentationEpargneSalariale-vSjQ3Pih.js","/patrimoine-web/assets/propositionEpargneSalariale-BTEC8gIV.js","/patrimoine-web/assets/residencePrincipale-DomPyiPQ.js","/patrimoine-web/assets/rolldown-runtime-COiEfhsA.js","/patrimoine-web/assets/saisie-BoqopLUV.js","/patrimoine-web/assets/scpiViVp-ChkxVfEF.js","/patrimoine-web/assets/synthese-Br6yvpA0.js","/patrimoine-web/assets/tableur-Da0yguZ4.js","/patrimoine-web/assets/useLigneChoisie-Bfneuwrl.js","/patrimoine-web/assets/xlsx-BhFS8cqY.js","/patrimoine-web/budget-client.html","/patrimoine-web/favicon.svg","/patrimoine-web/icones/icone-256.png","/patrimoine-web/icones/icone-512.png","/patrimoine-web/icons.svg","/patrimoine-web/manifest.webmanifest","/patrimoine-web/robots.txt"]

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
