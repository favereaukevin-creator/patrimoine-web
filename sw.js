// Généré à la construction : copie hors ligne de Sillon (version web).
const CACHE = 'sillon-d5870c1952d0'
const BASE = "/patrimoine-web/"
const FICHIERS = ["/patrimoine-web/","/patrimoine-web/assets/AssuranceVie-C0xcGc8k.js","/patrimoine-web/assets/BarresAnnees-E2VSXPD4.js","/patrimoine-web/assets/BarresDoubles-zfm6k0QQ.js","/patrimoine-web/assets/BoutonPresentation-Bk7MNSXG.js","/patrimoine-web/assets/BoutonsExport-9jzncDwe.js","/patrimoine-web/assets/Budget-DKdb60zE.js","/patrimoine-web/assets/Calendrier-DGtxcPUF.js","/patrimoine-web/assets/Champs-DA5yVypd.js","/patrimoine-web/assets/EffetLevier-DzAz6e3-.js","/patrimoine-web/assets/EnteteImpression-U2I4nq9i.js","/patrimoine-web/assets/EpargneSalariale-TiyLcVMA.js","/patrimoine-web/assets/FicheClient-Gp04vJ3o.js","/patrimoine-web/assets/Immo-DIjzRq58.js","/patrimoine-web/assets/ImportClients-Dpi8vR_O.js","/patrimoine-web/assets/ListeEcheances-BhoYo0_z.js","/patrimoine-web/assets/MesScpi-DxS2gQsa.js","/patrimoine-web/assets/OngletFonds-B6bUhpnP.js","/patrimoine-web/assets/PierreDeuxCoups-BuDu7ckT.js","/patrimoine-web/assets/Prospection-BvIYOeFD.js","/patrimoine-web/assets/Repliable-UuQhmrVu.js","/patrimoine-web/assets/ResidencePrincipale-Cce4-kuD.js","/patrimoine-web/assets/ScpiViVp-D_o3M1hI.js","/patrimoine-web/assets/Synthese-D8OKrunO.js","/patrimoine-web/assets/TableauDeBord-CMB2oCmn.js","/patrimoine-web/assets/__vite-browser-external-D2U8RZpp.js","/patrimoine-web/assets/budget-v-G2_OML.js","/patrimoine-web/assets/calendrier-BDV_62-i.js","/patrimoine-web/assets/commun-DuU2pKyW.js","/patrimoine-web/assets/core-BnbWVz1Z.js","/patrimoine-web/assets/diapositives-CINARgGr.js","/patrimoine-web/assets/dispositifs-dQ0afdhi.js","/patrimoine-web/assets/format-CGoLEOHU.js","/patrimoine-web/assets/fraunces-latin-ext-wght-normal-Ca2vKHc0.woff2","/patrimoine-web/assets/fraunces-latin-wght-normal-ukD16Tqj.woff2","/patrimoine-web/assets/fraunces-vietnamese-wght-normal-CnvboYUG.woff2","/patrimoine-web/assets/gammeStellium-Dd4Yxwog.js","/patrimoine-web/assets/graphiques-ccChCUNi.js","/patrimoine-web/assets/immo-CR6X7d4n.js","/patrimoine-web/assets/importClients-DJcgxfUK.js","/patrimoine-web/assets/index-Cbwkjauu.js","/patrimoine-web/assets/index-ChO9ujeo.css","/patrimoine-web/assets/jsx-runtime-CItBDpmr.js","/patrimoine-web/assets/jszip.min-3XXygzvy.js","/patrimoine-web/assets/modelePptx-DIvMyFNM.js","/patrimoine-web/assets/parametres-BCoudmjn.js","/patrimoine-web/assets/partageValeur-Cce6keqA.js","/patrimoine-web/assets/pierreDeuxCoups-N1KNgY_G.js","/patrimoine-web/assets/plus-jakarta-sans-latin-ext-wght-normal-DmpS2jIq.woff2","/patrimoine-web/assets/plus-jakarta-sans-latin-wght-normal-eXO_dkmS.woff2","/patrimoine-web/assets/plus-jakarta-sans-vietnamese-wght-normal-qRpaaN48.woff2","/patrimoine-web/assets/pptxgen.es-CAXyvLis.js","/patrimoine-web/assets/presentation-CbZN69R1.js","/patrimoine-web/assets/presentationEpargneSalariale-DLV-aGi6.js","/patrimoine-web/assets/propositionEpargneSalariale-de-AHER1.js","/patrimoine-web/assets/residencePrincipale-CI5YaK_R.js","/patrimoine-web/assets/rolldown-runtime-COiEfhsA.js","/patrimoine-web/assets/saisie-BgRULYhi.js","/patrimoine-web/assets/scpiViVp-ChkxVfEF.js","/patrimoine-web/assets/synthese-BHmKfykv.js","/patrimoine-web/assets/tableur-Da0yguZ4.js","/patrimoine-web/assets/useLigneChoisie-Bfneuwrl.js","/patrimoine-web/assets/xlsx-BhFS8cqY.js","/patrimoine-web/budget-client.html","/patrimoine-web/favicon.svg","/patrimoine-web/icones/icone-256.png","/patrimoine-web/icones/icone-512.png","/patrimoine-web/icons.svg","/patrimoine-web/manifest.webmanifest","/patrimoine-web/robots.txt"]

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
