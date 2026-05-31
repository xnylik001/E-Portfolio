# E-Portfolio — Likhaya Xanywa

Personal e-portfolio for Likhaya Xanywa, a BSc Construction Studies student at the University of Cape Town. Built as a single-page application using HTML, CSS, and jQuery.

---

## Project Structure

```
E-Portfolio/
├── index.html                   # Single-page app — all sections live here
├── CLAUDE.md                    # This file
│
├── css/
│   ├── style.css                # Main stylesheet — layout, sections, responsive breakpoints
│   ├── plugins.css              # Bundled third-party plugin styles (Isotope, Owl Carousel, etc.)
│   ├── modalbox.css             # Styles for the portfolio popup/lightbox modal
│   └── site_photo.css          # Photo gallery–specific styles
│
├── js/
│   ├── init.js                  # Main JS — initialises all features on document ready
│   ├── contact.form.js          # Contact form validation + EmailJS submission
│   ├── sitePhotos.js            # Currently empty — reserved for gallery logic
│   ├── jquery.js                # jQuery library
│   └── plugins.js               # Bundled third-party plugins (Isotope, Owl Carousel, Magnific Popup, etc.)
│
├── img/
│   ├── logo/                    # Logo images (dark1.png) and partner logos (CIOB, ECE, UCT, w3o)
│   ├── about/                   # Hero/profile photos — 3.jpg is the current cover image
│   ├── svg/                     # Icon SVGs used throughout the page
│   ├── thumbs/                  # Placeholder thumbnail images used by the portfolio grid
│   ├── 1st_year.jpg             # Thumbnail for First Year portfolio card
│   ├── 2nd_year.JPG             # Thumbnail for Second Year portfolio card
│   ├── 3rd_year.jpg             # Thumbnail for Third Year portfolio card
│   └── G_photo.jpg              # Thumbnail for the Gallery card
│
├── CV.pdf                       # Downloadable CV
├── 1.pdf                        # First Year yearly report
├── 2.pdf                        # Second Year yearly report
├── 3.pdf                        # Third Year yearly report
├── 2023_CIOB_1.pdf              # CIOB 2nd year employer letter
├── 2024CIOB.pdf                 # CIOB 3rd year employer letter
├── Declaration_Form.pdf         # Declaration document (linked in Declaration section)
│
├── Adrocon_1st_year/            # 1st year Adrocon placement — photos + Daily Diary + employer letter
├── DPW&I_1styear/               # 1st year DPW&I placement — photos + Daily Diary + employer letter
├── DPW&I_2nd_year/              # 2nd year DPW&I placement — Daily Diary + employer letter
├── CommunityBuild1stYear/       # 1st year Community Build — photos + compliance letter
├── CIOB_2nd_3rd/                # CIOB 2nd & 3rd year photos + testimonial letter
└── W3O_3rd_year/                # 3rd year W3O placement — photos + Daily Diary + reference letter
```

---

## Page Sections (index.html)

| Section ID     | Description |
|----------------|-------------|
| `#home`        | Hero section — name, degree title, animated tagline, "View Projects" CTA, cover photo |
| `#about`       | Biography, personal details, interests, awards, education timeline, leadership timeline, hours-worked counters, partner logo marquee |
| `#service`     | Skills grid — 6 skill cards (Project Management, Quantity Surveying, Construction Management, Property Development, Consulting, Digital Design) |
| `#portfolio`   | Practical Training — filterable grid with modals for First Year, Second Year, Third Year reports, and an All Photos gallery |
| `#contact`     | Contact info (phone, email, WhatsApp, LinkedIn), contact form with EmailJS integration |
| `#declaration` | Download link for the Declaration Form PDF |

---

## Key Technical Details

- **Layout**: Fixed left sidebar (400 px) with navigation; scrollable right content pane. On ≤1024 px the sidebar hides and a hamburger topbar appears.
- **Page transitions**: Sections are absolutely positioned and toggled via CSS classes (`animated`, `active`, `hidden`). Clicking a nav link triggers a fade/slide between sections.
- **Portfolio modals**: Clicking a portfolio card opens a fullscreen modal populated dynamically via jQuery; the gallery card uses Magnific Popup in image-gallery mode.
- **Partner logo marquee**: The logo strip loops via the jQuery Marquee plugin.
- **Contact form**: Validated with inline JS, submitted via EmailJS (service `service_ymvn3xh`, template `template_d3trdog`). EmailJS public key: `Kc7NiMbNvbg6_rWj2`. Emails go to `mangexanywa@gmail.com`.
- **Fonts**: Syne (primary), Montserrat, Kanit — all loaded from Google Fonts.
- **Custom cursor**: Dual-ring cursor on desktop, hidden on touch devices.

---

## Known Bugs

1. **Nav typo** (`index.html:34`) — Mobile topbar logo text reads `lIKAHAYA` (wrong capitalisation). Should match the desktop sidebar which correctly reads `Likhaya Xanywa`.
2. **Duplicate `id` attributes** — `id="cvLink"` and `id="part1"` are reused across multiple elements, which is invalid HTML and can break JS selectors.
3. **LinkedIn link** (`index.html:949`) — Points to a LinkedIn *search results* URL rather than a direct profile URL. Needs to be replaced with the actual profile link.
4. **`sitePhotos.js` is empty** — The file is loaded but contains no code.
5. **Unquoted `href` attributes** — Gallery anchor tags use unquoted `href` values (e.g., `href=W3O_3rd_year/1.jpg`) which is invalid HTML.

---

## Planned Improvements

### 1. Fix nav typo — `lIKAHAYA` → correct name
- **File**: `index.html:34`
- **Change**: `<h3>lIKAHAYA</h3>` → `<h3>Likhaya Xanywa</h3>` (to match the desktop sidebar at line 65)

### 2. Update the hero section
- **File**: `index.html:86–112`
- The hero currently shows "Bsc Construction" as a static heading with a single animated word "Studies". Plan to improve the copy and layout for a stronger first impression.

### 3. Fix the LinkedIn link
- **File**: `index.html:949`
- Replace the long search-results URL with the direct LinkedIn profile URL for Likhaya Xanywa.

### 4. Replace the cover image
- **File**: `index.html:106–107`, `img/about/3.jpg`
- The hero cover photo (`img/about/3.jpg`) needs to be swapped out for a new image. Drop the new file into `img/about/` and update the two references in the hero section (`src` attribute on the `<img>` tag and the `data-img-url` attribute on the `.main` div).
