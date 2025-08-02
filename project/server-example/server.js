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
      from: `"IAI Compétence - Contact" <${process.env.EMAIL_USER}>`,
      to: config.RECIPIENT_EMAIL,
      replyTo: `"${name}" <${email}>`, // Permet de répondre directement à l'expéditeur
      subject: `${config.EMAIL_SUBJECTS.contact}: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
            📧 Nouveau message de contact reçu
          </h2>
          
          <div style="background-color: #e8f4fd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3498db;">
            <h3 style="margin-top: 0; color: #2c3e50;">📤 Expéditeur :</h3>
            <p><strong>👤 Nom:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #3498db; text-decoration: none;">${email}</a> <em>(cliquez pour répondre directement)</em></p>
            <p><strong>🏢 Entreprise:</strong> ${company || 'Non spécifié'}</p>
            <p><strong>📋 Sujet:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #e8f4fd; padding: 15px; border-radius: 8px; border-left: 4px solid #3498db;">
            <h3 style="margin-top: 0; color: #2c3e50;">💬 Message :</h3>
            <p style="line-height: 1.6; margin: 0;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
            <p style="margin: 0; color: #856404;">
              <strong>⚠️ Action requise:</strong> Veuillez répondre à ce message dans les plus brefs délais.
            </p>
          </div>
        </div>
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
      from: `"IAI Compétence - Devis" <${process.env.EMAIL_USER}>`,
      to: config.RECIPIENT_EMAIL,
      replyTo: `"${nom}" <${email}>`, // Permet de répondre directement à l'expéditeur
      subject: `${config.EMAIL_SUBJECTS.devis}: ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50; border-bottom: 2px solid #e67e22; padding-bottom: 10px;">
            💼 Nouvelle demande de devis reçue
          </h2>
          
          <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #e67e22;">
            <h3 style="margin-top: 0; color: #2c3e50;">📤 Expéditeur :</h3>
            <p><strong>👤 Nom:</strong> ${nom}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #e67e22; text-decoration: none;">${email}</a> <em>(cliquez pour répondre directement)</em></p>
            <p><strong>📞 Téléphone:</strong> ${telephone || 'Non spécifié'}</p>
            <p><strong>🏢 Entreprise:</strong> ${entreprise || 'Non spécifié'}</p>
            <p><strong>🔧 Service demandé:</strong> ${service}</p>
          </div>
          
          <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #e67e22;">
            <h3 style="margin-top: 0; color: #2c3e50;">📝 Détails de la demande :</h3>
            <p style="line-height: 1.6; margin: 0;">${details}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
            <p style="margin: 0; color: #856404;">
              <strong>⚠️ Action requise:</strong> Préparer un devis personnalisé pour ce client.
            </p>
          </div>
        </div>
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
      from: `"IAI Compétence - Formation" <${process.env.EMAIL_USER}>`,
      to: config.RECIPIENT_EMAIL,
      replyTo: `"${name}" <${email}>`, // Permet de répondre directement à l'expéditeur
      subject: `${config.EMAIL_SUBJECTS.formation}: ${formation}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50; border-bottom: 2px solid #27ae60; padding-bottom: 10px;">
            📚 Nouvelle inscription à une formation
          </h2>
          
          <div style="background-color: #d1ecf1; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #27ae60;">
            <h3 style="margin-top: 0; color: #2c3e50;">📤 Expéditeur :</h3>
            <p><strong>👤 Nom:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #27ae60; text-decoration: none;">${email}</a> <em>(cliquez pour répondre directement)</em></p>
            <p><strong>📞 Téléphone:</strong> ${phone}</p>
            <p><strong>📚 Formation:</strong> ${formation}</p>
            <p><strong>🎯 Mode:</strong> ${mode}</p>
          </div>
          
          <div style="background-color: #d1ecf1; padding: 15px; border-radius: 8px; border-left: 4px solid #27ae60;">
            <h3 style="margin-top: 0; color: #2c3e50;">💬 Message :</h3>
            <p style="line-height: 1.6; margin: 0;">${message || 'Aucun message'}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #d1ecf1; border-radius: 8px; border-left: 4px solid #17a2b8;">
            <p style="margin: 0; color: #0c5460;">
              <strong>⚠️ Action requise:</strong> Confirmer l'inscription et envoyer les détails de la formation.
            </p>
          </div>
        </div>
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