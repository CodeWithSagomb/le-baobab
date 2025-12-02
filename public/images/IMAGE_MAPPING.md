# Mapping des Images à Remplacer - Page par Page

Ce document liste toutes les images actuellement utilisées (placeholders Unsplash) et où placer vos vraies images pour les remplacer.

---

## 🏠 PAGE HOME (Accueil)

### Image Hero (Section Principale)
**Fichier**: `pages/Home.tsx` (ligne 76)
- **Image actuelle**: `https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b`
- **À remplacer par**: `public/images/home/hero/hero-principal.jpg`
- **Suggestion**: Vue spectaculaire de votre terrasse ou plat signature
- **Dimensions**: 1920x1080px minimum

### Section Philosophy (Expérience Authentique)
**Fichier**: `pages/Home.tsx` (ligne 181)
- **Image actuelle**: `https://images.unsplash.com/photo-1600093463592-8e36ae95ef56`
- **À remplacer par**: `public/images/home/philosophy/chef-preparation.jpg`
- **Suggestion**: Chef en train de préparer un plat, ou ingrédients frais
- **Dimensions**: 800x500px minimum

### Spécialités (3 plats mis en avant)
**Fichier**: `pages/Home.tsx` (ligne 262)
- **Images actuelles**: Définies dans `constants.ts` pour les items avec `isSpecial: true`
- **À remplacer par**:
  - Spécialité 1: `public/images/home/specialties/specialite-1.jpg`
  - Spécialité 2: `public/images/home/specialties/specialite-2.jpg`
  - Spécialité 3: `public/images/home/specialties/specialite-3.jpg`
- **Suggestion**: Vos 3 plats signatures les plus populaires
- **Dimensions**: 800x800px (format carré)

---

## 🍽️ PAGE MENU

**Fichier**: `pages/Menu.tsx`

### Images des Catégories
Les catégories sont définies dans `constants.ts`
- **À placer dans**: `public/images/menu/categories/`
- **Fichiers à créer**:
  - `categorie-grillades.jpg`
  - `categorie-fruits-de-mer.jpg`
  - `categorie-specialites-senegalaises.jpg`
  - `categorie-salades-entrees.jpg`
  - `categorie-desserts.jpg`
- **Dimensions**: 800x400px (format paysage)

### Photos Individuelles des Plats
Les plats sont définis dans `constants.ts` dans `MENU_ITEMS`
- **À placer dans**: `public/images/menu/dishes/`
- **Nommage**: Utilisez le nom du plat en minuscules avec tirets
  - Exemple: `thieboudienne.jpg`, `langouste-grillee.jpg`, `yassa-poulet.jpg`
- **Dimensions**: 600x600px minimum

---

## 🖼️ PAGE GALLERY

**Fichier**: `pages/Gallery.tsx`

### Photos du Restaurant (Extérieur)
- **À placer dans**: `public/images/gallery/restaurant/`
- **Fichiers suggérés**:
  - `facade-jour.jpg`
  - `facade-nuit.jpg`
  - `entree-principale.jpg`
  - `terrasse-exterieure.jpg`
  - `enseigne-baobab.jpg`
- **Quantité**: 5-10 images
- **Dimensions**: 1200x800px minimum

### Photos Culinaires
- **À placer dans**: `public/images/gallery/dishes/`
- **Fichiers suggérés**:
  - `plat-01.jpg` à `plat-30.jpg` (noms descriptifs de préférence)
- **Quantité**: 15-30 images
- **Dimensions**: 1000x1000px minimum

### Ambiance & Décoration Intérieure
- **À placer dans**: `public/images/gallery/ambiance/`
- **Fichiers suggérés**:
  - `salle-principale.jpg`
  - `terrasse-interieure.jpg`
  - `bar.jpg`
  - `decoration-africaine.jpg`
  - `tables-dressees.jpg`
- **Quantité**: 10-20 images
- **Dimensions**: 1200x800px minimum

### Événements
- **À placer dans**: `public/images/gallery/events/`
- **Fichiers suggérés**:
  - `evenement-01.jpg`
  - `groupe-clients.jpg`
  - `musique-live.jpg`
  - `celebration.jpg`
- **Quantité**: 5-15 images
- **Dimensions**: 1200x800px minimum

---

## 👥 PAGE ABOUT (À Propos)

**Fichier**: `pages/About.tsx`

