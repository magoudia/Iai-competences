// Configuration centralisée pour l'API
module.exports = {
  // Adresse email qui recevra tous les formulaires
  RECIPIENT_EMAIL: 'magoudia203@gmail.com',
  
  // Configuration du serveur
  PORT: process.env.PORT || 3001,
  
  // Configuration email
  EMAIL_CONFIG: {
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password'
    }
  },
  
  // Sujets des emails par type
  EMAIL_SUBJECTS: {
    contact: 'Nouveau message de contact',
    devis: 'Nouvelle demande de devis',
    formation: 'Nouvelle inscription formation'
  },
  
  // Validation des champs requis
  REQUIRED_FIELDS: {
    contact: ['name', 'email', 'subject', 'message'],
    devis: ['nom', 'email', 'service', 'details'],
    formation: ['name', 'email', 'phone', 'formation', 'mode']
  }
}; 