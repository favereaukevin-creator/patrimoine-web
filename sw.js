// Généré à la construction : copie hors ligne de Sillon (version web).
const CACHE = 'sillon-6ea9dfa0653b'
const BASE = "/patrimoine-web/"
const FICHIERS = ["/patrimoine-web/","/patrimoine-web/assets/Affaires-DEwRgXyY.js","/patrimoine-web/assets/Affiner-Cj8jV93B.js","/patrimoine-web/assets/AssuranceVie-z5qiJwd7.js","/patrimoine-web/assets/BarresAnnees-E2VSXPD4.js","/patrimoine-web/assets/BarresDoubles-zfm6k0QQ.js","/patrimoine-web/assets/BoutonAffaire-D9HgCmaQ.js","/patrimoine-web/assets/Budget-DRW7btIZ.js","/patrimoine-web/assets/Calendrier-D0nS9YKm.js","/patrimoine-web/assets/Champs-DA5yVypd.js","/patrimoine-web/assets/ChoixScpi-Cd8TKKVm.js","/patrimoine-web/assets/EffetLevier-DzAz6e3-.js","/patrimoine-web/assets/EpargneSalariale-Be7S4iUO.js","/patrimoine-web/assets/FicheClient-Bwo9nbv6.js","/patrimoine-web/assets/Immo-BrlGHivi.js","/patrimoine-web/assets/ImportClients-CxUwQCWn.js","/patrimoine-web/assets/IndiceReprise-B0fSURDV.js","/patrimoine-web/assets/ListeEcheances-Beszd1oc.js","/patrimoine-web/assets/MesScpi-BRuJgECo.js","/patrimoine-web/assets/OngletFonds-CusfsOvM.js","/patrimoine-web/assets/Per-CAo_FVkL.js","/patrimoine-web/assets/PierreDeuxCoups-ByYq3UyK.js","/patrimoine-web/assets/Prospection-BFS4IuTX.js","/patrimoine-web/assets/Repliable-UuQhmrVu.js","/patrimoine-web/assets/ResidencePrincipale-DrZGf72N.js","/patrimoine-web/assets/ScpiViVp-DfW1yBVJ.js","/patrimoine-web/assets/Synthese-l31JXWQ_.js","/patrimoine-web/assets/TableauDeBord-BuSFFHXE.js","/patrimoine-web/assets/__vite-browser-external-D2U8RZpp.js","/patrimoine-web/assets/affaires-ZAgcGz7M.js","/patrimoine-web/assets/avParcours-DQdxx19w.js","/patrimoine-web/assets/budget-v-G2_OML.js","/patrimoine-web/assets/calendrier-Bf4FshT5.js","/patrimoine-web/assets/commun-DttMdfHo.js","/patrimoine-web/assets/core-DxEK1kPB.js","/patrimoine-web/assets/diapositives-qT4AGL_B.js","/patrimoine-web/assets/dispositifs-g49H5ndu.js","/patrimoine-web/assets/fiche-ChCYmc4h.js","/patrimoine-web/assets/format-CGoLEOHU.js","/patrimoine-web/assets/fraunces-latin-ext-wght-normal-Ca2vKHc0.woff2","/patrimoine-web/assets/fraunces-latin-wght-normal-ukD16Tqj.woff2","/patrimoine-web/assets/fraunces-vietnamese-wght-normal-CnvboYUG.woff2","/patrimoine-web/assets/gammeStellium-Dd4Yxwog.js","/patrimoine-web/assets/graphiques-ccChCUNi.js","/patrimoine-web/assets/importClients-sNyz1w0V.js","/patrimoine-web/assets/index-BJsDwrbE.css","/patrimoine-web/assets/index-CSXlfC0v.js","/patrimoine-web/assets/jsx-runtime-CItBDpmr.js","/patrimoine-web/assets/jszip.min-3XXygzvy.js","/patrimoine-web/assets/modelePptx-BzsvpFs5.js","/patrimoine-web/assets/partageValeur-Bv1I5L-r.js","/patrimoine-web/assets/plus-jakarta-sans-latin-ext-wght-normal-DmpS2jIq.woff2","/patrimoine-web/assets/plus-jakarta-sans-latin-wght-normal-eXO_dkmS.woff2","/patrimoine-web/assets/plus-jakarta-sans-vietnamese-wght-normal-qRpaaN48.woff2","/patrimoine-web/assets/pptxgen.es-CJm_eVqt.js","/patrimoine-web/assets/presentation-DFtH4fIs.js","/patrimoine-web/assets/presentationEpargneSalariale-CIO_MOgG.js","/patrimoine-web/assets/projection-CHw0cPBk.js","/patrimoine-web/assets/propositionEpargneSalariale-B_vQ4R-u.js","/patrimoine-web/assets/reprise-CBxy0fkA.js","/patrimoine-web/assets/rolldown-runtime-COiEfhsA.js","/patrimoine-web/assets/tableur-Da0yguZ4.js","/patrimoine-web/assets/theme-BDXaBOsO.js","/patrimoine-web/assets/useLigneChoisie-Dpyfl1ZD.js","/patrimoine-web/assets/window-C7YeqisD.js","/patrimoine-web/assets/xlsx-BhFS8cqY.js","/patrimoine-web/budget-3-comptes.html","/patrimoine-web/budget-client.html","/patrimoine-web/favicon.svg","/patrimoine-web/icones/icone-256.png","/patrimoine-web/icones/icone-512.png","/patrimoine-web/icons.svg","/patrimoine-web/manifest.webmanifest","/patrimoine-web/robots.txt"]

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
