// Généré à la construction : copie hors ligne de Sillon (version web).
const CACHE = 'sillon-9f7b57407d30'
const BASE = "/patrimoine-web/"
const FICHIERS = ["/patrimoine-web/","/patrimoine-web/assets/AssuranceVie-CLfJs0IQ.js","/patrimoine-web/assets/BarresAnnees-E2VSXPD4.js","/patrimoine-web/assets/BarresDoubles-zfm6k0QQ.js","/patrimoine-web/assets/BoutonPresentation-Dy4DXg--.js","/patrimoine-web/assets/BoutonsExport-qgEqJKUM.js","/patrimoine-web/assets/Budget-DPKXnvAz.js","/patrimoine-web/assets/Calendrier-mc2Ft2aR.js","/patrimoine-web/assets/Champs-DA5yVypd.js","/patrimoine-web/assets/EffetLevier-DzAz6e3-.js","/patrimoine-web/assets/EnteteImpression-BvYCvPro.js","/patrimoine-web/assets/EpargneSalariale-CU2_QisL.js","/patrimoine-web/assets/FicheClient-BriAos1V.js","/patrimoine-web/assets/Immo-N9XJu-5a.js","/patrimoine-web/assets/ImportClients-DZRiKdoD.js","/patrimoine-web/assets/ListeEcheances-CGcHnVHR.js","/patrimoine-web/assets/MesScpi-DxS2gQsa.js","/patrimoine-web/assets/OngletFonds-B6bUhpnP.js","/patrimoine-web/assets/PierreDeuxCoups-KG3Dqty-.js","/patrimoine-web/assets/Prospection-D7WDrJIS.js","/patrimoine-web/assets/Repliable-UuQhmrVu.js","/patrimoine-web/assets/ResidencePrincipale-CMHeluMx.js","/patrimoine-web/assets/ScpiViVp-CkUlkBWd.js","/patrimoine-web/assets/Synthese-C51I0x_v.js","/patrimoine-web/assets/TableauDeBord-hXw-OLLj.js","/patrimoine-web/assets/__vite-browser-external-D2U8RZpp.js","/patrimoine-web/assets/budget-v-G2_OML.js","/patrimoine-web/assets/calendrier-DKfIQJ3k.js","/patrimoine-web/assets/commun-DuU2pKyW.js","/patrimoine-web/assets/core-BnbWVz1Z.js","/patrimoine-web/assets/diapositives-B8PuRt-r.js","/patrimoine-web/assets/dispositifs-b_fpjnKp.js","/patrimoine-web/assets/format-CGoLEOHU.js","/patrimoine-web/assets/fraunces-latin-ext-wght-normal-Ca2vKHc0.woff2","/patrimoine-web/assets/fraunces-latin-wght-normal-ukD16Tqj.woff2","/patrimoine-web/assets/fraunces-vietnamese-wght-normal-CnvboYUG.woff2","/patrimoine-web/assets/gammeStellium-Dd4Yxwog.js","/patrimoine-web/assets/graphiques-ccChCUNi.js","/patrimoine-web/assets/immo-LgHcOXN-.js","/patrimoine-web/assets/importClients-dKQDMnhj.js","/patrimoine-web/assets/index-B0jtTkuX.js","/patrimoine-web/assets/index-ChO9ujeo.css","/patrimoine-web/assets/jsx-runtime-CItBDpmr.js","/patrimoine-web/assets/jszip.min-3XXygzvy.js","/patrimoine-web/assets/modelePptx-CNi0Ww5X.js","/patrimoine-web/assets/parametres-B2K-B7Ok.js","/patrimoine-web/assets/partageValeur-BA5stnkz.js","/patrimoine-web/assets/pierreDeuxCoups-BxgM6nxI.js","/patrimoine-web/assets/plus-jakarta-sans-latin-ext-wght-normal-DmpS2jIq.woff2","/patrimoine-web/assets/plus-jakarta-sans-latin-wght-normal-eXO_dkmS.woff2","/patrimoine-web/assets/plus-jakarta-sans-vietnamese-wght-normal-qRpaaN48.woff2","/patrimoine-web/assets/pptxgen.es-lweRqz0x.js","/patrimoine-web/assets/presentation-C0mEmN6U.js","/patrimoine-web/assets/presentationEpargneSalariale-CtGdvhgW.js","/patrimoine-web/assets/propositionEpargneSalariale-B4-DfhZ7.js","/patrimoine-web/assets/residencePrincipale-D94kRaoE.js","/patrimoine-web/assets/rolldown-runtime-COiEfhsA.js","/patrimoine-web/assets/saisie-9bQr-c-J.js","/patrimoine-web/assets/scpiViVp-ChkxVfEF.js","/patrimoine-web/assets/synthese-DGyyOtZ3.js","/patrimoine-web/assets/tableur-Da0yguZ4.js","/patrimoine-web/assets/useLigneChoisie-Bfneuwrl.js","/patrimoine-web/assets/xlsx-BhFS8cqY.js","/patrimoine-web/budget-client.html","/patrimoine-web/favicon.svg","/patrimoine-web/icones/icone-256.png","/patrimoine-web/icones/icone-512.png","/patrimoine-web/icons.svg","/patrimoine-web/manifest.webmanifest","/patrimoine-web/robots.txt"]

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
