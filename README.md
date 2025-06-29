# NaturaCorp Vitrine

Application web vitrine publique de la société NaturaCorp.
Ce site présente l’entreprise, son produit MushBlue, les actualités, et permet aux visiteurs de contacter la société.

---

## Technologies utilisées

* **Angular 17** (Front-end SPA)
* **TypeScript**

---

## Fonctionnalités principales

* Présentation du produit MushBlue
* Pages blog / actualités
* Formulaire de contact
* FAQ et pages réglementaires (RGPD, mentions légales)
* Design responsive
* Optimisation SEO (métadonnées, lazy loading)

---

## Installation locale (environnement de développement)

### 1. Prérequis

* Node.js 20+ (npm inclus)
* npm 9+ ou supérieur
* Git

---

### 2. Clonage du projet

```bash
git clone https://github.com/Imad-chamo/NaturaCorp-VITRINE.git
cd naturacorp-vitrine
```

---

### 3. Installation des dépendances

```bash
npm install
```

---

### 4. Lancement du serveur local

```bash
ng serve
```

Le site sera accessible sur : [http://localhost:4200](http://localhost:4200)

---

## Problèmes fréquents

* **Erreur port déjà utilisé** → lancer avec un autre port :

  ```bash
  ng serve --port 4300
  ```
* **Erreur de dépendances ou de compilation** → supprimer `node_modules` puis relancer :

  ```bash
  rm -rf node_modules
  npm install
  ```

---

## Licence

Projet développé dans le cadre d’un projet étudiant. Usage interne uniquement.

---
