import React, { useState } from 'react';
import { devisService } from '../services/api';
import { useFormSubmission } from '../hooks/useFormSubmission';

const Devis = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    service: '',
    details: ''
  });
  
  const { state, submitForm } = useFormSubmission();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await submitForm(async () => {
      await devisService.sendDevisForm({
        nom: formData.nom,
        email: formData.email,
        telephone: formData.telephone,
        entreprise: formData.entreprise,
        service: formData.service,
        details: formData.details,
      });
      
      setFormData({ nom: '', email: '', telephone: '', entreprise: '', service: '', details: '' });
    });
  };

  return (
    <div className="pt-24 max-w-xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-iai-blue mb-4 text-center">Demande de Devis</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé.</p>
      
      {state.isSubmitted ? (
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="text-green-600 font-semibold text-lg mb-2">✓ Demande envoyée avec succès !</div>
          <p className="text-gray-600">Nous vous contacterons dans les plus brefs délais avec votre devis personnalisé.</p>
        </div>
      ) : state.error ? (
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="text-red-600 font-semibold text-lg mb-2">✗ Erreur d'envoi</div>
          <p className="text-red-600 mb-4">{state.error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-iai-blue text-white px-4 py-2 rounded-lg hover:bg-iai-red transition-colors"
          >
            Réessayer
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
            <input type="text" id="nom" name="nom" required value={formData.nom} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iai-blue focus:border-transparent transition-all" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iai-blue focus:border-transparent transition-all" />
          </div>
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
            <input type="text" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iai-blue focus:border-transparent transition-all" />
          </div>
          <div>
            <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
            <input type="text" id="entreprise" name="entreprise" value={formData.entreprise} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iai-blue focus:border-transparent transition-all" />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service souhaité</label>
            <input type="text" id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iai-blue focus:border-transparent transition-all" />
          </div>
          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">Détails de la demande</label>
            <textarea id="details" name="details" rows={4} value={formData.details} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iai-blue focus:border-transparent transition-all" />
          </div>
          <button 
            type="submit" 
            disabled={state.isSubmitting}
            className="w-full bg-iai-blue text-white py-3 rounded-lg font-semibold hover:bg-iai-red transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Devis; 