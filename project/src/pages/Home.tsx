import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Award, Globe, ChevronRight, Star } from 'lucide-react';
import devImg from '../assets/dev.jpg';
import formationImg from '../assets/formation.jpg';
import conseilImg from '../assets/conseil.jpg';
import iaImg from '../assets/ia.jpg';

const Home = () => {
  const services = [
    {
      image: devImg,
      title: "Développement Logiciel",
      description: "Solutions sur mesure et applications innovantes",
      slug: "developpement-logiciel"
    },
    {
      image: formationImg,
      title: "Formation IT",
      description: "Programmes de formation certifiants et coaching",
      slug: "formation-it"
    },
    {
      image: conseilImg,
      title: "Conseil en SI",
      description: "Expertise en systèmes d'information et transformation digitale",
      slug: "conseil-si"
    },
    {
      image: iaImg,
      title: "Intelligence Artificielle",
      description: "Solutions IA et Big Data pour votre entreprise",
      slug: "intelligence-artificielle"
    }
  ];

  const stats = [
    { number: "2025", label: "Année de création" },
    { number: "19M", label: "Capital FCFA" },
    { number: "100%", label: "Experts certifiés" },
    { number: "15+", label: "Pays d'intervention" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center animate-fade-in-up">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gray-400/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-iai-blue to-iai-red bg-clip-text text-transparent">
                IAI Compétences
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">
                Une solution pour tous
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expertise en ingénierie informatique, conseil en systèmes d'information 
              et formation professionnelle au Sénégal et en Afrique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-iai-blue to-iai-red text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
              >
                Découvrir nos services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-iai-blue hover:text-white hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-iai-blue/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-iai-red/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-iai-blue/20 rounded-full animate-float"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Domaines d'Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions innovantes et sur mesure pour accompagner votre transformation digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/service/${service.slug}`}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group block"
                style={{ textDecoration: 'none' }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-iai-blue to-iai-red rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform overflow-hidden hover:zoom-effect animate-fade-in-up">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Qui sommes-nous ?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                IAI-COMPÉTENCES est une SAS créée en janvier 2025 par des informaticiens 
                formés à l'Institut Africain d'Informatique de Libreville. Nous nous 
                positionnons sur le marché sénégalais et sous-régional pour proposer 
                des services de formation, d'accompagnement et de développement de solutions informatiques.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Notre particularité réside dans l'expérience et la compétence de nos 
                actionnaires et intervenants, tous certifiés dans les domaines techniques 
                les plus importants.
              </p>
              <Link
                to="/a-propos"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
              >
                En savoir plus
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-iai-blue to-iai-red rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-center">
                  <div className="text-4xl font-bold mb-4">19M FCFA</div>
                  <div className="text-xl mb-6">Capital social</div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Star className="mr-2" size={20} />
                      <span>Experts certifiés</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-2" size={20} />
                      <span>Solutions innovantes</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-2" size={20} />
                      <span>Accompagnement personnalisé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-iai-blue to-iai-red animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos projets et découvrir 
            comment nous pouvons vous accompagner dans votre transformation digitale.
          </p>
          <Link
            to="/contact"
            className="bg-white text-iai-blue px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center group"
          >
            Démarrer un projet
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;