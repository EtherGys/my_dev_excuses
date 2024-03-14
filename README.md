L'application [my_dev_excuses](https://github.com/EtherGys/my_dev_excuses) est un projet réalisé pour l'entrée à la ForEach Academy

_Le projet est également déployé sur Vercel : [https://my-dev-excuses.vercel.app/](https://my-dev-excuses.vercel.app/)_
## Lancer le projet avec localhost

### Les étapes pour pouvoir lancer le projet : 


Cloner en local le repository avec la commande

```
git clone https://github.com/EtherGys/my_dev_excuses.git
```


Installer toutes les dépendances nécessaires
``` 
npm i 
# ou
npm install
```
Créer un fichier .ENV à la racine du projet avec la variable d'environnement comme suit : 

`
``MONGODB_URI=
```

La valeur de la variable d'environnement vous a été communiqué par mail.


Ensuite, vous pouvez build le projet avec
``` 
npm run build
# ou
yarn build
```


Lancez le projet avec 
```
npm run start
# ou
yarn start
```


Ou bien, passer en mode développement avec 
```
npm run dev
# ou
yarn dev
```

Ouvrez ensuite  [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.


**Si le port 3000 n'est pas disponible, le projet sera lancé sur le prochain port disponible (3001, 3002, etc.). Consultez votre terminal pour savoir le port sur lequel le projet a été lancé**


## La base de données

Ce projet utilise une base de données MongoDB, herbergée via MongoDB Atlas. Pour la durée de l'évaluation, la base de données accepte la connexion à partir de toute adresse ip, elle est donc également interrogeable via localhost.