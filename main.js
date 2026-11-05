// Hallmark slot initializer
window.hallmarkSlots = (m) => {
  for (const [k, v] of Object.entries(m)) {
    const s = document.querySelector(`[data-slot="${k}"]`);
    if (!s) continue;
    const im = new Image();
    im.src = typeof v === 'string' ? v : v.src;
    im.alt = (typeof v === 'object' && v.alt) || s.dataset.alt || '';
    s.querySelectorAll(':scope > img').forEach((o) => o.remove());
    s.prepend(im);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Safe image cleanup for broken slots
  document.querySelectorAll('[data-slot] img').forEach((i) => {
    if (i.complete && !i.naturalWidth) {
      i.remove();
    } else {
      i.addEventListener('error', () => i.remove(), { once: true });
    }
  });

  // Mandatory Tagline Word-by-Word Scroll Illumination (B11)
  const revealWords = document.querySelectorAll('.reveal-word');
  if (revealWords.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: '0px 0px -5% 0px'
      }
    );

    revealWords.forEach((word) => {
      observer.observe(word);
    });
  } else {
    revealWords.forEach((word) => {
      word.classList.add('active');
    });
  }

  // Accessible FAQ Accordion Toggle (native details/summary)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });

  // Interactive Quote Estimator
  const areaInput = document.getElementById('calc-area');
  const typeSelect = document.getElementById('calc-type');
  const resultDisplay = document.getElementById('calc-output');

  function updateEstimate() {
    if (!areaInput || !typeSelect || !resultDisplay) return;
    const area = parseFloat(areaInput.value) || 0;
    const ratePerUnit = {
      pavers: 55,
      walls: 145,
      manholes: 95
    }[typeSelect.value] || 55;

    if (area <= 0) {
      resultDisplay.textContent = 'Enter quantity';
      return;
    }

    const estimatedTotal = Math.round(area * ratePerUnit);
    resultDisplay.textContent = `₹${estimatedTotal.toLocaleString('en-IN')}`;
  }

  if (areaInput && typeSelect) {
    areaInput.addEventListener('input', updateEstimate);
    typeSelect.addEventListener('change', updateEstimate);
    updateEstimate();
  }

  // Inquire specs buttons link to calculator with selected product
  document.querySelectorAll('.product-spec-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      if (category && typeSelect) {
        typeSelect.value = category;
        updateEstimate();
      }
    });
  });

  // Mobile Navigation Drawer Toggle (Landing Page Design B7)
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const mobileNavPanel = document.getElementById('mobile-nav-panel');
  const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');

  function openMobileNav() {
    if (!mobileNavPanel || !menuToggleBtn) return;
    mobileNavPanel.removeAttribute('hidden');
    mobileNavPanel.setAttribute('aria-hidden', 'false');
    void mobileNavPanel.offsetWidth;
    mobileNavPanel.classList.add('open');
    menuToggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!mobileNavPanel || !menuToggleBtn) return;
    mobileNavPanel.classList.remove('open');
    mobileNavPanel.setAttribute('aria-hidden', 'true');
    menuToggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!mobileNavPanel.classList.contains('open')) {
        mobileNavPanel.setAttribute('hidden', '');
      }
    }, 500);
  }

  if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', () => {
      const isOpen = mobileNavPanel && mobileNavPanel.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileNav);
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMobileNav);
  }

  // Close mobile nav when clicking any nav link
  document.querySelectorAll('.mobile-nav-link, .mobile-cta-btn').forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  // Handle Escape key to close mobile nav and dialog
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileNavPanel && mobileNavPanel.classList.contains('open')) {
        closeMobileNav();
      }
      if (legalDialog && legalDialog.open) {
        legalDialog.close();
      }
    }
  });

  // Form submission with accessible feedback (Landing Page Design B8, B10)
  const quoteForm = document.getElementById('quote-form');
  const quoteFeedback = document.getElementById('quote-feedback');
  const submitBtn = document.getElementById('quote-submit-btn');

  if (quoteForm && quoteFeedback) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('contact-name');
      const phoneInput = document.getElementById('contact-phone');

      if (!nameInput || !nameInput.value.trim() || !phoneInput || !phoneInput.value.trim()) {
        quoteFeedback.removeAttribute('hidden');
        quoteFeedback.className = 'form-feedback';
        quoteFeedback.textContent = 'Please enter your contact name and telephone number.';
        return;
      }

      // Display clean, calm success state
      quoteFeedback.removeAttribute('hidden');
      quoteFeedback.className = 'form-feedback success';
      quoteFeedback.textContent = 'Quotation request received. Our Sancoale dispatch team will verify project specifications and respond within 2 business hours.';

      if (submitBtn) {
        submitBtn.setAttribute('disabled', 'true');
        submitBtn.textContent = 'Request submitted';
      }
    });
  }

  // Accessible Legal Dialog
  const legalDialog = document.getElementById('legal-dialog');
  const openTermsBtn = document.getElementById('open-terms-btn');
  const openPrivacyBtn = document.getElementById('open-privacy-btn');
  const legalCloseBtn = document.getElementById('legal-close-btn');

  function openLegalDialog() {
    if (legalDialog && typeof legalDialog.showModal === 'function') {
      legalDialog.showModal();
    }
  }

  if (openTermsBtn) openTermsBtn.addEventListener('click', openLegalDialog);
  if (openPrivacyBtn) openPrivacyBtn.addEventListener('click', openLegalDialog);
  if (legalCloseBtn && legalDialog) {
    legalCloseBtn.addEventListener('click', () => legalDialog.close());
  }

  if (legalDialog) {
    legalDialog.addEventListener('click', (e) => {
      if (e.target === legalDialog) {
        legalDialog.close();
      }
    });
  }

  // Smooth scroll navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
