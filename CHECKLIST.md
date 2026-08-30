# Backend par les Premiers Principes — Checklist projet

Snapshot upstream : commit `7b05b3a` (ne plus synchroniser avec l'upstream).
Site : https://backend-premiers-principes.vercel.app

## Phase 0 — Mise en place
- [x] Fork du repo (garde le lien "forked from" = attribution automatique)
- [x] Issue #13 ouverte chez l'auteur (bénédiction demandée, on n'attend pas la réponse)
- [x] Cloner le fork en local (WSL)
- [x] Créer la branche de travail `fr`
- [x] Connecter le repo à Vercel (deploy auto à chaque push, branche de production = fr)
- [x] Réécrire le README en français (présentation du projet + crédit auteur original)

## Phase 1 — Socle (avant de traduire en masse)
- [x] Traduire `index.html` (nouvelle version post-refactor, crédits @yokozuna47)
- [x] Traduire les chaînes UI dans les JS (`enhancements.js`, `copy-button.js` : recherche, study notes, thèmes, compteur, libellés)
- [x] Créer le système de tooltips glossaire (CSS + convention `<span class="gloss">`) — livré, à valider sur le pilote
- [x] Créer le système d'exercices (QCM, réponses masquées jusqu'à validation, localStorage) — livré, à valider sur le pilote
- [ ] Valider le tout sur un chapitre pilote court : **ch. 16 Graceful Shutdown**

## Phase 2 — Chapitres (pour chaque chapitre : traduction + tooltips + section sécurité + 3-5 exos + code TypeScript)
Concepts avancés (source : conversation Claude de juillet) intégrés en sections « Pour aller plus loin » dans leur chapitre-maison — pas de chapitre bonus, décision actée :
- idempotency keys → ch. 07 (et écho ch. 01) · N+1 masqué par l'ORM → ch. 08 · cache stampede + stale-while-revalidate → ch. 09 · backpressure → ch. 10 · outbox pattern → ch. 23
- [ ] 16. Arrêt gracieux ← PILOTE
- [ ] 01. HTTP & CORS
- [ ] 02. Le routage backend
- [ ] 03. Sérialisation & Désérialisation
- [ ] 04. Authentification & Autorisation
- [ ] 05. Validations & Transformations
- [ ] 06. Contrôleurs, Services & Middlewares
- [ ] 07. Conception d'API (REST)
- [ ] 08. Bases de données
- [ ] 09. Le cache
- [ ] 10. Files de tâches & Jobs d'arrière-plan
- [ ] 11. Recherche plein texte (Elasticsearch)
- [ ] 12. Gestion des erreurs & Tolérance aux pannes
- [ ] 13. gRPC & Communication inter-services
- [ ] 14. Gestion de la configuration
- [ ] 15. Logs & Observabilité
- [ ] 17. Sécurité backend
- [ ] 18. Scalabilité & Performance (1/2)
- [ ] 19. Scalabilité & Performance (2/2)
- [ ] 20. Concurrence & Parallélisme
- [ ] 21. Docker, K8s & CI/CD
- [ ] 22. Tests automatisés
- [ ] 23. Message Brokers & Kafka
- [ ] 24. WebSockets & Temps réel

## Phase 3 — Finitions
- [ ] Page glossaire globale (agrégée depuis les tooltips) — sert de fiche de révision de fin de parcours
- [ ] Audit des trous 2026 (HTTP/3, rate limiting, idempotency keys, OpenTelemetry, outbox...) → chapitres bonus si besoin
- [ ] Meta/SEO en français sur toutes les pages
- [ ] Relecture complète
- [ ] Mise à jour de l'issue #13 avec le lien du site (courtoisie)

## Règles du projet
1. Termes techniques usuels gardés en anglais, tooltip de définition à la première occurrence par chapitre.
2. Définition de glossaire = zéro jargon, compréhensible par un L1 info sans rien ouvrir d'autre (et sans renvoyer vers d'autres termes non définis).
3. Réponses d'exercices visibles uniquement après validation.
4. Attribution à @DsThakurRawat sur chaque page.
5. Un chapitre = une session de travail.
6. Ligne éditoriale : on écrit pour le débutant qui veut monter — objectif : finir la série et pouvoir tenir une discussion avec des devs expérimentés. Le senior pressé n'est pas notre lecteur cible.
