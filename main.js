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
        threshold: 0.8,
        rootMargin: '0px 0px -10% 0px'
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
