import React from 'react';
import { Linkedin, Mail, Award, Users, Globe } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: "Adama Aly DIAO",
      role: "Directeur Général",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      bio: "Expert en systèmes d'information avec plus de 15 ans d'expérience dans le secteur IT africain.",
      specialties: ["Stratégie IT", "Transformation Digitale", "Management"],
      email: "adama.diao@iai-competences.sn",
      linkedin: "#"
    },
    {
      name: "Addou DIAW",
      role: "Directeur Technique",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      bio: "Architecte logiciel senior spécialisé dans les solutions cloud et l'intelligence artificielle.",
      specialties: ["Architecture Cloud", "IA/ML", "DevOps"],
      email: "addou.diaw@iai-competences.sn",
      linkedin: "#"
    },
    {
      name: "Ibrahima Kane GUISSE",
      role: "Directeur Formation",
      image: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg",
      bio: "Formateur certifié avec une expertise reconnue dans le développement des compétences IT.",
      specialties: ["Formation IT", "Certification", "Pédagogie"],
      email: "ibrahima.guisse@iai-competences.sn",
      linkedin: "#"
    },
    {
      name: "Alphonse Diombo THIAKANE",
      role: "Directeur Commercial",
      image: "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg",
      bio: "Expert en développement commercial avec une connaissance approfondie du marché africain.",
      specialties: ["Développement Commercial", "Partenariats", "Stratégie"],
      email: "alphonse.thiakane@iai-competences.sn",
      linkedin: "#"
    }
  ];

  const experts = [
    {
      name: "Fatou NDIAYE",
      role: "Experte Cybersécurité",
      specialties: ["Sécurité", "Audit", "Conformité"],
      certifications: ["CISSP", "CEH", "CISA"]
    },
    {
      name: "Mamadou FALL",
      role: "Architecte Solutions",
      specialties: ["Architecture", "Microservices", "API"],
      certifications: ["AWS Solutions Architect", "Azure Architect", "TOGAF"]
    },
    {
      name: "Aïssatou BA",
      role: "Data Scientist",
      specialties: ["Machine Learning", "Big Data", "Analytics"],
      certifications: ["Google Cloud ML", "Microsoft Azure AI", "Tableau"]
    },
    {
      name: "Ousmane SARR",
      role: "Expert DevOps",
      specialties: ["CI/CD", "Kubernetes", "Monitoring"],
      certifications: ["Docker Certified", "Kubernetes CKA", "Jenkins"]
    }
  ];

  const stats = [
    { icon: Users, number: "20+", label: "Experts certifiés" },
    { icon: Award, number: "50+", label: "Certifications" },
    { icon: Globe, number: "15+", label: "Pays d'intervention" },
    { icon: Users, number: "100+", label: "Projets réalisés" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre Équipe
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Une équipe d'experts passionnés et certifiés, formés à l'Institut Africain 
              d'Informatique, pour vous accompagner dans vos projets les plus ambitieux
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Équipe Dirigeante
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les leaders qui guident IAI-COMPÉTENCES vers l'excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full"></div>
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Spécialités:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe technique d'exception avec des certifications reconnues mondialement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {expert.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{expert.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm">{expert.role}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Spécialités:</h4>
                  <div className="flex flex-wrap gap-1">
                    {expert.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Certifications:</h4>
                  <ul className="space-y-1">
                    {expert.certifications.map((cert, certIndex) => (
                      <li key={certIndex} className="text-xs text-gray-600 flex items-center">
                        <Award className="mr-1 text-green-600" size={12} />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre ADN
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les valeurs qui nous unissent et nous distinguent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence Technique",
                description: "Formés à l'IAI, nous maintenons les plus hauts standards de qualité technique et nous nous formons continuellement aux dernières technologies."
              },
              {
                title: "Esprit d'Équipe",
                description: "Notre force réside dans notre capacité à travailler ensemble, partager nos connaissances et nous entraider pour atteindre nos objectifs communs."
              },
              {
                title: "Innovation Continue",
                description: "Nous restons à la pointe de l'innovation technologique pour proposer à nos clients les solutions les plus avancées et efficaces."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Rejoignez Notre Équipe
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Vous êtes un expert IT passionné ? Nous recherchons constamment 
            des talents pour renforcer notre équipe.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Postuler
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;