# ✅ CHECKLIST DE PROGRESSION - LE BAOBAB

> **Guide rapide d'exécution** | Cocher au fur et à mesure des réalisations

---

## 📋 LÉGENDE

- ⏳ **En attente** - Non commencé
- 🔄 **En cours** - Travail en cours
- ✅ **Terminé** - Validé et fonctionnel
- ⚠️ **Bloqué** - Nécessite action/décision

---

## PHASE 1: FONDATIONS TECHNIQUES (7-10 jours)

### 1.1 Configuration Tailwind CSS Local
- [ ] Installer Tailwind CSS (`npm install -D tailwindcss postcss autoprefixer`)
- [ ] Exécuter `npx tailwindcss init -p`
- [ ] Créer `tailwind.config.js` avec configuration complète
- [ ] Créer `src/index.css` avec directives @tailwind
- [ ] Supprimer CDN Tailwind de `index.html`
- [ ] Importer `./index.css` dans `index.tsx`
- [ ] **TEST:** `npm run build` génère CSS <50KB
- [ ] **TEST:** Design reste identique après migration

**Statut:** ⏳ | **Temps estimé:** 1-2h

---

### 1.2 Migration BrowserRouter
- [ ] Remplacer `HashRouter` par `BrowserRouter` dans App.tsx
- [ ] Mettre à jour config Vite (build.rollupOptions)
- [ ] Créer `public/_redirects` pour SPA routing
- [ ] Tester navigation sans `#` dans URLs
- [ ] **TEST:** Routes `/menu`, `/about` fonctionnent
- [ ] **TEST:** Refresh page ne cause pas 404

**Statut:** ⏳ | **Temps estimé:** 30min

---

### 1.3 Réorganisation Structure Fichiers
- [ ] Créer dossiers: `src/components/{common,layout,features}`
- [ ] Créer dossiers: `src/{hooks,contexts,services,utils,types,assets,styles}`
- [ ] Créer dossier: `tests/{unit,e2e}`
- [ ] Déplacer `types.ts` → `src/types/index.ts`
- [ ] Déplacer `constants.ts` → `src/utils/constants.ts`
- [ ] Déplacer `Layout.tsx` → `src/components/layout/Layout.tsx`
- [ ] Mettre à jour tous les imports
- [ ] **TEST:** `npm run dev` démarre sans erreurs

**Statut:** ⏳ | **Temps estimé:** 2-3h

---

### 1.4 ESLint + Prettier
- [ ] Installer ESLint + Prettier (`npm install -D eslint prettier ...`)
- [ ] Créer `.eslintrc.json`
- [ ] Créer `.prettierrc`
- [ ] Créer `.eslintignore`
- [ ] Ajouter scripts `lint`, `lint:fix`, `format` dans package.json
- [ ] Exécuter `npm run lint:fix` (corriger erreurs)
- [ ] **TEST:** `npm run lint` → 0 erreurs

**Statut:** ⏳ | **Temps estimé:** 1h

---

### 1.5 TypeScript Strict Mode
- [ ] Activer `"strict": true` dans tsconfig.json
- [ ] Activer `noUnusedLocals`, `noUnusedParameters`
- [ ] Activer `noImplicitReturns`, `strictNullChecks`
- [ ] Configurer path aliases (@/, @components/, etc.)
- [ ] Corriger toutes les erreurs TypeScript
- [ ] **TEST:** `npm run build` sans erreurs TS

**Statut:** ⏳ | **Temps estimé:** 2-4h

---

### 1.6 Git Configuration
- [ ] Créer/Mettre à jour `.gitignore` (node_modules, .env, dist, .venv)
- [ ] Supprimer `.venv` du repo: `git rm -r --cached .venv`
- [ ] Initialiser git si nécessaire: `git init`
- [ ] Commit initial: `git add . && git commit -m "chore: phase 1 foundations"`
- [ ] **TEST:** `.venv` et `node_modules` non trackés

**Statut:** ⏳ | **Temps estimé:** 30min

---

