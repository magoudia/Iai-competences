#!/bin/bash

echo "🚀 Démarrage de l'environnement de développement IAI Compétence"
echo "================================================================"

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

echo "✅ Node.js et npm sont installés"

# Créer le fichier .env s'il n'existe pas
if [ ! -f ".env" ]; then
    echo "📝 Création du fichier .env..."
    cat > .env << EOF
# Configuration API pour le développement
VITE_API_URL=http://localhost:3001

# Configuration EmailJS (fallback)
VITE_EMAILJS_SERVICE_ID=service_gjy4jmr
VITE_EMAILJS_PUBLIC_KEY=-59ZpLNiQF9ncW5M8

# Templates EmailJS
VITE_EMAILJS_TEMPLATE_CONTACT=template_alyjjrm
VITE_EMAILJS_TEMPLATE_FORMATION=template_95f2z3a
VITE_EMAILJS_TEMPLATE_DEVIS=template_devis
EOF
    echo "✅ Fichier .env créé"
else
    echo "✅ Fichier .env existe déjà"
fi

# Installer les dépendances du frontend
echo "📦 Installation des dépendances frontend..."
npm install

# Installer les dépendances du serveur
echo "📦 Installation des dépendances serveur..."
cd server-example
npm install
cd ..

echo ""
echo "🎯 Pour démarrer l'application :"
echo "1. Terminal 1 - Serveur API :"
echo "   cd server-example && npm run dev"
echo ""
echo "2. Terminal 2 - Frontend :"
echo "   npm run dev"
echo ""
echo "🌐 L'application sera accessible sur :"
echo "   Frontend: http://localhost:5173"
echo "   API: http://localhost:3001"
echo "   Test API: http://localhost:3001/health"
echo ""
echo "📧 Tous les emails seront envoyés à : magoudia203@gmail.com"
echo ""
echo "📚 Consultez TROUBLESHOOTING.md en cas de problème" 