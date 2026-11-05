/**
 * Roshani Enterprises Goa - Interactive Features & Real Estate Modals
 * 1:1 replica functionality matching Pinterest NextState concept.
 */

document.addEventListener("DOMContentLoaded", () => {
  initModalsAndDrawers();
  initDropdownMenu();
  initMobileNav();
  initForms();
});

/* ==========================================================================
   01. DROPDOWN MENU
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
   02. PROPERTY DATA & SPECIFICATION DRAWER
   ========================================================================== */

const propertyData = {
  harmony_haven: {
    title: "Harmony Haven",
    subtitle: "Serene Valley, Goa",
    specs: [
      { label: "Location", val: "Serene Valley, Goa" },
      { label: "Size", val: "3 Bedrooms, 1.5 Bathrooms | 1,200 sq. ft." },
      { label: "Total Area", val: "1,500 sq. ft. Built-up" },
      { label: "Year Finished", val: "2024" },
      { label: "Property Type", val: "Luxury Designer Villa" },
      { label: "Furnishing", val: "Fully Furnished / Turnkey" },
      { label: "Views", val: "Breathtaking Valley & Forest Canopy" },
      { label: "Status", val: "Ready to Move In" }
    ],
    description: "Harmony Haven, a serene 3-bed, 2-bath retreat in Goa. Spanning 1,500 sq. ft., this property offers modern luxury in a tranquil setting. With breathtaking views and meticulous design, it's your haven of comfort and style. Discover a harmonious living experience at Harmony Haven."
  },
  blissful_gardens: {
    title: "Blissful Gardens",
    subtitle: "Assagao, North Goa",
    specs: [
      { label: "Location", val: "Assagao, North Goa" },
      { label: "Size", val: "4 Bedrooms, 3 Bathrooms | 2,400 sq. ft." },
      { label: "Plot Area", val: "450 sq. meters" },
      { label: "Year Finished", val: "2024" },
      { label: "Property Type", val: "Contemporary Gabled Villa" },
      { label: "Outdoor Features", val: "Private Manicured Lawn, Sun Terrace, Alfresco Patio" },
      { label: "Parking", val: "Covered 2-Car Port" },
      { label: "Status", val: "Available for Immediate Ownership" }
    ],
    description: "Blissful Gardens features striking pitched gables, double-height living spaces, and expansive floor-to-ceiling glass fenestrations overlooking private lawns. Designed for refined indoor-outdoor Goan living."
  },
  tranquil_heights: {
    title: "Tranquil Heights",
    subtitle: "Dona Paula, Goa",
    specs: [
      { label: "Location", val: "Dona Paula, Goa" },
      { label: "Size", val: "5 Bedrooms, 4.5 Bathrooms | 3,800 sq. ft." },
      { label: "Plot Area", val: "680 sq. meters" },
      { label: "Year Finished", val: "2024" },
      { label: "Property Type", val: "Sunset Horizon Architectural Estate" },
      { label: "Features", val: "Infinity Plunge Pool, Double Garage, Twilight Observation Deck" },
      { label: "Security", val: "Gated Enclave with 24/7 Access Control" },
      { label: "Status", val: "Exclusive Listing with Roshani Enterprises" }
    ],
    description: "Tranquil Heights stands as a premier architectural landmark overlooking sunset sea horizons. Built with fine stone masonry, custom millwork, ambient architectural evening lighting, and expansive landscaped grounds."
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

  // Quote Modal Close
  const quoteModal = document.getElementById("quote-modal");
  const quoteModalClose = document.getElementById("quote-modal-close");

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

window.openContactModal = function(propertyName) {
  const quoteModal = document.getElementById("quote-modal");
  if (!quoteModal) return;
  
  if (propertyName) {
    const select = document.getElementById("quote-product");
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text.toLowerCase().includes(propertyName.toLowerCase()) || 
            select.options[i].value.toLowerCase().includes(propertyName.toLowerCase())) {
          select.selectedIndex = i;
          break;
        }
      }
    }
  }
  
  quoteModal.showModal();
};

window.openDrawer = function(propertyKey) {
  const drawer = document.getElementById("product-drawer");
  const content = document.getElementById("drawer-content");
  const title = document.getElementById("drawer-title");
  if (!drawer || !content || !title) return;

  const data = propertyData[propertyKey] || propertyData.harmony_haven;
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
        Schedule Private Viewing
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
   03. MOBILE NAVIGATION
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
   04. FORM HANDLERS (Accessible, Client-Side Feedback)
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
        newsletterFeedback.textContent = "Please enter a valid email address.";
        newsletterFeedback.style.color = "var(--color-error)";
        newsletterFeedback.hidden = false;
        return;
      }

      newsletterFeedback.textContent = `Thank you for subscribing! Exclusive property portfolios will be delivered to ${emailInput.value}.`;
      newsletterFeedback.style.color = "var(--color-ink)";
      newsletterFeedback.hidden = false;
      emailInput.value = "";
    });
  }

  // Quote / Inquiry Modal Form
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

      quoteFeedback.textContent = `Thank you, ${name}. Our Roshani Enterprises real estate advisory team has received your request regarding ${product} and will contact you at ${phone} promptly.`;
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
      const query = (document.getElementById("footer-search-input").value || "").toLowerCase();
      if (query.includes("blissful") || query.includes("garden") || query.includes("assagao")) {
        openDrawer("blissful_gardens");
      } else if (query.includes("tranquil") || query.includes("heights") || query.includes("dona paula")) {
        openDrawer("tranquil_heights");
      } else {
        openDrawer("harmony_haven");
      }
    });
  }
}