### 1.7 Husky + lint-staged
- [ ] Installer: `npm install -D husky lint-staged`
- [ ] Initialiser: `npx husky init`
- [ ] Créer `.husky/pre-commit`
- [ ] Configurer `lint-staged` dans package.json
- [ ] **TEST:** Commit déclenche linting automatique

**Statut:** ⏳ | **Temps estimé:** 30min

---

### 1.8 Nettoyage Python
- [ ] Supprimer dossier `.venv` complètement
- [ ] Supprimer références GEMINI_API_KEY dans vite.config.ts
- [ ] Ajouter `.venv` dans .gitignore
- [ ] **TEST:** Projet démarre sans Python

**Statut:** ⏳ | **Temps estimé:** 15min

---

### ✅ VALIDATION PHASE 1
- [ ] `npm run build` → succès
- [ ] `npm run lint` → 0 warnings
- [ ] `npm run dev` → application fonctionne
- [ ] Navigation sans `#` dans URLs
- [ ] Code formaté automatiquement au commit
- [ ] Aucun fichier Python dans le projet

**Date de fin Phase 1:** _____________

---

## PHASE 2: BACKEND & API (12-15 jours)

### 2.1 Setup Backend
- [ ] Créer dossier `backend/`
- [ ] Initialiser: `cd backend && npm init -y`
- [ ] Installer Express + TypeScript + dépendances
- [ ] Créer `tsconfig.json` backend
- [ ] Créer structure: `src/{config,controllers,services,routes,middleware,utils}`
- [ ] Créer `src/server.ts` avec Express de base
- [ ] Scripts package.json (dev, build, start)
- [ ] **TEST:** `npm run dev` démarre serveur port 5000

**Statut:** ⏳ | **Temps estimé:** 2h

---

### 2.2 PostgreSQL + Prisma
- [ ] Installer Docker Desktop (si pas déjà fait)
- [ ] Créer `docker-compose.yml` (PostgreSQL + Redis)
- [ ] Démarrer: `docker-compose up -d`
- [ ] Installer Prisma: `npm install prisma @prisma/client`
- [ ] Initialiser: `npx prisma init`
- [ ] Créer `prisma/schema.prisma` complet
- [ ] Créer `.env` avec DATABASE_URL
- [ ] Migration: `npx prisma migrate dev --name init`
- [ ] **TEST:** `npx prisma studio` ouvre interface DB

**Statut:** ⏳ | **Temps estimé:** 2-3h

---

### 2.3 API Réservation
- [ ] Créer `services/email.service.ts`
- [ ] Créer `controllers/reservation.controller.ts`
- [ ] Créer `routes/reservation.routes.ts`
- [ ] Configurer validation Zod
- [ ] Implémenter POST /api/reservations
- [ ] Implémenter GET /api/reservations
- [ ] **TEST:** Postman → POST réservation fonctionne

**Statut:** ⏳ | **Temps estimé:** 3-4h

---

### 2.4 Service Email (SendGrid/Nodemailer)
- [ ] Créer compte SendGrid
- [ ] Récupérer API Key
- [ ] Configurer transporter Nodemailer
- [ ] Créer templates HTML emails
- [ ] Fonction `sendReservationConfirmation()`
- [ ] Fonction `sendReservationNotificationToRestaurant()`
- [ ] **TEST:** Email reçu après réservation

**Statut:** ⏳ | **Temps estimé:** 2-3h

---

### 2.5 Middleware & Sécurité
- [ ] Installer Helmet, CORS, rate-limit
- [ ] Configurer Helmet
- [ ] Configurer CORS (origins autorisés)
- [ ] Rate limiting (100 req/15min)
- [ ] Error handler global
- [ ] Logger (Winston ou Pino)
- [ ] **TEST:** Rate limit bloque après 100 requêtes

**Statut:** ⏳ | **Temps estimé:** 2h

---

### 2.6 Intégration Frontend → Backend
- [ ] Créer `src/services/api.ts` (frontend)
- [ ] Configurer axios avec baseURL
- [ ] Créer fonction `createReservation()`
- [ ] Mettre à jour `Contact.tsx` pour appeler API
- [ ] Créer `.env.local` avec VITE_API_URL
- [ ] Gérer états loading/error
- [ ] **TEST:** Formulaire frontend envoie à backend
- [ ] **TEST:** Email reçu après soumission

