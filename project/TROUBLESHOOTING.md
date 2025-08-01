# Guide de Dépannage - API Formulaires

## Erreurs Courantes et Solutions

### 1. Erreur "Failed to fetch" / "ERR_NAME_NOT_RESOLVED"

**Problème :** Le serveur API n'est pas accessible

**Solutions :**
1. **Démarrer le serveur API :**
   ```bash
   cd server-example
   npm install
   npm run dev
   ```

2. **Vérifier que le serveur fonctionne :**
   ```bash
   curl http://localhost:3001/health
   ```

3. **Vérifier la configuration :**
   - Créez un fichier `.env` à la racine du projet frontend
   - Ajoutez : `VITE_API_URL=http://localhost:3001`

### 2. Erreur EmailJS 400

**Problème :** Configuration EmailJS incorrecte

**Solutions :**
1. **Vérifier les templates EmailJS :**
   - `template_alyjjrm` pour le contact
   - `template_95f2z3a` pour les formations
   - Créer `template_devis` pour les devis

2. **Vérifier les variables d'environnement :**
   ```env
   VITE_EMAILJS_SERVICE_ID=service_gjy4jmr
   VITE_EMAILJS_PUBLIC_KEY=-59ZpLNiQF9ncW5M8
   ```

3. **Créer le template manquant :**
   - Connectez-vous à EmailJS
   - Créez un template `template_devis`
   - Utilisez les variables : `{{from_name}}`, `{{from_email}}`, etc.

### 3. Erreur "Champs manquants"

**Problème :** Validation côté serveur échoue

**Solutions :**
1. **Vérifier les champs requis :**
   - Contact : name, email, subject, message
   - Devis : nom, email, service, details
   - Formation : name, email, phone, formation, mode

2. **Vérifier la validation côté client**

### 4. Erreur CORS

**Problème :** Le navigateur bloque les requêtes

**Solutions :**
1. **Vérifier la configuration CORS dans le serveur**
2. **Utiliser le bon port (3001)**
3. **Vérifier que le serveur accepte les requêtes du frontend**

## Étapes de Test

### 1. Test du Serveur API
```bash
# Démarrer le serveur
cd server-example
npm run dev

# Tester l'endpoint de santé
curl http://localhost:3001/health

# Tester un formulaire
curl -X POST http://localhost:3001/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Test message"
  }'
```

### 2. Test du Frontend
1. **Démarrer l'application :**
   ```bash
   npm run dev
   ```

2. **Ouvrir la console du navigateur**
3. **Tester un formulaire**
4. **Vérifier les logs dans la console**

### 3. Test EmailJS
1. **Vérifier la configuration EmailJS**
2. **Tester avec des données valides**
3. **Vérifier les emails reçus**

## Configuration Recommandée

### Fichier `.env` (frontend)
```env
VITE_API_URL=http://localhost:3001
VITE_EMAILJS_SERVICE_ID=service_gjy4jmr
VITE_EMAILJS_PUBLIC_KEY=-59ZpLNiQF9ncW5M8
VITE_EMAILJS_TEMPLATE_CONTACT=template_alyjjrm
VITE_EMAILJS_TEMPLATE_FORMATION=template_95f2z3a
VITE_EMAILJS_TEMPLATE_DEVIS=template_devis
```

### Fichier `.env` (serveur)
```env
PORT=3001
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-app
```

## Logs de Débogage

### Activer les logs détaillés
Les logs sont maintenant activés par défaut. Vérifiez la console du navigateur pour :
- Tentatives d'appel API
- Réponses du serveur
- Erreurs EmailJS
- État des formulaires

### Messages d'erreur améliorés
- Erreurs réseau : "Serveur non accessible"
- Erreurs EmailJS : "Erreur lors de l'envoi de l'email"
- Erreurs de validation : "Données invalides"
- Erreurs serveur : "Erreur serveur"

## Support

Si les problèmes persistent :
1. Vérifiez tous les logs dans la console
2. Testez chaque composant séparément
3. Vérifiez la configuration EmailJS
4. Assurez-vous que le serveur est démarré et accessible 