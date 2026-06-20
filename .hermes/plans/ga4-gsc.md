# Plan: GA4 + Google Search Console

## Status
- [ ] Manual Bagas (2 task)
- [ ] Code changes (3 task)
- [ ] VPS deploy

---

## 🔴 Step 1 — Manual: Bagas (harus kamu yang buat)

### 1a. Google Analytics 4
1. Buka https://analytics.google.com
2. Create property → CatalystForge
3. Pilih "Web" → masukkan `catalystforge.web.id`
4. Copy **Measurement ID** (format: `G-XXXXXXXXXX`)
5. Kirim ID-nya ke sini

### 1b. Google Search Console
1. Buka https://search.google.com/search-console
2. Add property → pilih "Domain" atau "URL prefix"
3. Domain: `catalystforge.web.id`
4. Pilih verifikasi "HTML tag" → copy token
5. Kirim token-nya ke sini

---

## 🟡 Step 2 — Code: Wire cookie consent ke Analytics

**Problem**: Analytics.tsx load GA4 langsung pas `NEXT_PUBLIC_GA_ID` di-set, tidak respect cookie consent.

**Fix**: 
- Ubah Analytics jadi client component
- Baca `localStorage('cf_cookie_consent')`
- Hanya load GA4 kalau consent = `"all"`
- Tambah consent default: `gtag('consent', 'default', { analytics_storage: 'denied' })`
- Saat user klik "Terima Semua": `gtag('consent', 'update', { analytics_storage: 'granted' })`

**Files**:
- `apps/web/components/analytics.tsx` → rewrite as consent-aware
- `apps/web/components/cookie-consent.tsx` → trigger gtag consent update

---

## 🟡 Step 3 — Code: Add conversion events

Tambahkan event tracking untuk:
- Form kontak submit → `gtag('event', 'contact_form_submit')`
- Klik "Konsultasi" CTA → `gtag('event', 'cta_consultation_click')`
- Klik "Minta Estimasi" → `gtag('event', 'cta_estimate_click')`
- Klik WhatsApp → `gtag('event', 'whatsapp_click')`

---

## 🟡 Step 4 — VPS: Set env vars

SSH ke VPS, edit `/var/www/catalyst-forge/shared/web.env`:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=google-site-verification-token
```

Force deploy:
```bash
sudo systemctl set-environment FORCE_DEPLOY=1
sudo systemctl start catalyst-pull-deploy.service
sudo systemctl unset-environment FORCE_DEPLOY
```

---

## Verifikasi
- Buka situs → accept cookie "Terima Semua" → cek Network tab ada request ke `google-analytics.com`
- Buka situs → klik "Hanya Esensial" → tidak ada request GA
- GSC: dashboard muncul data setelah 24-48 jam
- GA4: realtime report muncul visitor dalam 5 menit
