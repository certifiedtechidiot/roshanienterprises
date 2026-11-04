# Roshani Enterprises Goa: Coastal Precast Concrete & Infrastructure

A high-performance, conversion-engineered website for **Roshani Enterprises** (Sancoale / Chicalim, South Goa, India), manufacturing IS-certified coastal precast concrete products, interlocking paver blocks, precast compound walls, and heavy-duty civil utility systems since 2014.

Built uniting the **Landing Page Design** conversion framework with **Together AI's Hallmark** design system standards.

![Roshani Enterprises Architecture Preview](./assets/hero-skyline.jpg)

## Architecture & Conversion Structure

The site follows the 12-section conversion architecture tailored for civil contractors, municipal authorities, industrial parks, and developers:

1. **Floating Pill Header**: Fixed navigation with geometric precast wordmark, accessible skip-link, anchor navigation, and primary quote CTA.
2. **Above-the-Fold Hero Stage**: Imposing twilight skyline backdrop, 5-word headline (*“Precast concrete for coastal Goa”*), 11-word subheadline, primary/secondary action buttons, proof badge (*Sancoale facility, operational since 2014*), and docked three-panel console.
3. **Docked Three-Panel Console**:
   - **About Facility**: Precast manufacturing background with facility visual.
   - **Core Engineering**: Elevated midnight-navy card highlighting dense mixes, steam curing, permeable pavers, and boundary walls.
   - **Goa Deployments**: Real deployment case studies (Mormugao freight hardstand and Verna industrial perimeter).
4. **Problem vs. Solution**: Comparison contrasting *Onsite poured masonry* (humidity porosity, steel rust) with *Roshani factory precast* (machine vibration, M40 density, zero curing delays).
5. **Tagline Reveal (B11)**: Typographic statement (*“Precast concrete engineered for coastal Goa. Built to endure fifty monsoons without cracking.”*) illuminated word-by-word on scroll via `IntersectionObserver`.
6. **Engineered Benefits**: 4 outcome cards (*Zero monsoon erosion*, *Accelerated handover*, *Heavy axle certified*, *Direct yard pricing*).
7. **Core Precast Solutions**: Technical specifications for interlocking pavers (60/80/100mm), precast compound walls, and RCC drainage & manhole covers (HD 20T / EHD 35T).
8. **Procurement Workflow (3 Steps)**: *01 Submit drawing* → *02 Itemized quote* → *03 Site delivery*.
9. **Accessible Technical FAQ**: Native HTML5 disclosure accordion (`<details>` / `<summary>`) with animated chevrons and single-open toggle logic.
10. **Interactive Material Estimator**: Live JavaScript calculator generating preliminary rupee budgets for paver and wall requirements.
11. **Site Footer**: Complete product categorization, facility address, credits, and copyright.

## Design System & Hallmark Standards

- **Single Typography**: Set in *Manrope* (`400`, `500`, `600`, `700`) as specified in Landing Page Design B1, verified by Hallmark's theme checker.
- **Tokens Over Literals**: 100% of colors, shadows, and spacings defined in `tokens.css` using OKLCH color spaces.
- **Strict 4px Scale**: All layout padding, margins, and gaps adhere strictly to the 4px scale (`--spacing-0` through `--spacing-1000`).
- **Compositor-Only Motion**: Weighted deceleration curve `cubic-bezier(0.22, 1, 0.36, 1)` animating strictly `transform` and `opacity` with `prefers-reduced-motion` fallbacks.
- **Accessible & Tested**: Full `:focus-visible` styling, accessible names on all controls, and zero arbitrary z-indices.
- **Sloplint Verification**: Audited with Hallmark's `sloplint.mjs`:
  ```bash
  sloplint: clean. 0 FAIL, 0 REFLEX, 0 WARN across all files
  ```

## File Structure

```
roshanienterprises/
├── index.html        # Main landing page markup (12-section architecture)
├── style.css         # Component and layout styles with Hallmark stamp
├── tokens.css        # OKLCH color tokens, type scale, and spacing tokens
├── base.css          # Reset, container, and accessibility primitives
├── main.js           # Scroll reveal, FAQ toggle, and quote calculator
├── assets/           # Photographic infrastructure visual assets
│   ├── hero-skyline.jpg
│   ├── about-facility.jpg
│   ├── project-tower.jpg
│   └── project-headquarters.jpg
└── README.md
```

## Local Preview

Preview the website locally using any static web server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx serve .
```

Then navigate to `http://localhost:8000` in your web browser.

## License

Proprietary — Roshani Enterprises Goa.
