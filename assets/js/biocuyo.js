/**
 * BIOCUYO EXPORTACIONES S.A.S. — Interactive Engine
 * International Trade Platform • Multilingual & Comex Calculator
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initLanguageSwitcher();
  initComexCalculator();
  initCounters();
});

/* ==========================================================================
   1. THEME SWITCHER (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const html = document.documentElement;

  // Retrieve saved theme or default to dark (deep oceanic executive feel)
  const savedTheme = localStorage.getItem('biocuyo_theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', nextTheme);
      localStorage.setItem('biocuyo_theme', nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (!icon) return;
  if (theme === 'dark') {
    // Show Sun icon to switch to light
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  } else {
    // Show Moon icon to switch to dark
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

/* ==========================================================================
   2. NAVIGATION & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobileToggleBtn');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const closeBtn = document.getElementById('drawerCloseBtn');
  const navLinks = document.querySelectorAll('.nav-menu a, .drawer-links a');

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile Drawer toggles
  function openDrawer() {
    drawer?.classList.add('open');
    backdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('open');
    backdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
}

/* ==========================================================================
   3. MULTILINGUAL DICTIONARY & SWITCHER (ES / EN / PT)
   ========================================================================== */
const TRANSLATIONS = {
  es: {
    hero_eyebrow: "Valle de Uco, Mendoza • Argentina",
    hero_headline: "Del Valle de Uco a los Principales Puertos del Mundo",
    hero_lead: "Exportamos más de <strong>5.000.000 kg de ajo fresco premium al año</strong>. Trazabilidad integral de origen, empaque con atmósfera controlada y logística internacional directa.",
    btn_quote: "Cotizar Cosecha FOB / CIF",
    btn_specsheet: "Ver Ficha Logística",
    stat_kg: "Kg Ajo Exportado / Año",
    stat_ha: "Hectáreas Propias",
    stat_years: "Años de Trayectoria",
    stat_virus: "Semilla Libre de Virus",
    synergy_badge: "Integración Vertical Agroindustrial",
    synergy_title: "Finca Propia (Agropettina) + Exportación Directa (BioCuyo)",
    synergy_desc: "Sin intermediarios. Nuestra firma hermana Agropettina S.A.S. produce en los suelos del Valle de Uco bajo estándares meristemáticos propios, y BioCuyo Exportaciones S.A.S. despacha a los mercados más exigentes de Brasil, Europa y Norteamérica.",
    synergy_btn: "Visitar Web de Agropettina",
    portfolio_pre: "Oferta Exportable 2026",
    portfolio_title: "Variedades de Ajo para Exportación",
    portfolio_sub: "Acondicionado, clasificado y calibrado bajo normas internacionales de inocuidad y empaque exportador.",
    calc_title: "Calculador y Cotizador de Embarque B2B",
    calc_sub: "Estime capacidad en Contenedores Reefer de 40ft, cajas de 10kg y solicite cotización formal CIF / FOB al departamento de Comex.",
    calc_calc_btn: "Solicitar Cotización Formal por WhatsApp Comex"
  },
  en: {
    hero_eyebrow: "Uco Valley, Mendoza • Argentina",
    hero_headline: "From the Uco Valley to the World's Major Ports",
    hero_lead: "We export over <strong>5,000,000 kg of premium fresh garlic per year</strong>. Full single-origin traceability, controlled atmosphere cold storage, and direct international logistics.",
    btn_quote: "Request FOB / CIF Quotation",
    btn_specsheet: "View Logistics Specs",
    stat_kg: "Kg Exported Fresh Garlic / Year",
    stat_ha: "Hectares in Cultivation",
    stat_years: "Years of Heritage",
    stat_virus: "Virus-Free Certified Seeds",
    synergy_badge: "Vertical Agribusiness Integration",
    synergy_title: "Own Farmland (Agropettina) + Direct Export (BioCuyo)",
    synergy_desc: "No middlemen. Our sister company Agropettina S.A.S. cultivates the pristine soil of Uco Valley under strict biotechnology standards, while BioCuyo Exportaciones S.A.S. ships directly to major buyers across Brazil, Europe, and the Americas.",
    synergy_btn: "Visit Agropettina Farmland",
    portfolio_pre: "Export Portfolio 2026",
    portfolio_title: "Premium Garlic Varieties for Global Markets",
    portfolio_sub: "Cleaned, cured, graded, and palletized to international food safety and supermarket retail standards.",
    calc_title: "B2B Shipment Estimator & Quotation",
    calc_sub: "Calculate Reefer 40ft container capacity, 10kg cartons, and request an official FOB / CIF quotation from our export team.",
    calc_calc_btn: "Request Official Quotation via Comex WhatsApp"
  },
  pt: {
    hero_eyebrow: "Valle de Uco, Mendoza • Argentina",
    hero_headline: "Do Valle de Uco para os Principais Portos do Mundo",
    hero_lead: "Exportamos mais de <strong>5.000.000 kg de alho fresco premium por ano</strong>. Rastreabilidade total de origem, cadeia de frio rigorosa e logística internacional direta para o Brasil.",
    btn_quote: "Cotar Alho FOB / CIF / DAP",
    btn_specsheet: "Ver Ficha Logística",
    stat_kg: "Kg de Alho Exportado / Ano",
    stat_ha: "Hectares de Cultivo Próprio",
    stat_years: "Anos de Tradição",
    stat_virus: "Semente Livre de Vírus",
    synergy_badge: "Integração Vertical Agroindustrial",
    synergy_title: "Produção Própria (Agropettina) + Exportação Direta (BioCuyo)",
    synergy_desc: "Sem intermediários. Nossa empresa irmã Agropettina S.A.S. cultiva nas terras do Valle de Uco, e a BioCuyo Exportaciones S.A.S. realiza a expedição direta para as principais redes e atacadistas do Brasil.",
    synergy_btn: "Conhecer a Agropettina",
    portfolio_pre: "Oferta Exportável 2026",
    portfolio_title: "Variedades de Alho para Exportação",
    portfolio_sub: "Alho roxo e branco selecionado, calibrado e embalado nos padrões exigidos pelo mercado brasileiro e internacional.",
    calc_title: "Simulador de Cargas e Cotação B2B",
    calc_sub: "Estime a capacidade em Contêineres Reefer de 40ft e solicite cotação formal CIF / FOB / DAP para nosso setor de Comex.",
    calc_calc_btn: "Solicitar Cotação Formal via WhatsApp Comex"
  }
};

