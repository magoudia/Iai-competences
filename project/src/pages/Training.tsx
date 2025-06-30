import React from 'react';
import { BookOpen, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';

const Training = () => {
  const programs = [
    {
      title: "Développement Web Full-Stack",
      duration: "6 mois",
      level: "Débutant à Avancé",
      certification: "Certifié",
      description: "Formation complète en développement web moderne avec React, Node.js et bases de données",
      modules: [
        "HTML5, CSS3, JavaScript ES6+",
        "React.js et écosystème",
        "Node.js et Express",
        "Bases de données (SQL/NoSQL)",
        "Déploiement et DevOps"
      ],
      price: "750 000 FCFA"
    },
    {
      title: "Intelligence Artificielle & Machine Learning",
      duration: "4 mois",
      level: "Intermédiaire",
      certification: "Certifié",
      description: "Maîtrisez les concepts et outils de l'IA pour créer des solutions intelligentes",
      modules: [
        "Fondamentaux de l'IA",
        "Python pour l'IA",
        "Machine Learning avec Scikit-learn",
        "Deep Learning avec TensorFlow",
        "Projets pratiques"
      ],
      price: "650 000 FCFA"
    },
    {
      title: "Cybersécurité et Audit",
      duration: "3 mois",
      level: "Intermédiaire à Avancé",
      certification: "Certifié",
      description: "Formation spécialisée en sécurité informatique et audit de systèmes",
      modules: [
        "Fondamentaux de la sécurité",
        "Tests de pénétration",
        "Audit de sécurité",
        "Gestion des incidents",
        "Conformité et réglementation"
      ],
      price: "550 000 FCFA"
    },
    {
      title: "Administration Systèmes et Réseaux",
      duration: "4 mois",
      level: "Débutant à Intermédiaire",
      certification: "Certifié",
      description: "Devenez expert en administration de systèmes Linux/Windows et réseaux",
      modules: [
        "Administration Linux/Windows",
        "Configuration réseau",
        "Virtualisation",
        "Monitoring et supervision",
        "Sécurité des infrastructures"
      ],
      price: "600 000 FCFA"
    },
    {
      title: "Gestion de Projet IT",
      duration: "2 mois",
      level: "Tous niveaux",
      certification: "Certifié",
      description: "Méthodologies agiles et gestion de projets informatiques",
      modules: [
        "Méthodologies Agile/Scrum",
        "Planification de projet",
        "Gestion d'équipe",
        "Outils de gestion",
        "Certification PMP/Scrum Master"
      ],
      price: "400 000 FCFA"
    },
    {
      title: "Cloud Computing (AWS/Azure)",
      duration: "3 mois",
      level: "Intermédiaire",
      certification: "Certifié",
      description: "Maîtrisez les plateformes cloud et l'architecture cloud native",
      modules: [
        "Fondamentaux du Cloud",
        "Services AWS/Azure",
        "Architecture cloud",
        "DevOps et CI/CD",
        "Sécurité cloud"
      ],
      price: "700 000 FCFA"
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Certifications Reconnues",
      description: "Obtenez des certifications valorisées sur le marché du travail"
    },
    {
      icon: Users,
      title: "Formateurs Experts",
      description: "Apprenez avec des professionnels expérimentés et certifiés"
    },
    {
      icon: BookOpen,
      title: "Approche Pratique",
      description: "70% de pratique avec des projets réels et des cas d'usage concrets"
    },
    {
      icon: Clock,
      title: "Flexibilité",
      description: "Formations en présentiel, distanciel ou format hybride"
    }
  ];

  const testimonials = [
    {
      name: "Aminata Diallo",
      role: "Développeuse Full-Stack",
      company: "TechCorp Dakar",
      content: "La formation m'a permis de maîtriser les technologies modernes et de décrocher un poste de développeuse senior.",
      rating: 5
    },
    {
      name: "Moussa Kane",
      role: "Administrateur Système",
      company: "Orange Sénégal",
      content: "Excellente formation avec des formateurs compétents. J'ai pu appliquer immédiatement les connaissances acquises.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Formations IT
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Développez vos compétences informatiques avec nos programmes de formation 
              certifiants dispensés par des experts du domaine
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Nos Formations ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche pédagogique innovante pour une montée en compétences efficace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <advantage.icon className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Programmes de Formation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez parmi notre catalogue de formations adaptées aux besoins du marché
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {program.certification}
                  </span>
                  <span className="text-2xl font-bold text-blue-600">{program.price}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="mr-2 text-blue-600" size={16} />
                    Durée: {program.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="mr-2 text-blue-600" size={16} />
                    Niveau: {program.level}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Modules inclus:</h4>
                  <ul className="space-y-2">
                    {program.modules.map((module, moduleIndex) => (
                      <li key={moduleIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="mr-2 text-green-600 flex-shrink-0 mt-0.5" size={14} />
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  S'inscrire
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce que disent nos anciens apprenants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role} - {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à booster votre carrière ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez nos formations et développez les compétences les plus demandées 
            sur le marché du travail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Demander des informations
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Télécharger le catalogue
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;