**Statut:** ⏳ | **Temps estimé:** 2-3h

---

### 2.7 Variables d'Environnement
- [ ] Créer `.env.example` (backend)
- [ ] Créer `.env.example` (frontend)
- [ ] Documenter toutes les variables nécessaires
- [ ] Ajouter `.env` dans .gitignore
- [ ] **TEST:** App fonctionne avec .env.example

**Statut:** ⏳ | **Temps estimé:** 30min

---

### ✅ VALIDATION PHASE 2
- [ ] Backend démarre sans erreurs
- [ ] Base de données accessible
- [ ] API POST /reservations fonctionne
- [ ] Emails envoyés automatiquement
- [ ] Frontend communique avec backend
- [ ] CORS configuré correctement
- [ ] Rate limiting actif
- [ ] Tests Postman/Thunder Client validés

**Date de fin Phase 2:** _____________

---

## PHASE 3: PRODUCTION READY (8-10 jours)

### 3.1 Pages Manquantes
- [ ] Implémenter `About.tsx` complètement
- [ ] Implémenter `Gallery.tsx` avec lightbox
- [ ] Tester responsive mobile/desktop
- [ ] **TEST:** Navigation entre toutes les pages

**Statut:** ⏳ | **Temps estimé:** 3-4h

---

### 3.2 SEO
- [ ] Installer: `npm install react-helmet-async`
- [ ] Wrapper App avec `<HelmetProvider>`
- [ ] Créer composant `SEO.tsx`
- [ ] Ajouter SEO à toutes les pages
- [ ] Créer `public/robots.txt`
- [ ] Créer `public/sitemap.xml`
- [ ] **TEST:** Meta tags visibles dans DevTools

**Statut:** ⏳ | **Temps estimé:** 2h

---

### 3.3 Optimisation Images
- [ ] Installer: `npm install vite-plugin-image-optimizer`
- [ ] Configurer plugin dans vite.config.ts
- [ ] Remplacer images Unsplash par vraies photos (si disponibles)
- [ ] Ajouter attributs `loading="lazy"`
- [ ] **TEST:** Build génère images WebP optimisées

**Statut:** ⏳ | **Temps estimé:** 2h

---

### 3.4 Tests
- [ ] Installer Vitest + Testing Library
- [ ] Créer `vitest.config.ts`
- [ ] Créer `tests/setup.ts`
- [ ] Écrire 5 tests unitaires minimum
- [ ] Ajouter script `npm run test`
- [ ] **TEST:** `npm run test` passe tous les tests

**Statut:** ⏳ | **Temps estimé:** 3-4h

---

### 3.5 Performance
- [ ] Lazy loading routes (React.lazy)
- [ ] Code splitting (dynamic imports)
- [ ] Preload fonts
- [ ] Minification activée (Vite le fait par défaut)
- [ ] **TEST:** Lighthouse Performance >90

**Statut:** ⏳ | **Temps estimé:** 2h

---

### 3.6 Accessibilité (a11y)
- [ ] Ajouter `aria-label` sur boutons icônes
- [ ] Ajouter `alt` sur toutes images
- [ ] Tester navigation clavier (Tab)
- [ ] Contraste couleurs WCAG AA
- [ ] **TEST:** Lighthouse Accessibility >90

**Statut:** ⏳ | **Temps estimé:** 2h

---

### 3.7 Error Boundaries
- [ ] Créer composant `ErrorBoundary.tsx`
- [ ] Wrapper routes avec ErrorBoundary
- [ ] Page 404 personnalisée
- [ ] **TEST:** Erreur affiche UI de fallback

**Statut:** ⏳ | **Temps estimé:** 1h

---

### ✅ VALIDATION PHASE 3
- [ ] Toutes les pages complètes
- [ ] SEO configuré (score Lighthouse >90)
- [ ] Images optimisées
- [ ] Tests passent (>80% coverage idéalement)
- [ ] Lighthouse Performance >90
- [ ] Lighthouse Accessibility >90
- [ ] Application accessible au clavier
- [ ] Build production <500KB (initial bundle)

