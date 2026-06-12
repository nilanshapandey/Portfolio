# Nilansha Pandey — Professional Portfolio

A premium, highly responsive, multi-page professional developer website showcasing the academic journey, research focus, technical skillset, achievements, and selected projects of **Nilansha Pandey**, a B.Tech Computer Science & Engineering student specializing in AI, Machine Learning, and Full-Stack Web Development.

Live site: [https://nilanshapandey.github.io/Portfolio](https://nilanshapandey.github.io/Portfolio)

---

## 🌟 Key Features

- **8-Page Architecture**: Transitioned from a single-page layout to an organized, multi-page system:
  - **Home**: Split-hero, summary stats, quick previews of all focus areas, and a contact call-to-action.
  - **About**: Extensive professional biography, academic journey overview, and core career objectives.
  - **Skills & Toolkit**: Categorized technology cards (Languages, Web Dev, Databases, Environment, Core CS) alongside animated proficiency bars.
  - **Research Interests**: Specialized study domains (AI, ML, Computer Vision, Semantic Web) with professional vector SVG icons.
  - **Projects**: Comprehensive showcases containing category filters (All, AI & Machine Learning, Web Development) that run client-side.
  - **Achievements & Certifications**: Stats highlights, national hackathon timelines (SIH, EY Tech, Unstop), and verified credentials (CCNA).
  - **Resume**: Integrated ATS-optimized digital CV viewer and a download panel linking to a printable PDF.
  - **Contact**: Validation-ready query form connected with Formspree, social handles, and direct access info.
- **Adaptive Light & Dark Theme Toggle**: A robust theme switcher button in the navbar that dynamically swaps interface colors via `:root` CSS variables and persists the user preference across sessions using `localStorage`.
- **Custom Particles Canvas**: Responsive HTML5 canvas rendering interactive, coral-colored particles matching the theme design system.
- **Premium Design System**: Built on curated colors, clean borders, glassmorphic filters, and modern typography (Space Grotesk, Syne, DM Mono).
- **SEO & Accessibility Ready**: Unique meta tags per page, correct header nesting hierarchy, preconnected fonts, and ARIA roles for screen-reader accessibility.

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, Vanilla CSS3 (Custom properties/CSS Variables), Vanilla JavaScript (ES6+).
- **Interactive Logic**: Client-side event routers, dynamic project card filters, and Intersection Observer API for scroll reveals.
- **Canvas Animations**: 2D context canvas drawing loop for the landing page particle background.
- **Form Integration**: Formspree API handler for secure, serverless contact submissions.

---

## 📂 Project Structure

```text
d:/other/nilansha portfolio/
├── index.html            # Home page (hub)
├── about.html            # Professional biography and services
├── skills.html           # Technical skills & animated proficiency bars
├── research.html         # Research interests & future goals
├── projects.html         # Selected projects with filter tab triggers
├── achievements.html     # Stats, CCNA credential, & hackathon timeline
├── resume.html           # Online resume preview & PDF link
├── contact.html          # Contact page with submission form
├── LICENSE               # All Rights Reserved License
├── README.md             # Project documentation
└── assets/
    ├── css/
    │   └── style.css     # Universal responsive stylesheet
    ├── js/
    │   └── scripts.js    # Interactive features, theme toggle, & animations
    └── documents/
        └── resume.pdf    # ATS-optimized PDF resume
```

---

## 🚀 Local Setup & Development

To view the portfolio site locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nilanshapandey/Portfolio.git
   cd Portfolio
   ```

2. **Serve locally**:
   Since the site uses cross-origin links and local asset routing, it is recommended to run a lightweight local server:
   - Using Python:
     ```bash
     python -m http.server 8000
     ```
   - Using Node.js (via `http-server`):
     ```bash
     npx http-server .
     ```

3. Open your browser and navigate to `http://localhost:8000` (or the port indicated by your server).

---

## 📄 License

This project is proprietary and confidential. All rights are reserved by the developer. No part of this repository, source code, designs, or assets may be used, copied, modified, distributed, or reproduced without explicit written permission from **Nilansha Pandey**.

See the [LICENSE](LICENSE) file for detailed terms and contact details to request permission.
