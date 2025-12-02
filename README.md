# 🌳 Le Baobab - Restaurant à Saly

<div align="center">

![Le Baobab](https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&h=400&fit=crop)

**Site web professionnel pour restaurant gastronomique**

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 📋 À Propos

**Le Baobab** est un restaurant gastronomique situé à Saly, Sénégal, spécialisé dans :
- 🦞 Fruits de mer frais pêchés localement
- 🔥 Grillades au feu de bois
- 🇸🇳 Cuisine sénégalaise authentique

Ce projet est un site web moderne et performant développé avec React, TypeScript et Tailwind CSS.

---

## ✨ Fonctionnalités

### Actuellement Disponibles
- ✅ Navigation fluide et responsive
- ✅ Menu interactif avec filtres par catégorie
- ✅ Formulaire de réservation
- ✅ Galerie photos
- ✅ Page "À Propos"
- ✅ Design mobile-first

### En Cours de Développement
- 🔄 Backend API Node.js/Express
- 🔄 Base de données PostgreSQL
- 🔄 Envoi d'emails automatique
- 🔄 Panel d'administration
- 🔄 Système de paiement en ligne
- 🔄 Support multilingue (FR/EN)

---

## 🚀 Démarrage Rapide

### Prérequis

- **Node.js** 20+ ([Télécharger](https://nodejs.org/))
- **npm** 10+
- **Git**

### Installation

```bash
# 1. Cloner le repository
git clone <votre-repo-url>
cd le-baobab

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## 📁 Structure du Projet

```
le-baobab/
├── public/              # Fichiers statiques
│   ├── _redirects       # Configuration routing SPA
│   ├── robots.txt       # SEO
│   └── sitemap.xml      # SEO
├── src/
│   ├── components/      # Composants React
│   │   ├── common/      # Composants réutilisables
│   │   ├── layout/      # Layout (Header, Footer)
│   │   └── features/    # Composants métier
│   ├── pages/           # Pages de l'application
│   │   ├── Home.tsx
│   │   ├── Menu.tsx
│   │   ├── About.tsx
│   │   ├── Gallery.tsx
│   │   └── Contact.tsx
│   ├── hooks/           # Custom React hooks
│   ├── contexts/        # Context API
│   ├── services/        # API calls
│   ├── utils/           # Utilitaires & constantes
│   ├── types/           # Types TypeScript
│   ├── assets/          # Images, icônes
│   ├── styles/          # Styles globaux
│   └── App.tsx          # Composant principal
├── tests/               # Tests unitaires et E2E
├── backend/             # API Backend (Node.js/Express)
├── .env.example         # Template variables d'environnement
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

---

## 🛠️ Scripts Disponibles

```bash
# Développement
npm run dev              # Démarre le serveur de dev (port 3000)

# Build
npm run build            # Build de production
npm run preview          # Teste le build localement

# Qualité de code
npm run lint             # Vérifie le code (ESLint)
npm run lint:fix         # Corrige automatiquement
npm run format           # Formate avec Prettier

# Tests
npm run test             # Lance les tests
npm run test:ui          # Interface UI pour tests
npm run test:coverage    # Rapport de couverture
```

---

## 🎨 Stack Technique

### Frontend
- **React 19** - Framework UI
- **TypeScript 5.8** - Typage statique
- **Vite 6.2** - Build tool ultra-rapide
- **Tailwind CSS 3.x** - Styling utility-first
- **React Router 7.x** - Routing
- **Lucide React** - Icônes

### Backend (En développement)
- **Node.js 20** + **Express.js** - API REST
- **PostgreSQL 16** + **Prisma ORM** - Base de données
- **Zod** - Validation schémas
- **Nodemailer** + **SendGrid** - Emails
- **JWT** - Authentication

### DevOps
- **Vitest** - Tests unitaires
- **ESLint** + **Prettier** - Code quality
- **Husky** - Pre-commit hooks
- **Docker** - Containerization
- **Vercel** - Déploiement frontend
- **Railway/Render** - Déploiement backend

---

## 📚 Documentation

### Guides Disponibles

| Document | Description | Temps |
|----------|-------------|-------|
| [QUICK_START.md](./QUICK_START.md) | Démarrage rapide en 30 min | 30 min |
| [ROADMAP_PROFESSIONNELLE.md](./ROADMAP_PROFESSIONNELLE.md) | Guide complet de transformation | - |
| [PROGRESSION_CHECKLIST.md](./PROGRESSION_CHECKLIST.md) | Checklist de suivi | - |

### Pour Commencer

**Nouveau sur le projet ?** → Lisez [QUICK_START.md](./QUICK_START.md)

**Développement ?** → Suivez [ROADMAP_PROFESSIONNELLE.md](./ROADMAP_PROFESSIONNELLE.md)

---

## 🗺️ Roadmap

### Phase 1: Fondations ✅ (En cours)
- [x] Configuration Tailwind local
- [x] Migration BrowserRouter
- [ ] Structure fichiers optimisée
- [ ] ESLint + Prettier
- [ ] TypeScript strict mode

### Phase 2: Backend 🔄 (À venir)
- [ ] API Node.js/Express
- [ ] Base de données PostgreSQL
- [ ] Système de réservation
- [ ] Envoi d'emails

### Phase 3: Production 📅 (Planifié)
- [ ] SEO complet
- [ ] Tests automatisés
- [ ] Optimisation performance
- [ ] Pages About & Gallery

### Phase 4: Features Avancées 🚀 (Futur)
- [ ] Panel administration
- [ ] Paiement en ligne
- [ ] Multilingue (i18n)
- [ ] PWA (Progressive Web App)

---

## 🔧 Configuration

### Variables d'Environnement

**Frontend (.env.local):**
```env
VITE_API_URL=http://localhost:5000/api
```

**Backend (.env):**
```env
DATABASE_URL=postgresql://user:password@localhost:5432/lebaobab
PORT=5000
JWT_SECRET=your-secret-key
SENDGRID_API_KEY=your-sendgrid-key
EMAIL_FROM=noreply@lebaobab.com
```

Voir `.env.example` pour la liste complète.

---

## 🧪 Tests

```bash
# Lancer tous les tests
npm run test

# Tests en mode watch
npm run test -- --watch

# Couverture de code
npm run test:coverage
```

---

## 🚀 Déploiement

### Frontend (Vercel)

```bash
# Installation CLI
npm i -g vercel

# Déploiement
vercel --prod
```

### Backend (Railway)

```bash
# Se connecter
railway login

# Déployer
railway up
```

Voir [ROADMAP_PROFESSIONNELLE.md](./ROADMAP_PROFESSIONNELLE.md) pour les instructions détaillées.

---

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'feat: add amazing feature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Standards de Code

- **Commits:** Format [Conventional Commits](https://www.conventionalcommits.org/)
- **Code:** ESLint + Prettier configurés
- **Tests:** Vitest pour tests unitaires

---

## 📝 Licence

Ce projet est privé et propriétaire.

**© 2025 Le Baobab Restaurant. Tous droits réservés.**

---

## 👥 Équipe

- **Restaurant:** Le Baobab, Saly Portudal, Sénégal
- **Développement:** [Votre Nom]
- **Design:** [Designer]

---

## 📞 Contact

**Le Baobab Restaurant**
- 📍 Route de la Plage, Saly Portudal, Mbour, Sénégal
- 📞 +221 77 000 00 00
- 📧 contact@lebaobab-saly.com
- 🌐 [lebaobab.com](https://lebaobab.com) (à venir)

---

## 🙏 Remerciements

- [React](https://react.dev/) - Framework UI
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Unsplash](https://unsplash.com/) - Photos temporaires

---

<div align="center">

**Fait avec ❤️ à Saly, Sénégal**

[🏠 Accueil](#-le-baobab---restaurant-à-saly) • [📚 Docs](#-documentation) • [🗺️ Roadmap](#️-roadmap) • [🚀 Déployer](#-déploiement)

</div>