**Date de fin Phase 3:** _____________

---

## PHASE 4: DÉPLOIEMENT (2-3 jours)

### 4.1 Préparation Déploiement
- [ ] Build frontend: `npm run build`
- [ ] Build backend: `npm run build`
- [ ] Tester build localement: `npm run preview`
- [ ] Créer Dockerfile backend
- [ ] **TEST:** Docker container démarre

**Statut:** ⏳ | **Temps estimé:** 2h

---

### 4.2 Déploiement Frontend (Vercel)
- [ ] Créer compte Vercel
- [ ] Connecter repo GitHub
- [ ] Configurer variables d'environnement
- [ ] Créer `vercel.json`
- [ ] Déployer: `vercel --prod`
- [ ] **TEST:** Site accessible via URL Vercel

**Statut:** ⏳ | **Temps estimé:** 1h

---

### 4.3 Déploiement Backend (Railway/Render)
- [ ] Créer compte Railway/Render
- [ ] Connecter repo GitHub
- [ ] Configurer PostgreSQL cloud
- [ ] Variables d'environnement production
- [ ] Déployer backend
- [ ] **TEST:** API accessible via URL Railway

**Statut:** ⏳ | **Temps estimé:** 2h

---

### 4.4 Configuration Domaine (Optionnel)
- [ ] Acheter domaine (ex: lebaobab.com)
- [ ] Configurer DNS vers Vercel
- [ ] Activer HTTPS/SSL
- [ ] **TEST:** Site accessible via domaine custom

**Statut:** ⏳ | **Temps estimé:** 1h

---

### 4.5 Monitoring
- [ ] Configurer Sentry (error tracking)
- [ ] Configurer Google Analytics / Plausible
- [ ] Configurer UptimeRobot (monitoring uptime)
- [ ] **TEST:** Erreurs remontées dans Sentry

**Statut:** ⏳ | **Temps estimé:** 2h

---

### ✅ VALIDATION DÉPLOIEMENT
- [ ] Frontend déployé et accessible
- [ ] Backend déployé et fonctionnel
- [ ] Base de données production active
- [ ] Emails envoyés depuis production
- [ ] HTTPS activé
- [ ] Domaine configuré (si applicable)
- [ ] Monitoring actif
- [ ] Lighthouse score production >90

**Date de déploiement:** _____________

---

## PHASE 5: FEATURES AVANCÉES (15-20 jours)

### 5.1 Panel Admin
- [ ] Créer dashboard admin
- [ ] Authentication JWT
- [ ] CRUD réservations
- [ ] Statistiques dashboard
- [ ] **TEST:** Admin peut gérer réservations

**Statut:** ⏳ | **Temps estimé:** 5-7 jours

---

### 5.2 Paiement en Ligne
- [ ] Intégrer Stripe ou Wave
- [ ] Page checkout
- [ ] Webhooks paiement
- [ ] **TEST:** Paiement test fonctionne

**Statut:** ⏳ | **Temps estimé:** 4-5 jours

---

### 5.3 Multilingue (i18n)
- [ ] Installer react-i18next
- [ ] Traductions FR/EN
- [ ] Sélecteur langue
- [ ] **TEST:** Switch langue fonctionne

**Statut:** ⏳ | **Temps estimé:** 3-4 jours

---

### 5.4 PWA
- [ ] Installer vite-plugin-pwa
- [ ] Configurer service worker
- [ ] Manifest.json
- [ ] **TEST:** "Add to Home Screen" fonctionne

**Statut:** ⏳ | **Temps estimé:** 2-3 jours

---

### 5.5 Notifications Push
- [ ] Backend: Firebase Cloud Messaging
- [ ] Frontend: Permission notifications
- [ ] Envoyer notif nouvelle réservation
- [ ] **TEST:** Notification reçue

**Statut:** ⏳ | **Temps estimé:** 3-4 jours

---

