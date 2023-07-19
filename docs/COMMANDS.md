# Commandes effectuées pendant le projet

-- TODO --

- Expliquer l'arborescence du projet

## Initialisation du projet

### Installation du React Modele Vite

- Le React Modele Vite sert à Démarrer un nouveau projet avec un environnement fiable et configuré.
- Travailler sur un challenge avec des dossiers, des fichiers pré-existants

Il faut que le dossier `React-modele-vite` se trouve dans le répertoire du projet que nous voulons créer.

```sh
cd dossier_projet
# puis on lance le script
./React-modele-vite/bin/install.sh
#  - Soit on renseigne le nom de notre projet
#  - Soit on copie l'adresse SSH de notre projet à cloner
```

#### Commandes effectuées par le React Modele Vite

```sh
# direction le dossier du challenge
cd mon-challenge

# copie des fichiers cachés et non-cachés présents à la racine du modèle
# note : des alertes sont affichées à propos de dossiers ignorés, c'est normal
cp -n ../React-modele-vite/{.*,*} .

# copie (récursive) des dossiers src/, config/ et public/
# note : des alertes peuvent être affichées à propos de fichiers ignorés, c'est normal
cp -rn ../React-modele-vite/{src,public} .

# installation des dépendances listées dans le package.json
yarn

# lancement du serveur de dev
yarn dev
```
