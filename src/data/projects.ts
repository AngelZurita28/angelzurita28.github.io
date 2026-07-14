export type LocalizedText = {
  es: string;
  en: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: LocalizedText;
  summary: LocalizedText;
  challenge: LocalizedText;
  result: LocalizedText;
  role: LocalizedText;
  status: LocalizedText;
  technologies: string[];
  visual: 'orbit' | 'map' | 'plots' | 'shelves' | 'fleet' | 'lanes' | 'network';
  size: 'wide' | 'tall' | 'standard';
  tone: 'forest' | 'wood' | 'paper';
};

export const projects: Project[] = [
  {
    slug: 'data-orbit-nasa',
    number: '01',
    title: 'Data Orbit NASA',
    category: { es: 'IA · Divulgación científica', en: 'AI · Scientific outreach' },
    summary: {
      es: 'Construí un chatbot para explorar artículos científicos mediante lenguaje natural, con contexto recuperado y referencias verificables.',
      en: 'I built a chatbot for exploring scientific articles through natural language, with retrieved context and verifiable references.',
    },
    challenge: {
      es: 'Acercar investigación científica compleja a más personas sin perder precisión ni trazabilidad.',
      en: 'Make complex scientific research easier to explore without losing precision or traceability.',
    },
    result: {
      es: 'Una arquitectura RAG con base vectorial basada en grafos, búsqueda semántica y respuestas conectadas a las fuentes originales.',
      en: 'A RAG architecture with a graph-based vector database, semantic search, and answers connected to original sources.',
    },
    role: { es: 'AI engineering · Producto', en: 'AI engineering · Product' },
    status: { es: 'NASA Hackathon 2025', en: 'NASA Hackathon 2025' },
    technologies: ['RAG', 'Vector graph DB', 'LLMs', 'Semantic search'],
    visual: 'orbit',
    size: 'tall',
    tone: 'forest',
  },
  {
    slug: 'xarhani',
    number: '02',
    title: 'Xarhani',
    category: { es: 'Impacto social · Mobile', en: 'Social impact · Mobile' },
    summary: {
      es: 'Desarrollé una aplicación móvil que conecta productores rurales y locales con turistas y personas cercanas mediante un mapa interactivo.',
      en: 'I developed a mobile app connecting rural and local producers with tourists and nearby people through an interactive map.',
    },
    challenge: {
      es: 'Dar visibilidad y acceso a mercado a productores que suelen quedar fuera de canales comerciales tradicionales.',
      en: 'Give visibility and market access to producers often missing from traditional commercial channels.',
    },
    result: {
      es: 'Una experiencia accesible de descubrimiento local con mapa, recomendaciones y perfiles de productores y artesanos.',
      en: 'An accessible local discovery experience with maps, recommendations, and producer and artisan profiles.',
    },
    role: { es: 'Producto móvil · Accesibilidad', en: 'Mobile product · Accessibility' },
    status: { es: 'Proyecto de impacto social', en: 'Social-impact project' },
    technologies: ['Flutter', 'Firebase', 'Google Maps API'],
    visual: 'map',
    size: 'standard',
    tone: 'wood',
  },
  {
    slug: 'parcel-core',
    number: '03',
    title: 'ParcelCore',
    category: { es: 'PropTech · Modernización de ERP', en: 'PropTech · ERP modernization' },
    summary: {
      es: 'Participé en la modernización de un ERP de escritorio hacia una plataforma web modular para contratos, cobranza, finanzas y operación.',
      en: 'I contributed to modernizing a desktop ERP into a modular web platform for contracts, collections, finance, and operations.',
    },
    challenge: {
      es: 'Trasladar años de reglas de negocio sin interrumpir los flujos que sostienen ventas, caja y administración.',
      en: 'Move years of business rules without disrupting the workflows supporting sales, cash operations, and administration.',
    },
    result: {
      es: 'Una API modular y una SPA con permisos granulares, documentos e integraciones con RFID y biometría.',
      en: 'A modular API and SPA with granular permissions, documents, RFID, and biometric integrations.',
    },
    role: { es: 'Full-stack · Arquitectura', en: 'Full-stack · Architecture' },
    status: { es: 'Modernización activa', en: 'Active modernization' },
    technologies: ['.NET 10', 'Vue 3', 'TypeScript', 'PostgreSQL', 'Docker'],
    visual: 'plots',
    size: 'wide',
    tone: 'paper',
  },
  {
    slug: 'research-match',
    number: '04',
    title: 'Research Match',
    category: { es: 'Investigación regional · EdTech', en: 'Regional research · EdTech' },
    summary: {
      es: 'Desarrollé, en colaboración, una plataforma multirol para proyectos científicos, postulaciones y asignación de plazas.',
      en: 'I co-developed a multi-role platform for scientific projects, applications, and placement.',
    },
    challenge: {
      es: 'Convertir preferencias, mérito, requisitos y cupos en una asignación clara y defendible.',
      en: 'Turn preferences, merit, requirements, and capacity into a clear and defensible placement process.',
    },
    result: {
      es: 'Un flujo trazable que combina reglas automáticas, revisión humana y seguimiento institucional.',
      en: 'A traceable workflow combining automated rules, human review, and institutional follow-up.',
    },
    role: { es: 'Full-stack · Colaborativo', en: 'Full-stack · Collaborative' },
    status: { es: 'Validación avanzada', en: 'Advanced validation' },
    technologies: ['PHP', 'MariaDB', 'JavaScript', 'PDF/SMTP'],
    visual: 'network',
    size: 'standard',
    tone: 'forest',
  },
  {
    slug: 'fleet-ledger',
    number: '05',
    title: 'Fleet Ledger',
    category: { es: 'FleetTech · Analítica', en: 'FleetTech · Analytics' },
    summary: {
      es: 'Diseñé y desarrollé una herramienta para registrar combustible, analizar costos y rendimiento, y conectar compras con inventario.',
      en: 'I designed and built a tool for fuel capture, cost and efficiency analytics, purchasing, and inventory.',
    },
    challenge: {
      es: 'Convertir captura de campo sencilla en información útil para operación y gerencia.',
      en: 'Turn simple field capture into useful information for operations and management.',
    },
    result: {
      es: 'Un producto mobile-first con analítica por unidad, chofer y estación, más inventario por ubicación.',
      en: 'A mobile-first product with analytics by vehicle, driver, and station, plus location-based inventory.',
    },
    role: { es: 'Diseño y desarrollo full-stack', en: 'Full-stack design and development' },
    status: { es: 'MVP interno funcional', en: 'Functional internal MVP' },
    technologies: ['PHP 8', 'MariaDB', 'JavaScript', 'Chart.js'],
    visual: 'fleet',
    size: 'standard',
    tone: 'paper',
  },
  {
    slug: 'race-grid',
    number: '06',
    title: 'RaceGrid',
    category: { es: 'SportsTech · Producto', en: 'SportsTech · Product' },
    summary: {
      es: 'Construí un MVP para administrar inscripciones, checkout, dorsales, pruebas de ruta o pista, tiempos y resultados.',
      en: 'I built an MVP for registration, checkout, bibs, track or road events, timing, and results.',
    },
    challenge: {
      es: 'Concentrar la operación completa de una carrera sin infraestructura pesada ni pérdida de precisión.',
      en: 'Bring an entire race operation together without heavy infrastructure or loss of precision.',
    },
    result: {
      es: 'Un sistema nativo con checkout retomable, hits, carriles y resultados a precisión de milisegundos.',
      en: 'A native system with resumable checkout, heats, lanes, and millisecond-precision results.',
    },
    role: { es: 'Producto · Arquitectura full-stack', en: 'Product · Full-stack architecture' },
    status: { es: 'Sandbox preproducción', en: 'Pre-production sandbox' },
    technologies: ['PHP 8.3', 'MariaDB', 'Vanilla JS', 'JWT'],
    visual: 'lanes',
    size: 'tall',
    tone: 'wood',
  },
  {
    slug: 'commerce-atelier',
    number: '07',
    title: 'Commerce Atelier',
    category: { es: 'E-commerce · Operaciones', en: 'E-commerce · Operations' },
    summary: {
      es: 'Participé en una plataforma omnicanal que conecta catálogo, ventas, inventario multi-almacén, pagos, logística y posventa.',
      en: 'I contributed to an omnichannel platform connecting catalog, sales, multi-warehouse inventory, payments, logistics, and after-sales support.',
    },
    challenge: {
      es: 'Unificar clientes y operación interna en flujos con stock reservado, pagos agrupados, ventas especiales y despacho.',
      en: 'Unify customer and internal operations across reserved stock, grouped payments, special sales, and dispatch.',
    },
    result: {
      es: 'Una plataforma comercial con eventos en vivo, trazabilidad de inventario e integraciones logísticas.',
      en: 'A commercial platform with live events, inventory traceability, and logistics integrations.',
    },
    role: { es: 'Desarrollo full-stack · Colaborativo', en: 'Full-stack development · Collaborative' },
    status: { es: 'Producto en evolución', en: 'Evolving product' },
    technologies: ['PHP', 'MariaDB', 'JavaScript', 'Logistics APIs'],
    visual: 'shelves',
    size: 'wide',
    tone: 'forest',
  },
];
