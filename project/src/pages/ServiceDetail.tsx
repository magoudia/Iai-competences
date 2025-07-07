import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import devImg from '../assets/dev.jpg';
import formationImg from '../assets/formation.jpg';
import conseilImg from '../assets/conseil.jpg';
import iaImg from '../assets/ia.jpg';

const SERVICES = [
  {
    slug: 'developpement-logiciel',
    title: 'Développement Logiciel',
    image: devImg,
    description: 'Solutions sur mesure et applications innovantes pour répondre à vos besoins métiers.',
    details: [
      "Applications web modernes",
      "Applications mobiles natives et hybrides",
      "Logiciels métier personnalisés",
      "Intégration de systèmes",
      "API et services web"
    ],
    advantages: [
      "Expertise technique de haut niveau",
      "Accompagnement personnalisé",
      "Support réactif et disponible",
      "Solutions évolutives et sécurisées"
    ],
    testimonials: [
      {
        name: "Aminata Diallo",
        role: "Responsable IT, TechCorp",
        content: "Le service a dépassé nos attentes, l'équipe a été très professionnelle et à l'écoute de nos besoins."
      },
      {
        name: "Moussa Kane",
        role: "Directeur Technique, Orange Sénégal",
        content: "Une expertise pointue et un accompagnement sur-mesure. Nous recommandons vivement !"
      }
    ]
  },
  {
    slug: 'formation-it',
    title: 'Formation IT',
    image: formationImg,
    description: 'Programmes de formation certifiants et coaching pour développer vos compétences.',
    details: [
      "Formations certifiantes",
      "Coaching personnalisé",
      "Formateurs experts",
      "Parcours adaptés à tous niveaux"
    ]
  },
  {
    slug: 'conseil-si',
    title: 'Conseil en SI',
    image: conseilImg,
    description: "Expertise en systèmes d'information et transformation digitale.",
    details: [
      "Audit de systèmes existants",
      "Architecture SI",
      "Stratégie digitale",
      "Gestion de projet IT",
      "Accompagnement au changement"
    ]
  },
  {
    slug: 'intelligence-artificielle',
    title: 'Intelligence Artificielle',
    image: iaImg,
    description: 'Solutions IA et Big Data pour votre entreprise.',
    details: [
      "Machine Learning et Deep Learning",
      "Analyse prédictive",
      "Traitement du langage naturel",
      "Vision par ordinateur",
      "Tableaux de bord analytiques"
    ]
  }
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <div className="pt-32 text-center text-red-600 font-bold">Service introuvable.</div>;
  }

  return (
    <div className="pt-24 max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
          <img src={service.image} alt={service.title} className="w-40 h-40 object-cover rounded-2xl" />
          <div>
            <h1 className="text-3xl font-bold text-iai-blue mb-2">{service.title}</h1>
            <p className="text-lg text-gray-700 mb-4">{service.description}</p>
            <Link to="/devis" className="inline-block bg-gradient-to-r from-iai-blue to-iai-red text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">Demander un devis</Link>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-iai-blue mb-2 mt-6">Notre offre</h2>
        <ul className="list-disc pl-6 mb-6">
          {service.details.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <div className="mt-10 mb-8">
          <h2 className="text-xl font-semibold text-iai-blue mb-4">Pourquoi choisir ce service&nbsp;?</h2>
          <p className="text-gray-600 mb-6">Découvrez les atouts qui font la différence pour votre projet&nbsp;:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.advantages && service.advantages.map((adv, i) => (
              <div key={i} className="flex items-start bg-iai-blue/5 rounded-xl p-4 shadow-sm">
                <CheckCircle className="text-iai-blue mr-3 mt-1 flex-shrink-0" size={28} />
                <span className="text-gray-800 text-base font-medium">{adv}</span>
              </div>
            ))}
          </div>
        </div>
        {service.testimonials && service.testimonials.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-iai-blue mb-4">Témoignages</h2>
            <div className="space-y-4">
              {service.testimonials.map((t, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <p className="text-gray-700 italic mb-2">"{t.content}"</p>
                  <div className="text-sm text-gray-500 font-semibold">{t.name} <span className="font-normal">- {t.role}</span></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Link to="/services" className="text-iai-blue underline">&larr; Retour aux services</Link>
    </div>
  );
};

export default ServiceDetail; 