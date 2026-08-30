# Socle Phase 1 — notes d'intégration

## Fichiers livrés
- `index.html` — landing page traduite (base commit 7b05b3a)
- `README.md` — présentation fr du projet
- `assets/enhancements.js` — toutes les chaînes UI traduites (recherche, study notes, thèmes, code runner)
- `assets/copy-button.js` — libellés Copier/Copié traduits
- `assets/glossaire.css` + `assets/glossaire.js` — tooltips de définition
- `assets/exercices.css` + `assets/exercices.js` — QCM de fin de chapitre

## Glossaire — usage dans un chapitre
Dans le `<head>` du notes.html :
    <link rel="stylesheet" href="../../assets/glossaire.css">
    <script src="../../assets/glossaire.js" defer></script>

Dans le texte, première occurrence d'un terme :
    <span class="gloss" data-def="Code qui s'exécute automatiquement sur chaque requête avant ta logique principale — par exemple vérifier que l'utilisateur est connecté.">middleware</span>

Règle : zéro jargon dans une définition (test : compréhensible par un L1 info).
Fonctionne au survol, au clavier (focus), et au tap sur mobile.

## Exercices — usage dans un chapitre
Dans le `<head>` :
    <link rel="stylesheet" href="../../assets/exercices.css">
    <script src="../../assets/exercices.js" defer></script>

Avant le footer :
    <div id="exercices"></div>
    <script type="application/json" id="exos-data">
    { "lesson": "16",
      "questions": [
        { "q": "Pourquoi un serveur doit-il arrêter d'accepter de nouvelles connexions avant de se couper ?",
          "opts": ["Pour libérer la RAM", "Pour ne pas perdre de requêtes en cours", "Pour accélérer le reboot"],
          "answer": 1,
          "expl": "Un arrêt gracieux draine les requêtes en vol avant de fermer : rien n'est perdu, rien n'est coupé à moitié." }
      ] }
    </script>

- `answer` = index (base 0) de la bonne option
- Réponse + explication affichées uniquement après clic sur Valider
- Progression en localStorage (`bfp_exos_<lesson>`), bouton de réinitialisation inclus
- Les réponses sont lisibles dans le source de la page : assumé, c'est pédagogique, pas un examen

## Non traduit volontairement
- `assets/theme.js`, `shell.js` : aucune chaîne visible utilisateur
- Les clés localStorage et les valeurs internes (`'default'`, `'dark'`, `'code'`...) : logique, pas de l'affichage
