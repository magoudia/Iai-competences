import React, { useState } from 'react';
import { contactService, devisService, formationService } from '../services/api';

const ApiTest = () => {
  const [testResults, setTestResults] = useState<{
    contact: string;
    devis: string;
    formation: string;
  }>({
    contact: '',
    devis: '',
    formation: '',
  });

  const testContact = async () => {
    try {
      const result = await contactService.sendContactForm({
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        subject: 'Test Subject',
        message: 'Test message',
      });
      setTestResults(prev => ({ ...prev, contact: '✅ Succès: ' + result.message }));
    } catch (error) {
      setTestResults(prev => ({ ...prev, contact: '❌ Erreur: ' + (error as Error).message }));
    }
  };

  const testDevis = async () => {
    try {
      const result = await devisService.sendDevisForm({
        nom: 'Test User',
        email: 'test@example.com',
        telephone: '+221 77 123 45 67',
        entreprise: 'Test Company',
        service: 'Développement Web',
        details: 'Test details',
      });
      setTestResults(prev => ({ ...prev, devis: '✅ Succès: ' + result.message }));
    } catch (error) {
      setTestResults(prev => ({ ...prev, devis: '❌ Erreur: ' + (error as Error).message }));
    }
  };

  const testFormation = async () => {
    try {
      const result = await formationService.sendFormationForm({
        name: 'Test User',
        email: 'test@example.com',
        phone: '+221 77 123 45 67',
        formation: 'Formation Test',
        mode: 'En ligne',
        message: 'Test message',
      });
      setTestResults(prev => ({ ...prev, formation: '✅ Succès: ' + result.message }));
    } catch (error) {
      setTestResults(prev => ({ ...prev, formation: '❌ Erreur: ' + (error as Error).message }));
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Test de l'API</h2>
      
      <div className="space-y-4">
        <div>
          <button
            onClick={testContact}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Tester Contact
          </button>
          <p className="mt-2 text-sm">{testResults.contact || 'Aucun test effectué'}</p>
        </div>

        <div>
          <button
            onClick={testDevis}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Tester Devis
          </button>
          <p className="mt-2 text-sm">{testResults.devis || 'Aucun test effectué'}</p>
        </div>

        <div>
          <button
            onClick={testFormation}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Tester Formation
          </button>
          <p className="mt-2 text-sm">{testResults.formation || 'Aucun test effectué'}</p>
        </div>
      </div>
    </div>
  );
};

export default ApiTest; 