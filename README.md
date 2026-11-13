# 🖤 MAISON NOIR — Haute Parfumerie · Paris

> *"Where darkness becomes desire."*

An ultra-luxury e-commerce website for **MAISON NOIR**, an artisanal Parisian fragrance house. Designed with high-contrast alternating light and dark aesthetics, bespoke generated flacon imagery, Razorpay checkout integration, and client profile management.

---

## 🏛️ Design Architecture & Highlights

- **Alternating Cadence**: Cinematic full-bleed dark hero → warm alabaster Brand Manifesto → dark Crown Flacons → light Scent Story → dark Patron Impressions → light Olfactory Journal → grounded dark Footer.
- **Bespoke Local Imagery**: 100% self-hosted luxury photography under `public/images/` — zero external third-party image dependencies.
- **Typography Scale**: High-fashion serif headlines (*Playfair Display*) paired with clean editorial tracking (*Inter*).
- **Interactive Scent Architecture**: Visual 3-tier Scent Pyramid displaying Top, Heart, and Base notes with raw material origins.
- **Dynamic Volume Pricing**: Multi-volume selection (30ml, 50ml, 100ml) with real-time price calculations in **₹ INR**.
- **Scent Wardrobe Drawer (Cart)**: Persistent slide-out cart drawer with a live complimentary white-glove shipping progress bar (threshold: ₹4,000).
- **Client Sanctum (Profile)**: Device-persistent client portal with 4 tabs:
  1. *Patron Details* (Editable address & phone)
  2. *Scent Vault* (Order history & tracking)
  3. *Wishlist* (Curated flacons with quick move-to-bag)
  4. *Olfactory Taste* (Personalized fragrance family preference tags)
- **Payment Engine**: Razorpay checkout integration with secure server-side API route.

---

## 📦 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) with localStorage persistence
- **Icons**: [Lucide React](https://lucide.dev/)
- **Payments**: Razorpay Checkout (`/api/razorpay`)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Ayush07571/Perfume-Website.git
cd Perfume-Website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment configuration (optional)
Copy the example environment file:
```bash
cp .env.example .env.local
```
Add your Razorpay credentials from the [Razorpay Dashboard](https://dashboard.razorpay.com/app/keys):
```env
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```
*(If omitted or left as placeholder, the site runs in mock payment mode for testing).*

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Build for Production

```bash
npm run build
npm start
```

---

## 📜 License
Private & Proprietary · MAISON NOIR Parfums.
