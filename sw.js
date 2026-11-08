// Généré à la construction : copie hors ligne de Sillon (version web).
const CACHE = 'sillon-e0ffc21c785a'
const BASE = "/patrimoine-web/"
const FICHIERS = ["/patrimoine-web/","/patrimoine-web/assets/AssuranceVie-Bd7mMCtt.js","/patrimoine-web/assets/BarresAnnees-E2VSXPD4.js","/patrimoine-web/assets/BarresDoubles-zfm6k0QQ.js","/patrimoine-web/assets/BoutonPresentation-BS8J7fo7.js","/patrimoine-web/assets/BoutonsExport-BSNRLPMU.js","/patrimoine-web/assets/Budget-3xGsDdGo.js","/patrimoine-web/assets/Calendrier-CdaleQNm.js","/patrimoine-web/assets/Champs-DA5yVypd.js","/patrimoine-web/assets/EffetLevier-DzAz6e3-.js","/patrimoine-web/assets/EnteteImpression-Yvl6lyg-.js","/patrimoine-web/assets/EpargneSalariale-DFPV_Vtr.js","/patrimoine-web/assets/FicheClient-D2BGcyHY.js","/patrimoine-web/assets/Immo-9FNP9u3i.js","/patrimoine-web/assets/ImportClients-Dy8koNgr.js","/patrimoine-web/assets/ListeEcheances-BaAqdwoE.js","/patrimoine-web/assets/MesScpi-DxS2gQsa.js","/patrimoine-web/assets/OngletFonds-B6bUhpnP.js","/patrimoine-web/assets/PierreDeuxCoups-6KaYimgX.js","/patrimoine-web/assets/Prospection-DJ8VEaTz.js","/patrimoine-web/assets/Repliable-UuQhmrVu.js","/patrimoine-web/assets/ResidencePrincipale-zW9jJ-yo.js","/patrimoine-web/assets/ScpiViVp-BLN3smSB.js","/patrimoine-web/assets/Synthese-DS7AlMlE.js","/patrimoine-web/assets/TableauDeBord-Cf9oD9l1.js","/patrimoine-web/assets/__vite-browser-external-D2U8RZpp.js","/patrimoine-web/assets/budget-v-G2_OML.js","/patrimoine-web/assets/calendrier-V63XO4rz.js","/patrimoine-web/assets/commun-DuU2pKyW.js","/patrimoine-web/assets/core-BnbWVz1Z.js","/patrimoine-web/assets/diapositives-BepyOywE.js","/patrimoine-web/assets/dispositifs-CwEBoqkO.js","/patrimoine-web/assets/format-CGoLEOHU.js","/patrimoine-web/assets/fraunces-latin-ext-wght-normal-Ca2vKHc0.woff2","/patrimoine-web/assets/fraunces-latin-wght-normal-ukD16Tqj.woff2","/patrimoine-web/assets/fraunces-vietnamese-wght-normal-CnvboYUG.woff2","/patrimoine-web/assets/gammeStellium-Dd4Yxwog.js","/patrimoine-web/assets/graphiques-ccChCUNi.js","/patrimoine-web/assets/immo-N2U1gvHx.js","/patrimoine-web/assets/importClients-DFH8Lf_N.js","/patrimoine-web/assets/index-BSoVzIO0.js","/patrimoine-web/assets/index-ChO9ujeo.css","/patrimoine-web/assets/jsx-runtime-CItBDpmr.js","/patrimoine-web/assets/jszip.min-3XXygzvy.js","/patrimoine-web/assets/modelePptx-CEqC84SV.js","/patrimoine-web/assets/parametres-B6IAv5JF.js","/patrimoine-web/assets/partageValeur-mU4JOjTu.js","/patrimoine-web/assets/pierreDeuxCoups-BxgM6nxI.js","/patrimoine-web/assets/plus-jakarta-sans-latin-ext-wght-normal-DmpS2jIq.woff2","/patrimoine-web/assets/plus-jakarta-sans-latin-wght-normal-eXO_dkmS.woff2","/patrimoine-web/assets/plus-jakarta-sans-vietnamese-wght-normal-qRpaaN48.woff2","/patrimoine-web/assets/pptxgen.es-COXpvcSH.js","/patrimoine-web/assets/presentation-uMeIleZk.js","/patrimoine-web/assets/presentationEpargneSalariale-fHrtakti.js","/patrimoine-web/assets/propositionEpargneSalariale-Cnea5-b7.js","/patrimoine-web/assets/residencePrincipale-BHIU1zon.js","/patrimoine-web/assets/rolldown-runtime-COiEfhsA.js","/patrimoine-web/assets/saisie-CuvykpGC.js","/patrimoine-web/assets/scpiViVp-ChkxVfEF.js","/patrimoine-web/assets/synthese-Dw97sJcc.js","/patrimoine-web/assets/tableur-Da0yguZ4.js","/patrimoine-web/assets/useLigneChoisie-Bfneuwrl.js","/patrimoine-web/assets/xlsx-BhFS8cqY.js","/patrimoine-web/budget-client.html","/patrimoine-web/favicon.svg","/patrimoine-web/icones/icone-256.png","/patrimoine-web/icones/icone-512.png","/patrimoine-web/icons.svg","/patrimoine-web/manifest.webmanifest","/patrimoine-web/robots.txt"]

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
