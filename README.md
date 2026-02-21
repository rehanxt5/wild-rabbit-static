# Wild Rabbit Cafe and Bakehouse — Website

A production-ready, deploy-anywhere single-page website for **Wild Rabbit Cafe and Bakehouse**, Kundalahalli, Bangalore.

---

## 📁 File Structure

```
wild-rabbit-static/
├── index.html          ← Complete single-page site
├── config.json         ← All restaurant data (edit this to update content)
├── scripts.js          ← All JavaScript (header, menu filter, animations)
├── README.md           ← This file
└── assets/
    ├── manifest.json   ← Web App Manifest (PWA metadata)
    └── image_sources.txt ← Unsplash image search keywords
```

---

## ✏️ How to Edit Restaurant Data Quickly

All content is driven by `config.json`. Open it and edit:

| Field | What it changes |
|---|---|
| `businessName` | Name in header, hero, footer, SEO |
| `tagline` | Hero subtitle + footer |
| `location.address` | Contact section address text |
| `location.mapEmbedUrl` | Google Maps iframe src |
| `contact.phone` | Call Now button `tel:` links |
| `contact.whatsapp` | WhatsApp button `wa.me/` link |
| `openingHours` | Hours table in Contact section |
| `images.hero` | Hero full-screen background |
| `images.about` | About section image |
| `images.gallery[]` | 6 gallery images |
| `menu[]` | Food cards (name, description, price, category, image) |
| `reviews[]` | Customer review cards (name, text, rating) |

> ⚠️ After editing `config.json`, update the hardcoded values in `index.html` to match. The config.json serves as the **source of truth** so future automation scripts can auto-populate the HTML.

---

## 🖼 How to Replace Images

All images are **Unsplash URLs**. To swap any image:

1. Go to [unsplash.com](https://unsplash.com) and find a photo.
2. Click **Share → Copy Link** and grab the photo ID from the URL.
3. Replace the URL in both `config.json` and the matching `src=""` in `index.html`.

**Recommended dimensions:**
- Hero: `?w=1920&h=1080&fit=crop`
- About: `?w=1200&h=1500&fit=crop`
- Gallery: `?w=800&h=800&fit=crop`
- Menu cards: `?w=800&h=640&fit=crop`

---

## 🚀 Deploy to Vercel

1. Push the `wild-rabbit-static/` folder to a GitHub repo.
2. Log in to [vercel.com](https://vercel.com), click **New Project**.
3. Import the repo → set **Root Directory** to `wild-rabbit-static/` (or move contents to root).
4. Framework Preset: **Other** (static HTML).
5. Click **Deploy**. Done — live in ~30 seconds.

---

## 📄 Deploy to GitHub Pages

1. In your GitHub repo, go to: **Settings → Pages**.
2. Source: `main` branch, folder `/ (root)` or `/docs`.
3. If you have the files in a subfolder, move them to the root or `/docs`.
4. Save — GitHub Pages will publish automatically.

Custom domain: Add a `CNAME` file containing your domain (e.g. `wildrabbitcafe.com`).

---

## ♻️ Reuse Template for Next Client

This site is fully templated. To build a new client site:

1. **Copy** this entire folder and rename it (e.g. `next-client-static/`).
2. Edit `config.json` with the new restaurant's data.
3. Find-and-replace hardcoded values in `index.html`:
   - Restaurant name (5–6 occurrences)
   - Phone/WhatsApp numbers
   - Address
   - Image URLs
   - Review text, menu items
4. Update brand colors in the `<style>` block:
   - Replace `#c2904b` (primary gold) with new primary color
   - Replace `#441415` (dark red) with new secondary color
   - Replace `#fdf8f3` (cream background) with new accent
5. Choose new Google Fonts if vibe differs (edit the `<link>` tag + `tailwind.config`).
6. Deploy.

**Parts to change to make each site unique:**
- Logo letter (the `W` circle) → change to client initials
- Hero tagline & eyebrow text
- About section story paragraphs
- Stats (100% / Daily) → replace with client-specific highlights
- Color palette + fonts
- Favicon / manifest icons

---

## ✅ Pre-Demo Checklist (Before Sending to Restaurant Owner)

- [ ] **1. Replace placeholder images** — ensure all Unsplash images match the cafe's actual food & vibe.
- [ ] **2. Verify contact details** — test the `tel:` and `wa.me/` links on mobile.
- [ ] **3. Update the Google Maps embed** — use the exact maps embed URL from the restaurant's verified Google listing.
- [ ] **4. Check all sections on mobile** — resize browser to 375px; inspect header, hero, menu cards, gallery.
- [ ] **5. Deploy to a live URL** — share a Vercel/GitHub Pages link instead of a local file; restaurant owners expect a real URL.
