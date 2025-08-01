import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { formationService, emailService, EMAILJS_TEMPLATES } from '../services/api';
import { useFormSubmission } from '../hooks/useFormSubmission';

const InscriptionFormation = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const formation = params.get('formation') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    formation,
    mode: '',
    message: ''
  });
  
  const { state, submitForm } = useFormSubmission();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await submitForm(async () => {
      try {
        // Essayer d'abord l'API
        await formationService.sendFormationForm(formData);
      } catch (apiError) {
        // Fallback vers EmailJS si l'API échoue
        await emailService.sendEmail(EMAILJS_TEMPLATES.FORMATION, {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          formation: formData.formation,
          mode: formData.mode,
          message: formData.message,
        });
      }
      
      // Reset du formulaire après succès
      setFormData({ name: '', email: '', phone: '', formation: '', mode: '', message: '' });
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-iai-blue">Inscription à une formation</h1>
        
        {state.isSubmitted ? (
          <div className="text-center text-green-600 font-semibold py-8">
            <div className="text-2xl mb-2">✓</div>
            Votre demande a bien été envoyée !
          </div>
        ) : state.error ? (
          <div className="text-center text-red-600 font-semibold py-8">
            <div className="text-2xl mb-2">✗</div>
            <div className="mb-4">{state.error}</div>
            <button
              onClick={() => window.location.reload()}
              className="bg-iai-blue text-white px-4 py-2 rounded-lg hover:bg-iai-red transition-colors"
            >
              Réessayer
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Nom complet *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iai-blue focus:border-transparent transition-all" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iai-blue focus:border-transparent transition-all" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Téléphone *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iai-blue focus:border-transparent transition-all" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Formation *</label>
              <input type="text" name="formation" value={formData.formation} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iai-blue focus:border-transparent transition-all" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Mode de formation *</label>
              <select name="mode" value={formData.mode} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iai-blue focus:border-transparent transition-all">
                <option value="">Choisissez un mode</option>
                <option value="En ligne">En ligne</option>
                <option value="Présentiel">Présentiel</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iai-blue focus:border-transparent transition-all resize-none" />
            </div>
            <button 
              type="submit" 
              disabled={state.isSubmitting}
              className="w-full bg-gradient-to-r from-iai-blue to-iai-red text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.isSubmitting ? 'Inscription en cours...' : 'S\'inscrire'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default InscriptionFormation; 