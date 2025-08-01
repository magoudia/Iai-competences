# Configuration de l'API pour les Formulaires

## Vue d'ensemble

Ce projet utilise maintenant un système d'API centralisé pour gérer l'envoi des formulaires avec un fallback vers EmailJS en cas d'échec de l'API.

## Structure des Services

### 1. Service API (`src/services/api.ts`)

Le service API gère trois types de formulaires :
- **Contact** : Formulaire de contact général
- **Devis** : Demande de devis
- **Formation** : Inscription aux formations

### 2. Hook de Gestion (`src/hooks/useFormSubmission.ts`)

Hook personnalisé qui gère :
- État de soumission (chargement, succès, erreur)
- Gestion des erreurs
- Reset automatique des formulaires

## Configuration

### Variables d'Environnement

Créez un fichier `.env` à la racine du projet avec :

```env
# Configuration API
VITE_API_URL=https://api.iaicompetence.com

# Configuration EmailJS (fallback)
VITE_EMAILJS_SERVICE_ID=service_gjy4jmr
VITE_EMAILJS_PUBLIC_KEY=-59ZpLNiQF9ncW5M8

# Templates EmailJS
VITE_EMAILJS_TEMPLATE_CONTACT=template_alyjjrm
VITE_EMAILJS_TEMPLATE_FORMATION=template_95f2z3a
VITE_EMAILJS_TEMPLATE_DEVIS=template_devis
```

### Configuration Serveur

Le serveur utilise un fichier `config.js` centralisé qui définit :
- **Email de réception** : `magoudia203@gmail.com`
- **Sujets des emails** par type de formulaire
- **Champs requis** pour chaque formulaire
- **Configuration email** (Gmail par défaut)

## Endpoints API Attendus

### 1. POST /contact
```json
{
  "name": "string",
  "email": "string",
  "company": "string (optionnel)",
  "subject": "string",
  "message": "string"
}
```
**Email reçu par :** magoudia203@gmail.com

### 2. POST /devis
```json
{
  "nom": "string",
  "email": "string",
  "telephone": "string (optionnel)",
  "entreprise": "string (optionnel)",
  "service": "string",
  "details": "string"
}
```
**Email reçu par :** magoudia203@gmail.com

### 3. POST /formation
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "formation": "string",
  "mode": "string",
  "message": "string (optionnel)"
}
```
**Email reçu par :** magoudia203@gmail.com

## Réponse API Attendue

```json
{
  "success": true,
  "message": "Message de succès",
  "data": {}
}
```

## Fonctionnalités

### 1. Fallback Automatique
Si l'API échoue, le système utilise automatiquement EmailJS comme solution de secours.

### 2. Gestion d'Erreurs
- Affichage des erreurs utilisateur
- Bouton de retry
- Messages d'erreur personnalisés

### 3. États de Chargement
- Indicateurs visuels pendant l'envoi
- Boutons désactivés pendant le traitement
- Messages de confirmation

## Utilisation

### Dans un Composant

```tsx
import { contactService } from '../services/api';
import { useFormSubmission } from '../hooks/useFormSubmission';

const MyForm = () => {
  const { state, submitForm } = useFormSubmission();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm(async () => {
      await contactService.sendContactForm(formData);
    });
  };
  
  // Utiliser state.isSubmitting, state.isSubmitted, state.error
};
```

## Déploiement

1. Configurez votre API backend avec les endpoints requis
2. Mettez à jour `VITE_API_URL` dans le fichier `.env`
3. Testez les formulaires en mode développement
4. Déployez avec la configuration de production

## Sécurité

- Validation côté client et serveur
- Protection CSRF recommandée
- Rate limiting sur l'API
- Validation des emails
- Sanitisation des données 