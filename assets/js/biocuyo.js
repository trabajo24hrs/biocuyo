/**
 * BIOCUYO EXPORTACIONES S.A.S. — Interactive Engine
 * 100% Full-Page Multilingual Engine (ES / EN / PT) & B2B Comex Calculator
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initFullLanguageSwitcher();
  initComexCalculator();
  initCounters();
});

/* ==========================================================================
   1. THEME SWITCHER (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const html = document.documentElement;

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
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  } else {
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

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

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
   3. EXHAUSTIVE 100% FULL-PAGE TRANSLATION DICTIONARY
   ========================================================================== */
const FULL_TRANSLATIONS = {
  es: {
    // Top Bar
    top_group_label: "Grupo Pettina Agroexportador:",
    top_link_biocuyo: "<strong>BioCuyo Exportaciones S.A.S.</strong> (Comex)",
    top_link_agro: "Agropettina S.A.S. (Producci&oacute;n en Origen)",

    // Header & Navigation
    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_varieties: "Variedades",
    nav_logistics: "Log&iacute;stica",
    nav_calendar: "Calendario",
    nav_facilities: "Plantas &amp; Fr&iacute;o",
    nav_quote: "Cotizador",
    nav_contact: "Contacto",
    drawer_agro_link: "Ir a Finca Agropettina &rarr;",
    drawer_lang_label: "Idioma:",
    drawer_whatsapp: "WhatsApp Comex",

    // Hero Section
    hero_eyebrow: "Valle de Uco, Mendoza &bull; Argentina",
    hero_headline: "Del Valle de Uco a los Principales Puertos del Mundo",
    hero_lead: "Exportamos m&aacute;s de <strong>5.000.000 kg de ajo fresco premium al a&ntilde;o</strong>. Trazabilidad integral de origen, empaque con atm&oacute;sfera controlada y log&iacute;stica internacional directa.",
    hero_btn_quote: "Cotizar Cosecha FOB / CIF",
    hero_btn_specs: "Ver Ficha Log&iacute;stica",
    stat_kg: "Kg Ajo Exportado / A&ntilde;o",
    stat_ha: "Hect&aacute;reas Propias",
    stat_years_label: "A&ntilde;os de Trayectoria",
    stat_years_unit: " A&ntilde;os",
    stat_virus: "Semilla Libre de Virus",

    // Synergy Banner
    synergy_badge: "Integraci&oacute;n Vertical Agroindustrial",
    synergy_title: "Finca Propia (Agropettina) + Exportaci&oacute;n Directa (BioCuyo)",
    synergy_desc: "Sin intermediarios. Nuestra firma productora <strong>Agropettina S.A.S.</strong> cultiva 350 hect&aacute;reas en los mejores suelos del Valle de Uco, y <strong>BioCuyo Exportaciones S.A.S.</strong> gestiona el comercio exterior, la trazabilidad fitosanitaria y el despacho directo a Brasil, Europa y Norteam&eacute;rica.",
    synergy_btn: "Visitar Web de Agropettina",

    // Varieties Section
    port_pre: "Oferta Exportable 2026",
    port_title: "Variedades de Ajo para Exportaci&oacute;n",
    port_sub: "Acondicionado, clasificado y calibrado bajo normas internacionales de inocuidad y empaque exportador.",
    
    // Variety 1: Morado
    var1_badge: "Top Mercosur",
    var1_name: "Ajo Morado Isabella",
    var1_botanic: "Allium sativum &bull; Variedad Tipo Violeta",
    var1_desc: "La estrella indiscutida de la exportaci&oacute;n a Brasil. Sobresale por su intenso tono p&uacute;rpura, excelente dormici&oacute;n poscosecha, alta pungencia y resistencia superior en tr&aacute;nsito mar&iacute;timo y terrestre.",
    var1_cal: "Cal. 4, 5, 6 y 7",
    var1_pung: "Muy Alta (Intensa)",
    var1_life: "6 a 8 Meses en Fr&iacute;o",
    var1_dest: "Brasil / Europa",
    
    // Variety 2: Blanco
    var2_badge: "Grade A Export",
    var2_name: "Ajo Blanco Argentino",
    var2_botanic: "Allium sativum &bull; Selecci&oacute;n N&aacute;car",
    var2_desc: "Bulbos sim&eacute;tricos con t&uacute;nica blanca brillante y dientes compactos. Muy apreciado en mercados europeos y de alta cocina por su equilibrio arom&aacute;tico, sabor suave y presentaci&oacute;n impecable.",
    var2_cal: "Cal. 5, 6, 7 y 8+",
    var2_pung: "Media - Refinada",
    var2_life: "5 a 7 Meses en Fr&iacute;o",
    var2_dest: "Europa / Norteam&eacute;rica",

    // Variety 3: Colorado
    var3_badge: "Rusticidad Pr&eacute;mium",
    var3_name: "Ajo Colorado &Iacute;talo 2015",
    var3_botanic: "Allium sativum &bull; Clon Certificado",
    var3_desc: "Variedad sumamente vigorosa con envolturas de tono rojizo-cobre y dientes de gran calibre. Excelente firmeza, rendimiento en cocina industrial y prolongada conservaci&oacute;n natural.",
    var3_cal: "Cal. 4, 5, 6 y 7",
    var3_pung: "Alta - Robusta",
    var3_life: "7 a 9 Meses en Fr&iacute;o",
    var3_dest: "Mercado Regional / Comex",

    spec_lbl_cal: "Calibres Disponibles:",
    spec_lbl_pung: "Pungencia (Allicina):",
    spec_lbl_life: "Vida Poscosecha:",
    spec_lbl_dest: "Destino Principal:",
    btn_req_spec: "Solicitar Ficha T&eacute;cnica",

    // Logistics Section
    log_pre: "Cadena de Fr&iacute;o &amp; Comex",
    log_title: "Log&iacute;stica Internacional &amp; Embarque Reefer",
    log_sub: "Cuidamos cada eslab&oacute;n: desde el empaque con control t&eacute;rmico hasta el arribo en el puerto convenido.",
    log_item1_t: "Incoterms Flexibles: FOB, CIF, CFR y DAP",
    log_item1_d: "Operamos despachos mar&iacute;timos desde el Puerto de Buenos Aires y Valpara&iacute;so (Chile), as&iacute; como tr&aacute;nsitos terrestres refrigerados puerta a puerta (DAP) para todo Brasil.",
    log_item2_t: "Trazabilidad Fitosanitaria Integral (SENASA)",
    log_item2_d: "Cada lote cuenta con c&oacute;digo de trazabilidad georreferenciado, garantizando origen espec&iacute;fico en Valle de Uco, libre de plagas cuarentenarias y apto para los controles m&aacute;s rigurosos.",
    log_item3_t: "Opciones de Embalaje seg&uacute;n Requerimiento",
    log_item3_d: "Cajas de cart&oacute;n corrugado de 10 kg con dise&ntilde;o exportador, mallas de 5 kg y 10 kg, o bolsas de polipropileno ventiladas de 25 kg para fraccionadores y distribuidores.",
    
    reefer_card_title: "Ficha T&eacute;cnica Contenedor Reefer 40ft",
    reefer_card_sub: "Est&aacute;ndar Internacional para Cargas de Ajo Fresco",
    reefer_temp_lbl: "Temperatura en Tr&aacute;nsito:",
    reefer_hum_lbl: "Humedad Relativa:",
    reefer_air_lbl: "Renovaci&oacute;n de Aire:",
    reefer_pal_lbl: "Capacidad Pallets:",
    reefer_pal_val: "20 a 22 Pallets Est&aacute;ndar",
    reefer_box_lbl: "Cajas por Contenedor:",
    reefer_box_val: "2.400 a 2.600 Cajas de 10kg",
    reefer_load_lbl: "Carga Neta Aprox.:",

    // Calendar Section
    cal_pre: "Disponibilidad Anual",
    cal_title: "Calendario de Cosecha &amp; Exportaci&oacute;n",
    cal_sub: "Planifique sus compras mayoristas con previsibilidad garantizada.",
    cal_th_var: "Variedad",
    cal_legend_harvest: "Cosecha en Valle de Uco",
    cal_legend_peak: "Pico de Disponibilidad &amp; Embarque",
    cal_legend_export: "Despacho Programado en Fr&iacute;o",
    cal_scroll_hint: "Desliza horizontalmente para ver todo el a&ntilde;o &rarr;",

    // Infrastructure Section
    fac_pre: "Respaldo Tecnol&oacute;gico",
    fac_title: "Infraestructura, Plantas &amp; Laboratorio Propio",
    fac_sub: "Control integral del ciclo productivo: desde la sanidad de la semilla hasta el empaque final.",
    fac1_tag: "Biotecnolog&iacute;a en Origen",
    fac1_name: "Laboratorio en R&iacute;o Negro",
    fac1_desc: "Instalaci&oacute;n biotecnol&oacute;gica propia en la Patagonia, dedicada a la micropropagaci&oacute;n meristem&aacute;tica y selecci&oacute;n clonal. Garantiza un 100% de semillas libres de virus, nematodos y hongos fitopat&oacute;genos.",
    fac2_tag: "Acondicionamiento",
    fac2_name: "Planta de Empaque Tunuy&aacute;n",
    fac2_desc: "L&iacute;neas mec&aacute;nicas y manuales de cepillado, corte de ra&iacute;ces y calibrado electr&oacute;nico. Capacidad de procesamiento para armar m&uacute;ltiples contenedores diarios en temporada alta.",
    fac3_tag: "Conservaci&oacute;n Poscosecha",
    fac3_name: "C&aacute;maras Frigor&iacute;ficas San Carlos",
    fac3_desc: "C&aacute;maras frigor&iacute;ficas de &uacute;ltima generaci&oacute;n con control de humedad relativa y flujo de aire inducido, preservando la vitalidad y consistencia del ajo durante meses tras la cosecha.",

    // Founder Quote
    founder_quote: "Estamos muy orgullosos de poder ser la segunda generaci&oacute;n que contin&uacute;a con este legado y la primera en convertirse en exportadores directos. Nuestro objetivo ha sido siempre mantener la calidad de nuestra producci&oacute;n de ajo en lo m&aacute;s alto del mercado mundial.",
    founder_title: "Director General &bull; BioCuyo Exportaciones S.A.S.",

    // Calculator Section
    calc_pre: "Comex Online",
    calc_title: "Calculador y Cotizador de Embarque B2B",
    calc_sub: "Estime capacidad en Contenedores Reefer de 40ft, cajas de 10kg y solicite cotizaci&oacute;n formal CIF / FOB al departamento de Comex.",
    calc_lbl_var: "Variedad de Ajo",
    calc_opt_v1: "Ajo Morado Isabella (Recomendado Mercosur)",
    calc_opt_v2: "Ajo Blanco Argentino (Europa / USA)",
    calc_opt_v3: "Ajo Colorado \u00cdtalo 2015",
    calc_lbl_pack: "Formato de Empaque",
    calc_opt_p1: "Cajas de Cart\u00f3n 10 Kg (Export Est\u00e1ndar)",
    calc_opt_p2: "Mallas Ventiladas 10 Kg",
    calc_opt_p3: "Bolsas Ventiladas 25 Kg",
    calc_lbl_vol: "Volumen Estimado (Toneladas)",
    calc_lbl_inco: "Incoterm Requerido",
    calc_lbl_dest: "Pa\u00eds / Empresa Importadora",
    calc_ph_dest: "Ej: Red de Supermercados / Importadora (San Pablo, Brasil)",
    calc_out_cont: "Capacidad de Embarque:",
    calc_out_boxes: "Bultos Netos:",
    calc_out_weight: "Peso Bruto Estimado:",
    calc_btn_whatsapp: "Solicitar Cotizaci&oacute;n Formal por WhatsApp Comex",

    // Contact Section
    contact_pre: "Comercio Exterior",
    contact_title: "Hable con Nuestro Equipo de Exportaci&oacute;n",
    contact_sub: "Estamos a su disposici&oacute;n para coordinar programas de abastecimiento anual y despachos internacionales.",
    contact_card_title: "Sede Central &amp; Operaciones",
    contact_lbl_loc: "Ubicaci&oacute;n:",
    contact_val_loc: "Valle de Uco, Tunuy&aacute;n &amp; San Carlos, Mendoza, Argentina.",
    contact_lbl_tel: "Tel&eacute;fono / WhatsApp Comex:",
    contact_val_tel: "+54 9 261 555-5555 (Atenci&oacute;n B2B en ES / EN / PT)",
    contact_lbl_mail: "Email Comercio Exterior:",
    contact_lbl_origin: "Producci&oacute;n en Origen:",
    contact_form_title: "Mensaje Directo",
    contact_ph_name: "Nombre completo / Cargo",
    contact_ph_mail: "Correo electr\u00f3nico corporativo",
    contact_ph_comp: "Empresa y Pa\u00eds de destino",
    contact_ph_msg: "Especifique requerimiento de ajo, calibres y volumen de inter\u00e9s...",
    contact_btn_send: "Enviar Mensaje a Comercio Exterior",

    // Footer
    footer_desc: "BioCuyo Exportaciones S.A.S. &mdash; M&aacute;s de 35 a&ntilde;os cultivando excelencia en el Valle de Uco, Mendoza. Exportaci&oacute;n directa de ajo fresco con trazabilidad garantizada, inocuidad internacional y cadena de fr&iacute;o ininterrumpida.",
    footer_col_nav: "Navegaci&oacute;n",
    footer_col_eco: "Ecosistema",
    footer_col_comex: "Contacto Comex",
    footer_rights: "&copy; 2026 <strong>BioCuyo Exportaciones S.A.S.</strong> &mdash; Todos los Derechos Reservados.",
    footer_tech: "Desarrollado con Arquitectura Web Est&aacute;tica Ultrarr&aacute;pida y Cero Costo de Servidor.",
    whatsapp_float: "Comex WhatsApp"
  },

  en: {
    // Top Bar
    top_group_label: "Pettina Agribusiness Group:",
    top_link_biocuyo: "<strong>BioCuyo Exportaciones S.A.S.</strong> (Global Trade)",
    top_link_agro: "Agropettina S.A.S. (Single-Origin Farmland)",

    // Header & Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_varieties: "Varieties",
    nav_logistics: "Logistics",
    nav_calendar: "Seasonality",
    nav_facilities: "Facilities &amp; Cold Chain",
    nav_quote: "Estimator",
    nav_contact: "Contact",
    drawer_agro_link: "Visit Agropettina Farmland &rarr;",
    drawer_lang_label: "Language:",
    drawer_whatsapp: "WhatsApp Comex",

    // Hero Section
    hero_eyebrow: "Uco Valley, Mendoza &bull; Argentina",
    hero_headline: "From the Uco Valley to the World's Major Ports",
    hero_lead: "We export over <strong>5,000,000 kg of premium fresh garlic per year</strong>. Full single-origin traceability, controlled atmosphere cold storage, and direct international logistics.",
    hero_btn_quote: "Request FOB / CIF Quotation",
    hero_btn_specs: "View Logistics Specs",
    stat_kg: "Kg Exported Garlic / Year",
    stat_ha: "Cultivated Hectares",
    stat_years_label: "Years of Heritage",
    stat_years_unit: " Years",
    stat_virus: "Virus-Free Certified Seeds",

    // Synergy Banner
    synergy_badge: "Vertical Agribusiness Integration",
    synergy_title: "Own Farmland (Agropettina) + Direct Export (BioCuyo)",
    synergy_desc: "Zero middlemen. Our farming division <strong>Agropettina S.A.S.</strong> cultivates 350 hectares in the premier soils of the Uco Valley, while <strong>BioCuyo Exportaciones S.A.S.</strong> manages international commerce, phytosanitary certifications, and direct container shipping to Brazil, Europe, and North America.",
    synergy_btn: "Visit Agropettina Farmland",

    // Varieties Section
    port_pre: "Export Portfolio 2026",
    port_title: "Premium Garlic Varieties for Global Markets",
    port_sub: "Cured, cleaned, electronic-graded, and palletized to international food safety and supermarket retail standards.",

    // Variety 1: Morado
    var1_badge: "Top Mercosur",
    var1_name: "Isabelle Violet Garlic",
    var1_botanic: "Allium sativum &bull; Violet Commercial Variety",
    var1_desc: "The undisputed market leader for Brazilian and Latin American imports. Features deep violet striping, outstanding post-harvest dormancy, intense pungency, and superior endurance during sea and overland reefer transit.",
    var1_cal: "Sizes 4, 5, 6 & 7",
    var1_pung: "Very High (Intense)",
    var1_life: "6 to 8 Months in Cold Storage",
    var1_dest: "Brazil / Europe",

    // Variety 2: Blanco
    var2_badge: "Grade A Export",
    var2_name: "Argentine White Garlic",
    var2_botanic: "Allium sativum &bull; Pearl White Selection",
    var2_desc: "Symmetrical bulbs with brilliant white papery tunics and tightly packed cloves. Highly requested across European fine cuisine and retail markets for its refined aromatic balance and pristine visual appeal.",
    var2_cal: "Sizes 5, 6, 7 & 8+",
    var2_pung: "Medium - Refined",
    var2_life: "5 to 7 Months in Cold Storage",
    var2_dest: "Europe / North America",

    // Variety 3: Colorado
    var3_badge: "High Endurance",
    var3_name: "Italo 2015 Red Garlic",
    var3_botanic: "Allium sativum &bull; Certified Clone",
    var3_desc: "Extremely vigorous cultivar with copper-red wrappers and large, robust cloves. High solids content, excellent kitchen yield for food processing, and extended natural room-temperature shelf life.",
    var3_cal: "Sizes 4, 5, 6 & 7",
    var3_pung: "High - Bold Flavor",
    var3_life: "7 to 9 Months in Cold Storage",
    var3_dest: "Regional / Global Trade",

    spec_lbl_cal: "Available Calibers:",
    spec_lbl_pung: "Pungency (Allicin):",
    spec_lbl_life: "Post-Harvest Life:",
    spec_lbl_dest: "Primary Destination:",
    btn_req_spec: "Request Technical Specsheet",

    // Logistics Section
    log_pre: "Cold Chain &amp; Global Trade",
    log_title: "International Logistics &amp; Reefer Container Shipping",
    log_sub: "Unbroken cold chain management from post-harvest pre-cooling to delivery at your designated port of entry.",
    log_item1_t: "Flexible Incoterms: FOB, CIF, CFR &amp; DAP",
    log_item1_d: "Ocean freight departures from Port of Buenos Aires and Port of Valparaiso (Chile), plus refrigerated direct trucking (DAP) across Brazil.",
    log_item2_t: "Full Phytosanitary Traceability (SENASA)",
    log_item2_d: "Each pallet carries georeferenced batch QR codes, guaranteeing single-origin Mendoza provenance, quarantine-pest-free certification, and smooth customs clearance.",
    log_item3_t: "Tailored Packaging Solutions",
    log_item3_d: "Heavy-duty 10 kg export cardboard cartons, 5 kg / 10 kg raschel mesh bags, or 25 kg ventilated bulk bags for distributors and repackers.",

    reefer_card_title: "40ft High Cube Reefer Specifications",
    reefer_card_sub: "International Standard for Fresh Garlic Maritime Cargo",
    reefer_temp_lbl: "Transit Temperature:",
    reefer_hum_lbl: "Relative Humidity:",
    reefer_air_lbl: "Fresh Air Exchange:",
    reefer_pal_lbl: "Pallet Capacity:",
    reefer_pal_val: "20 to 22 Standard Pallets",
    reefer_box_lbl: "Cartons per Container:",
    reefer_box_val: "2,400 to 2,600 10kg Boxes",
    reefer_load_lbl: "Approx. Net Payload:",

    // Calendar Section
    cal_pre: "Annual Supply Matrix",
    cal_title: "Harvest &amp; Export Shipping Calendar",
    cal_sub: "Plan your annual wholesale procurement with guaranteed scheduling and volume security.",
    cal_th_var: "Variety",
    cal_legend_harvest: "Harvest in Uco Valley",
    cal_legend_peak: "Peak Supply &amp; Loading Window",
    cal_legend_export: "Scheduled Cold-Storage Shipments",
    cal_scroll_hint: "Swipe horizontally to view full year &rarr;",

    // Infrastructure Section
    fac_pre: "Biotechnology &amp; Infrastructure",
    fac_title: "Facilities, Packing Plants &amp; In-House Lab",
    fac_sub: "Integrated control across the entire agricultural cycle: from sanitized seed tissue culture to final reefer loading.",
    fac1_tag: "Patagonian Biotechnology",
    fac1_name: "Rio Negro Biotech Laboratory",
    fac1_desc: "Dedicated meristem tissue culture and clonal sanitation facility located in Argentine Patagonia. Guarantees 100% virus-free, nematode-free seed foundation stock.",
    fac2_tag: "Conditioning &amp; Sizing",
    fac2_name: "Tunuyan Packing Facility",
    fac2_desc: "Mechanical brushing lines, root trimming stations, and high-precision electronic sizing sorters capable of packing multiple containers daily during peak harvest.",
    fac3_tag: "Controlled Atmosphere Storage",
    fac3_name: "San Carlos Cold Storage Complex",
    fac3_desc: "State-of-the-art industrial refrigeration rooms with forced-air circulation and precise humidity control, ensuring crisp garlic firmness for up to 9 months.",

    // Founder Quote
    founder_quote: "We are immensely proud to be the second generation continuing this agricultural legacy and the first to become direct international exporters. Our unwavering goal has always been to maintain our garlic production at the highest pinnacle of the global market.",
    founder_title: "Managing Director &bull; BioCuyo Exportaciones S.A.S.",

    // Calculator Section
    calc_pre: "Online Comex Portal",
    calc_title: "B2B Cargo Estimator &amp; Quotation",
    calc_sub: "Simulate 40ft Reefer capacity, 10kg box counts, and generate an official FOB / CIF quotation request for our export desk.",
    calc_lbl_var: "Garlic Variety",
    calc_opt_v1: "Isabelle Violet Garlic (Mercosur Favorite)",
    calc_opt_v2: "Argentine White Garlic (Europe / USA)",
    calc_opt_v3: "Italo 2015 Red Garlic",
    calc_lbl_pack: "Packaging Format",
    calc_opt_p1: "10 Kg Cardboard Boxes (Standard Export)",
    calc_opt_p2: "10 Kg Ventilated Mesh Bags",
    calc_opt_p3: "25 Kg Ventilated Sacks",
    calc_lbl_vol: "Estimated Volume (Metric Tons)",
    calc_lbl_inco: "Required Incoterm",
    calc_lbl_dest: "Destination Country / Company",
    calc_ph_dest: "e.g.: Supermarket Chain / Wholesaler (Rotterdam, Netherlands)",
    calc_out_cont: "Shipping Capacity:",
    calc_out_boxes: "Net Cartons:",
    calc_out_weight: "Estimated Gross Weight:",
    calc_btn_whatsapp: "Request Official Quotation via Comex WhatsApp",

    // Contact Section
    contact_pre: "International Trade",
    contact_title: "Connect with Our Global Export Desk",
    contact_sub: "Our multilingual team is ready to structure annual supply contracts and coordinate seamless international shipments.",
    contact_card_title: "Headquarters &amp; Operations",
    contact_lbl_loc: "Location:",
    contact_val_loc: "Uco Valley, Tunuyan &amp; San Carlos, Mendoza, Argentina.",
    contact_lbl_tel: "Phone / WhatsApp Comex:",
    contact_val_tel: "+54 9 261 555-5555 (B2B Assistance in ES / EN / PT)",
    contact_lbl_mail: "Export Department Email:",
    contact_lbl_origin: "Single-Origin Farmland:",
    contact_form_title: "Direct Inquiries",
    contact_ph_name: "Full Name / Title",
    contact_ph_mail: "Corporate Email Address",
    contact_ph_comp: "Company &amp; Destination Country",
    contact_ph_msg: "Specify garlic varieties, calibers, packaging, and expected volume...",
    contact_btn_send: "Send Inquiry to Export Desk",

    // Footer
    footer_desc: "BioCuyo Exportaciones S.A.S. &mdash; Over 35 years cultivating agricultural excellence in Mendoza's Uco Valley. Direct global export of premium fresh garlic with certified origin traceability and unbroken cold chain.",
    footer_col_nav: "Navigation",
    footer_col_eco: "Ecosystem",
    footer_col_comex: "Export Contact",
    footer_rights: "&copy; 2026 <strong>BioCuyo Exportaciones S.A.S.</strong> &mdash; All Rights Reserved.",
    footer_tech: "Built with High-Performance Jamstack Architecture & Zero Server Hosting Cost.",
    whatsapp_float: "Comex WhatsApp"
  },

  pt: {
    // Top Bar
    top_group_label: "Grupo Pettina Agroexportador:",
    top_link_biocuyo: "<strong>BioCuyo Exportaciones S.A.S.</strong> (Comex)",
    top_link_agro: "Agropettina S.A.S. (Produ&ccedil;&atilde;o na Origem)",

    // Header & Navigation
    nav_home: "In&iacute;cio",
    nav_about: "Sobre N&oacute;s",
    nav_varieties: "Variedades",
    nav_logistics: "Log&iacute;stica",
    nav_calendar: "Calend&aacute;rio",
    nav_facilities: "Instala&ccedil;&otilde;es &amp; Frio",
    nav_quote: "Cotador",
    nav_contact: "Contato",
    drawer_agro_link: "Conhecer Finca Agropettina &rarr;",
    drawer_lang_label: "Idioma:",
    drawer_whatsapp: "WhatsApp Comex",

    // Hero Section
    hero_eyebrow: "Valle de Uco, Mendoza &bull; Argentina",
    hero_headline: "Do Valle de Uco para os Principais Portos do Mundo",
    hero_lead: "Exportamos mais de <strong>5.000.000 kg de alho fresco premium por ano</strong>. Rastreabilidade total de origem, cadeia de frio rigorosa e log&iacute;stica internacional direta para o Brasil.",
    hero_btn_quote: "Cotar Alho FOB / CIF / DAP",
    hero_btn_specs: "Ver Ficha Log&iacute;stica",
    stat_kg: "Kg de Alho Exportado / Ano",
    stat_ha: "Hectares Pr&oacute;prios",
    stat_years_label: "Anos de Tradi&ccedil;&atilde;o",
    stat_years_unit: " Anos",
    stat_virus: "Semente Livre de V&iacute;rus",

    // Synergy Banner
    synergy_badge: "Integra&ccedil;&atilde;o Vertical Agroindustrial",
    synergy_title: "Produ&ccedil;&atilde;o Pr&oacute;pria (Agropettina) + Exporta&ccedil;&atilde;o Direta (BioCuyo)",
    synergy_desc: "Sem intermedi&aacute;rios. Nossa empresa irm&atilde; <strong>Agropettina S.A.S.</strong> cultiva 350 hectares nas melhores terras do Valle de Uco, e a <strong>BioCuyo Exportaciones S.A.S.</strong> realiza a expedi&ccedil;&atilde;o direta para as principais redes atacadistas e supermercados do Brasil.",
    synergy_btn: "Conhecer a Agropettina",

    // Varieties Section
    port_pre: "Oferta Export&aacute;vel 2026",
    port_title: "Variedades de Alho para Exporta&ccedil;&atilde;o",
    port_sub: "Alho selecionado, calibrado eletronicamente e embalado nos padr&otilde;es internacionais mais exigentes.",

    // Variety 1: Morado
    var1_badge: "Preferido no Brasil",
    var1_name: "Alho Roxo Isabella",
    var1_botanic: "Allium sativum &bull; Variedade Tipo Roxo",
    var1_desc: "O l&iacute;der absoluto em vendas para o mercado brasileiro. Destaca-se pela colora&ccedil;&atilde;o arroxeada intensa, excelente dorm&ecirc;ncia p&oacute;s-colheita, sabor marcante e alta resist&ecirc;ncia no transporte rodovi&aacute;rio e mar&iacute;timo.",
    var1_cal: "Calibres 4, 5, 6 e 7",
    var1_pung: "Muito Alta (Intensa)",
    var1_life: "6 a 8 Meses em Frio",
    var1_dest: "Brasil / Europa",

    // Variety 2: Blanco
    var2_badge: "Grade A Export",
    var2_name: "Alho Branco Argentino",
    var2_botanic: "Allium sativum &bull; Sele&ccedil;&atilde;o N&aacute;car",
    var2_desc: "Bulbos sim&eacute;tricos com casca branca brilhante e dentes compactos. Muito valorizado na gastronomia de alto n&iacute;vel e redes europeias pelo equil&iacute;brio arom&aacute;tico suave e presen&ccedil;a visual impec&aacute;vel.",
    var2_cal: "Calibres 5, 6, 7 e 8+",
    var2_pung: "M&eacute;dia - Refinada",
    var2_life: "5 a 7 Meses em Frio",
    var2_dest: "Europa / Am&eacute;rica do Norte",

    // Variety 3: Colorado
    var3_badge: "Alta Rusticidade",
    var3_name: "Alho Vermelho &Iacute;talo 2015",
    var3_botanic: "Allium sativum &bull; Clone Certificado",
    var3_desc: "Cultivar extremamente r&uacute;stica com casca avermelhada e dentes gra&uacute;dos. Excelente teor de s&oacute;lidos, rendimento industrial superior e longa durabilidade natural.",
    var3_cal: "Calibres 4, 5, 6 e 7",
    var3_pung: "Alta - Robusta",
    var3_life: "7 a 9 Meses em Frio",
    var3_dest: "Mercado Regional / Comex",

    spec_lbl_cal: "Calibres Dispon&iacute;veis:",
    spec_lbl_pung: "Pung&ecirc;ncia (Alicina):",
    spec_lbl_life: "Vida P&oacute;s-Colheita:",
    spec_lbl_dest: "Destino Principal:",
    btn_req_spec: "Solicitar Ficha T&eacute;cnica",

    // Logistics Section
    log_pre: "Cadeia de Frio &amp; Comex",
    log_title: "Log&iacute;stica Internacional &amp; Embarque Reefer",
    log_sub: "Controle t&eacute;rmico cont&iacute;nuo: do acondicionamento em c&acirc;mara de frio at&eacute; a entrega no porto de destino.",
    log_item1_t: "Incoterms Flex&iacute;veis: FOB, CIF, CFR e DAP",
    log_item1_d: "Despachos mar&iacute;timos via Portos de Buenos Aires e Valpara&iacute;so (Chile), al&eacute;m de carretas refrigeradas diretas (DAP) para todo o territ&oacute;rio brasileiro.",
    log_item2_t: "Rastreabilidade Fitossanit&aacute;ria Total (SENASA)",
    log_item2_d: "Cada lote possui rastreabilidade georreferenciada de origem, livre de pragas quarenten&aacute;rias e com desembara&ccedil;o aduaneiro facilitado.",
    log_item3_t: "Op&ccedil;&otilde;es de Embalagem sob Medida",
    log_item3_d: "Caixas de papel&atilde;o de 10 kg com impress&atilde;o exporta&ccedil;&atilde;o, sacos de malha de 5 kg e 10 kg, ou sacarias ventiladas de 25 kg para atacadistas e entrepostos.",

    reefer_card_title: "Especifica&ccedil;&otilde;es Cont&ecirc;iner Reefer 40ft",
    reefer_card_sub: "Padr&atilde;o Internacional para Cargas de Alho Fresco",
    reefer_temp_lbl: "Temperatura em Tr&acirc;nsito:",
    reefer_hum_lbl: "Umidade Relativa:",
    reefer_air_lbl: "Renova&ccedil;&atilde;o de Ar:",
    reefer_pal_lbl: "Capacidade de Paletes:",
    reefer_pal_val: "20 a 22 Paletes Padr&atilde;o",
    reefer_box_lbl: "Caixas por Cont&ecirc;iner:",
    reefer_box_val: "2.400 a 2.600 Caixas de 10kg",
    reefer_load_lbl: "Carga L&iacute;quida Aprox.:",

    // Calendar Section
    cal_pre: "Disponibilidade Anual",
    cal_title: "Calend&aacute;rio de Colheita &amp; Exporta&ccedil;&atilde;o",
    cal_sub: "Planeje suas compras com previsibilidade garantida e contrato de safra.",
    cal_th_var: "Variedade",
    cal_legend_harvest: "Colheita no Valle de Uco",
    cal_legend_peak: "Pico de Safra &amp; Embarque",
    cal_legend_export: "Despacho Programado em Frio",
    cal_scroll_hint: "Deslize horizontalmente para ver o ano completo &rarr;",

    // Infrastructure Section
    fac_pre: "Suporte Tecnol&oacute;gico",
    fac_title: "Infraestrutura, Plantas &amp; Laborat&oacute;rio Pr&oacute;prio",
    fac_sub: "Controle integral do ciclo produtivo: da biotecnologia da semente ao carregamento do cont&ecirc;iner.",
    fac1_tag: "Biotecnologia na Origem",
    fac1_name: "Laborat&oacute;rio em R&iacute;o Negro",
    fac1_desc: "Unidade biotecnol&oacute;gica pr&oacute;pria na Patag&ocirc;nia argentina, dedicada &agrave; micropropaga&ccedil;&atilde;o meristem&aacute;tica e sele&ccedil;&atilde;o clonal. Garante 100% de sementes livres de v&iacute;rus e nemat&oacute;ides.",
    fac2_tag: "Processamento &amp; Sele&ccedil;&atilde;o",
    fac2_name: "Packing House Tunuy&aacute;n",
    fac2_desc: "Linhas mec&acirc;nicas de escova&ccedil;&atilde;o, corte de ra&iacute;zes e calibragem eletr&ocirc;nica de alta capacidade, preparando cont&ecirc;ineres di&aacute;rios em safra r&eacute;corde.",
    fac3_tag: "C&acirc;maras Frigor&iacute;ficas San Carlos",
    fac3_name: "Complexo Frigor&iacute;fico San Carlos",
    fac3_desc: "C&acirc;maras frias de &uacute;ltima gera&ccedil;&atilde;o com controle preciso de umidade e ar for&ccedil;ado, mantendo a firmeza e croc&acirc;ncia do alho durante todo o per&iacute;odo de entre-safra.",

    // Founder Quote
    founder_quote: "Estamos muito orgulhosos de poder ser a segunda gera&ccedil;&atilde;o que continua com este legado e a primeira a se tornar exportadora direta. Nosso objetivo sempre foi manter a qualidade da nossa produ&ccedil;&atilde;o de alho no topo do mercado mundial.",
    founder_title: "Diretor Geral &bull; BioCuyo Exportaciones S.A.S.",

    // Calculator Section
    calc_pre: "Portal Comex Online",
    calc_title: "Simulador de Cargas e Cota&ccedil;&atilde;o B2B",
    calc_sub: "Estime a capacidade em Cont&ecirc;ineres Reefer de 40ft, caixas de 10kg e solicite cota&ccedil;&atilde;o formal CIF / FOB / DAP para nossa equipe de Comex.",
    calc_lbl_var: "Variedade de Alho",
    calc_opt_v1: "Alho Roxo Isabella (Preferido no Brasil)",
    calc_opt_v2: "Alho Branco Argentino (Europa / EUA)",
    calc_opt_v3: "Alho Vermelho \u00cdtalo 2015",
    calc_lbl_pack: "Formato de Embalagem",
    calc_opt_p1: "Caixas de Papel\u00e3o 10 Kg (Exporta\u00e7\u00e3o Padr\u00e3o)",
    calc_opt_p2: "Malhas Ventiladas 10 Kg",
    calc_opt_p3: "Sacarias Ventiladas 25 Kg",
    calc_lbl_vol: "Volume Estimado (Toneladas)",
    calc_lbl_inco: "Incoterm Solicitado",
    calc_lbl_dest: "Pa\u00eds / Empresa Importadora",
    calc_ph_dest: "Ex: Rede de Supermercados / Atacadista (S\u00e3o Paulo, Brasil)",
    calc_out_cont: "Capacidade de Embarque:",
    calc_out_boxes: "Unidades L\u00edquidas:",
    calc_out_weight: "Peso Bruto Estimado:",
    calc_btn_whatsapp: "Solicitar Cota&ccedil;&atilde;o Formal via WhatsApp Comex",

    // Contact Section
    contact_pre: "Com&eacute;rcio Exterior",
    contact_title: "Fale com Nossa Equipe de Exporta&ccedil;&atilde;o",
    contact_sub: "Estamos &agrave; sua disposi&ccedil;&atilde;o para coordenar contratos de fornecimento anual e despachos internacionais.",
    contact_card_title: "Sede Central &amp; Opera&ccedil;&otilde;es",
    contact_lbl_loc: "Localiza&ccedil;&atilde;o:",
    contact_val_loc: "Valle de Uco, Tunuy&aacute;n &amp; San Carlos, Mendoza, Argentina.",
    contact_lbl_tel: "Telefone / WhatsApp Comex:",
    contact_val_tel: "+54 9 261 555-5555 (Atendimento B2B em ES / EN / PT)",
    contact_lbl_mail: "Email Com&eacute;rcio Exterior:",
    contact_lbl_origin: "Produ&ccedil;&atilde;o na Origem:",
    contact_form_title: "Mensagem Direta",
    contact_ph_name: "Nome completo / Cargo",
    contact_ph_mail: "E-mail corporativo",
    contact_ph_comp: "Empresa e Pa\u00eds de destino",
    contact_ph_msg: "Especifique variedade de alho, calibres, embalagem e volume desejado...",
    contact_btn_send: "Enviar Mensagem ao Com\u00e9rcio Exterior",

    // Footer
    footer_desc: "BioCuyo Exportaciones S.A.S. &mdash; Mais de 35 anos cultivando excel&ecirc;ncia no Valle de Uco, Mendoza. Exporta&ccedil;&atilde;o direta de alho fresco com rastreabilidade garantida, seguran&ccedil;a alimentar e cadeia de frio ininterrupta.",
    footer_col_nav: "Navega&ccedil;&atilde;o",
    footer_col_eco: "Ecossistema",
    footer_col_comex: "Contato Comex",
    footer_rights: "&copy; 2026 <strong>BioCuyo Exportaciones S.A.S.</strong> &mdash; Todos os Direitos Reservados.",
    footer_tech: "Desenvolvido com Arquitetura Web Est&aacute;tica Ultrarr&aacute;pida e Custo Zero de Servidor.",
    whatsapp_float: "WhatsApp Comex"
  }
};