### Photos de l'Équipe
- **À placer dans**: `public/images/about/team/`
- **Fichiers suggérés**:
  - `chef-principal.jpg` (portrait professionnel du chef)
  - `equipe-cuisine.jpg` (photo de groupe de l'équipe en cuisine)
  - `serveur-1.jpg`, `serveur-2.jpg`
  - `equipe-complete.jpg`
- **Quantité**: 5-15 images
- **Dimensions**: 600x800px (portrait) ou 800x600px (paysage)

### Histoire du Restaurant
- **À placer dans**: `public/images/about/histoire/`
- **Fichiers suggérés**:
  - `ouverture-2016.jpg`
  - `renovation-2020.jpg`
  - `evolution-1.jpg`
  - `moments-marquants.jpg`
- **Quantité**: 3-8 images
- **Dimensions**: Variable selon vos archives

---

## 📞 PAGE CONTACT

**Fichier**: `pages/Contact.tsx`

### Photos de Localisation
- **À placer dans**: `public/images/contact/`
- **Fichiers suggérés**:
  - `entree.jpg` (vue de l'entrée principale)
  - `facade-rue.jpg` (façade depuis la rue)
  - `parking.jpg` (accès parking)
  - `repere-visuel.jpg` (repères pour trouver le restaurant)
- **Quantité**: 2-5 images
- **Dimensions**: 800x600px minimum

---

## 🎨 ÉLÉMENTS COMMUNS (Header, Footer, etc.)

### Logo du Restaurant
- **À placer dans**: `public/images/common/logo/`
- **Fichiers nécessaires**:
  - `logo.png` - Logo complet couleur (fond transparent)
  - `logo-blanc.png` - Version blanche pour fond sombre
  - `logo-icon.png` - Icône seule (pour favicon)
  - `logo-horizontal.png` - Version horizontale si applicable
- **Format**: PNG avec transparence
- **Dimensions**: 512x512px minimum pour logo complet

### Icônes Personnalisées (Optionnel)
- **À placer dans**: `public/images/common/icons/`
- **Utilisation**: Si vous avez des icônes décoratives personnalisées

---

## 📝 COMMENT REMPLACER LES IMAGES

### Méthode 1: Remplacement Manuel (Recommandé)

1. **Placez vos images** dans les dossiers appropriés selon ce guide
2. **Modifiez le fichier concerné** pour pointer vers vos images locales:

**Exemple pour l'image hero de la page d'accueil:**

Remplacez dans `pages/Home.tsx` (ligne ~76):
```tsx
// AVANT (Unsplash)
backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b...")'

// APRÈS (Image locale)
backgroundImage: 'url("/images/home/hero/hero-principal.jpg")'
```

**Exemple pour les plats du menu:**

Modifiez dans `constants.ts`:
```typescript
// AVANT
{
  id: 1,
  name: 'Thiéboudienne',
  image: 'https://images.unsplash.com/photo-...'
}

// APRÈS
{
  id: 1,
  name: 'Thiéboudienne',
  image: '/images/menu/dishes/thieboudienne.jpg'
}
```

### Méthode 2: Demander de l'Aide

Si vous n'êtes pas à l'aise avec le code, placez simplement vos images dans les bons dossiers et demandez de l'aide pour mettre à jour les chemins dans le code.

---

## ✅ CHECKLIST DE REMPLACEMENT PAR PAGE

### Page HOME
- [ ] Image hero principale
- [ ] Image section philosophy
- [ ] 3 images de plats spéciaux
- [ ] Tester l'affichage avec `npm run dev`

### Page MENU
- [ ] 5-8 images de catégories
- [ ] Photos de tous les plats listés dans le menu
- [ ] Tester l'affichage

### Page GALLERY
- [ ] 5-10 photos restaurant (extérieur)
- [ ] 15-30 photos culinaires
- [ ] 10-20 photos ambiance
- [ ] 5-15 photos événements
- [ ] Tester l'affichage

### Page ABOUT
- [ ] Photos de l'équipe
- [ ] Photos historiques
- [ ] Tester l'affichage

### Page CONTACT
- [ ] 2-5 photos de localisation
- [ ] Tester l'affichage

### Éléments Communs
- [ ] Logo principal
- [ ] Logo blanc
- [ ] Logo icône (favicon)
- [ ] Tester sur toutes les pages

---

## 🔧 FICHIERS À MODIFIER

Voici les fichiers principaux où les chemins d'images devront être mis à jour:

1. **`constants.ts`** - Contient toutes les données du menu et des catégories
2. **`pages/Home.tsx`** - Images de la page d'accueil
3. **`pages/Menu.tsx`** - Images de la page menu (si en dur dans le code)
4. **`pages/Gallery.tsx`** - Images de la galerie
5. **`pages/About.tsx`** - Images de l'équipe et histoire
6. **`pages/Contact.tsx`** - Images de localisation
7. **`components/Layout.tsx`** - Logo du header/footer

---

## 💡 CONSEILS PRATIQUES

### Travaillez Page par Page
1. Commencez par la **page HOME** (la plus importante)
2. Ensuite **MENU** (core business)
3. Puis **GALLERY** (impact visuel)
4. Enfin **ABOUT** et **CONTACT**

### Testez Régulièrement
Après chaque page mise à jour:
```bash
npm run dev
```
Vérifiez que tout s'affiche correctement avant de passer à la suivante.

### Gardez les Originaux
Conservez une copie de vos photos originales en haute résolution ailleurs, au cas où vous auriez besoin de les retraiter.

---

## 🆘 BESOIN D'AIDE?

Si vous rencontrez des difficultés:
- Les images ne s'affichent pas? → Vérifiez les chemins et les noms de fichiers
- Images trop lourdes? → Utilisez TinyPNG.com pour les compresser
- Besoin de modifier le code? → N'hésitez pas à demander de l'aide!

---

**Dernière mise à jour**: 2 décembre 2025
