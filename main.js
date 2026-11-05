/**
 * Roshani Enterprises Goa - Interactive Features & Motion Logic
 * Built adhering to Hallmark, Silk-Design, and Landing Page Design standards.
 */

document.addEventListener("DOMContentLoaded", () => {
  initTaglineReveal();
  initModalsAndDrawers();
  initDropdownMenu();
  initMobileNav();
  initForms();
});

/* ==========================================================================
   01. MANDATORY B11 TAGLINE REVEAL (Scroll-Triggered Word Illumination)
   ========================================================================== */

function initTaglineReveal() {
  const revealWords = document.querySelectorAll(".reveal-word");
  if (!revealWords.length) return;

  // Reduced motion check (Silk-Design & Hallmark)
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealWords.forEach((word) => word.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealWords.forEach((word, index) => {
            setTimeout(() => {
              word.classList.add("active");
            }, index * 45); // Staggered illumination
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );

  const taglineSection = document.querySelector(".tagline-reveal-section");
  if (taglineSection) {
    observer.observe(taglineSection);
  }
}

/* ==========================================================================
   02. DROPDOWN MENU
   ========================================================================== */

function initDropdownMenu() {
  const btn = document.getElementById("products-menu-btn");
  const menu = document.getElementById("products-dropdown");
  if (!btn || !menu) return;

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !isExpanded);
    menu.hidden = isExpanded;
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      btn.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) {
      btn.setAttribute("aria-expanded", "false");
      menu.hidden = true;
      btn.focus();
    }
  });
}

/* ==========================================================================
   03. MODALS & DRAWERS (Accessible Dialogs & Focus Traps)
   ========================================================================== */

const productData = {
  pavers: {
    title: "Interlocking Paver Blocks (Heavy-Duty)",
    specs: [
      { label: "Standard", val: "IS 15658:2006 Certified" },
      { label: "Concrete Grade", val: "M30, M40, M50 Hydraulic Compacted" },
      { label: "Available Thickness", val: "60mm (Light), 80mm (Heavy Axle), 100mm (Industrial Port)" },
      { label: "Shapes / Profiles", val: "Yellow Milano, Cosmic, Fan Blade, I-Shape, Hexagonal" },
      { label: "Finish Options", val: "Shot-Blasted, Anti-Skid Chequered, Gloss Top Coat" },
      { label: "Compressive Strength", val: "40 N/mm² to 55 N/mm²" },
      { label: "Abrasion Resistance", val: "Under 2.0 mm loss (Heavy Freight Grade)" },
      { label: "Yard Location", val: "Sancoale Industrial Area, South Goa" }
    ],
    description: "Hydraulically vibrated precast paver blocks manufactured with clean graded river sand and 53-grade OPC cement. Engineered specifically to eliminate water pooling and withstand continuous coastal monsoon saturation without shifting or cracking."
  },
  walls: {
    title: "Precast Reinforced Boundary & Compound Walls",
    specs: [
      { label: "Design Code", val: "IS 456:2000 & IS 13920 (Seismic/Wind Resistant)" },
      { label: "Concrete Mix", val: "M30 Design Mix with Fe500D TMT Reinforcement" },
      { label: "Column Heights", val: "6 ft, 7 ft, 8 ft, and 10 ft above ground" },
      { label: "Panel Dimensions", val: "7 ft (2.1m) length x 1 ft (0.3m) height x 50mm thickness" },
      { label: "Installation Speed", val: "Up to 150 running meters per day with 4-person crew" },
      { label: "Curing Method", val: "Steam cured and immersion water tanks" },
      { label: "Coastal Resilience", val: "Anti-corrosion coating on internal steel rebars" }
    ],
    description: "Readymade compound wall system designed for swift site deployment across Goa. Eliminates messy onsite brickwork, plastering delays, and monsoon mortar washout while reducing perimeter fencing costs by up to 40%."
  },
  manholes: {
    title: "Heavy-Duty RCC Manhole Covers & Drainage",
    specs: [
      { label: "Classification", val: "IS 12592:2002 Heavy Duty (HD 20T) & Extra Heavy (EHD 35T)" },
      { label: "Reinforcement", val: "Hot-dip galvanized heavy TMT cage with structural steel rim" },
      { label: "Shapes Available", val: "Circular (560mm, 600mm dia), Rectangular, Square (450mm to 900mm)" },
      { label: "Lifting System", val: "Recessed stainless steel lifting eyes / key slots" },
      { label: "Load Capacity", val: "Tested to 200 kN (HD) and 350 kN (EHD) hydraulic crush load" },
      { label: "Application", val: "Mormugao Port freight access, highway stormwater drainage, industrial estates" }
    ],
    description: "High-density reinforced precast manhole covers with interlocking frames. Immune to scrap metal theft, corrosion-proof in salty coastal soil, and approved by Goa municipal civil contractors."
  },
  jalis: {
    title: "Designer Cement Jalis & Architectural Grills",
    specs: [
      { label: "Applications", val: "Breezeway facades, compound wall inserts, balcony partitions" },
      { label: "Thickness", val: "40mm to 65mm high-density micro-concrete" },
      { label: "Patterns", val: "Geometric Moroccan, Classic Floral, Horizontal Louver" },
      { label: "Durability", val: "Fiber-reinforced to resist wind-driven coastal salt spray" }
    ],
    description: "Architectural decorative cement jalis providing natural cross-ventilation while providing perimeter security and sun shading for contemporary Goan architecture."
  }
};