let currentLang = 'es';

function initFullLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');
  const savedLang = localStorage.getItem('biocuyo_lang') || 'es';
  applyFullLanguage(savedLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = e.target.getAttribute('data-lang');
      if (selected && FULL_TRANSLATIONS[selected]) {
        applyFullLanguage(selected);
        localStorage.setItem('biocuyo_lang', selected);
      }
    });
  });
}

function applyFullLanguage(lang) {
  currentLang = lang;
  const dict = FULL_TRANSLATIONS[lang] || FULL_TRANSLATIONS.es;
  document.documentElement.setAttribute('lang', lang);

  // 1. Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // 2. Translate all [data-i18n] text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // 3. Translate all [data-i18n-ph] input placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // 4. Update the WhatsApp calculator link for the selected language
  if (typeof updateCalculatorOutput === 'function') {
    updateCalculatorOutput();
  }
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

  [varietySelect, packingSelect, volumeInput, incotermSelect, destinationInput].forEach(el => {
    el?.addEventListener('input', updateCalculatorOutput);
    el?.addEventListener('change', updateCalculatorOutput);
  });

  updateCalculatorOutput();
}

function updateCalculatorOutput() {
  const volumeInput = document.getElementById('calcVolume');
  const packingSelect = document.getElementById('calcPackaging');
  const varietySelect = document.getElementById('calcVariety');
  const incotermSelect = document.getElementById('calcIncoterm');
  const destinationInput = document.getElementById('calcDestination');

  const metricContainers = document.getElementById('outputContainers');
  const metricBoxes = document.getElementById('outputBoxes');
  const metricWeight = document.getElementById('outputGrossWeight');
  const quoteBtn = document.getElementById('calcQuoteBtn');

  const tons = parseFloat(volumeInput?.value) || 25;
  const packType = packingSelect?.value || 'box10';

  const reeferCapacityTons = 25;
  const containersCount = Math.max(1, Math.round((tons / reeferCapacityTons) * 10) / 10);

  let boxesPerTon = 100;
  if (packType === 'mesh10') boxesPerTon = 100;
  if (packType === 'bag25') boxesPerTon = 40;

  const totalBoxes = Math.round(tons * boxesPerTon);
  const grossWeightTons = Math.round(tons * 1.07 * 10) / 10;

  // Localized units
  const boxUnit = currentLang === 'en' ? 'Cartons' : (currentLang === 'pt' ? 'Caixas' : 'Cajas');
  const tonUnit = currentLang === 'en' ? 'Gross Tons' : (currentLang === 'pt' ? 'Toneladas Brutas' : 'Toneladas Brutas');

  if (metricContainers) metricContainers.textContent = `${containersCount} FCL (40ft Reefer)`;
  if (metricBoxes) metricBoxes.textContent = `${totalBoxes.toLocaleString()} ${boxUnit}`;
  if (metricWeight) metricWeight.textContent = `${grossWeightTons} ${tonUnit}`;

  if (quoteBtn) {
    const variety = varietySelect?.options[varietySelect.selectedIndex]?.text || 'Ajo Morado';
    const incoterm = incotermSelect?.value || 'FOB';
    const destination = destinationInput?.value || (currentLang === 'pt' ? 'Brasil' : 'International');

    let msg = '';
    if (currentLang === 'en') {
      msg = `Hello BioCuyo Export Desk, I request an official quotation:\n• Variety: ${variety}\n• Volume: ${tons} Metric Tons (${containersCount} x 40ft Reefer Containers)\n• Packaging: ${packingSelect?.options[packingSelect.selectedIndex]?.text}\n• Incoterm: ${incoterm}\n• Destination: ${destination}`;
    } else if (currentLang === 'pt') {
      msg = `Ol\u00e1 BioCuyo Comex, solicito cota\u00e7\u00e3o formal:\n• Variedade: ${variety}\n• Volume: ${tons} Toneladas (${containersCount} Cont\u00eaineres 40ft Reefer)\n• Embalagem: ${packingSelect?.options[packingSelect.selectedIndex]?.text}\n• Incoterm: ${incoterm}\n• Destino: ${destination}`;
    } else {
      msg = `Hola BioCuyo Exportaciones Comex, requiero cotizaci\u00f3n formal:\n• Variedad: ${variety}\n• Volumen: ${tons} Toneladas (${containersCount} Contenedores 40ft Reefer)\n• Empaque: ${packingSelect?.options[packingSelect.selectedIndex]?.text}\n• Incoterm: ${incoterm}\n• Destino: ${destination}`;
    }

    quoteBtn.href = `https://wa.me/5492615555555?text=${encodeURIComponent(msg)}`;
  }
}

/* ==========================================================================
   5. STATS COUNTER ANIMATION
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.counter[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const prefix = el.getAttribute('data-prefix') || '';
        let start = 0;
        const duration = 1800;
        const stepTime = 25;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            el.textContent = `${prefix}${target.toLocaleString()}`;
            clearInterval(timer);
          } else {
            const displayVal = Math.floor(start);
            el.textContent = `${prefix}${displayVal.toLocaleString()}`;
          }
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(c => observer.observe(c));
}
