const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const config = require('./config');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configuration email
const transporter = nodemailer.createTransport(config.EMAIL_CONFIG);

// Endpoint Contact
app.post('/contact', async (req, res) => {
  try {
    const { name, email, company, subject, message } = req.body;

    // Validation
    const requiredFields = config.REQUIRED_FIELDS.contact;
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Champs manquants: ${missingFields.join(', ')}`
      });
    }

    // Envoi email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: config.RECIPIENT_EMAIL,
      subject: `${config.EMAIL_SUBJECTS.contact}: ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Entreprise:</strong> ${company || 'Non spécifié'}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Message envoyé avec succès',
      data: { name, email, subject }
    });

  } catch (error) {
    console.error('Erreur contact:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'envoi du message'
    });
  }
});

// Endpoint Devis
app.post('/devis', async (req, res) => {
  try {
    const { nom, email, telephone, entreprise, service, details } = req.body;

    // Validation
    const requiredFields = config.REQUIRED_FIELDS.devis;
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Champs manquants: ${missingFields.join(', ')}`
      });
    }

    // Envoi email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: config.RECIPIENT_EMAIL,
      subject: `${config.EMAIL_SUBJECTS.devis}: ${service}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone || 'Non spécifié'}</p>
        <p><strong>Entreprise:</strong> ${entreprise || 'Non spécifié'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Détails:</strong></p>
        <p>${details}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Demande de devis envoyée avec succès',
      data: { nom, email, service }
    });

  } catch (error) {
    console.error('Erreur devis:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'envoi de la demande de devis'
    });
  }
});

// Endpoint Formation
app.post('/formation', async (req, res) => {
  try {
    const { name, email, phone, formation, mode, message } = req.body;

    // Validation
    const requiredFields = config.REQUIRED_FIELDS.formation;
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Champs manquants: ${missingFields.join(', ')}`
      });
    }

    // Envoi email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: config.RECIPIENT_EMAIL,
      subject: `${config.EMAIL_SUBJECTS.formation}: ${formation}`,
      html: `
        <h2>Nouvelle inscription à une formation</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Formation:</strong> ${formation}</p>
        <p><strong>Mode:</strong> ${mode}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'Aucun message'}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Inscription à la formation envoyée avec succès',
      data: { name, email, formation, mode }
    });

  } catch (error) {
    console.error('Erreur formation:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'inscription à la formation'
    });
  }
});

// Endpoint de test
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API opérationnelle',
    timestamp: new Date().toISOString()
  });
});

app.listen(config.PORT, () => {
  console.log(`Serveur API démarré sur le port ${config.PORT}`);
  console.log(`URL de l'API: http://localhost:${config.PORT}`);
  console.log(`Test de santé: http://localhost:${config.PORT}/health`);
  console.log(`Emails reçus par: ${config.RECIPIENT_EMAIL}`);
}); 