function initModalsAndDrawers() {
  // Video Modal
  const playVideoBtn = document.getElementById("play-video-btn");
  const videoModal = document.getElementById("video-modal");
  const videoModalClose = document.getElementById("video-modal-close");

  if (playVideoBtn && videoModal) {
    playVideoBtn.addEventListener("click", () => {
      videoModal.showModal();
    });
  }

  if (videoModalClose && videoModal) {
    videoModalClose.addEventListener("click", () => {
      videoModal.close();
    });
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) videoModal.close();
    });
  }

  // Quote Modal
  const quoteModal = document.getElementById("quote-modal");
  const quoteModalClose = document.getElementById("quote-modal-close");
  const triggerIds = ["header-contact-btn", "header-arrow-btn", "inquiry-cta-btn", "showcase-contact-btn", "mobile-quote-btn"];

  triggerIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el && quoteModal) {
      el.addEventListener("click", () => {
        openContactModal();
      });
    }
  });

  if (quoteModalClose && quoteModal) {
    quoteModalClose.addEventListener("click", () => {
      quoteModal.close();
    });
    quoteModal.addEventListener("click", (e) => {
      if (e.target === quoteModal) quoteModal.close();
    });
  }

  // Drawer Close
  const drawer = document.getElementById("product-drawer");
  const drawerBackdrop = document.getElementById("drawer-backdrop");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");

  if (drawer && drawerBackdrop && drawerCloseBtn) {
    drawerBackdrop.addEventListener("click", closeDrawer);
    drawerCloseBtn.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !drawer.hidden) {
        closeDrawer();
      }
    });
  }
}

window.openContactModal = function(productName) {
  const quoteModal = document.getElementById("quote-modal");
  if (!quoteModal) return;
  
  if (productName) {
    const select = document.getElementById("quote-product");
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text.toLowerCase().includes(productName.toLowerCase()) || 
            select.options[i].value.toLowerCase().includes(productName.toLowerCase())) {
          select.selectedIndex = i;
          break;
        }
      }
    }
  }
  
  quoteModal.showModal();
};

