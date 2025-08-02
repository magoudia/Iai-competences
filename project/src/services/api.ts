// Configuration de l'API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Types pour les formulaires
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export interface DevisFormData {
  nom: string;
  email: string;
  telephone?: string;
  entreprise?: string;
  service: string;
  details: string;
}

export interface FormationFormData {
  name: string;
  email: string;
  phone: string;
  formation: string;
  mode: string;
  message?: string;
}

// Interface pour les réponses API
interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

// Fonction utilitaire pour les appels API
async function apiCall(endpoint: string, data: any): Promise<ApiResponse> {
  try {
    console.log(`Tentative d'appel API: ${API_BASE_URL}${endpoint}`);
    
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Erreur HTTP ${response.status}:`, errorText);
      throw new Error(`Erreur HTTP: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('Réponse API:', result);
    return result;
  } catch (error) {
    console.error('Erreur API:', error);
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Serveur API non accessible. Vérifiez que le serveur est démarré sur http://localhost:3001');
    }
    throw error;
  }
}

// Service pour l'envoi du formulaire de contact
export const contactService = {
  async sendContactForm(data: ContactFormData): Promise<ApiResponse> {
    return apiCall('/contact', data);
  }
};

// Service pour l'envoi du formulaire de devis
export const devisService = {
  async sendDevisForm(data: DevisFormData): Promise<ApiResponse> {
    return apiCall('/devis', data);
  }
};

// Service pour l'inscription aux formations
export const formationService = {
  async sendFormationForm(data: FormationFormData): Promise<ApiResponse> {
    return apiCall('/formation', data);
  }
};

// Service générique pour l'envoi d'emails (fallback avec EmailJS)
export const emailService = {
  async sendEmail(templateId: string, templateParams: any): Promise<any> {
    try {
      console.log('Tentative d\'envoi EmailJS avec template:', templateId);
      console.log('Paramètres:', templateParams);
      
      // Import dynamique d'emailjs pour éviter les problèmes de SSR
      const emailjs = await import('emailjs-com');
      
      const result = await emailjs.default.send(
        'service_gjy4jmr',
        templateId,
        templateParams,
        '-59ZpLNiQF9ncW5M8'
      );
      
      console.log('EmailJS envoyé avec succès:', result);
      return result;
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      throw new Error(`Erreur EmailJS: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    }
  }
};

// Configuration pour les templates EmailJS
export const EMAILJS_TEMPLATES = {
  CONTACT: 'template_j785p7c', // Template contact spécifique
  FORMATION: 'template_95f2z3a', // Template formation existant
  DEVIS: 'template_j785p7c' // Utilise le template contact pour les devis aussi
}; 