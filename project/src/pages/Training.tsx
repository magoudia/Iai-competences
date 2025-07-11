import React from 'react';
import { BookOpen, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Training = () => {
  const programs = [];

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
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-iai-blue to-iai-red text-white">
        {/* Fond animé SVG particules */}
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <circle cx="200" cy="100" r="60" fill="#ffffff22">
            <animate attributeName="cy" values="100;180;100" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="220" r="40" fill="#ffffff33">
            <animate attributeName="cy" values="220;120;220" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="1200" cy="80" r="30" fill="#ffffff22">
            <animate attributeName="cy" values="80;160;80" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="250" r="20" fill="#ffffff33">
            <animate attributeName="cy" values="250;180;250" dur="5s" repeatCount="indefinite" />
          </circle>
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="w-20 h-20 bg-gradient-to-br from-iai-blue to-iai-red rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
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
          {programs.length > 0 ? (
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

                  <div className="mt-6 flex flex-col gap-2 items-center">
                    <Link
                      to={`/inscription-formation?formation=${encodeURIComponent(program.title)}`}
                      className="inline-block bg-gradient-to-r from-iai-blue to-iai-red text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      S'inscrire
                    </Link>
                    <Link
                      to={`/formation/${program.slug}`}
                      className="inline-block border border-iai-blue text-iai-blue px-6 py-3 rounded-full font-semibold hover:bg-iai-blue hover:text-white transition-all duration-300"
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-gradient-to-br from-iai-blue to-iai-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Formations en cours de préparation</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Notre équipe travaille actuellement sur l'élaboration de programmes de formation 
                  de qualité adaptés aux besoins du marché. Nous mettons tout en œuvre pour vous 
                  proposer des formations certifiantes et innovantes.
                </p>
                <p className="text-gray-600 mb-8">
                  Restez connectés ! Nos formations seront bientôt disponibles.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-iai-blue to-iai-red text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Nous contacter pour plus d'informations
                </Link>
              </div>
            </div>
          )}
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
      <section className="py-20 bg-gradient-to-r from-iai-blue to-iai-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à booster votre carrière ?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Rejoignez nos formations et développez les compétences les plus demandées 
            sur le marché du travail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-iai-blue px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Demander des informations
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-iai-blue transition-all duration-300"
            >
              Télécharger le catalogue
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-iai-blue mb-8 text-center">FAQ - Questions fréquentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-iai-blue mb-2">Comment s'inscrire à une formation ?</h3>
              <p className="text-gray-700">Cliquez sur le bouton "S'inscrire" de la formation souhaitée et remplissez le formulaire dédié. Vous recevrez une confirmation par email.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-iai-blue mb-2">Peut-on financer sa formation ?</h3>
              <p className="text-gray-700">Oui, plusieurs solutions de financement sont possibles. Contactez-nous pour étudier votre situation et les options disponibles.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-iai-blue mb-2">Les formations sont-elles certifiantes ?</h3>
              <p className="text-gray-700">Toutes nos formations délivrent une attestation ou un certificat reconnu dans le secteur IT.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-iai-blue mb-2">Les formations sont-elles accessibles à distance ?</h3>
              <p className="text-gray-700">La plupart de nos programmes sont disponibles en présentiel, à distance ou en format hybride.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-iai-blue mb-2">Quels sont les prérequis ?</h3>
              <p className="text-gray-700">Les prérequis varient selon la formation. Consultez la fiche détaillée de chaque programme pour plus d'informations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;