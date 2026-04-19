# Build Modern International School Website (Olivemount Global School)

This document outlines the proposed plan for building a modern, high-quality website for Olivemount Global School based on the content from the current site. The goal is to create a visually stunning, premium-feeling website with dynamic animations and a responsive design.

## Goal

Create a new frontend for Olivemount Global School replacing the current site. The design will heavily prioritize modern aesthetics (e.g., sleek color palettes, modern typography, glassmorphism, micro-animations, fast load times, and structured SEO).

## Proposed Changes

### 1. Technology Stack
*   **Framework**: Since the website involves multiple distinct pages (Home, About Us, Academics, Admissions, Contact, etc.) and potentially interactive components, I recommend using **Vite + React** (or Next.js if SEO is a critical priority for server-side rendering). Let me know your preference.
*   **Styling**: By default, I will use **Vanilla CSS** with CSS Modules to organize styling per component, keeping things maintainable without requiring third-party styling frameworks. 
*   **Animations**: We'll incorporate smooth hover effects, scroll-based fade-ins, and micro-animations using custom CSS and potentially an animation library like `framer-motion` if using React.

### 2. Website Structure & Navigation
The site will feature a sticky, translucent navigation bar linking to the following core pages:
*   **Home Page**: Full-screen hero section introducing the "5 C's approach", dynamic stats counter, short introductory video/image banner, quick links to admissions, and latest news/events.
*   **About Us**: Our Story, Leadership (Directors & Principal's Message), Vision & Mission.
*   **Academics**: Breakdown of Foundational, Preparatory, Middle, and Secondary stages, along with Faculty information.
*   **Admissions**: Procedure details, FAQ section, and an integrated interactive Enquiry Form.
*   **Gallery**: An immersive grid layout showcasing the school's facilities (Classrooms, Science/Math Labs, Sports Arenas).
*   **Contact & Footers**: Quick links, Map embedding, Address, and Social Media references.

### 3. Design System & Aesthetics
*   **Colors**: A premium color palette likely deriving from the school's current branding but elevated (e.g., deep navy blues, elegant whites/creams, and subtle gold/teal accents). I see there are `logo.jpeg` and `dark-logo.jpeg` in the target directory which we will use.
*   **Typography**: Using modern Google Fonts such as `Inter` or `Outfit` for clean readability.
*   **SEO**: Applying proper meta tags, semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`), and accessible ARIA attributes across the site.

## User Review Required

> [!IMPORTANT]
> Please review the technological decisions. To proceed, I need answers to the open questions below.

## Open Questions

1.  **Framework Choice**: Do you prefer we build this sequentially using **Vite + React** (my recommendation for maintainability) or would you prefer pure **Vanilla HTML/CSS/JS**? Alternatively, if you need strong Search Engine Optimization (SEO), we can use **Next.js**.
2.  **Styling**: The guidelines suggest using Vanilla CSS by default. However, **Tailwind CSS** is an industry standard that vastly speeds up the development of beautiful, modern UIs. If you would like me to use Tailwind CSS (e.g., Tailwind v3.4), please explicitly request it!
3.  **Visual Assets**: You have `logo.jpeg` and `dark-logo.jpeg` in `/Users/ravitejmathurthi/Desktop/Olivemount`. I will use these. Do you have any other high-quality photos/videos (e.g., of the campus or students) you would like me to use, or should I generate placeholder images/animations?

## Verification Plan

### Manual Verification
*   We'll start a local development server (`npm run dev`) and visually inspect the website locally.
*   We'll verify responsiveness across simulated mobile, tablet, and desktop views.
*   We'll test internal routing to ensure all navigation links seamlessly transition between pages.
