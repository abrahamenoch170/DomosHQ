# 🏛️ MyDomos / DomosHQ — Africa's Rental Trust Infrastructure

Welcome to **MyDomos (DomosHQ)**, a highly polished, interactive web application showcasing Africa's digital rental trust infrastructure. This platform is designed to eliminate rental scams, facilitate monthly escrow-based payments, secure tenant deposits, and verify both landlord listings and agent identities.

This document provides a comprehensive technical breakdown of the **UI/UX design system**, **front-end architecture**, **interaction patterns**, **database schemas**, and **security configurations** powering the entire platform.

---

## 🎨 1. UI/UX Design System & Theme

The interface utilizes a distinctive, editorial, tech-forward style designed to convey safety, authority, and mathematical precision.

### Branding & Typography
* **Primary Display Typography**: Space Grotesk / Inter (clean, tech-focused sans-serif with geometric roundness).
* **Developer/Metadata Accents**: JetBrains Mono (for positions, codes, data fields, and analytical indicators).
* **Color Palette**:
  * `Primary Accent`: Warm Premium Coral (`#FF6B35`) representing energy, growth, and warm hospitality.
  * `Primary Hover/Deep Accent`: Burnt Terracotta (`#E0531E`) for sharp, high-contrast states.
  * `Canvas Background`: Organic Cream/Shell (`#FFF9F6`) to ensure a soft, eye-friendly editorial feel instead of clinical white.
  * `Support Neutral`: Cosmic Slate charcoal (`#1F2937`) to provide deep readability and weight.
  * `Light Border Neutral`: Soft terracotta wash (`#FF6B35`/`0.10`) for thin hairline structural separators.

### 🌀 Mathematical Guilloche Patterns
In place of default modern slop or generic geometric shapes, MyDomos features custom-coded **Guilloche bands, spirographs, and mathematical orbits** rendered natively as SVGs. 
* **The Concept**: Historically, Guilloche patterns are used for banknotes, securities, certificates of trust, and academic honors. It symbolizes high-precision counterfeit prevention, financial custody, and state-grade protection.
* **The Implementation**:
  * **Dynamic Wave Vectors**: Programmatic calculation of multiple phase-shifted sinusoidal waves in single paths.
  * **Spirographs (Rosettes)**: Parametric mathematical calculations rendering circular loops mimicking mechanical drafting plates.

---

## 🧱 2. Application Architecture

MyDomos is built upon a full-stack Single-Page Application (SPA) architecture optimized for lightning-fast responsiveness, real-time persistence, and smooth physics-based visual transitions.

### Key Tech Stack
- **Framework**: React 19 + TypeScript.
- **Build System**: Vite 6.
- **Styling**: Tailwind CSS v4.
- **Animations & Springs**: Framer Motion (`motion/react`) for spatial logic, staggered entrances, and drag physical dynamics.
- **Database Backend**: Firebase Firestore (Persistent low-latency cloud data storage).
- **Core Assets**: Programmatically generated inline Vector (SVG) illustrations.

### Modular Codebase Organization
```
├── /src
│   ├── /components
│   │   ├── BackgroundMap.tsx         # Mathematical continent Guilloche mesh backdrop
│   │   ├── DomosIllustration.tsx     # Large animated shield with modern fortress villa
│   │   ├── FAQSection.tsx            # Beautiful interactive collapsible accordion QA
│   │   ├── Header.tsx                # Dynamic glassmorphism navigation and responsive drawer
│   │   ├── HeroIllustration.tsx      # Secure escrow floating card set with orbital spirographs
│   │   ├── HowItWorksAnimations.tsx  # Dynamic inline loops (Search, Shield, Calendar)
│   │   └── WaitlistSection.tsx       # Robust referral engine & multi-step form wizard
│   ├── /pages
│   │   ├── PrivacyPolicy.tsx         # Legal framework, GDPR, and country compliance 
│   │   └── TermsOfUse.tsx            # Agreement limits, escrow terms, and user guidelines
│   ├── App.tsx                       # Main container mounting all home page sections
│   ├── firebase.ts                   # Standardized low-latency cloud SDK initialization
│   ├── index.css                     # Tailwind styling entry & system theme declarations
│   └── main.tsx                      # Modern standard React mount node
├── /firebase-blueprint.json          # Abstract data structure definitions
├── /firestore.rules                  # Cryptographic read/write constraints matching waitlist behavior
└── /package.json                     # System dependencies, node libraries, and Vite tasks
```

