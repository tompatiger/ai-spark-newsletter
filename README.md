# 📰 AI Spark Newsletter

Automatiserat nyhetsbrev som sammanställer tech- och AI-nyheter och skickar dem två gånger per dag (07:00 och 19:00) från `ghost@aispark.cloud`.

## 🚀 Funktioner
- ✅ Samlar AI/Tech/Gadget-nyheter via ChatGPT Agent
- ✅ Genererar en snygg, klickbar HTML-newsletter
- ✅ Skickar med Nodemailer via SMTP
- ✅ Manuellt och automatiskt via GitHub Actions

## 📦 Kör lokalt (manuellt)

```bash
node sendNewsletter.js
```

## 🕒 Kör automatiskt (GitHub Actions)

Workflow finns i `.github/workflows/send.yml` och körs 2×/dygn:
- 07:00 CET
- 19:00 CET

## 🔐 SMTP (Strato Webmail)
Skapa `.env` med följande innehåll:

```
SMTP_HOST=smtp.strato.com
SMTP_PORT=465
SMTP_USER=ghost@aispark.cloud
SMTP_PASS=**********
RECIPIENTS=thomas@example.com
```

## 📄 Filer

| Fil | Beskrivning |
|-----|-------------|
| `newsletter.html` | Innehållet i mailet |
| `sendNewsletter.js` | Sänder HTML-mailet via Nodemailer |
| `.github/workflows/send.yml` | GitHub Action som triggar automatiskt |
| `package.json` | Nodemailer + dotenv dependencies |

---

❤️ Made with love by [Ghost @ AI Spark](mailto:ghost@aispark.cloud)
