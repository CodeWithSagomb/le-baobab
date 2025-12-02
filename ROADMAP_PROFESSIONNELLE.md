# 🚀 ROADMAP PROFESSIONNELLE - LE BAOBAB

## Guide Complet de Transformation vers la Production

> **Version:** 1.0
> **Projet:** Le Baobab - Site Web Restaurant
> **Stack:** React 19 + TypeScript + Vite
> **Objectif:** Solution professionnelle prête pour production
> **Dernière mise à jour:** Décembre 2025

---

## 📑 TABLE DES MATIÈRES

1. [Vue d'Ensemble](#1-vue-densemble)
2. [Architecture Cible](#2-architecture-cible)
3. [Phase 1: Fondations Techniques](#phase-1-fondations-techniques)
4. [Phase 2: Développement Backend](#phase-2-développement-backend)
5. [Phase 3: Optimisation & Production](#phase-3-optimisation--production)
6. [Phase 4: Features Avancées](#phase-4-features-avancées)
7. [Standards de Code](#standards-de-code)
8. [Procédures de Déploiement](#procédures-de-déploiement)
9. [Maintenance & Monitoring](#maintenance--monitoring)
10. [Checklist de Validation](#checklist-de-validation)

---

## 1. VUE D'ENSEMBLE

### 1.1 État Actuel du Projet

**Ce qui fonctionne ✅**

- Structure React avec routing de base
- Design UI cohérent avec Tailwind
- Pages principales (Home, Menu, Contact)
- Types TypeScript définis
- Responsive mobile/desktop

**Ce qui manque ❌**

- Configuration production-ready
- Backend et API
- Pages incomplètes (About, Gallery)
- Tests et CI/CD
- SEO et optimisation
- Fonctionnalités business critiques

### 1.2 Objectifs de Transformation

| Critère     | Actuel       | Cible                 |
| ----------- | ------------ | --------------------- |
| Performance | Non optimisé | Lighthouse >90        |
| SEO         | Basique      | Référencement complet |
| Backend     | Inexistant   | API REST + DB         |
| Tests       | 0%           | Couverture >80%       |
| Sécurité    | Faible       | Standards OWASP       |
| Déploiement | Manuel       | CI/CD automatisé      |

### 1.3 Timeline Globale

```mermaid
gantt
    title Planning Projet Le Baobab
    dateFormat  YYYY-MM-DD
    section Phase 1
    Fondations Techniques           :p1, 2025-12-01, 10d
    section Phase 2
    Backend & API                   :p2, after p1, 15d
    section Phase 3
    Production Ready                :p3, after p2, 10d
    section Phase 4
    Features Avancées              :p4, after p3, 20d
```

**Durée totale estimée:** 8-10 semaines

---

## 2. ARCHITECTURE CIBLE

### 2.1 Schéma d'Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        UTILISATEURS                          │
└──────────────┬──────────────────────────────┬────────────────┘
               │                              │
       ┌───────▼────────┐            ┌───────▼────────┐
       │   Web Browser  │            │  Mobile App    │
       │   (React SPA)  │            │   (Future)     │
       └───────┬────────┘            └───────┬────────┘
               │                              │
               └──────────────┬───────────────┘
                              │
                    ┌─────────▼─────────┐
                    │   CDN / Nginx     │
                    │  (Static Assets)  │
                    └─────────┬─────────┘
                              │
                    ┌─────────▼─────────┐
                    │   API Gateway     │
                    │  (Node.js/Express)│
                    └─────────┬─────────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
       ┌──────▼──────┐ ┌─────▼─────┐ ┌──────▼──────┐
       │  Auth       │ │  Business │ │  Payment    │
       │  Service    │ │  Logic    │ │  Service    │
       └──────┬──────┘ └─────┬─────┘ └──────┬──────┘
              │               │               │
              └───────────────┼───────────────┘
                              │
                    ┌─────────▼─────────┐
                    │   PostgreSQL      │
                    │   (Base Données)  │
                    └───────────────────┘
```

### 2.2 Stack Technique Complète

#### Frontend

- **Framework:** React 19 + TypeScript 5.8
- **Build Tool:** Vite 6.2
- **Styling:** Tailwind CSS 3.x (local)
- **Routing:** React Router DOM 7.x (BrowserRouter)
- **State Management:** Context API / Zustand
- **Forms:** React Hook Form + Zod
- **HTTP Client:** Axios / TanStack Query
- **Animations:** Framer Motion

#### Backend

- **Runtime:** Node.js 20 LTS
- **Framework:** Express.js 4.x
- **Language:** TypeScript
- **Validation:** Zod
- **Auth:** JWT + bcrypt
- **Email:** Nodemailer + SendGrid
- **Upload:** Multer + Cloudinary

#### Database & Cache

- **Primary DB:** PostgreSQL 16
- **ORM:** Prisma
- **Cache:** Redis
- **Storage:** AWS S3 / Cloudinary

#### DevOps & Testing

- **Tests:** Vitest + React Testing Library
- **E2E:** Playwright
- **Linting:** ESLint + Prettier
- **Pre-commit:** Husky + lint-staged
- **CI/CD:** GitHub Actions
- **Container:** Docker + Docker Compose
- **Hosting:** Vercel (Frontend) + Railway (Backend)

---

## PHASE 1: FONDATIONS TECHNIQUES

**Durée:** 7-10 jours | **Priorité:** CRITIQUE

### 1.1 Configuration Tailwind CSS Local

**Objectif:** Supprimer la dépendance CDN et optimiser le bundle

#### Étape 1.1.1: Installation

```bash
# Dans le terminal
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

#### Étape 1.1.2: Créer `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Deep Ocean Blue/Black
        secondary: '#fff7ed', // Sand Beige
        accent: '#d97706', // Amber/Gold
        'ocean-light': '#e0f2fe',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { transform: 'translateY(100px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
```

#### Étape 1.1.3: Créer `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Smooth scrolling */
@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply antialiased;
  }
}

/* Custom utilities */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

#### Étape 1.1.4: Modifier `index.html`

**Supprimer:**

```html
<!-- SUPPRIMER ces lignes -->
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {...}
</script>
```

**Garder uniquement:**

```html
<link rel="stylesheet" href="/src/index.css" />
```

#### Étape 1.1.5: Importer CSS dans `index.tsx`

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // ← Ajouter cette ligne
import App from './App';
```

**✅ Validation:** `npm run build` doit générer un CSS optimisé (<50KB gzipped)

---

### 1.2 Migration vers BrowserRouter

**Objectif:** URLs propres pour SEO (sans `#`)

#### Étape 1.2.1: Modifier `App.tsx`

```typescript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ← Changer HashRouter
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
```

#### Étape 1.2.2: Configuration Vite pour SPA Routing

**Modifier `vite.config.ts`:**

```typescript
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
});
```

#### Étape 1.2.3: Créer `public/_redirects` (pour Netlify/Vercel)

```
/*    /index.html   200
```

**✅ Validation:** Les URLs doivent être `/menu` au lieu de `/#/menu`

---

### 1.3 Réorganisation de la Structure de Fichiers

**Objectif:** Architecture scalable et maintenable

#### Étape 1.3.1: Nouvelle Structure

```
le-baobab/
├── public/
│   ├── _redirects
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   └── features/
│   │       ├── MenuCard.tsx
│   │       ├── ReviewCard.tsx
│   │       └── ReservationForm.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Menu.tsx
│   │   ├── About.tsx
│   │   ├── Gallery.tsx
│   │   └── Contact.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useMediaQuery.ts
│   ├── contexts/
│   │   └── ReservationContext.tsx
│   ├── services/
│   │   └── api.ts
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   └── validation.ts
│   ├── types/
│   │   └── index.ts
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── tests/
│   ├── unit/
│   └── e2e/
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ROADMAP_PROFESSIONNELLE.md (ce fichier)
```

#### Étape 1.3.2: Migrer les fichiers

```bash
# Créer les dossiers
mkdir -p src/{components/{common,layout,features},hooks,contexts,services,utils,types,assets/{images,icons},styles}
mkdir -p tests/{unit,e2e}

# Déplacer les fichiers existants
# types.ts → src/types/index.ts
# constants.ts → src/utils/constants.ts
# Layout.tsx → src/components/layout/Layout.tsx
```

#### Étape 1.3.3: Mettre à jour les imports

Après la migration, ajuster tous les imports dans les fichiers.

---

### 1.4 Configuration ESLint + Prettier

**Objectif:** Code propre et cohérent

#### Étape 1.4.1: Installation

```bash
npm install -D eslint@latest \
  @typescript-eslint/eslint-plugin@latest \
  @typescript-eslint/parser@latest \
  eslint-plugin-react@latest \
  eslint-plugin-react-hooks@latest \
  eslint-plugin-react-refresh@latest \
  prettier@latest \
  eslint-config-prettier@latest \
  eslint-plugin-prettier@latest
```

#### Étape 1.4.2: Créer `.eslintrc.json`

```json
{
  "root": true,
  "env": {
    "browser": true,
    "es2022": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["@typescript-eslint", "react", "react-hooks", "react-refresh", "prettier"],
  "rules": {
    "react/prop-types": "off",
    "react-refresh/only-export-components": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "prettier/prettier": "error",
    "no-console": ["warn", { "allow": ["warn", "error"] }]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

#### Étape 1.4.3: Créer `.prettierrc`

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

#### Étape 1.4.4: Créer `.eslintignore`

```
dist
node_modules
*.config.js
*.config.ts
.venv
```

#### Étape 1.4.5: Ajouter scripts dans `package.json`

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .ts,.tsx --max-warnings 0",
    "lint:fix": "eslint . --ext .ts,.tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,css,md}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx,css,md}\""
  }
}
```

**✅ Validation:** `npm run lint` ne doit montrer aucune erreur

---

### 1.5 Configuration TypeScript Stricte

**Objectif:** Typage robuste pour éviter les bugs

#### Étape 1.5.1: Mettre à jour `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting - MODE STRICT */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "noImplicitAny": true,
    "strictNullChecks": true,

    /* Path aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@pages/*": ["./src/pages/*"],
      "@utils/*": ["./src/utils/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@types/*": ["./src/types/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", ".venv"]
}
```

#### Étape 1.5.2: Corriger les erreurs TypeScript

Après activation du mode strict, corriger toutes les erreurs de type.

**✅ Validation:** `npm run build` sans erreurs TypeScript

---

### 1.6 Git Configuration & .gitignore

**Objectif:** Versionning propre

#### Étape 1.6.1: Créer/Mettre à jour `.gitignore`

```gitignore
# Dependencies
node_modules/
package-lock.json
yarn.lock
pnpm-lock.yaml

# Build
dist/
build/
*.tsbuildinfo

# Environment
.env
.env.local
.env.production
.env.*.local

# IDE
.vscode/*
!.vscode/extensions.json
!.vscode/settings.json
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Python (à supprimer si inutile)
.venv/
__pycache__/
*.py[cod]

# Tests
coverage/
.nyc_output/

# Temporary
*.tmp
.cache/
```

#### Étape 1.6.2: Initialiser Git (si pas déjà fait)

```bash
git init
git add .
git commit -m "chore: initial commit - Phase 1 foundations"
```

---

### 1.7 Husky + lint-staged (Pre-commit Hooks)

**Objectif:** Qualité de code automatique

#### Étape 1.7.1: Installation

```bash
npm install -D husky@latest lint-staged@latest
npx husky init
```

#### Étape 1.7.2: Créer `.husky/pre-commit`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

#### Étape 1.7.3: Configuration dans `package.json`

```json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{css,md,json}": ["prettier --write"]
  }
}
```

**✅ Validation:** Les commits doivent déclencher le linting automatique

---

### 1.8 Nettoyage & Suppression Python

**Objectif:** Projet mono-technologie

#### Étape 1.8.1: Supprimer `.venv`

```bash
# Windows
rmdir /s /q .venv

# Linux/Mac
rm -rf .venv
```

#### Étape 1.8.2: Supprimer références dans vite.config.ts

**Avant:**

```typescript
define: {
  'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
}
```

**Après:** (Supprimer complètement si non utilisé)

---

### ✅ Checklist Phase 1

- [ ] Tailwind CSS installé localement
- [ ] BrowserRouter configuré
- [ ] Structure de fichiers réorganisée
- [ ] ESLint + Prettier fonctionnels
- [ ] TypeScript en mode strict
- [ ] .gitignore complet
- [ ] Husky + lint-staged actifs
- [ ] .venv Python supprimé
- [ ] `npm run build` sans erreurs
- [ ] `npm run lint` sans warnings
- [ ] Git commit propre

**🎯 Résultat attendu:** Base technique solide et scalable

---

## PHASE 2: DÉVELOPPEMENT BACKEND

**Durée:** 12-15 jours | **Priorité:** HAUTE

### 2.1 Architecture Backend

```
backend/
├── src/
│   ├── config/
│   │   ├── database.ts
│   │   └── env.ts
│   ├── controllers/
│   │   ├── reservation.controller.ts
│   │   └── contact.controller.ts
│   ├── services/
│   │   ├── email.service.ts
│   │   └── reservation.service.ts
│   ├── routes/
│   │   ├── reservation.routes.ts
│   │   └── index.ts
│   ├── middleware/
│   │   ├── errorHandler.ts
│   │   ├── validation.ts
│   │   └── rateLimit.ts
│   ├── models/
│   │   └── (Prisma schema)
│   ├── utils/
│   │   └── logger.ts
│   └── server.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── tests/
├── .env.example
├── package.json
└── tsconfig.json
```

### 2.2 Initialisation Backend

#### Étape 2.2.1: Créer le dossier backend

```bash
mkdir backend
cd backend
npm init -y
```

#### Étape 2.2.2: Installation dépendances

```bash
npm install express@latest \
  cors@latest \
  helmet@latest \
  dotenv@latest \
  express-rate-limit@latest \
  nodemailer@latest \
  prisma@latest \
  @prisma/client@latest \
  zod@latest \
  bcryptjs@latest \
  jsonwebtoken@latest

npm install -D @types/express@latest \
  @types/node@latest \
  @types/cors@latest \
  @types/nodemailer@latest \
  @types/bcryptjs@latest \
  @types/jsonwebtoken@latest \
  typescript@latest \
  tsx@latest \
  nodemon@latest
```

#### Étape 2.2.3: Configuration TypeScript Backend

**Créer `backend/tsconfig.json`:**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

#### Étape 2.2.4: Scripts package.json

```json
{
  "scripts": {
    "dev": "nodemon --exec tsx src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:studio": "prisma studio"
  }
}
```

---

### 2.3 Configuration Base de Données (Prisma + PostgreSQL)

#### Étape 2.3.1: Initialiser Prisma

```bash
cd backend
npx prisma init
```

#### Étape 2.3.2: Schéma Prisma

**Créer `backend/prisma/schema.prisma`:**

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Reservation {
  id        String   @id @default(uuid())
  name      String
  email     String?
  phone     String
  date      DateTime
  guests    Int
  message   String?
  status    ReservationStatus @default(PENDING)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([date])
  @@index([status])
}

enum ReservationStatus {
  PENDING
  CONFIRMED
  CANCELLED
  COMPLETED
}

model Contact {
  id        String   @id @default(uuid())
  name      String
  email     String
  phone     String?
  subject   String
  message   String
  status    ContactStatus @default(NEW)
  createdAt DateTime @default(now())

  @@index([status])
}

enum ContactStatus {
  NEW
  IN_PROGRESS
  RESOLVED
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  role      UserRole @default(STAFF)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum UserRole {
  ADMIN
  STAFF
}
```

#### Étape 2.3.3: Variables d'environnement

**Créer `backend/.env`:**

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/lebaobab?schema=public"

# Server
PORT=5000
NODE_ENV=development

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d

# Email (SendGrid)
SENDGRID_API_KEY=your-sendgrid-api-key
EMAIL_FROM=noreply@lebaobab-saly.com

# CORS
ALLOWED_ORIGINS=http://localhost:3000,https://lebaobab.com

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

#### Étape 2.3.4: Migration initiale

```bash
npx prisma migrate dev --name init
npx prisma generate
```

---

### 2.4 Serveur Express

#### Étape 2.4.1: Créer `backend/src/server.ts`

```typescript
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Security Middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
    credentials: true,
  })
);

// Rate Limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
  message: 'Trop de requêtes, veuillez réessayer plus tard.',
});
app.use('/api/', limiter);

// Body Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error Handling
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
```

---

### 2.5 Services & Controllers

#### Étape 2.5.1: Service Email

**Créer `backend/src/services/email.service.ts`:**

```typescript
import nodemailer from 'nodemailer';
import { Reservation } from '@prisma/client';

const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
});

export async function sendReservationConfirmation(reservation: Reservation) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: reservation.email,
    subject: 'Confirmation de réservation - Le Baobab',
    html: `
      <h1>Merci pour votre réservation !</h1>
      <p>Bonjour ${reservation.name},</p>
      <p>Nous avons bien reçu votre demande de réservation :</p>
      <ul>
        <li>Date : ${new Date(reservation.date).toLocaleString('fr-FR')}</li>
        <li>Nombre de personnes : ${reservation.guests}</li>
      </ul>
      <p>Nous vous confirmerons par téléphone dans les plus brefs délais.</p>
      <p>À bientôt,<br/>L'équipe Le Baobab</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function sendReservationNotificationToRestaurant(reservation: Reservation) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: 'restaurant@lebaobab-saly.com',
    subject: `Nouvelle réservation - ${reservation.name}`,
    html: `
      <h2>Nouvelle demande de réservation</h2>
      <ul>
        <li>Nom : ${reservation.name}</li>
        <li>Téléphone : ${reservation.phone}</li>
        <li>Email : ${reservation.email || 'Non fourni'}</li>
        <li>Date : ${new Date(reservation.date).toLocaleString('fr-FR')}</li>
        <li>Personnes : ${reservation.guests}</li>
        <li>Message : ${reservation.message || 'Aucun'}</li>
      </ul>
    `,
  };

  await transporter.sendMail(mailOptions);
}
```

#### Étape 2.5.2: Controller Réservation

**Créer `backend/src/controllers/reservation.controller.ts`:**

```typescript
import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import {
  sendReservationConfirmation,
  sendReservationNotificationToRestaurant,
} from '../services/email.service';

const prisma = new PrismaClient();

const reservationSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide').optional(),
  phone: z.string().regex(/^\+?[0-9]{9,15}$/, 'Numéro de téléphone invalide'),
  date: z.string().datetime('Date invalide'),
  guests: z.number().int().min(1).max(50),
  message: z.string().optional(),
});

export async function createReservation(req: Request, res: Response, next: NextFunction) {
  try {
    // Validation
    const data = reservationSchema.parse(req.body);

    // Check if date is in the future
    if (new Date(data.date) < new Date()) {
      return res.status(400).json({ error: 'La date doit être dans le futur' });
    }

    // Create reservation
    const reservation = await prisma.reservation.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: new Date(data.date),
        guests: data.guests,
        message: data.message,
      },
    });

    // Send emails
    if (data.email) {
      await sendReservationConfirmation(reservation);
    }
    await sendReservationNotificationToRestaurant(reservation);

    res.status(201).json({
      message: 'Réservation créée avec succès',
      reservation: {
        id: reservation.id,
        name: reservation.name,
        date: reservation.date,
        guests: reservation.guests,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
}

export async function getReservations(req: Request, res: Response, next: NextFunction) {
  try {
    const reservations = await prisma.reservation.findMany({
      orderBy: { date: 'desc' },
    });
    res.json(reservations);
  } catch (error) {
    next(error);
  }
}
```

#### Étape 2.5.3: Routes

**Créer `backend/src/routes/reservation.routes.ts`:**

```typescript
import { Router } from 'express';
import { createReservation, getReservations } from '../controllers/reservation.controller';

const router = Router();

router.post('/reservations', createReservation);
router.get('/reservations', getReservations); // Protéger avec auth plus tard

export default router;
```

**Créer `backend/src/routes/index.ts`:**

```typescript
import { Router } from 'express';
import reservationRoutes from './reservation.routes';

const router = Router();

router.use(reservationRoutes);

export default router;
```

---

### 2.6 Middleware Error Handler

**Créer `backend/src/middleware/errorHandler.ts`:**

```typescript
import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error('❌ Error:', err);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    error: process.env.NODE_ENV === 'production' ? 'Une erreur est survenue' : err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
}
```

---

### 2.7 Docker Compose (Dev Environment)

**Créer `docker-compose.yml` à la racine:**

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: lebaobab-db
    restart: always
    environment:
      POSTGRES_USER: lebaobab
      POSTGRES_PASSWORD: password123
      POSTGRES_DB: lebaobab
    ports:
      - '5432:5432'
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    container_name: lebaobab-redis
    restart: always
    ports:
      - '6379:6379'

volumes:
  postgres_data:
```

**Démarrer:**

```bash
docker-compose up -d
```

---

### 2.8 Intégration Frontend → Backend

#### Étape 2.8.1: Créer `src/services/api.ts`

```typescript
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface CreateReservationData {
  name: string;
  email?: string;
  phone: string;
  date: string;
  guests: number;
  message?: string;
}

export async function createReservation(data: CreateReservationData) {
  const response = await api.post('/reservations', data);
  return response.data;
}

export default api;
```

#### Étape 2.8.2: Mettre à jour `Contact.tsx`

```typescript
import React, { useState } from 'react';
import { createReservation } from '../services/api';
// ... autres imports

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({...});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await createReservation({
        name: formData.name,
        email: formData.email || undefined,
        phone: formData.phone,
        date: new Date(formData.date).toISOString(),
        guests: parseInt(formData.guests),
        message: formData.message || undefined,
      });
      setSubmitted(true);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  // ... reste du composant
};
```

#### Étape 2.8.3: Variables d'environnement Frontend

**Créer `.env.local` (frontend):**

```env
VITE_API_URL=http://localhost:5000/api
```

**Créer `.env.example`:**

```env
VITE_API_URL=https://api.lebaobab.com/api
```

---

### ✅ Checklist Phase 2

- [ ] Backend Node.js/Express configuré
- [ ] PostgreSQL + Prisma fonctionnels
- [ ] Schéma de base de données créé
- [ ] API réservation fonctionnelle
- [ ] Service email intégré
- [ ] Validation Zod active
- [ ] Error handling complet
- [ ] Docker Compose opérationnel
- [ ] Frontend connecté au backend
- [ ] Tests API avec Postman/Thunder Client

**🎯 Résultat attendu:** API REST complète et fonctionnelle

---

## PHASE 3: OPTIMISATION & PRODUCTION

**Durée:** 8-10 jours | **Priorité:** HAUTE

### 3.1 Implémentation Pages Manquantes

#### Étape 3.1.1: Page About.tsx

**Créer `src/pages/About.tsx`:**

```typescript
import React from 'react';
import { Award, Heart, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Section */}
      <div className="bg-primary py-20 mb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
            Notre Histoire
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Un voyage culinaire au cœur de la Petite Côte sénégalaise
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
              alt="Restaurant interior"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-4xl font-bold text-primary">
              Une Passion Née en <span className="text-accent">2015</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Le Baobab est né de la passion de son fondateur pour la gastronomie
              et l'hospitalité sénégalaise. Situé à Saly depuis plus de 8 ans,
              nous sommes devenus une référence pour les amateurs de fruits de mer
              frais et de cuisine locale authentique.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Chaque matin, nous sélectionnons personnellement nos poissons
              auprès des pêcheurs de Mbour pour garantir une fraîcheur
              incomparable. Notre équipe de chefs expérimentés revisite les
              recettes traditionnelles avec créativité et respect des saveurs.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-4 gap-8 py-16 border-y border-gray-200 mb-20">
          <div className="text-center space-y-4">
            <div className="inline-block p-4 bg-secondary rounded-full">
              <Award className="text-accent" size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold">Excellence</h3>
            <p className="text-gray-600 text-sm">
              Qualité et fraîcheur garanties
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="inline-block p-4 bg-secondary rounded-full">
              <Heart className="text-accent" size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold">Passion</h3>
            <p className="text-gray-600 text-sm">
              Amour de la cuisine locale
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="inline-block p-4 bg-secondary rounded-full">
              <Users className="text-accent" size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold">Convivialité</h3>
            <p className="text-gray-600 text-sm">
              Accueil chaleureux
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="inline-block p-4 bg-secondary rounded-full">
              <Clock className="text-accent" size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold">Tradition</h3>
            <p className="text-gray-600 text-sm">
              Recettes authentiques
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">
            Notre Équipe
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des professionnels passionnés à votre service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Chef Amadou', role: 'Chef Exécutif', image: 'photo-1577219491135-ce391730fb2c' },
            { name: 'Fatou Diop', role: 'Responsable Service', image: 'photo-1580489944761-15a19d654956' },
            { name: 'Omar Ndiaye', role: 'Sommelier', image: 'photo-1507003211169-0a1dd7228f2d' },
          ].map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4 h-80">
                <img
                  src={`https://images.unsplash.com/${member.image}?w=400`}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-xl font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
```

#### Étape 3.1.2: Page Gallery.tsx

**Créer `src/pages/Gallery.tsx`:**

```typescript
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../utils/constants';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Food' | 'Ambiance' | 'Place'>('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = filter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <div className="pt-24 pb-20 bg-secondary min-h-screen">
      {/* Header */}
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
            Galerie Photos
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez l'ambiance unique du Baobab à travers nos images
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-4 flex-wrap">
          {['All', 'Food', 'Ambiance', 'Place'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat === 'All' ? 'Tout' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-80"
              onClick={() => setLightboxImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold text-lg">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Fullscreen"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
```

---

### 3.2 SEO & Meta Tags

#### Étape 3.2.1: Installation React Helmet

```bash
npm install react-helmet-async
```

#### Étape 3.2.2: Wrapper App avec HelmetProvider

**Modifier `src/main.tsx`:**

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './styles/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
```

#### Étape 3.2.3: Créer composant SEO

**Créer `src/components/common/SEO.tsx`:**

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Le Baobab | Restaurant à Saly',
  description = 'Découvrez Le Baobab, l\'incontournable restaurant de Saly. Fruits de mer frais, grillades et cuisine sénégalaise authentique dans un cadre exceptionnel.',
  image = 'https://lebaobab.com/og-image.jpg',
  url = 'https://lebaobab.com',
  type = 'website',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
```

#### Étape 3.2.4: Utiliser SEO dans les pages

```typescript
// Exemple dans Home.tsx
import SEO from '@/components/common/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Le Baobab - Restaurant Saly | Fruits de Mer & Grillades"
        description="Restaurant gastronomique à Saly. Spécialités de fruits de mer, grillades au feu de bois et cuisine sénégalaise traditionnelle."
      />
      {/* ... reste du contenu */}
    </>
  );
};
```

---

### 3.3 Optimisation Images

#### Étape 3.3.1: Installation

```bash
npm install vite-plugin-image-optimizer
```

#### Étape 3.3.2: Configuration Vite

**Modifier `vite.config.ts`:**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80 },
    }),
  ],
  // ... reste config
});
```

---

### 3.4 Tests

#### Étape 3.4.1: Installation

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

#### Étape 3.4.2: Configuration Vitest

**Créer `vitest.config.ts`:**

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

#### Étape 3.4.3: Setup Tests

**Créer `tests/setup.ts`:**

```typescript
import '@testing-library/jest-dom';
```

#### Étape 3.4.4: Exemple de test

**Créer `tests/unit/components/Button.test.tsx`:**

```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<button>Click me</button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

#### Étape 3.4.5: Scripts package.json

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

---

### 3.5 Performance & Bundle Optimization

#### Étape 3.5.1: Lazy Loading Routes

**Modifier `App.tsx`:**

```typescript
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const About = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
```

---

### 3.6 Fichiers Production

#### Étape 3.6.1: robots.txt

**Créer `public/robots.txt`:**

```
User-agent: *
Allow: /

Sitemap: https://lebaobab.com/sitemap.xml
```

#### Étape 3.6.2: sitemap.xml

**Créer `public/sitemap.xml`:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lebaobab.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://lebaobab.com/menu</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://lebaobab.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://lebaobab.com/gallery</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://lebaobab.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

### ✅ Checklist Phase 3

- [ ] Pages About & Gallery complétées
- [ ] SEO (Helmet) implémenté
- [ ] Meta tags OpenGraph
- [ ] Images optimisées
- [ ] Tests configurés (Vitest)
- [ ] Lazy loading routes
- [ ] Bundle optimisé (<500KB initial)
- [ ] robots.txt & sitemap.xml
- [ ] Lighthouse score >90

**🎯 Résultat attendu:** Application optimisée prête pour production

---

## PHASE 4: FEATURES AVANCÉES

**Durée:** 15-20 jours | **Priorité:** MOYENNE

### 4.1 Panel Administration

**Technologies:**

- React Admin ou custom dashboard
- Authentication JWT
- CRUD complet réservations

### 4.2 Paiement en Ligne

**Intégrations possibles:**

- Stripe
- Wave (Sénégal)
- Orange Money API

### 4.3 Multilingue (i18n)

```bash
npm install react-i18next i18next
```

### 4.4 PWA (Progressive Web App)

```bash
npm install vite-plugin-pwa
```

### 4.5 Analytics

- Google Analytics 4
- Plausible (RGPD-friendly)

---

## STANDARDS DE CODE

### Naming Conventions

```typescript
// Components: PascalCase
const MenuCard: React.FC = () => {};

// Functions: camelCase
function calculateTotal() {}

// Constants: UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.com';

// Interfaces/Types: PascalCase
interface UserProfile {}
type MenuItem = {};
```

### Commit Messages

Format: `type(scope): message`

**Types:**

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction bug
- `docs`: Documentation
- `style`: Formatage code
- `refactor`: Refactoring
- `test`: Tests
- `chore`: Tâches maintenance

**Exemples:**

```
feat(reservation): add email confirmation
fix(menu): correct price display
docs(readme): update setup instructions
```

---

## PROCÉDURES DE DÉPLOIEMENT

### Frontend (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Configuration `vercel.json`:**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Backend (Railway/Render)

**Dockerfile:**

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["node", "dist/server.js"]
```

---

## MAINTENANCE & MONITORING

### Logging

```typescript
// Winston pour logs structurés
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
```

### Monitoring

- **Uptime:** UptimeRobot
- **Errors:** Sentry
- **Performance:** Vercel Analytics

---

## CHECKLIST DE VALIDATION

### ✅ Avant Production

**Technique:**

- [ ] Build sans erreurs
- [ ] Tests passent (>80% coverage)
- [ ] Lighthouse >90 (Performance, SEO, Accessibility)
- [ ] Pas de console.log en production
- [ ] Variables d'environnement sécurisées
- [ ] HTTPS activé
- [ ] CORS configuré correctement

**Fonctionnel:**

- [ ] Formulaires validés
- [ ] Emails envoyés
- [ ] Réservations enregistrées DB
- [ ] Navigation fluide
- [ ] Responsive mobile/tablette/desktop

**Sécurité:**

- [ ] Rate limiting actif
- [ ] Validation inputs (backend)
- [ ] Pas d'injection SQL
- [ ] Headers sécurisés (Helmet)

**Contenu:**

- [ ] Images optimisées
- [ ] Textes sans fautes
- [ ] Liens fonctionnels
- [ ] Google Maps configuré
- [ ] Coordonnées à jour

---

## 📞 CONTACTS & RESSOURCES

**Documentation:**

- React: https://react.dev
- TypeScript: https://typescriptlang.org
- Prisma: https://prisma.io
- Tailwind: https://tailwindcss.com

**Support:**

- GitHub Issues: Pour tracker les bugs
- Stack Overflow: Questions techniques

---

## 🎯 CONCLUSION

Ce document est votre référence pour transformer Le Baobab en solution professionnelle.

**Prochaines étapes:**

1. Valider Phase 1 complètement
2. Attaquer Phase 2 (Backend)
3. Optimiser Phase 3
4. Enrichir Phase 4 selon besoins

**Rappel:** Chaque phase doit être validée avant de passer à la suivante.

Bonne chance ! 🚀
