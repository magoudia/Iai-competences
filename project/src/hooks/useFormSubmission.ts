import { useState } from 'react';

interface FormSubmissionState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

interface UseFormSubmissionReturn {
  state: FormSubmissionState;
  submitForm: (submitFunction: () => Promise<any>) => Promise<void>;
  resetForm: () => void;
  setError: (error: string) => void;
}

export const useFormSubmission = (): UseFormSubmissionReturn => {
  const [state, setState] = useState<FormSubmissionState>({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const submitForm = async (submitFunction: () => Promise<any>) => {
    setState({
      isSubmitting: true,
      isSubmitted: false,
      error: null,
    });

    try {
      console.log('Début de la soumission du formulaire...');
      await submitFunction();
      console.log('Formulaire soumis avec succès');
      
      setState({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      });

      // Reset après 3 secondes
      setTimeout(() => {
        setState(prev => ({
          ...prev,
          isSubmitted: false,
        }));
      }, 3000);
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      
      let errorMessage = 'Une erreur est survenue';
      
      if (error instanceof Error) {
        errorMessage = error.message;
        
        // Messages d'erreur plus conviviaux
        if (errorMessage.includes('Failed to fetch')) {
          errorMessage = 'Serveur non accessible. Vérifiez votre connexion ou que le serveur est démarré.';
        } else if (errorMessage.includes('EmailJS')) {
          errorMessage = 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.';
        } else if (errorMessage.includes('HTTP: 400')) {
          errorMessage = 'Données invalides. Vérifiez que tous les champs requis sont remplis.';
        } else if (errorMessage.includes('HTTP: 500')) {
          errorMessage = 'Erreur serveur. Veuillez réessayer plus tard.';
        }
      }
      
      setState({
        isSubmitting: false,
        isSubmitted: false,
        error: errorMessage,
      });
    }
  };

  const resetForm = () => {
    setState({
      isSubmitting: false,
      isSubmitted: false,
      error: null,
    });
  };

  const setError = (error: string) => {
    setState(prev => ({
      ...prev,
      error,
    }));
  };

  return {
    state,
    submitForm,
    resetForm,
    setError,
  };
}; 