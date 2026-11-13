// Généré à la construction : copie hors ligne de Sillon (version web).
const CACHE = 'sillon-c54ee9ba5aae'
const BASE = "/patrimoine-web/"
const FICHIERS = ["/patrimoine-web/","/patrimoine-web/assets/Affaires-DbQVvV1w.js","/patrimoine-web/assets/Affiner-Cj8jV93B.js","/patrimoine-web/assets/AssuranceVie-EeMxk5Ft.js","/patrimoine-web/assets/BarresAnnees-E2VSXPD4.js","/patrimoine-web/assets/BarresDoubles-zfm6k0QQ.js","/patrimoine-web/assets/BoutonAffaire-BoSigjkm.js","/patrimoine-web/assets/Budget-CgRT_r7T.js","/patrimoine-web/assets/Calendrier-De35Z7to.js","/patrimoine-web/assets/Champs-DA5yVypd.js","/patrimoine-web/assets/ChoixScpi-CILoO3aW.js","/patrimoine-web/assets/EffetLevier-DzAz6e3-.js","/patrimoine-web/assets/EpargneSalariale-ylNdph4R.js","/patrimoine-web/assets/FicheClient-BDgM5TIe.js","/patrimoine-web/assets/Immo-EePCXYvn.js","/patrimoine-web/assets/ImportClients-D98CC5vO.js","/patrimoine-web/assets/IndiceReprise-B0fSURDV.js","/patrimoine-web/assets/ListeEcheances-Beszd1oc.js","/patrimoine-web/assets/MesScpi-M1KaAzZL.js","/patrimoine-web/assets/OngletFonds-PwcFHdc7.js","/patrimoine-web/assets/Per-DyLo9YzB.js","/patrimoine-web/assets/PierreDeuxCoups-CvsFD-yx.js","/patrimoine-web/assets/Prospection-TcIyBYKH.js","/patrimoine-web/assets/Repliable-UuQhmrVu.js","/patrimoine-web/assets/ResidencePrincipale-DAqgnBxL.js","/patrimoine-web/assets/ScpiViVp-CS5lVLF-.js","/patrimoine-web/assets/Synthese-Cx9PslH0.js","/patrimoine-web/assets/TableauDeBord-DJ0JQv2A.js","/patrimoine-web/assets/__vite-browser-external-D2U8RZpp.js","/patrimoine-web/assets/affaires-DEcvytJX.js","/patrimoine-web/assets/avParcours-DQdxx19w.js","/patrimoine-web/assets/budget-v-G2_OML.js","/patrimoine-web/assets/calendrier-Bf4FshT5.js","/patrimoine-web/assets/commun-DQlDQAvy.js","/patrimoine-web/assets/core-DxEK1kPB.js","/patrimoine-web/assets/diapositives-tGZ1eFg9.js","/patrimoine-web/assets/dispositifs-D8C_DlCt.js","/patrimoine-web/assets/fiche-ChCYmc4h.js","/patrimoine-web/assets/format-CGoLEOHU.js","/patrimoine-web/assets/fraunces-latin-ext-wght-normal-Ca2vKHc0.woff2","/patrimoine-web/assets/fraunces-latin-wght-normal-ukD16Tqj.woff2","/patrimoine-web/assets/fraunces-vietnamese-wght-normal-CnvboYUG.woff2","/patrimoine-web/assets/gammeStellium-Dd4Yxwog.js","/patrimoine-web/assets/graphiques-ccChCUNi.js","/patrimoine-web/assets/importClients-sNyz1w0V.js","/patrimoine-web/assets/index-C18su7Fn.js","/patrimoine-web/assets/index-DnQp2qJA.css","/patrimoine-web/assets/jsx-runtime-CItBDpmr.js","/patrimoine-web/assets/jszip.min-3XXygzvy.js","/patrimoine-web/assets/modelePptx-BzsvpFs5.js","/patrimoine-web/assets/partageValeur-Bv1I5L-r.js","/patrimoine-web/assets/plus-jakarta-sans-latin-ext-wght-normal-DmpS2jIq.woff2","/patrimoine-web/assets/plus-jakarta-sans-latin-wght-normal-eXO_dkmS.woff2","/patrimoine-web/assets/plus-jakarta-sans-vietnamese-wght-normal-qRpaaN48.woff2","/patrimoine-web/assets/pptxgen.es-Cce-kjOO.js","/patrimoine-web/assets/presentation-DJLINTU1.js","/patrimoine-web/assets/presentationEpargneSalariale-B3Kih1ta.js","/patrimoine-web/assets/projection-BXxYJERS.js","/patrimoine-web/assets/propositionEpargneSalariale-B_vQ4R-u.js","/patrimoine-web/assets/reprise-eCn9acbV.js","/patrimoine-web/assets/rolldown-runtime-COiEfhsA.js","/patrimoine-web/assets/tableur-Da0yguZ4.js","/patrimoine-web/assets/theme-BAWnSZRC.js","/patrimoine-web/assets/useLigneChoisie-Dpyfl1ZD.js","/patrimoine-web/assets/window-CDQQ6dk1.js","/patrimoine-web/assets/xlsx-BhFS8cqY.js","/patrimoine-web/budget-3-comptes.html","/patrimoine-web/budget-client.html","/patrimoine-web/favicon.svg","/patrimoine-web/icones/icone-256.png","/patrimoine-web/icones/icone-512.png","/patrimoine-web/icons.svg","/patrimoine-web/manifest.webmanifest","/patrimoine-web/robots.txt"]

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
