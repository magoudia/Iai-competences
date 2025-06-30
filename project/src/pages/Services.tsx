import React from 'react';
import { Code, Users, Brain, Shield, Database, Smartphone, Cloud, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Développement de Solutions Informatiques",
      description: "Conception et développement d'applications web, mobiles et logicielles sur mesure",
      features: [
        "Applications web modernes",
        "Applications mobiles natives et hybrides",
        "Logiciels métier personnalisés",
        "Intégration de systèmes",
        "API et services web"
      ]
    },
    {
      icon: Brain,
      title: "Intelligence Artificielle & Big Data",
      description: "Solutions IA avancées et analyse de données pour optimiser vos processus",
      features: [
        "Machine Learning et Deep Learning",
        "Analyse prédictive",
        "Traitement du langage naturel",
        "Vision par ordinateur",
        "Tableaux de bord analytiques"
      ]
    },
    {
      icon: Users,
      title: "Conseil en Systèmes d'Information",
      description: "Expertise et accompagnement pour votre transformation digitale",
      features: [
        "Audit de systèmes existants",
        "Architecture SI",
        "Stratégie digitale",
        "Gestion de projet IT",
        "Accompagnement au changement"
      ]
    },
    {
      icon: Shield,
      title: "Audit & Sécurité",
      description: "Évaluation et sécurisation de vos infrastructures informatiques",
      features: [
        "Audit de sécurité",
        "Tests de pénétration",
        "Mise en conformité RGPD",
        "Plan de reprise d'activité",
        "Formation sécurité"
      ]
    },
    {
      icon: Database,
      title: "Gestion de Données",
      description: "Optimisation et gestion de vos bases de données et entrepôts de données",
      features: [
        "Conception de bases de données",
        "Data Warehouse",
        "Migration de données",
        "Optimisation des performances",
        "Sauvegarde et archivage"
      ]
    },
    {
      icon: Cloud,
      title: "Solutions Cloud",
      description: "Migration et optimisation de vos infrastructures vers le cloud",
      features: [
        "Migration vers le cloud",
        "Architecture cloud native",
        "DevOps et CI/CD",
        "Monitoring et supervision",
        "Optimisation des coûts"
      ]
    },
    {
      icon: Smartphone,
      title: "Transformation Digitale",
      description: "Accompagnement complet dans votre transition numérique",
      features: [
        "Digitalisation des processus",
        "Automatisation",
        "Outils collaboratifs",
        "Formation utilisateurs",
        "Conduite du changement"
      ]
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Support technique et maintenance de vos systèmes informatiques",
      features: [
        "Maintenance préventive",
        "Support technique 24/7",
        "Mise à jour et évolutions",
        "Monitoring proactif",
        "Assistance utilisateurs"
      ]
    }
  ];

  const sectors = [
    "Secteur Public",
    "Banques & Finance",
    "Télécommunications",
    "Éducation",
    "Santé",
    "Commerce & Distribution",
    "Industrie",
    "ONG & Organisations Internationales"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Des solutions complètes et innovantes pour accompagner votre transformation digitale 
              et développer vos compétences informatiques
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services informatiques adaptés à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Secteurs d'Intervention
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous intervenons dans de nombreux secteurs d'activité au Sénégal et en Afrique
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-lg font-semibold text-gray-900">{sector}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Approche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse",
                description: "Étude approfondie de vos besoins et contraintes"
              },
              {
                step: "02",
                title: "Conception",
                description: "Élaboration de solutions adaptées et innovantes"
              },
              {
                step: "03",
                title: "Développement",
                description: "Réalisation avec les meilleures pratiques"
              },
              {
                step: "04",
                title: "Accompagnement",
                description: "Formation et support pour une adoption réussie"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Discutons de votre projet
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons 
            vous accompagner dans votre transformation digitale.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Demander un devis
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;