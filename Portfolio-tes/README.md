Personal Portfolio Website

A modern, minimalist, and fully responsive personal portfolio website built with HTML5, CSS3, and vanilla JavaScript.

Features

Multi-page structure: Home, About Me, Skills, Projects, Contact

Responsive design for desktop, tablet, and mobile (1440px → 375px)

Dark / Light mode with preference saved in localStorage

Sticky navbar with blur effect and active state

Mobile hamburger menu

Project filtering (All, HTML/CSS, JavaScript, Web App, UI Design)

Contact form with client-side validation and success notification

Scroll reveal animations and smooth scrolling

Back-to-top button

SVG decorations and icons (no external icon libraries)

Semantic HTML and accessibility considerations (ARIA, focus states, alt text)

SEO basics: meta description, Open Graph, proper heading hierarchy

Tech Stack

HTML5 (semantic elements)

CSS3 (Flexbox, Grid, CSS Variables, Media Queries, Transitions)

Vanilla JavaScript (ES6+)

Google Fonts (Inter)

No frameworks (React, Vue, Bootstrap, etc.).

Project Structure

```
portfolio/
├── index.html # Home page
├── about.html # About Me page
├── skills.html # Skills page
├── projects.html # Projects page
├── contact.html # Contact page
├── css/
│ └── style.css # Main stylesheet
├── js/
│ └── script.js # Main JavaScript
├── assets/
│ ├── images/ # (placeholder for real images)
│ └── icons/ # (placeholder for custom icons)
└── README.md

```

How to Run

Open the portfolio folder.

Double-click index.html or open it with a local server (recommended for best experience).

# Optional: use a simple local server

npx serve .

# or

python -m http.server 8000

Then visit http://localhost:3000 (or the port shown).

Customization

Replace the placeholder content with your own:

Item

Location

Name

All HTML files (search "Your Name")

Job title

index.html hero section

Description

Hero & About pages

Education / Experience

about.html

Skill percentages

skills.html (data-progress)

Projects

projects.html

Contact details

contact.html & footer

Social links

All pages

Colors

css/style.css → :root variables

Color Variables (Light)

--primary: #2563eb;
--secondary: #0f172a;
--background: #f8fafc;
--surface: #ffffff;
--text: #1e293b;
--muted: #64748b;

Dark mode overrides are defined under [data-theme="dark"].

Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). CSS backdrop-filter and Intersection Observer are used and gracefully degrade where unsupported.

License

Free to use and modify for personal or commercial portfolios.

© 2026 Your Name. All Rights Reserved.