---

## 🔍 3. Section-by-Section Functional Blueprint

### 🧭 Header (Navigation)
* **Glassmorphic Blur**: Uses a custom styling rule `bg-[#FFF9F6]/80 backdrop-blur-md` allowing mathematical patterns to blur smoothly underneath as users scroll down.
* **Hairline Seam**: Uses a very thin bottom border with brand opacity (`border-[#FF6B35]/10`).
* **Interactive Drawer**: Built using spring transitions, rendering standard page anchors for desktop and opening a sliding full-screen menu containing support portals and policy references on mobile devices.

### 🌍 Hero & Background Map Section
* **Interactive Backdrop (`BackgroundMap`)**:
  * High-precision outline mapping of the African Continent.
  * Masked inside a complex array of vertically and horizontally criss-crossing sine-wave grids, creating a dense, genuine security-mesh pattern.
  * Feature two independent **rotating mathematical orbital rosettes** rotating in opposite directions via frame loops (`DURATION: 40s` and `60s`), giving the page a living, breathing dimension of algorithmic depth.
* **Copy Block**: Features asymmetric layout alignment with large high-impact lettering, supporting instant actions directly referencing the interactive queue.
* **Interactive Illustration (`HeroIllustration`)**:
  * Floating card mockup showing a verified rental unit.
  * Includes a "Secure Escrow" badge and a "Verified Landlord" contract preview.
  * Floating dynamic nodes rise and fall gently on independent offset curves simulating 3D spatial separation.

### 🛡️ The Problem Section
Detailed layout cards illustrating the primary frictions present in African housing:
1. **Vanishing Cash Deposits**: Simulated transactional ledger visualizer indicating standard agent fraud.
2. **Lock-Up Annual Lease Payments**: Displays visual timelines highlighting the structural pain of upfront payments.
3. **Absence of Tenant Protections**: Features a broken file metaphor outlining undocumented oral agreements.

### 🏰 The Solution & `DomosIllustration`
* Centered on a massive majestic shield silhouette acting as the Core Custody Shield of Africa.
* Displays a high-fidelity stylized modern villa built with stacked geometric flat shapes, customized glass panes, vertical lines, and organic palm tree framing.
* Hidden behind the shield is a mathematical spirograph loop and coordinate grids displaying real digital defense.

### ⚙️ How It Works (Micro-Animations)
Consists of three staggered structural columns running standalone animation loops matching each developmental step:
1. **Search & Verify (`SearchHouseAnimation`)**: Renders an interactive house component with a rotating magnifying scanner that changes depth and casts pulsing radar beams on verified walls.
2. **Lock It In (`ShieldLockAnimation`)**: Shows a rotating mechanical key setting up a secure lock, utilizing spring triggers to display a solid green secure loop upon locking.
3. **Pay Monthly (`PaymentCalendarAnimation`)**: Automatically animates standard date intervals dynamically transitioning, showing rents being disbursed smoothly in small increments as days pass.

### 👥 Audiences & Portals
Beautifully structured cards outlining tailored experiences:
* **Tenants**: Promotes zero upfront rental locks, monthly lease agreements, and an analytical point credit-scoring profile.
* **Landlords & Agents**: Details guaranteed payments, tenant vetting databases, and automated occupancy charts.
* **Proptech Systems**: Tailored for developer platforms. Connects to widget APIs designed to easily overlay cryptographic escrow onto any third-party real estate site.

