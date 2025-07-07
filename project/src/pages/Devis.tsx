import React, { useState } from 'react';

const Devis = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    service: '',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter l'envoi du formulaire (emailjs, API, etc.)
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ nom: '', email: '', telephone: '', entreprise: '', service: '', details: '' });
  };

  return (
    <div className="pt-24 max-w-xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-iai-blue mb-4 text-center">Demande de Devis</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé.</p>
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
        <button type="submit" className="w-full bg-iai-blue text-white py-3 rounded-lg font-semibold hover:bg-iai-red transition-all">Envoyer la demande</button>
        {isSubmitted && <p className="text-green-600 text-center mt-4">Votre demande a été envoyée avec succès !</p>}
      </form>
    </div>
  );
};

export default Devis; 