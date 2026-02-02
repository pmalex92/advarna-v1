const navLinks = [
  { name: 'Home', href: '#hero' },
  {
    name: 'Products',
    href: '#products',
    dropdown: [
      { name: 'OBSESSIO X1', href: '#products' },
      { name: 'OBSESSIO X2', href: '#products' },
      { name: 'DISTANCIO', href: '#products' },
      { name: 'HORIZIO XY', href: '#products' },
      { name: 'EXTENSO', href: '#products' },
      { name: 'Module THx', href: '#products' },
    ],
  },
  { name: 'About', href: '#about' },
  { name: 'Partnerships', href: '#stats' },
  { name: 'Contact', href: '#contact' },
];

const products = [
  {
    id: 'obsessio-x1',
    name: 'OBSESSIO X1',
    subtitle: 'Potentiometric Displacement',
    category: 'Displacement Range',
    description:
      'OBSESSIO X1 is a connected sensor designed to monitor the evolution of cracks, expansion joints, and other phenomena related to structural displacements. It interfaces with all potentiometric displacement sensors available on the market.',
    image: './images/product-obsessio-x1.jpg',
    features: [
      'Compatible with wide variety of potentiometric displacement sensors',
      'Battery autonomy: 1 to 3 years (depending on acquisition frequency)',
      'Remote temperature sensor integrated',
      'Waterproof IP66 compliant',
      'Data redundancy with integrated internal memory',
      'Local configuration via smartphone (Bluetooth/NFC)',
    ],
    specs: [
      { label: 'Dimensions', value: '98 x 64 x 35 mm' },
      { label: 'Weight', value: '0.2 kg' },
      { label: 'Protection', value: 'IP66' },
      { label: 'Temperature Range', value: '-20°C to +60°C' },
      { label: 'Power', value: '3.6V Battery or 4.8-32V DC' },
      { label: 'Precision', value: '≤ 20 µm' },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
  },
  {
    id: 'obsessio-x2',
    name: 'OBSESSIO X2',
    subtitle: 'LVDT Displacement',
    category: 'Displacement Range',
    description:
      'OBSESSIO X2 is a connected sensor designed to monitor crack evolution and structural displacements. It interfaces with LVDT (Linear Variable Differential Transformer) sensors known for their high precision, low temperature disturbance, and long-term reliability.',
    image: './images/product-obsessio-x2.jpg',
    features: [
      'High precision LVDT sensor interface',
      'Low temperature disturbance',
      'Great long-term reliability',
      'Battery autonomy: 1 to 3 years',
      'Remote temperature sensor',
      'Waterproof IP66 compliant',
    ],
    specs: [
      { label: 'Dimensions', value: '98 x 64 x 35 mm' },
      { label: 'Weight', value: '0.2 kg' },
      { label: 'Protection', value: 'IP66' },
      { label: 'Temperature Range', value: '-20°C to +60°C' },
      { label: 'Resolution', value: '± 0.01 µm' },
      { label: 'Precision', value: '≤ 5 µm' },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
  },
  {
    id: 'pack-fissure',
    name: 'PACK FISSURE AUTONOME',
    subtitle: 'Complete Crack Monitoring Kit',
    category: 'Complete Solutions',
    description:
      'The Autonomous Crack Pack is the ideal entry-level solution to ensure reliable and continuous crack monitoring on your structures. The pack includes OBSESSIO X1 module, radio card, potentiometric sensor, temperature probe, and 1-year subscription.',
    image: './images/product-pack-fissure.jpg',
    features: [
      'Turnkey solution for crack monitoring',
      'Includes all necessary components',
      '1-year SIGFOX or LoRaWAN subscription included',
      'Complete metrological verification certificate',
      'Battery autonomy: 1 to 3 years',
      'Easy installation and configuration',
    ],
    specs: [
      { label: 'Sensor Type', value: 'MIRAN KTR2' },
      { label: 'Stroke', value: '25mm or 50mm' },
      { label: 'Precision', value: '≤ 50 µm' },
      { label: 'Linearity', value: '± 0.1% FS' },
      { label: 'Subscription', value: '1 year included' },
      { label: 'Warranty', value: '2 years' },
    ],
    technologies: ['SIGFOX', 'LoRaWAN'],
  },
  {
    id: 'distancio',
    name: 'DISTANCIO',
    subtitle: 'Laser Distance & Inclinometer',
    category: 'Displacement Range',
    description:
      'DISTANCIO is a 2-in-1 sensor that enables precise non-contact measurements over a range of up to 150 meters. It features a high-performance laser and a dual-axis MEMS inclinometer for complementary tilt measurement.',
    image: './images/product-distancio.jpg',
    features: [
      '2-in-1 sensor (Laser distance + MEMS inclinometer)',
      'Non-contact measurement up to 150 meters',
      'High precision laser with ±1mm accuracy',
      'Battery autonomy: 1 to 3 years',
      'Waterproof IP66 compliant',
      'Data redundancy with internal memory',
    ],
    specs: [
      { label: 'Dimensions', value: '170 x 111 x 61 mm' },
      { label: 'Weight', value: '0.65 kg' },
      { label: 'Laser Range', value: '0.05 to 150m' },
      { label: 'Precision', value: '± 1.0 mm' },
      { label: 'Inclinometer', value: '± 90° range' },
      { label: 'Resolution', value: '0.1 mm' },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
  },
  {
    id: 'horizio',
    name: 'HORIZIO XY',
    subtitle: 'Capacitive Inclinometer 2-Axis',
    category: 'Inclinometry Range',
    description:
      'HORIZIO measures inclination phenomena of structures (facades, bridge piers...), slope sliding, railway uplift and settlement. It features high-precision capacitive sensors with 0.001° resolution and very low temperature sensitivity.',
    image: './images/product-horizio.jpg',
    features: [
      'High precision measurement with 0.001° resolution',
      'Very low temperature variation',
      'No hysteresis on output signal',
      'Angle independent of local gravitational acceleration',
      'Insensitive to magnetic field interference',
      'Waterproof IP66 compliant',
    ],
    specs: [
      { label: 'Dimensions', value: '98 x 60 x 45 mm' },
      { label: 'Weight', value: '0.4 kg' },
      { label: 'Range', value: '± 10°' },
      { label: 'Resolution', value: '0.001°' },
      { label: 'Linearity', value: '< 0.1% FS' },
      { label: 'Temp. Drift', value: '< ±0.001°/K' },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
  },
  {
    id: 'extenso',
    name: 'EXTENSO X1 / X3',
    subtitle: 'Strain Gauge Module',
    category: 'Extensometry Range',
    description:
      'EXTENSO measures mechanical deformations of a material or structure using strain gauges. It can interface with cold-bonded gauges, hot-welded spot gauges, and different wiring types (quarter bridge, half bridge, full bridge).',
    image: './images/product-extenso.jpg',
    features: [
      'High precision for material deformations',
      'High sensitivity for micro-deformation measurement',
      'Compatible with wide range of gauge types',
      'Adjustable gauge factor',
      'Battery autonomy: 1 to 3 years',
      'Waterproof IP66 compliant',
    ],
    specs: [
      { label: 'Dimensions', value: '98 x 64 x 35 mm' },
      { label: 'Weight', value: '0.2 kg' },
      { label: 'Bridge Types', value: '1/4, 1/2, Full' },
      { label: 'Resolution', value: '0.001°' },
      { label: 'Temperature', value: '-40°C to +85°C' },
      { label: 'Protection', value: 'IP66' },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
  },
  {
    id: 'thx',
    name: 'Module THx',
    subtitle: 'Temperature & Humidity',
    category: 'Environment Range',
    description:
      'The THx module is a connected sensor designed to continuously monitor temperature and humidity conditions. It interfaces with two probe ranges: standard TH50 and premium HMP110 from VAISALA®, offering excellent metrological performance.',
    image: './images/product-thx.jpg',
    features: [
      'Two ranges available according to needs',
      'Premium VAISALA® HMP110 option',
      'Battery autonomy: 1 to 3 years',
      'Waterproof IP66 compliant',
      'Data redundancy with internal memory',
      'Local configuration via smartphone',
    ],
    specs: [
      { label: 'Dimensions', value: '98 x 64 x 35 mm' },
      { label: 'Weight', value: '0.2 kg' },
      { label: 'TH50 Precision', value: '± 3% RH, ± 0.1°C' },
      { label: 'HMP110 Precision', value: '± 1.5% RH, ± 0.2°C' },
      { label: 'Temperature', value: '-20°C to +60°C' },
      { label: 'Protection', value: 'IP66' },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
  },
];

const advantages = [
  {
    icon: 'trending-down',
    title: 'Cost Reduction',
    description:
      'Optimize maintenance operations and reduce intervention costs through predictive monitoring and early detection of structural issues.',
    stat: '-40%',
    statLabel: 'Maintenance costs',
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: 'clock',
    title: 'Lifespan Extension',
    description:
      'Extend the service life of your structures by continuously monitoring their health and addressing issues before they become critical.',
    stat: '+25%',
    statLabel: 'Structure lifespan',
    color: 'from-[#54b9ff] to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: 'shield',
    title: 'Safety Improvement',
    description:
      'Enhance the safety of users and operators by detecting anomalies early and preventing catastrophic failures.',
    stat: '99%',
    statLabel: 'Uptime reliability',
    color: 'from-[#ff8c42] to-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: 'file-check',
    title: 'Regulatory Compliance',
    description:
      'Meet regulatory requirements for structural monitoring with certified, traceable measurement systems and automated reporting.',
    stat: '100%',
    statLabel: 'Compliance rate',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
  },
];

const stats = [
  { icon: 'handshake', value: 5, suffix: '+', label: 'New partnerships in progress', color: 'from-[#54b9ff] to-blue-500' },
  { icon: 'cpu', value: 100, suffix: '+', label: 'Modules installed in France', color: 'from-[#ff8c42] to-orange-500' },
  { icon: 'building-2', value: 20, suffix: '+', label: 'Buildings instrumented', color: 'from-green-400 to-green-500' },
  { icon: 'users', value: 15, suffix: '+', label: 'Satisfied clients', color: 'from-purple-400 to-purple-500' },
];

const contactInfo = [
  { icon: 'mail', label: 'Email', value: 'contact@advarna.fr', href: 'mailto:contact@advarna.fr' },
  { icon: 'phone', label: 'Phone', value: '+33 (0)1 23 45 67 89', href: 'tel:+33123456789' },
  { icon: 'map-pin', label: 'Address', value: 'France', href: '#' },
];

const footerLinks = {
  products: [
    { name: 'OBSESSIO X1', href: '#products' },
    { name: 'OBSESSIO X2', href: '#products' },
    { name: 'DISTANCIO', href: '#products' },
    { name: 'HORIZIO XY', href: '#products' },
    { name: 'EXTENSO', href: '#products' },
    { name: 'Module THx', href: '#products' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Partnerships', href: '#stats' },
    { name: 'Contact', href: '#contact' },
  ],
  resources: [
    { name: 'Technical Documentation', href: '#' },
    { name: 'Software', href: '#' },
    { name: 'User Manuals', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  legal: [
    { name: 'Legal Notice', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

const particleContainer = document.getElementById('hero-particles');
if (particleContainer) {
  for (let i = 0; i < 20; i += 1) {
    const particle = document.createElement('div');
    particle.className = 'absolute w-1 h-1 bg-[#54b9ff] rounded-full animate-pulse';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    particle.style.opacity = `${0.3 + Math.random() * 0.4}`;
    particleContainer.appendChild(particle);
  }
}

function handleScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const scrolled = window.scrollY > 50;
  navbar.classList.toggle('bg-white/95', scrolled);
  navbar.classList.toggle('backdrop-blur-md', scrolled);
  navbar.classList.toggle('shadow-lg', scrolled);
  navbar.classList.toggle('py-3', scrolled);
  navbar.classList.toggle('bg-transparent', !scrolled);
  navbar.classList.toggle('py-5', !scrolled);

  document.querySelectorAll('[data-nav-text]').forEach((el) => {
    el.classList.toggle('text-[#2c3e50]', scrolled);
    el.classList.toggle('text-white', !scrolled);
  });
  document.querySelectorAll('[data-nav-subtext]').forEach((el) => {
    el.classList.toggle('text-[#54b9ff]', scrolled);
    el.classList.toggle('text-white/80', !scrolled);
  });
  document.querySelectorAll('[data-lang-button]').forEach((el) => {
    el.classList.toggle('bg-[#54b9ff]', scrolled);
    el.classList.toggle('text-white', scrolled);
    el.classList.toggle('text-[#2c3e50]', scrolled);
    el.classList.toggle('bg-white/20', !scrolled);
    el.classList.toggle('text-white/70', !scrolled);
  });
}

function renderNav() {
  const desktopNav = document.getElementById('desktop-nav');
  const mobileNav = document.getElementById('mobile-nav');
  if (!desktopNav || !mobileNav) return;

  navLinks.forEach((link) => {
    const desktopItem = document.createElement('div');
    desktopItem.className = 'relative';

    if (link.dropdown) {
      desktopItem.innerHTML = `
        <div class="relative" data-dropdown>
          <button class="flex items-center gap-1 text-sm font-medium transition-colors duration-300 text-white hover:text-[#54b9ff]">
            ${link.name}
            <span data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-300"></span>
          </button>
          <div class="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-scale-in hidden" data-dropdown-menu>
            ${link.dropdown
              .map(
                (item) => `
                <a href="${item.href}" class="block px-4 py-2 text-sm text-[#2c3e50] hover:bg-[#e8f4fc] hover:text-[#54b9ff] transition-colors duration-200" data-scroll>
                  ${item.name}
                </a>
              `
              )
              .join('')}
          </div>
        </div>
      `;
    } else {
      desktopItem.innerHTML = `
        <a href="${link.href}" class="text-sm font-medium transition-colors duration-300 text-white hover:text-[#54b9ff]" data-scroll>
          ${link.name}
        </a>
      `;
    }

    desktopNav.appendChild(desktopItem);

    const mobileItem = document.createElement('div');
    if (link.dropdown) {
      mobileItem.innerHTML = `
        <button class="flex items-center justify-between w-full text-sm font-medium text-white" data-mobile-dropdown>
          ${link.name}
          <span data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-300"></span>
        </button>
        <div class="mt-2 ml-4 flex flex-col gap-2 hidden" data-mobile-menu>
          ${link.dropdown
            .map(
              (item) => `
              <a href="${item.href}" class="text-sm text-white/70 hover:text-[#54b9ff]" data-scroll>
                ${item.name}
              </a>
            `
            )
            .join('')}
        </div>
      `;
    } else {
      mobileItem.innerHTML = `
        <a href="${link.href}" class="text-sm font-medium text-white hover:text-[#54b9ff]" data-scroll>
          ${link.name}
        </a>
      `;
    }
    mobileNav.appendChild(mobileItem);
  });
}

function renderProducts() {
  const productsList = document.getElementById('products-list');
  if (!productsList) return;

  products.forEach((product) => {
    const item = document.createElement('div');
    item.className =
      'bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-lg';
    item.innerHTML = `
      <div class="p-6 cursor-pointer transition-colors duration-300 hover:bg-gray-50" data-product-header>
        <div class="flex flex-col lg:flex-row lg:items-center gap-6">
          <div class="w-full lg:w-48 h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              <span class="px-3 py-1 bg-[#e8f4fc] text-[#54b9ff] text-xs font-semibold rounded-full">
                ${product.category}
              </span>
              <div class="flex gap-2">
                ${product.technologies
                  .map(
                    (tech) => `
                      <span class="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                        <span data-lucide="wifi" class="w-3 h-3"></span>
                        ${tech}
                      </span>
                    `
                  )
                  .join('')}
              </div>
            </div>
            <h3 class="text-xl font-bold text-[#2c3e50] mb-1">${product.name}</h3>
            <p class="text-[#54b9ff] font-medium text-sm mb-2">${product.subtitle}</p>
            <p class="text-gray-600 text-sm line-clamp-2">${product.description}</p>
          </div>
          <div class="flex items-center gap-3">
            <a
              href="./product.html?id=${product.id}"
              class="flex items-center gap-2 px-4 py-2 bg-[#2c3e50] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-[#1a252f]"
            >
              View Page
              <span data-lucide="external-link" class="w-4 h-4"></span>
            </a>
            <button
              class="flex items-center gap-2 px-4 py-2 bg-[#54b9ff] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-[#3aa8f5]"
              data-quick-view="${product.id}"
            >
              Quick View
              <span data-lucide="arrow-right" class="w-4 h-4"></span>
            </button>
            <button class="p-2 rounded-lg bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-[#e8f4fc] hover:text-[#54b9ff]" data-expand-toggle>
              <span data-lucide="chevron-down" class="w-5 h-5"></span>
            </button>
          </div>
        </div>
      </div>
      <div class="px-6 pb-6 border-t border-gray-100 hidden" data-product-body>
        <div class="pt-6 grid md:grid-cols-2 gap-8">
          <div>
            <h4 class="font-bold text-[#2c3e50] mb-4 flex items-center gap-2">
              <span data-lucide="activity" class="w-5 h-5 text-[#54b9ff]"></span>
              Key Features
            </h4>
            <ul class="space-y-3">
              ${product.features
                .map(
                  (feature) => `
                  <li class="flex items-start gap-3 text-sm text-gray-600">
                    <span class="w-2 h-2 bg-[#54b9ff] rounded-full mt-1.5 flex-shrink-0"></span>
                    ${feature}
                  </li>
                `
                )
                .join('')}
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-[#2c3e50] mb-4 flex items-center gap-2">
              <span data-lucide="ruler" class="w-5 h-5 text-[#54b9ff]"></span>
              Technical Specifications
            </h4>
            <div class="grid grid-cols-2 gap-3">
              ${product.specs
                .map(
                  (spec) => `
                  <div class="p-3 bg-gray-50 rounded-lg">
                    <div class="text-xs text-gray-500 mb-1">${spec.label}</div>
                    <div class="text-sm font-semibold text-[#2c3e50]">${spec.value}</div>
                  </div>
                `
                )
                .join('')}
            </div>
          </div>
        </div>
        <div class="mt-6 flex flex-wrap gap-4">
          <div class="flex items-center gap-2 px-4 py-2 bg-[#e8f4fc] rounded-lg">
            <span data-lucide="battery" class="w-4 h-4 text-[#54b9ff]"></span>
            <span class="text-sm text-[#2c3e50] font-medium">1-3 years autonomy</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 bg-[#fff3e8] rounded-lg">
            <span data-lucide="thermometer" class="w-4 h-4 text-[#ff8c42]"></span>
            <span class="text-sm text-[#2c3e50] font-medium">Temp. sensor included</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 bg-[#e8f4fc] rounded-lg">
            <span data-lucide="droplets" class="w-4 h-4 text-[#54b9ff]"></span>
            <span class="text-sm text-[#2c3e50] font-medium">IP66 waterproof</span>
          </div>
        </div>
      </div>
    `;

    productsList.appendChild(item);
  });
}

function renderAdvantages() {
  const container = document.getElementById('advantages-list');
  if (!container) return;

  advantages.forEach((advantage) => {
    const card = document.createElement('div');
    card.className =
      'group relative p-8 rounded-2xl border border-gray-100 bg-white shadow-lg shadow-gray-100/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2';
    card.innerHTML = `
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${advantage.color} rounded-t-2xl"></div>
      <div class="flex items-start gap-6">
        <div class="flex-shrink-0 w-16 h-16 ${advantage.bgColor} rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <span data-lucide="${advantage.icon}" class="w-8 h-8 text-gray-700"></span>
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-bold text-[#2c3e50] group-hover:text-[#54b9ff] transition-colors duration-300">
              ${advantage.title}
            </h3>
            <span data-lucide="arrow-up-right" class="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
          </div>
          <p class="text-gray-600 leading-relaxed mb-4">${advantage.description}</p>
          <div class="flex items-center gap-3">
            <span class="text-3xl font-bold bg-gradient-to-r ${advantage.color} bg-clip-text text-transparent">
              ${advantage.stat}
            </span>
            <span class="text-sm text-gray-500">${advantage.statLabel}</span>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 rounded-2xl bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
    `;
    container.appendChild(card);
  });
}

function renderStats() {
  const container = document.getElementById('stats-grid');
  if (!container) return;

  stats.forEach((stat) => {
    const card = document.createElement('div');
    card.className =
      'group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-[#54b9ff]/30 hover:-translate-y-2';
    card.innerHTML = `
      <div class="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
        <span data-lucide="${stat.icon}" class="w-7 h-7 text-white"></span>
      </div>
      <div class="mb-2">
        <span class="text-5xl font-bold text-white" data-count-target="${stat.value}">0</span>
        <span class="text-3xl font-bold text-[#54b9ff]">${stat.suffix}</span>
      </div>
      <p class="text-white/60 text-sm leading-relaxed">${stat.label}</p>
      <div class="absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
    `;
    container.appendChild(card);
  });
}

function renderContactInfo() {
  const container = document.getElementById('contact-info');
  if (!container) return;
  contactInfo.forEach((info, index) => {
    const link = document.createElement('a');
    link.href = info.href;
    link.className =
      'flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-[#54b9ff]/30 group';
    link.style.transitionDelay = `${300 + index * 100}ms`;
    link.innerHTML = `
      <div class="w-12 h-12 bg-[#54b9ff]/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#54b9ff]/30">
        <span data-lucide="${info.icon}" class="w-6 h-6 text-[#54b9ff]"></span>
      </div>
      <div>
        <div class="text-white/50 text-sm">${info.label}</div>
        <div class="text-white font-medium">${info.value}</div>
      </div>
    `;
    container.appendChild(link);
  });
}

function renderFooterLinks() {
  const lists = {
    products: document.getElementById('footer-products'),
    company: document.getElementById('footer-company'),
    resources: document.getElementById('footer-resources'),
    legal: document.getElementById('footer-legal'),
  };

  Object.entries(footerLinks).forEach(([key, links]) => {
    const list = lists[key];
    if (!list) return;
    links.forEach((link) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${link.href}" class="text-gray-400 text-sm hover:text-[#54b9ff] transition-colors duration-300 flex items-center gap-1 group" data-scroll>
          ${link.name}
          <span data-lucide="arrow-up-right" class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
      `;
      list.appendChild(li);
    });
  });

  const year = document.getElementById('footer-year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

function setupScrollLinks() {
  document.querySelectorAll('[data-scroll]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      closeMobileMenu();
    });
  });
}

function setupHeroCTA() {
  const button = document.getElementById('hero-cta');
  if (!button) return;
  button.addEventListener('click', () => {
    const target = document.querySelector('#products');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function setupDropdowns() {
  document.querySelectorAll('[data-dropdown]').forEach((dropdown) => {
    const trigger = dropdown.querySelector('button');
    const menu = dropdown.querySelector('[data-dropdown-menu]');
    if (!trigger || !menu) return;

    dropdown.addEventListener('mouseenter', () => {
      menu.classList.remove('hidden');
    });
    dropdown.addEventListener('mouseleave', () => {
      menu.classList.add('hidden');
    });
  });

  document.querySelectorAll('[data-mobile-dropdown]').forEach((button) => {
    button.addEventListener('click', () => {
      const menu = button.parentElement?.querySelector('[data-mobile-menu]');
      const icon = button.querySelector('svg');
      if (!menu) return;
      menu.classList.toggle('hidden');
      if (icon) {
        icon.classList.toggle('rotate-180');
      }
    });
  });
}

function setupMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    if (isOpen) {
      menu.classList.add('hidden');
      toggle.innerHTML = '<span data-lucide="menu" class="w-6 h-6"></span>';
    } else {
      menu.classList.remove('hidden');
      toggle.innerHTML = '<span data-lucide="x" class="w-6 h-6"></span>';
    }
    lucide.createIcons();
  });
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const toggle = document.getElementById('mobile-menu-toggle');
  if (!menu || !toggle) return;
  menu.classList.add('hidden');
  toggle.innerHTML = '<span data-lucide="menu" class="w-6 h-6"></span>';
  lucide.createIcons();
}

function setupProductExpansion() {
  document.querySelectorAll('[data-product-header]').forEach((header) => {
    header.addEventListener('click', () => {
      const body = header.parentElement?.querySelector('[data-product-body]');
      const icon = header.querySelector('[data-expand-toggle] svg');
      if (!body || !icon) return;
      const isHidden = body.classList.contains('hidden');
      body.classList.toggle('hidden', !isHidden);
      icon.classList.toggle('rotate-180', isHidden);
    });
  });
}

function setupQuickView() {
  const modal = document.getElementById('quick-view-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  if (!modal || !modalTitle || !modalContent) return;

  function openModal(product) {
    modalTitle.textContent = product.name;
    modalContent.innerHTML = `
      <div class="aspect-video rounded-xl overflow-hidden mb-6">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
      </div>
      <p class="text-gray-600 mb-6">${product.description}</p>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-[#2c3e50] mb-3 flex items-center gap-2">
            <span data-lucide="activity" class="w-5 h-5 text-[#54b9ff]"></span>
            Features
          </h4>
          <ul class="space-y-2">
            ${product.features
              .map(
                (feature) => `
                <li class="flex items-start gap-2 text-sm text-gray-600">
                  <span class="w-1.5 h-1.5 bg-[#54b9ff] rounded-full mt-2 flex-shrink-0"></span>
                  ${feature}
                </li>
              `
              )
              .join('')}
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-[#2c3e50] mb-3 flex items-center gap-2">
            <span data-lucide="ruler" class="w-5 h-5 text-[#54b9ff]"></span>
            Specifications
          </h4>
          <div class="space-y-2">
            ${product.specs
              .map(
                (spec) => `
                <div class="flex justify-between text-sm">
                  <span class="text-gray-500">${spec.label}</span>
                  <span class="text-[#2c3e50] font-medium">${spec.value}</span>
                </div>
              `
              )
              .join('')}
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    lucide.createIcons();
  }

  function closeModal() {
    modal.classList.add('hidden');
  }

  document.querySelectorAll('[data-quick-view]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const productId = button.getAttribute('data-quick-view');
      const product = products.find((item) => item.id === productId);
      if (product) {
        openModal(product);
      }
    });
  });

  modal.querySelectorAll('[data-modal-close]').forEach((el) => {
    el.addEventListener('click', closeModal);
  });
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('contact-success');
  const submit = document.getElementById('contact-submit');
  const submitText = document.getElementById('contact-submit-text');
  const reset = document.getElementById('contact-reset');
  const privacy = document.getElementById('privacy');

  if (!form || !success || !submit || !submitText || !reset || !privacy) return;

  function updateSubmitState() {
    submit.disabled = !privacy.checked;
  }

  privacy.addEventListener('change', updateSubmitState);
  updateSubmitState();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!privacy.checked) return;
    submit.disabled = true;
    submitText.innerHTML = '<span data-lucide="loader-2" class="w-5 h-5 animate-spin"></span> Sending...';
    lucide.createIcons();

    await new Promise((resolve) => setTimeout(resolve, 1500));

    form.classList.add('hidden');
    success.classList.remove('hidden');
    submitText.innerHTML = '<span data-lucide="send" class="w-5 h-5"></span> Send Message';
    submit.disabled = false;
    lucide.createIcons();
  });

  reset.addEventListener('click', () => {
    form.reset();
    privacy.checked = false;
    form.classList.remove('hidden');
    success.classList.add('hidden');
    updateSubmitState();
  });
}

function setupStatsCounters() {
  const counterElements = document.querySelectorAll('[data-count-target]');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const target = Number(element.getAttribute('data-count-target'));
        const duration = 2000;
        const steps = 60;
        let step = 0;
        const interval = duration / steps;
        const timer = setInterval(() => {
          step += 1;
          const progress = step / steps;
          const easeOut = 1 - Math.pow(1 - progress, 3);
          element.textContent = Math.round(target * easeOut).toString();
          if (step >= steps) {
            clearInterval(timer);
          }
        }, interval);
        obs.unobserve(element);
      });
    },
    { threshold: 0.3 }
  );

  counterElements.forEach((element) => observer.observe(element));
}

renderNav();
renderProducts();
renderAdvantages();
renderStats();
renderContactInfo();
renderFooterLinks();
setupScrollLinks();
setupHeroCTA();
setupDropdowns();
setupMobileMenu();
setupProductExpansion();
setupQuickView();
setupContactForm();
setupStatsCounters();

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}
