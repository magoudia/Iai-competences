import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
    <div className="pt-24 max-w-3xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-iai-blue mb-4">{service.title}</h1>
      <img src={service.image} alt={service.title} className="w-40 h-40 object-cover rounded-2xl mb-6 mx-auto" />
      <p className="text-lg text-gray-700 mb-6">{service.description}</p>
      <h2 className="text-xl font-semibold text-iai-blue mb-2">Notre offre</h2>
      <ul className="list-disc pl-6 mb-4">
        {service.details.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <Link to="/services" className="text-iai-blue underline">&larr; Retour aux services</Link>
    </div>
  );
};

export default ServiceDetail; 