### ✅ VALIDATION PHASE 5
- [ ] Panel admin fonctionnel
- [ ] Paiements acceptés
- [ ] Application multilingue
- [ ] PWA installable
- [ ] Notifications push actives

**Date de fin Phase 5:** _____________

---

## 📊 MÉTRIQUES DE SUCCÈS

### Performance
- [ ] Lighthouse Performance: **Score actuel: ___/100** | Cible: >90
- [ ] First Contentful Paint: **___ ms** | Cible: <1.8s
- [ ] Time to Interactive: **___ ms** | Cible: <3.8s
- [ ] Bundle size (initial): **___ KB** | Cible: <500KB

### SEO
- [ ] Lighthouse SEO: **Score actuel: ___/100** | Cible: >95
- [ ] Meta tags: ✅ / ❌
- [ ] Sitemap: ✅ / ❌
- [ ] Robots.txt: ✅ / ❌

### Accessibilité
- [ ] Lighthouse Accessibility: **Score actuel: ___/100** | Cible: >90
- [ ] Navigation clavier: ✅ / ❌
- [ ] Lecteurs d'écran: ✅ / ❌

### Qualité Code
- [ ] Tests coverage: **____%** | Cible: >80%
- [ ] ESLint warnings: **___** | Cible: 0
- [ ] TypeScript errors: **___** | Cible: 0

---

## 🎯 NOTES & BLOCAGES

### Phase 1
**Blocages:**
-

**Notes:**
-

---

### Phase 2
**Blocages:**
-

**Notes:**
-

---

### Phase 3
**Blocages:**
-

**Notes:**
-

---

## 📅 PLANNING PRÉVISIONNEL

| Phase | Début | Fin | Durée | Statut |
|-------|-------|-----|-------|--------|
| Phase 1: Fondations | __/__/__ | __/__/__ | 7-10j | ⏳ |
| Phase 2: Backend | __/__/__ | __/__/__ | 12-15j | ⏳ |
| Phase 3: Production | __/__/__ | __/__/__ | 8-10j | ⏳ |
| Phase 4: Déploiement | __/__/__ | __/__/__ | 2-3j | ⏳ |
| Phase 5: Features+ | __/__/__ | __/__/__ | 15-20j | ⏳ |

**Total estimé:** 44-58 jours (~ 8-10 semaines)

---

## 🚀 COMMANDES RAPIDES

```bash
# Développement
npm run dev              # Démarre dev server (frontend)
npm run lint             # Vérifie code
npm run format           # Formate code
npm run test             # Lance tests

# Build
npm run build            # Build production
npm run preview          # Teste build localement

# Backend
cd backend
npm run dev              # Démarre backend
npm run prisma:studio    # Interface DB

# Docker
docker-compose up -d     # Démarre PostgreSQL
docker-compose down      # Arrête services

# Git
git status               # État repo
git add .                # Ajoute fichiers
git commit -m "message"  # Commit
git push                 # Push vers remote
```

---

## ✅ CHECKLIST PRÉ-PRODUCTION FINALE

**Avant de mettre en ligne:**

### Sécurité
- [ ] Toutes les variables sensibles en .env
- [ ] Pas de console.log en production
- [ ] HTTPS actif
- [ ] CORS configuré strictement
- [ ] Rate limiting actif
- [ ] Headers sécurisés (Helmet)

### Performance
- [ ] Images optimisées
- [ ] Code splitting actif
- [ ] Lighthouse >90
- [ ] Compression Gzip/Brotli

### Fonctionnel
- [ ] Tous les formulaires testés
- [ ] Emails envoyés correctement
- [ ] Réservations enregistrées
- [ ] Navigation fluide
- [ ] Mobile responsive

### Contenu
- [ ] Textes relus (0 fautes)
- [ ] Images remplacées par vraies photos
- [ ] Liens sociaux fonctionnels
- [ ] Google Maps configuré
- [ ] Coordonnées exactes

---

**Version:** 1.0
**Dernière mise à jour:** Décembre 2025

✅ = Terminé | 🔄 = En cours | ⏳ = À faire | ⚠️ = Bloqué
