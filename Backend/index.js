import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app        = express();
const PORT       = process.env.PORT || 5000;
const isProd     = process.env.NODE_ENV === 'production';

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(express.json());
app.use(cors({
  origin: isProd
    ? true           // Same-origin on Render (backend serves frontend)
    : 'http://localhost:5173',
  credentials: true,
}));

// ─── Health Check ─────────────────────────────────────────────────────────────
// Render uses this to confirm the service is alive.
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ─── Download Endpoints ────────────────────────────────────────────────────────
//
//  HOW TO ADD YOUR INSTALLERS (two options — pick one):
//
//  ┌─ OPTION A: Redirect to an external URL (GitHub Releases recommended) ──────
//  │  1. Build & upload your installer to GitHub Releases (or any CDN).
//  │  2. Copy the direct download URL.
//  │  3. Set it in  Backend/.env  and in Render's Environment dashboard:
//  │        DOWNLOAD_WIN_URL=https://github.com/<you>/coggnora/releases/download/v1.0.0/Coggnora-Setup.exe
//  │        DOWNLOAD_MAC_URL=https://github.com/<you>/coggnora/releases/download/v1.0.0/Coggnora.dmg
//  │  No code changes needed — the redirect below picks it up automatically.
//  │
//  └─ OPTION B: Serve the file directly from this server ───────────────────────
//     1. Create a folder:  Backend/downloads/
//     2. Place your installer there:
//           Backend/downloads/Coggnora-Setup.exe   ← Windows
//           Backend/downloads/Coggnora.dmg         ← macOS
//     3. Replace the res.redirect(...) lines below with:
//           res.download(path.join(__dirname, 'downloads', 'Coggnora-Setup.exe'));
//           res.download(path.join(__dirname, 'downloads', 'Coggnora.dmg'));
//
// ─────────────────────────────────────────────────────────────────────────────

app.get('/api/download/:platform', (req, res) => {
  const { platform } = req.params;

  // ── Windows ──
  if (platform === 'windows') {
    const winUrl = process.env.DOWNLOAD_WIN_URL;

    if (!winUrl) {
      // ★ TODO: Set DOWNLOAD_WIN_URL in .env (and Render dashboard) once your .exe is ready
      return res.status(503).json({
        available: false,
        message:   'Windows installer coming soon — check back shortly!',
      });
    }

    console.log(`[DOWNLOAD] Windows — ${new Date().toISOString()}`);
    return res.redirect(302, winUrl);
  }

  // ── macOS ──
  if (platform === 'mac') {
    const macUrl = process.env.DOWNLOAD_MAC_URL;

    if (!macUrl) {
      // ★ TODO: Set DOWNLOAD_MAC_URL in .env (and Render dashboard) once your .dmg is ready
      return res.status(503).json({
        available: false,
        message:   'macOS installer coming soon — check back shortly!',
      });
    }

    console.log(`[DOWNLOAD] macOS — ${new Date().toISOString()}`);
    return res.redirect(302, macUrl);
  }

  return res.status(404).json({ message: 'Unknown platform. Use "windows" or "mac".' });
});

// ─── Contact Form Endpoint ─────────────────────────────────────────────────────
//
//  POST /api/contact
//  Body: { name, email, subject, message }
//
//  To enable real email delivery, install nodemailer and configure SMTP:
//    npm install nodemailer --prefix Backend
//  Then set in Backend/.env:
//    SMTP_HOST=smtp.gmail.com
//    SMTP_PORT=587
//    SMTP_USER=your@email.com
//    SMTP_PASS=your_app_password
//    CONTACT_TO=ankitjaat00010@gmail.com
//
// ─────────────────────────────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: name, email, message.',
    });
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email address.' });
  }

  // ── Log contact (placeholder — replace with nodemailer when ready) ──
  console.log('\n📬 [CONTACT FORM SUBMISSION]');
  console.log(`   Name   : ${name}`);
  console.log(`   Email  : ${email}`);
  console.log(`   Subject: ${subject || '(none)'}`);
  console.log(`   Message: ${message}`);
  console.log(`   Time   : ${new Date().toISOString()}\n`);

  // ── Nodemailer integration (uncomment when SMTP is configured) ────────
  /*
  import nodemailer from 'nodemailer';
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await transporter.sendMail({
    from: `"${name}" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: subject ? `[Coggnora] ${subject}` : '[Coggnora] New Contact Message',
    text: `From: ${name} <${email}>\n\n${message}`,
  });
  */

  return res.status(200).json({
    success: true,
    message: "Message received! We'll respond within 24-48 hours.",
  });
});

// ─── Serve Frontend in Production ─────────────────────────────────────────────
// In production Render runs one Node process that serves both the API
// and the compiled React app as static files.
if (isProd) {
  const distPath = path.join(__dirname, '..', 'Frontend', 'dist');
  app.use(express.static(distPath));

  // SPA fallback — every non-API route returns index.html so React Router works
  app.get('/*splat', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}
// ─── Dev-only root route ───────────────────────────────────────────────────
// Just a friendly response when hitting localhost:5000 directly in development,
// since the frontend dev server (port 5173) is what you actually browse to.
if (!isProd) {
  app.get('/', (_req, res) => {
    res.json({
      message: 'Coggnora backend is running in development mode.',
      hint: 'Frontend dev server is on http://localhost:5173. API health check: /api/health',
    });
  });
}

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Coggnora server running  →  http://localhost:${PORT}`);
  console.log(`   Mode: ${isProd ? 'production' : 'development'}`);
});
 