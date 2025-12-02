# Guide d'Organisation des Images - Le Baobab Restaurant

Ce document explique comment organiser et ajouter vos images réelles du restaurant dans la structure de dossiers.

## 📁 Structure des Dossiers

```
public/images/
├── home/                    # Images de la page d'accueil
│   ├── hero/               # Image principale du hero (1-2 images)
│   ├── philosophy/         # Images de la section "Expérience Authentique"
│   └── specialties/        # Photos des 3 plats spéciaux mis en avant
│
├── menu/                    # Images pour la page Menu
│   ├── categories/         # Images pour chaque catégorie (Grillades, Fruits de mer, etc.)
│   └── dishes/            # Photos individuelles des plats du menu
│
├── gallery/                 # Images pour la page Galerie
│   ├── restaurant/        # Photos de l'extérieur et la devanture du restaurant
│   ├── dishes/           # Photos culinaires professionnelles de vos plats
│   ├── ambiance/         # Photos de l'intérieur, terrasse, décoration
│   └── events/           # Photos d'événements spéciaux, soirées, groupes
│
├── about/                   # Images pour la page À Propos
│   ├── team/             # Photos de l'équipe (chef, serveurs, personnel)
│   └── histoire/         # Photos historiques du restaurant
│
├── contact/                 # Images pour la page Contact
│   └──                   # Photos de l'entrée, parking, façade pour localisation
│
└── common/                  # Images communes à tout le site
    ├── logo/             # Logo du restaurant (PNG avec fond transparent)
    └── icons/            # Icônes personnalisées si nécessaire
```

## 📝 Recommandations par Page

### 🏠 HOME (Page d'Accueil)

#### `home/hero/`
- **Nombre d'images**: 1-2 images
- **Utilisation**: Image de fond principale en haut de page
- **Suggestions**:
  - Vue spectaculaire de votre terrasse au coucher du soleil
  - Plat signature magnifiquement dressé
  - Ambiance chaleureuse du restaurant en soirée
- **Format recommandé**: 1920x1080px minimum, format paysage
- **Noms suggérés**: `hero-principal.jpg`, `hero-alternative.jpg`

#### `home/philosophy/`
- **Nombre d'images**: 1-2 images
- **Utilisation**: Section "Une expérience Authentique"
- **Suggestions**:
  - Chef en train de préparer un plat
  - Ingrédients frais du marché local
  - Poisson frais de Mbour
- **Format recommandé**: 800x500px minimum
- **Noms suggérés**: `chef-preparation.jpg`, `ingredients-frais.jpg`

#### `home/specialties/`
- **Nombre d'images**: 3 images
- **Utilisation**: Les 3 plats spéciaux mis en avant
- **Suggestions**: Vos 3 plats signatures les plus populaires
- **Format recommandé**: 800x800px minimum, format carré ou portrait
- **Noms suggérés**: `specialite-1-thieboudienne.jpg`, `specialite-2-langouste.jpg`, `specialite-3-yassa.jpg`

---

### 🍽️ MENU (Page Menu)

#### `menu/categories/`
- **Nombre d'images**: 5-8 images (une par catégorie)
- **Utilisation**: Image d'en-tête pour chaque catégorie du menu
- **Catégories**:
  - Grillades
  - Fruits de mer
  - Spécialités sénégalaises
  - Salades & Entrées
  - Desserts
- **Format recommandé**: 800x400px minimum, format paysage
- **Noms suggérés**: `categorie-grillades.jpg`, `categorie-fruits-de-mer.jpg`, etc.

#### `menu/dishes/`
- **Nombre d'images**: Autant que de plats au menu
- **Utilisation**: Photo individuelle pour chaque plat
- **Suggestions**: Photos professionnelles de vos plats dressés
- **Format recommandé**: 600x600px minimum
- **Noms suggérés**: `thieboudienne.jpg`, `langouste-grillee.jpg`, `yassa-poulet.jpg`, etc.

---

### 🖼️ GALLERY (Page Galerie)

#### `gallery/restaurant/`
- **Nombre d'images**: 5-10 images
- **Utilisation**: Photos de l'extérieur et architecture
- **Suggestions**:
  - Façade du restaurant
  - Enseigne "Le Baobab"
  - Vue d'ensemble extérieure
  - Parking/accès
- **Format recommandé**: 1200x800px minimum
- **Noms suggérés**: `facade-jour.jpg`, `facade-nuit.jpg`, `entree-principale.jpg`

#### `gallery/dishes/`
- **Nombre d'images**: 15-30 images
- **Utilisation**: Portfolio culinaire complet
- **Suggestions**: Toutes vos meilleures photos de plats
- **Format recommandé**: 1000x1000px minimum
- **Noms suggérés**: `plat-01.jpg`, `plat-02.jpg`, etc. (ou noms descriptifs)

#### `gallery/ambiance/`
- **Nombre d'images**: 10-20 images
- **Utilisation**: Atmosphère et décoration intérieure
- **Suggestions**:
  - Salle à manger
  - Terrasse
  - Bar
  - Décoration
  - Tables dressées
