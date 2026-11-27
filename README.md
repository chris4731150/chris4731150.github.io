# Nos jeux — site familial

Site en ligne : https://chris4731150.github.io (GitHub Pages, branche `main`, mis à jour 1 à 2 min après chaque envoi).

Deux créateurs partagent ce site : **Papa** et **Océane**. Chacun a son dossier et n'écrit **que dans son dossier**.

## Organisation

```
index.html            accueil (généré automatiquement à partir des jeux.json) — ne pas modifier
journal.html          page « journal » d'un jeu (générée automatiquement)  — ne pas modifier
assets/               style et script communs du site                      — ne pas modifier
papa/                 dossier de Papa
oceane/               dossier d'Océane
  index.html          sa page (générée automatiquement)                     — ne pas modifier
  jeux.json           LA LISTE DE SES JEUX + leur journal                   — à modifier
  images/             une image d'aperçu par jeu (portrait 4:5, .webp ou .png, < 300 Ko)
  <id-du-jeu>/        un dossier par jeu, avec son index.html dedans
cuisine-du-port/, neon-flipper/   anciennes adresses qui redirigent vers papa/ — ne pas toucher
```

## Ajouter un jeu (exemple pour Océane)

1. Mettre le jeu dans `oceane/<id>/index.html` (id = minuscules, chiffres et tirets, ex. `chat-magique`).
   Le jeu doit marcher tout seul dans son dossier : chemins **relatifs** (`images/x.png`, pas `/images/x.png`).
2. Mettre l'image d'aperçu dans `oceane/images/<id>.webp`.
3. Ajouter le jeu au début de la liste `"jeux"` de `oceane/jeux.json` :

```json
{
  "id": "chat-magique",
  "titre": "Chat Magique",
  "description": "Une phrase courte qui donne envie de jouer.",
  "image": "images/chat-magique.webp",
  "fond": "#cfe8f7",
  "journal": [
    { "version": "1", "date": "2026-11-27", "changements": ["Première version du jeu."] }
  ]
}
```

## Nouvelle version d'un jeu

1. Remplacer les fichiers dans `oceane/<id>/`.
2. Dans `oceane/jeux.json`, ajouter **en haut** du `"journal"` de ce jeu :
   `{ "version": "2", "date": "AAAA-MM-JJ", "changements": ["Ce qui a changé, en phrases simples."] }`
   (champ facultatif `"image": "images/<id>_v2.webp"` pour montrer la nouvelle version).
3. La page d'accueil, la page du créateur, le badge « Mis à jour » et les « Dernières nouveautés » se mettent à jour tout seuls.

## Règles

- Ne jamais modifier le dossier de l'autre créateur, ni `index.html`, `journal.html`, `assets/`.
- Vérifier que `jeux.json` reste du JSON valide (virgules, guillemets droits).
- Avant d'envoyer : `git pull --rebase`, puis `git add`, `git commit`, `git push`.
- Ne jamais mettre de mot de passe, d'adresse e-mail ou d'information personnelle dans le dépôt : il est **public**.
- Identité git à utiliser : `chris4731150 <chris4731150@users.noreply.github.com>`.
