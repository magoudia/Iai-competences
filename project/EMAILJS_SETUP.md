# Configuration EmailJS

## Problème Actuel
L'erreur indique que le template `template_alyjjrm` n'existe pas dans votre compte EmailJS.

## Solution

### 1. Vérifier les Templates Existants
Connectez-vous à [EmailJS Dashboard](https://dashboard.emailjs.com/admin/templates) et vérifiez quels templates existent.

### 2. Utiliser le Template Existant
Le template `template_95f2z3a` existe et fonctionne. Nous l'utilisons maintenant pour tous les formulaires.

### 3. Créer de Nouveaux Templates (Optionnel)

#### Template Contact (`template_contact`)
```html
<h2>Nouveau message de contact</h2>
<p><strong>Nom:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Entreprise:</strong> {{company}}</p>
<p><strong>Sujet:</strong> {{subject}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

#### Template Devis (`template_devis`)
```html
<h2>Nouvelle demande de devis</h2>
<p><strong>Nom:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Téléphone:</strong> {{telephone}}</p>
<p><strong>Entreprise:</strong> {{entreprise}}</p>
<p><strong>Service:</strong> {{service}}</p>
<p><strong>Détails:</strong></p>
<p>{{details}}</p>
```

### 4. Mettre à Jour la Configuration

Une fois les templates créés, mettez à jour `src/services/api.ts` :

```typescript
export const EMAILJS_TEMPLATES = {
  CONTACT: 'template_contact', // ou 'template_alyjjrm' si vous le recréez
  FORMATION: 'template_95f2z3a',
  DEVIS: 'template_devis'
};
```

## Configuration Actuelle (Temporaire)

Pour l'instant, tous les formulaires utilisent `template_95f2z3a` qui fonctionne.

## Test

1. Créez les templates manquants dans EmailJS
2. Mettez à jour la configuration
3. Testez les formulaires

## Variables Disponibles

### Contact
- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur
- `{{company}}` - Entreprise (optionnel)
- `{{subject}}` - Sujet du message
- `{{message}}` - Contenu du message

### Devis
- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur
- `{{telephone}}` - Téléphone (optionnel)
- `{{entreprise}}` - Entreprise (optionnel)
- `{{service}}` - Service demandé
- `{{details}}` - Détails de la demande

### Formation
- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur
- `{{phone}}` - Téléphone
- `{{formation}}` - Formation demandée
- `{{mode}}` - Mode de formation
- `{{message}}` - Message (optionnel) 