window.openDrawer = function(productKey) {
  const drawer = document.getElementById("product-drawer");
  const content = document.getElementById("drawer-content");
  const title = document.getElementById("drawer-title");
  if (!drawer || !content || !title) return;

  const data = productData[productKey] || productData.pavers;
  title.textContent = data.title;

  let tableHtml = `<table class="drawer-spec-table"><tbody>`;
  data.specs.forEach((row) => {
    tableHtml += `<tr><th>${row.label}</th><td>${row.val}</td></tr>`;
  });
  tableHtml += `</tbody></table>`;

  content.innerHTML = `
    <p class="drawer-desc" style="font-size: var(--text-sm); line-height: 1.6; color: var(--color-muted);">${data.description}</p>
    ${tableHtml}
    <div style="margin-top: var(--spacing-400);">
      <button type="button" class="btn btn-pill-about" style="width: 100%; justify-content: center;" onclick="closeDrawer(); openContactModal('${data.title}')">
        Request Price For This Product
      </button>
    </div>
  `;

  drawer.hidden = false;
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

window.closeDrawer = function() {
  const drawer = document.getElementById("product-drawer");
  if (!drawer) return;
  drawer.hidden = true;
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

/* ==========================================================================
   04. MOBILE NAVIGATION
   ========================================================================== */

function initMobileNav() {
  const toggleBtn = document.getElementById("menu-toggle-btn");
  const mobilePanel = document.getElementById("mobile-nav-panel");
  const closeBtn = document.getElementById("mobile-close-btn");
  const backdrop = document.getElementById("mobile-nav-backdrop");

  if (!toggleBtn || !mobilePanel) return;

  const openMobile = () => {
    mobilePanel.hidden = false;
    mobilePanel.setAttribute("aria-hidden", "false");
    toggleBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMobile = () => {
    mobilePanel.hidden = true;
    mobilePanel.setAttribute("aria-hidden", "true");
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  toggleBtn.addEventListener("click", openMobile);
  if (closeBtn) closeBtn.addEventListener("click", closeMobile);
  if (backdrop) backdrop.addEventListener("click", closeMobile);

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", closeMobile);
  });
}

/* ==========================================================================
   05. FORM HANDLERS (Realistic, Accessible, No-Alert)
   ========================================================================== */

function initForms() {
  // Newsletter Form
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterFeedback = document.getElementById("newsletter-feedback");
  if (newsletterForm && newsletterFeedback) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("newsletter-email");
      if (!emailInput || !emailInput.value.includes("@")) {
        newsletterFeedback.textContent = "Please enter a valid business email address.";
        newsletterFeedback.style.color = "var(--color-error)";
        newsletterFeedback.hidden = false;
        return;
      }

      newsletterFeedback.textContent = `Subscribed. Monthly precast mix designs and Goa yard pricing will be sent to ${emailInput.value}.`;
      newsletterFeedback.style.color = "var(--color-ink)";
      newsletterFeedback.hidden = false;
      emailInput.value = "";
    });
  }

  // Quote Modal Form
  const quoteForm = document.getElementById("quote-modal-form");
  const quoteFeedback = document.getElementById("quote-feedback");
  if (quoteForm && quoteFeedback) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("quote-name").value.trim();
      const phone = document.getElementById("quote-phone").value.trim();
      const product = document.getElementById("quote-product").value;

      if (!name || !phone) {
        quoteFeedback.textContent = "Please provide both your name and phone number.";
        quoteFeedback.style.color = "var(--color-error)";
        quoteFeedback.hidden = false;
        return;
      }

      quoteFeedback.textContent = `Thank you, ${name}. Our Sancoale engineering desk has received your inquiry for ${product} and will call ${phone} within 2 hours.`;
      quoteFeedback.style.color = "var(--color-success)";
      quoteFeedback.hidden = false;
      quoteForm.reset();

      setTimeout(() => {
        const quoteModal = document.getElementById("quote-modal");
        if (quoteModal) quoteModal.close();
        quoteFeedback.hidden = true;
      }, 3500);
    });
  }

  // Footer Search Form
  const searchForm = document.getElementById("footer-search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = document.getElementById("footer-search-input").value.toLowerCase();
      if (query.includes("wall") || query.includes("boundary") || query.includes("fence")) {
        openDrawer("walls");
      } else if (query.includes("manhole") || query.includes("drain") || query.includes("cover")) {
        openDrawer("manholes");
      } else {
        openDrawer("pavers");
      }
    });
  }
}
