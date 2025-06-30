import React from 'react';
import { Calendar, MapPin, Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: "2025",
      title: "Création d'IAI-COMPÉTENCES",
      description: "Fondation de la société par des experts formés à l'Institut Africain d'Informatique"
    },
    {
      year: "2025",
      title: "Lancement des activités",
      description: "Début des prestations de conseil, formation et développement"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet et formation que nous proposons"
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Notre équipe est composée d'experts certifiés et expérimentés"
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Nous adoptons les dernières technologies et méthodologies"
    },
    {
      icon: Target,
      title: "Accompagnement",
      description: "Nous accompagnons nos clients dans leur transformation digitale"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À Propos d'IAI-COMPÉTENCES
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Une société innovante spécialisée dans l'ingénierie informatique, 
              le conseil en systèmes d'information et la formation professionnelle
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                IAI-COMPÉTENCES est une SAS (Société à Actions Simplifiée) au capital de 
                dix-neuf millions cent trente mille FCFA, dont le siège est situé à Dakar, 
                au quartier Liberté 6 extension, Lot No16.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Créée en janvier 2025 par des informaticiens formés à l'Institut Africain 
                d'Informatique de Libreville, notre société tire son nom du radical "IAI" 
                qui reflète nos origines et notre excellence académique.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nous nous positionnons sur le marché sénégalais et sous-régional pour 
                proposer des services de formation, d'accompagnement et de développement 
                de solutions informatiques innovantes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-2xl text-center">
                <Calendar className="mx-auto mb-4 text-blue-600" size={40} />
                <div className="text-2xl font-bold text-gray-900">2025</div>
                <div className="text-gray-600">Année de création</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl text-center">
                <MapPin className="mx-auto mb-4 text-purple-600" size={40} />
                <div className="text-2xl font-bold text-gray-900">Dakar</div>
                <div className="text-gray-600">Siège social</div>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl text-center">
                <Users className="mx-auto mb-4 text-green-600" size={40} />
                <div className="text-2xl font-bold text-gray-900">SAS</div>
                <div className="text-gray-600">Forme juridique</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl text-center">
                <Target className="mx-auto mb-4 text-orange-600" size={40} />
                <div className="text-2xl font-bold text-gray-900">19M</div>
                <div className="text-gray-600">Capital FCFA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Offrir à nos clients - individus, entreprises, gouvernements et organisations - 
                des services de conseil, d'études, de formation, d'audit, de coaching et de 
                développement de solutions informatiques de haute qualité.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Accompagner la transformation digitale des entreprises
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Former et certifier les professionnels IT
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Développer des solutions innovantes et sur mesure
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Devenir le partenaire de référence en Afrique pour l'accompagnement 
                des organisations dans leur transformation digitale et le développement 
                des compétences IT.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Leadership sur le marché sénégalais et sous-régional
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Excellence reconnue dans nos domaines d'expertise
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Impact positif sur le développement numérique africain
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action et définissent notre identité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Parcours
            </h2>
            <p className="text-xl text-gray-600">
              Les étapes clés de notre développement
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-8"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;