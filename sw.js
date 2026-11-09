// Généré à la construction : copie hors ligne de Sillon (version web).
const CACHE = 'sillon-4bcf593ed2e2'
const BASE = "/patrimoine-web/"
const FICHIERS = ["/patrimoine-web/","/patrimoine-web/assets/Affiner-Cj8jV93B.js","/patrimoine-web/assets/AssuranceVie-BoLNSUUY.js","/patrimoine-web/assets/BarresAnnees-E2VSXPD4.js","/patrimoine-web/assets/BarresDoubles-zfm6k0QQ.js","/patrimoine-web/assets/Budget-COUBaTHW.js","/patrimoine-web/assets/Calendrier-CFebXsuX.js","/patrimoine-web/assets/Champs-DA5yVypd.js","/patrimoine-web/assets/EffetLevier-DzAz6e3-.js","/patrimoine-web/assets/EpargneSalariale-CL60JlfR.js","/patrimoine-web/assets/FicheClient-CchlAOgu.js","/patrimoine-web/assets/Immo-CBY2lQfZ.js","/patrimoine-web/assets/ImportClients-DMiu58zx.js","/patrimoine-web/assets/ListeEcheances-Beszd1oc.js","/patrimoine-web/assets/MesScpi-p8V1Pevi.js","/patrimoine-web/assets/OngletFonds-BSpPKsqH.js","/patrimoine-web/assets/PierreDeuxCoups-D1wdONCV.js","/patrimoine-web/assets/Prospection-IHDn6v37.js","/patrimoine-web/assets/Repliable-UuQhmrVu.js","/patrimoine-web/assets/ResidencePrincipale-LJoVRVLR.js","/patrimoine-web/assets/ScpiViVp-DSrBu--g.js","/patrimoine-web/assets/Synthese-D0lEO44M.js","/patrimoine-web/assets/TableauDeBord-DLaW6wnA.js","/patrimoine-web/assets/__vite-browser-external-D2U8RZpp.js","/patrimoine-web/assets/avParcours-DQdxx19w.js","/patrimoine-web/assets/budget-v-G2_OML.js","/patrimoine-web/assets/calendrier-Bf4FshT5.js","/patrimoine-web/assets/commun-BMIucu7C.js","/patrimoine-web/assets/core-DxEK1kPB.js","/patrimoine-web/assets/diapositives-CGLQHOVW.js","/patrimoine-web/assets/dispositifs-B3KXN7_9.js","/patrimoine-web/assets/fiche-ChCYmc4h.js","/patrimoine-web/assets/format-CGoLEOHU.js","/patrimoine-web/assets/fraunces-latin-ext-wght-normal-Ca2vKHc0.woff2","/patrimoine-web/assets/fraunces-latin-wght-normal-ukD16Tqj.woff2","/patrimoine-web/assets/fraunces-vietnamese-wght-normal-CnvboYUG.woff2","/patrimoine-web/assets/gammeStellium-Dd4Yxwog.js","/patrimoine-web/assets/graphiques-ccChCUNi.js","/patrimoine-web/assets/importClients-sNyz1w0V.js","/patrimoine-web/assets/index-BWo_scjN.js","/patrimoine-web/assets/index-CxNORQql.css","/patrimoine-web/assets/jsx-runtime-CItBDpmr.js","/patrimoine-web/assets/jszip.min-3XXygzvy.js","/patrimoine-web/assets/millesime-8jS1KqbM.js","/patrimoine-web/assets/modelePptx-daAqdwM4.js","/patrimoine-web/assets/plus-jakarta-sans-latin-ext-wght-normal-DmpS2jIq.woff2","/patrimoine-web/assets/plus-jakarta-sans-latin-wght-normal-eXO_dkmS.woff2","/patrimoine-web/assets/plus-jakarta-sans-vietnamese-wght-normal-qRpaaN48.woff2","/patrimoine-web/assets/pptxgen.es-5cnIxBDJ.js","/patrimoine-web/assets/presentation-7aiuk6d4.js","/patrimoine-web/assets/presentationEpargneSalariale-bJHiNiDn.js","/patrimoine-web/assets/projection-WCLDsCem.js","/patrimoine-web/assets/propositionEpargneSalariale-Cpphp9Fd.js","/patrimoine-web/assets/rolldown-runtime-COiEfhsA.js","/patrimoine-web/assets/tableur-Da0yguZ4.js","/patrimoine-web/assets/theme-B4kAa_ts.js","/patrimoine-web/assets/useLigneChoisie-Bfneuwrl.js","/patrimoine-web/assets/window-BVhH7E3E.js","/patrimoine-web/assets/xlsx-BhFS8cqY.js","/patrimoine-web/budget-client.html","/patrimoine-web/favicon.svg","/patrimoine-web/icones/icone-256.png","/patrimoine-web/icones/icone-512.png","/patrimoine-web/icons.svg","/patrimoine-web/manifest.webmanifest","/patrimoine-web/robots.txt"]

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
