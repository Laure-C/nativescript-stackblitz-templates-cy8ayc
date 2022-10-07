# TP IHM - React NativeScript

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/nativescript-stackblitz-templates-wca3j3)

### Exercice
- Créer un bouton dans l'accueil
- Ajouter un nouveau fichier tsx (vous pouvez vous insipirez de Information.tsx)
- Lier le bouton au tsx
- Afficher la météo de Grenoble
  - Nom ville
  - Image/Icon
  - Température
  - Vent
  - Humidté
  - Bouton retour accueil 

### Exercice Supplémentaire
Faire la même chose pour Lyon ou Oulles

### Fichiers src
- app.ts <-- initialisation de l'application
- app.css <-- css de toute l'application
- WeatherByCity.ts <-- Model (format des données) + Service (Fonctions pour avoir les données et en ajouter)
- __NavigationParamList.ts__ <-- Liste des paramètres de navigation pour les liens (lier à MainStack et aux autres interfaces créées)
- LinksIconWeather.ts <-- Liste des liens pour les images 
- components
  - __MainStack.tsx__ <-- Liste des liens de l'applicion
  - ScreenOne.tsx <-- Accueil de l'application, regroupe les boutons pour naviguer sur l'application
  - Information.tsx  <-- Exemple interface, avec un paramètre passer par ScreenOne.tsx