function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');
  const savedLang = localStorage.getItem('biocuyo_lang') || 'es';
  applyLanguage(savedLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = e.target.getAttribute('data-lang');
      if (selected) {
        applyLanguage(selected);
        localStorage.setItem('biocuyo_lang', selected);
      }
    });
  });
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.es;

  // Update active state in buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Replace text for marked elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

/* ==========================================================================
   4. B2B COMEX SHIPMENT CALCULATOR
   ========================================================================== */
function initComexCalculator() {
  const varietySelect = document.getElementById('calcVariety');
  const packingSelect = document.getElementById('calcPackaging');
  const volumeInput = document.getElementById('calcVolume');
  const incotermSelect = document.getElementById('calcIncoterm');
  const destinationInput = document.getElementById('calcDestination');

  const metricContainers = document.getElementById('outputContainers');
  const metricBoxes = document.getElementById('outputBoxes');
  const metricWeight = document.getElementById('outputGrossWeight');
  const quoteBtn = document.getElementById('calcQuoteBtn');

  function calculate() {
    const tons = parseFloat(volumeInput?.value) || 25;
    const packType = packingSelect?.value || 'box10';

    // 1 Reefer 40ft High Cube carries approx 24.5 to 26 Metric Tons net
    const reeferCapacityTons = 25;
    const containersCount = Math.max(1, Math.round((tons / reeferCapacityTons) * 10) / 10);

    let boxesPerTon = 100; // 100 boxes of 10kg per ton
    if (packType === 'mesh10') boxesPerTon = 100;
    if (packType === 'bag25') boxesPerTon = 40;

    const totalBoxes = Math.round(tons * boxesPerTon);
    const grossWeightTons = Math.round(tons * 1.07 * 10) / 10; // +7% packaging and pallet weight

    if (metricContainers) metricContainers.textContent = `${containersCount} FCL (40ft Reefer)`;
    if (metricBoxes) metricBoxes.textContent = `${totalBoxes.toLocaleString()} Unidades`;
    if (metricWeight) metricWeight.textContent = `${grossWeightTons} Toneladas Brutas`;

    // WhatsApp Direct Link
    if (quoteBtn) {
      const variety = varietySelect?.options[varietySelect.selectedIndex]?.text || 'Ajo Morado';
      const incoterm = incotermSelect?.value || 'FOB';
      const destination = destinationInput?.value || 'Brasil';

      const msg = `Hola BioCuyo Exportaciones Comex, requiero cotización formal:\n• Variedad: ${variety}\n• Volumen: ${tons} Toneladas (${containersCount} Contenedores 40ft Reefer)\n• Empaque: ${packingSelect?.options[packingSelect.selectedIndex]?.text}\n• Incoterm: ${incoterm}\n• Destino: ${destination}`;
      quoteBtn.href = `https://wa.me/5492615555555?text=${encodeURIComponent(msg)}`;
    }
  }

  [varietySelect, packingSelect, volumeInput, incotermSelect, destinationInput].forEach(el => {
    el?.addEventListener('input', calculate);
    el?.addEventListener('change', calculate);
  });

  calculate();
}

/* ==========================================================================
   5. STATS COUNTER ANIMATION
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.metric-number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        let start = 0;
        const duration = 1800;
        const stepTime = 25;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            el.innerHTML = `${prefix}${target.toLocaleString()}<span class="metric-unit">${suffix}</span>`;
            clearInterval(timer);
          } else {
            const displayVal = Math.floor(start);
            el.innerHTML = `${prefix}${displayVal.toLocaleString()}<span class="metric-unit">${suffix}</span>`;
          }
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(c => observer.observe(c));
}
