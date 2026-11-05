# Roshani Enterprises Goa — Luxury Real Estate & Architectural Estates

A 1:1 visual and functional replica of the **NextState** luxury real estate landing page concept from Pinterest ([Pin 992058624187135541](https://in.pinterest.com/pin/992058624187135541/)) for client **Roshani Enterprises Goa**, adhering to **Together AI's Hallmark design rules**, **Silk-Design motion standards**, and **Landing Page Design principles**.

![Roshani Enterprises Desktop Full Preview](../screenshot_desktop_full.png)

---

## 1:1 Pinterest Architecture & Sections

The layout mirrors the exact structure, copy, proportions, and visual hierarchy of the Pinterest reference:

1. **Floating Navigation Bar**:
   - Dark pill header with brand emblem, navigation links (`Home`, `Property ▾`, `Service`, `Special Offers`), right-docked `Contact Us` pill, and direct circular arrow button `(→)`.
   - Accessible dropdown menu providing instant access to featured estate portfolios (`Harmony Haven`, `Blissful Gardens`, `Tranquil Heights`).

2. **Hero Stage (Large Dark Container)**:
   - Deep architectural slate container with bottom rounded corners (`44px` radius).
   - High-impact 3-line display headline in uppercase:
     ```
     ELEVATE YOUR
     LIVING WITH
     EXCEPTIONAL ESTATES
     ```
   - Left column with exact sub-headline: *“Streamline Your Real Estate Journey With Our Professional Guidance And Valuable Resources. Finding Your Dream Property Has Never Been More Straightforward And Efficient.”*
   - Interactive `▶ Play Videos` button opening the estate tour showcase modal.
   - Social proof avatar stack with 5 overlapping client portraits and `7K+ Satisfied Customers`.
   - Right column architectural visual featuring contemporary luxury villa with illuminated twilight interior and stone paver terrace (`hero-villa.jpg`).
   - Overlaid rotating circular stamp badge (*“roshani enterprises • find your dream property •”* with `↗` arrow).
   - Floating pill badge at bottom right: `🏠 70+ New Houses Ready`.

3. **Section 2: "About Us" / Trust In Excellence**:
   - Small pill tag: `🏠 About Us`.
   - Headline: *“Trust In Excellence, Believe In Home. Your Dream Property Awaits With Roshani Enterprises.”*
   - Two-column grid:
     - Left: Tall vertical coastal villa architecture card (`about-house.jpg`).
     - Right: 3 stat counters side-by-side (`35K+ Customers`, `40K+ Units Ready`, `10K+ Units Sold`), partnership narrative, and `🏠 Start Buying Today` pill button.

4. **Section 3: "Direct Inquiry" Consultation Card**:
   - Elevated pure white container on light ice-blue ground.
   - Small pill tag: `💬 Direct Inquiry`.
   - Left: Clear heading (*“Your Dream Home Awaits! Chat With Our Experts For Free Guidance Today.”*), guidance narrative, and primary action pill (`📱 Contact Us Today`).
   - Right: Professional consultant holding an architectural building model (`consultant.png`), seamlessly integrated into the card layout.

5. **Section 4: "Explore Properties" (3-Card Showcase)**:
   - Header with section title (*“Roshani Enterprises Where Dreams Find A Global Address. Explore Properties Crafted For Everyone, Everywhere.”*), narrative, and right-docked `🏠 Contact Us Today` pill.
   - 3 Feature Cards matching the Pinterest pin:
     - **Card 1 (Active Dark Card)**: Charcoal/navy featured card for **Harmony Haven**, with `New` chip, `Contact Us` pill, circular arrow `(→)`, 3-row specification box (`Location : Serene Valley, Goa`, `Size : 3 Bedrooms, 1.5 Bathrooms | 1,200 sq. ft.`, `Year Finished : 2024`), and property narrative.
     - **Card 2 (Light Card)**: **Blissful Gardens** with architectural media frame, floating circular arrow button, title, and `View More` button.
     - **Card 3 (Light Card)**: **Tranquil Heights** with twilight estate media frame, floating circular arrow button, title, and `View More` button.

6. **Section 5: "Subscribe To Our Newsletter" Skyline Banner**:
   - Full-width rounded card banner with upward-angle skyscraper perspective and silhouette birds against blue sky (`newsletter-skyline.jpg`).
   - Centered title *“Subscribe To Our Newsletter”*.
   - White pill input bar with `Your Email` placeholder, dark `Subscribe` button, and client-side feedback.

7. **Section 6: Two-Column Footer**:
   - Left: *“Looking to buy, sell or invest in real estate?”* lead, search bar pill with *“Find your dream house here”* and circular arrow button `(→)`, plus social links (Facebook, X, Instagram, YouTube, WhatsApp).
   - Right: Quick navigation links (`About`, `Services`, `Agents`, `Contact Us`), brand emblem, agency line (*Roshani Enterprises Real Estate Agency*), and Goa address block.

8. **Interactive Modals & Specifications Drawer**:
   - Video showcase `<dialog>` with estate tour video poster and description.
   - Real estate inquiry `<dialog>` with name, phone, email, and property selection.
   - Slide-over property specification drawer with detailed floor area, bedroom count, amenities, and private viewing booking.

---

## Design System & Hallmark Sloplint Standards

- **Tokens Over Literals**: 100% of colors, shadows, radii, and spacings defined in `tokens.css` using OKLCH color spaces. Zero hardcoded hex values across components.
- **Strict 4px Spacing Scale**: All layout padding, margins, and gaps adhere strictly to the scale.
- **Typography Hierarchy**: Set in *Manrope* (`400`, `500`, `600`, `700`).
- **Motion Performance**: Smooth compositor transforms with `@media (prefers-reduced-motion: reduce)` fallbacks.
- **Sloplint Verification**: Audited with Hallmark's `sloplint.mjs`:
  ```bash
  sloplint: 0 FAIL, 0 WARN across 4 file(s).
  ```

---

## File Structure

```
roshanienterprises/
├── index.html        # Complete semantic HTML matching Pinterest reference 1:1
├── style.css         # Component and layout styles with Hallmark stamp
├── tokens.css        # OKLCH color tokens, type scale, and spacing tokens
├── base.css          # Reset, container, and accessibility primitives
├── main.js           # Real estate interactive modals, drawer, and form logic
├── assets/           # Curated & generated high-resolution architectural assets
│   ├── hero-villa.jpg           # Contemporary luxury villa at dusk
│   ├── about-house.jpg          # Tall coastal residence with slate siding
│   ├── consultant.png           # Transparent cutout of consultant holding model
│   ├── card-blissful.jpg        # Blissful Gardens contemporary residence
│   ├── card-tranquil.jpg        # Tranquil Heights architectural estate at sunset
│   ├── newsletter-skyline.jpg   # Skyscraper skyline with silhouette birds
│   └── avatar-[1-5].jpg         # Client profile avatars for social proof stack
└── README.md
```

## Local Preview

Preview the website locally using Python 3:

```bash
python3 -m http.server 8080 --directory /home/certified_tech_idiot/coding/roshanienterprises
```
