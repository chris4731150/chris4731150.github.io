// Construit les pages du site à partir de papa/jeux.json et oceane/jeux.json.
// Pour ajouter un créateur : une ligne dans CREATEURS + un dossier avec son jeux.json.
const CREATEURS = [
  { id: 'papa',   nom: 'Papa',   initiale: 'P' },
  { id: 'oceane', nom: 'Océane', initiale: 'O' },
];

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const dateFr = iso => { const d = new Date(iso + 'T12:00:00'); return isNaN(d) ? esc(iso) : d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }); };
const nomVersion = v => { v = String(v); return /^\d+$/.test(v) ? 'Version ' + v : /^\d/.test(v) ? 'Versions ' + v : v; };
const recent = iso => (Date.now() - new Date(iso + 'T12:00:00')) / 864e5 <= 7;
const createur = id => CREATEURS.find(c => c.id === id);
const de = nom => (/^[aeiouyéèêàâîôûh]/i.test(nom) ? 'd’' : 'de ') + esc(nom); // « d’Océane », « de Papa »

async function charger(c) {
  try {
    const r = await fetch(`/${c.id}/jeux.json?v=${Date.now()}`);
    const d = await r.json();
    return (d.jeux || []).map(j => ({ ...j, c, journal: j.journal || [] }));
  } catch (e) { console.warn('jeux.json illisible pour', c.id, e); return []; }
}
const chargerTout = async () => (await Promise.all(CREATEURS.map(charger))).flat();
const derniere = j => j.journal[0] || {};

function carte(j, avecCreateur) {
  const v = derniere(j), lien = `/${j.c.id}/${encodeURIComponent(j.id)}/`;
  return `<article class="jeu ${j.c.id}">
    ${v.date && recent(v.date) ? '<span class="pastille">Mis à jour</span>' : ''}
    <a class="img" href="${lien}" style="background:${esc(j.fond || '#cfe8f7')}"><img src="/${j.c.id}/${esc(j.image)}" alt="Aperçu du jeu ${esc(j.titre)}" loading="lazy"></a>
    <div class="txt">
      <h3>${esc(j.titre)}</h3>
      <p>${esc(j.description)}</p>
      <div class="meta">${avecCreateur ? `<a class="tag" href="/${j.c.id}/">par ${esc(j.c.nom)}</a>` : ''}<span>${v.version ? esc(nomVersion(v.version)) : ''}${v.date ? ' · ' + dateFr(v.date) : ''}</span></div>
      <div class="boutons"><a class="btn jouer" href="${lien}">Jouer</a><a class="btn second" href="/journal.html?c=${j.c.id}&j=${encodeURIComponent(j.id)}">Journal</a></div>
    </div></article>`;
}
const parDate = (a, b) => (derniere(b).date || '').localeCompare(derniere(a).date || '');

async function pageAccueil() {
  const jeux = await chargerTout();
  document.getElementById('createurs').innerHTML = CREATEURS.map(c => {
    const n = jeux.filter(j => j.c === c).length;
    return `<a class="createur ${c.id}" href="/${c.id}/"><span class="avatar">${c.initiale}</span><span><b>${esc(c.nom)}</b><small>${n ? n + ' jeu' + (n > 1 ? 'x' : '') : 'bientôt son premier jeu'}</small></span><span class="fleche">›</span></a>`;
  }).join('');
  document.getElementById('nbJeux').textContent = jeux.length + ' jeu' + (jeux.length > 1 ? 'x' : '');
  document.getElementById('tous').innerHTML = jeux.sort(parDate).map(j => carte(j, true)).join('') || '<div class="vide">Aucun jeu pour l’instant.</div>';
  const fil = jeux.flatMap(j => j.journal.map((e, i) => ({ j, e, i })))
    .sort((a, b) => (b.e.date || '').localeCompare(a.e.date || '') || a.i - b.i).slice(0, 8);
  document.getElementById('fil').innerHTML = fil.map(({ j, e }) => `<li class="${j.c.id}"><span class="pt"></span><div>
    <a href="/journal.html?c=${j.c.id}&j=${encodeURIComponent(j.id)}">${esc(j.titre)} · ${esc(nomVersion(e.version))}</a>
    <small>${esc(j.c.nom)} · ${e.dateTexte ? esc(e.dateTexte) : dateFr(e.date)}</small>${esc((e.changements || [])[0] || '')}</div></li>`).join('');
}

async function pageCreateur(id) {
  const c = createur(id), jeux = (await charger(c)).sort(parDate);
  document.title = 'Les jeux ' + de(c.nom).replace('&#39;','''');
  const maj = jeux.length ? derniere(jeux[0]).date : null;
  document.getElementById('bandeau').innerHTML = `<span class="avatar">${c.initiale}</span><div><h1>Les jeux ${de(c.nom)}</h1>
    <p>${jeux.length ? jeux.length + ' jeu' + (jeux.length > 1 ? 'x' : '') + (maj ? ' · dernière mise à jour le ' + dateFr(maj) : '') : 'Les premiers jeux arrivent bientôt !'}</p></div>`;
  document.getElementById('jeux').innerHTML = jeux.map(j => carte(j, false)).join('') || `<div class="vide">Les jeux ${de(c.nom)} arrivent ici bientôt…</div>`;
}

async function pageJournal() {
  const q = new URLSearchParams(location.search);
  const c = createur(q.get('c') || 'papa') || CREATEURS[0], id = q.get('j') || 'cuisine-du-port';
  document.body.classList.add(c.id);
  document.querySelectorAll('.barre nav a.' + c.id).forEach(a => a.classList.add('actif'));
  const j = (await charger(c)).find(x => x.id === id);
  const zone = document.getElementById('journal');
  if (!j) { zone.innerHTML = '<div class="vide">Ce jeu est introuvable.</div>'; return; }
  document.title = 'Journal : ' + j.titre;
  zone.innerHTML = `<a class="retour" href="/${c.id}/">← Les jeux ${de(c.nom)}</a>
    <div class="journal-tete"><img src="/${c.id}/${esc(j.image)}" alt="" style="background:${esc(j.fond || '#cfe8f7')}"><div>
      <h1>${esc(j.titre)}</h1><p>par ${esc(c.nom)} · ce qui change à chaque version, du plus récent au plus ancien.</p>
      <div class="boutons" style="max-width:220px"><a class="btn jouer" href="/${c.id}/${encodeURIComponent(j.id)}/">Jouer</a></div></div></div>
    <ol class="versions">${j.journal.map(e => `<li><div class="tete"><b>${esc(nomVersion(e.version))}</b><span>${e.dateTexte ? esc(e.dateTexte) : dateFr(e.date)}</span></div>
      <ul>${(e.changements || []).map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      ${e.image ? `<img src="/${c.id}/${esc(e.image)}" alt="${esc(j.titre)} en ${esc(nomVersion(e.version))}" loading="lazy">` : ''}</li>`).join('')}</ol>`;
}

const page = document.body.dataset.page;
if (page === 'accueil') pageAccueil();
else if (page === 'createur') pageCreateur(document.body.dataset.createur);
else if (page === 'journal') pageJournal();
