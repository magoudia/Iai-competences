# Serveur API Exemple - IAI Compétence

Ce dossier contient un exemple de serveur backend pour gérer les formulaires de l'application IAI Compétence.

## Installation

1. Naviguez vers le dossier du serveur :
```bash
cd server-example
```

2. Installez les dépendances :
```bash
npm install
```

3. Créez un fichier `.env` avec vos configurations :
```env
PORT=3001
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-app
```

## Configuration Email

### Gmail
1. Activez l'authentification à 2 facteurs sur votre compte Gmail
2. Générez un mot de passe d'application
3. Utilisez ce mot de passe dans `EMAIL_PASS`

**Note :** Tous les emails (contact, devis, formation) seront envoyés à `magoudia203@gmail.com`

### Autres fournisseurs
Modifiez la configuration dans `server.js` selon votre fournisseur email.

## Démarrage

### Mode développement
```bash
npm run dev
```

### Mode production
```bash
npm start
```

Le serveur sera accessible sur `http://localhost:3001`

## Endpoints

### GET /health
Test de santé de l'API

### POST /contact
Envoi du formulaire de contact

### POST /devis
Envoi du formulaire de devis

### POST /formation
Inscription aux formations

## Test

Vous pouvez tester l'API avec curl :

```bash
# Test de santé
curl http://localhost:3001/health

# Test contact
curl -X POST http://localhost:3001/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "subject": "Test Subject",
    "message": "Test message"
  }'
```

## Intégration avec le Frontend

1. Modifiez `VITE_API_URL` dans le fichier `.env` du frontend :
```env
VITE_API_URL=http://localhost:3001
```

2. Redémarrez l'application frontend

## Déploiement

### Heroku
```bash
heroku create votre-app-name
heroku config:set EMAIL_USER=votre-email@gmail.com
heroku config:set EMAIL_PASS=votre-mot-de-passe-app
git push heroku main
```

### Vercel
1. Connectez votre repository
2. Configurez les variables d'environnement
3. Déployez

### Autres plateformes
Adaptez selon votre plateforme de déploiement.

## Sécurité

- Utilisez HTTPS en production
- Validez toutes les entrées
- Limitez le taux de requêtes
- Utilisez des variables d'environnement pour les secrets
- Configurez CORS correctement 