- **Format recommandé**: 1200x800px minimum
- **Noms suggérés**: `terrasse-01.jpg`, `salle-interieur.jpg`, `decoration-africaine.jpg`

#### `gallery/events/`
- **Nombre d'images**: 5-15 images
- **Utilisation**: Événements et moments spéciaux
- **Suggestions**:
  - Groupes de clients heureux
  - Événements privés
  - Animations (musique live, etc.)
  - Anniversaires, célébrations
- **Format recommandé**: 1200x800px minimum
- **Noms suggérés**: `evenement-01.jpg`, `groupe-clients.jpg`, `musique-live.jpg`

---

### 👥 ABOUT (Page À Propos)

#### `about/team/`
- **Nombre d'images**: 5-15 images
- **Utilisation**: Photos de l'équipe
- **Suggestions**:
  - Chef principal (portrait professionnel)
  - Équipe de cuisine
  - Serveurs
  - Personnel d'accueil
- **Format recommandé**: 600x800px (portrait) ou 800x600px
- **Noms suggérés**: `chef-principal.jpg`, `equipe-cuisine.jpg`, `serveur-1.jpg`

#### `about/histoire/`
- **Nombre d'images**: 3-8 images
- **Utilisation**: Photos historiques du restaurant
- **Suggestions**:
  - Photos d'archives
  - Évolution du restaurant
  - Moments marquants
- **Format recommandé**: Variable selon les archives
- **Noms suggérés**: `ouverture-2016.jpg`, `renovation-2020.jpg`

---

### 📞 CONTACT (Page Contact)

#### `contact/`
- **Nombre d'images**: 2-5 images
- **Utilisation**: Aide à la localisation
- **Suggestions**:
  - Vue de l'entrée principale
  - Repères visuels pour trouver le restaurant
  - Plan d'accès visuel
- **Format recommandé**: 800x600px minimum
- **Noms suggérés**: `entree.jpg`, `acces-parking.jpg`, `facade-rue.jpg`

---

### 🎨 COMMON (Éléments Communs)

#### `common/logo/`
- **Nombre d'images**: 2-4 fichiers
- **Utilisation**: Logo du restaurant pour header, footer, favicon
- **Fichiers nécessaires**:
  - `logo.png` - Logo complet avec fond transparent
  - `logo-blanc.png` - Version blanche pour fond sombre
  - `logo-icon.png` - Icône seule (pour favicon)
  - `logo-horizontal.png` - Version horizontale si applicable
- **Format recommandé**: PNG avec transparence, 512x512px minimum pour logo complet

#### `common/icons/`
- **Utilisation**: Icônes personnalisées spécifiques au restaurant
- **Suggestions**: Icônes décoratives si vous en avez de personnalisées

---

## 🎯 Conseils Pratiques

### Formats de Fichiers
- **Privilégiez**: JPEG (.jpg) pour les photos
- **PNG**: Pour les logos et images avec transparence
- **WebP**: Format moderne pour performances optimales (optionnel)

### Nommage des Fichiers
- ✅ **BON**: `langouste-grillee.jpg`, `terrasse-soir.jpg`
- ❌ **ÉVITER**: `IMG_1234.jpg`, `DSC00456.jpg`, `photo finale version 2.jpg`
- Utilisez des noms descriptifs en minuscules
- Utilisez des tirets (-) au lieu d'espaces
- Pas de caractères spéciaux ou accents

### Optimisation
- **Taille des fichiers**: Essayez de garder les images sous 500KB chacune
- **Dimensions**: Respectez les dimensions recommandées ci-dessus
- **Qualité**: 80-85% de qualité JPEG est un bon compromis

### Outils Recommandés
- **Redimensionnement**: [TinyPNG.com](https://tinypng.com) ou [Squoosh.app](https://squoosh.app)
- **Compression**: Réduire la taille sans perdre de qualité
- **Recadrage**: Utilisez les dimensions recommandées

---

## 🔄 Processus de Mise à Jour

1. **Préparez vos photos**: Sélectionnez les meilleures photos de votre restaurant
2. **Organisez**: Placez chaque image dans le bon dossier selon ce guide
3. **Nommez**: Donnez des noms descriptifs à vos fichiers
4. **Optimisez**: Compressez les images si nécessaire
5. **Testez**: Vérifiez l'affichage sur le site local (npm run dev)
6. **Déployez**: Une fois satisfait, déployez les changements

---

## 📋 Checklist de Démarrage

Pour démarrer, voici le minimum d'images à préparer:

- [ ] 1 image hero pour l'accueil (`home/hero/`)
- [ ] 3 images de plats spéciaux (`home/specialties/`)
- [ ] 10-15 images pour la galerie (`gallery/dishes/` et `gallery/ambiance/`)
- [ ] 1 logo du restaurant (`common/logo/`)
- [ ] 5-8 photos de plats pour le menu (`menu/dishes/`)

---

## 💡 Besoin d'Aide?

Si vous avez besoin d'aide pour:
- Redimensionner ou optimiser vos images
- Intégrer les images dans le code
- Résoudre des problèmes d'affichage

N'hésitez pas à demander de l'assistance!

---

**Dernière mise à jour**: 2 décembre 2025
