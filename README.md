# Localisation des pharmacies
Ce projet a pour but de mettre en place une interface permettant de localiser les pharmacies de garde de jour et de nuit dans une ville choisie et par zone aussi. Il utilise Spring boot dans le backend et JPA pour la logique côté serveur,la gestion de la base de données et le SGBD Mysql.

# Fonctionnalités(partie mobile)
1. Sélection d'une ville dans la liste des villes disponibles
2. Affichage des pharmacies de garde de jour et de nuit dans la ville sélectionnée, groupées par zone
3. Possibilité de filtrer les pharmacies affichées par type (garde de jour ou de nuit)
4. Localisation des pharmacies dans la map
5. Affichage de l'iténiraire entre le mobinaute et la pharmacie en prennant en considération la distante entre le mobinaute et la pharmacie
6. Affichage de toutes les pharmacies dans le map 
7. afficher les les pharmacies les plus proches du mobinanute

# Fonctionnalités(partie web)
1.Validation des pharmacies (Ajouter le champ etat dans pharmacie : etat = 0 : en attente de validation ; etat = 1 : validée ; etat = 2 : refusé)
2.Afficher l’historique des gardes d’une pharmacie
3.Statistiques : Afficher le nombre des pharmacies par ville et zone


# Mise en place du projet
Pour mettre en place ce projet, vous aurez besoin des éléments suivants :

1. Un serveur d'application Java (comme Tomcat)
2. Un SGBD (comme MySQL)
3. Un éditeur de code (comme intellij idea)
4. Le driver JDBC de votre SGBD (à télécharger sur le site officiel de votre SGBD)
5. Le framework JPA (à télécharger sur le site officiel ou via Maven)
# Déploiement
Pour déployer ce projet sur votre serveur d'application, suivez les étapes suivantes :

1. Téléchargez le projet sur votre ordinateur
2. Ouvrez-le dans votre éditeur de code
3. Configurez la connexion à votre SGBD dans le fichier application.properties
4. Exportez le projet en tant qu'archive WAR
5. Déployez l'archive sur votre serveur d'application en suivant les instructions de votre serveur
6. Ouvrez votre navigateur et accédez à l'application en entrant l'URL suivante : http://localhost:8080/nom_de_votre_application (remplacez nom_de_votre_application par le nom de votre application déployée)

#Lien github vers les parties mobile et le backend

mobile : https://github.com/ichane31/pharmacielocalisation   ; 

backend : https://github.com/ichane31/backendPharmacieLocation

# Auteur
Ce projet a été réalisé par :

  Najia OKACHA 
  
  Roukéya ASSOUMA 
  
  Yassine HASSINI.