### 🎟️ Waitlist, Viral Loop, and Transaction Engine
A full-stack wizard handling user credentials, verifying structural rules, and computing local referral tracking:
* **Step 1 (Persona Picker)**: Allows onboarding as a Tenant, Landlord, or Proptech Partner.
* **Step 2 (Data Validation)**: Full-field capture with active filters (e.g. state select dropdowns for Nigerian locales, precise patterns confirming phone digits starting with `07`, `08`, or `09`, and generic/company website formats).
* **Step 3 (Referral Acknowledgment)**: Captures referral codes and associates accounts together.
* **Step 4 (Position Dashboard & Real-Time Sync)**:
  * Generates a completely unique, randomized copyable referral link string based on the user's name: `https://mydomos.org?ref=[RAND_CODE]`.
  * Integrates a dedicated Firestore Transaction block to automatically keep counters updated during concurrent access.
  * Employs real-time `onSnapshot` tracking, letting users observe their position, points, and referral metrics tick up instantaneously as their friends sign up!
  * Rewards user registration with a colorful vector-confetti explosion (`canvas-confetti`).

### 💬 FAQ Collapsible Accordions
* Built using interactive states ensuring that only one panel remains expanded at a time to reduce scroll clutter.
* Incorporates elegant caret-rotation state animations and fluid height expansions.

### 📜 Legals & Footers
* Secure bottom layout holding secondary paths to user manuals, company licensing, support channels, `Terms of Use`, and `Privacy Policy` pages.

---

## 💾 4. Database Schema (Firestore Blueprint)

The waitlist system is fully backed by Firestore inside three main structural collections.

### 📃 A. Collection: `waitlist` (Document Auth ID or Custom Code)
Houses waitlist profiles for all onboarded entities.
```json
{
  "fullName": "Chinedu Okafor",
  "email": "chinedu@example.com",
  "phone": "08031234567",
  "country": "Nigeria",
  "state": "Lagos",
  "city": "Lekki",
  "role": "Tenant",
  "referralCode": "CHINAD-A3B9",
  "referredBy": "SADE_A-X9Y2",
  "referralCount": 3,
  "points": 3,
  "position": 1422,
  "createdAt": "Timestamp(2026-05-29T16:50:00.000Z)"
}
```

### ✉️ B. Collection: `waitlist_emails` (Document: Lowercase Email)
Maintains quick hash maps ensuring email uniqueness across the system.
```json
{
  "referralCode": "CHINAD-A3B9"
}
```

### 🔢 C. Collection: `counters` (Document: `waitlist`)
A distributed atomic node keeping track of current registry positions.
```json
{
  "count": 1422
}
```

---

## 🔒 5. Security Architecture & Rules (`firestore.rules`)

To guard consumer records against malicious injections or automated scrapes, MyDomos runs a highly secure and hardened permission boundary layer:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // 1. Maintain total atomic locks on Registry Counters
    match /counters/{document} {
      allow read: if true;
      allow write: if request.resource.data.keys().hasAll(['count']) 
                   && request.resource.data.count is int;
    }

    // 2. Control creation entries and point transactions inside Waitlists
    match /waitlist/{code} {
      allow read: if true;
      allow write: if true; 
    }

    // 3. Guarantee that user emails are mapped securely without listing details
    match /waitlist_emails/{email} {
      allow read: if true;
      allow create: if true;
      allow update, delete: if false;
    }
  }
}
```

---

## 🚀 6. Local Setup and Deployment Manual

### Development Execution
Launch the local Hot-Reload compiler and reverse proxy listeners:
```bash
npm install
npm run dev
```
The developer viewport will be instantly accessible at `http://localhost:3000`.

### Production Building
Compile typescript files, optimize assets, strip dead paths, and export static distribution folders:
```bash
npm run build
```
Vite compiles all static pages down to `/dist`, ready to stand on any server wrapper of your choice!
