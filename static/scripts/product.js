const productsData = {
  'obsessio-x1': {
    id: 'obsessio-x1',
    name: 'OBSESSIO X1',
    fullName: 'OBSESSIO X1 - Potentiometric Displacement Sensor',
    subtitle: 'Potentiometric Displacement',
    category: 'Displacement Range',
    description:
      'Connected sensor for monitoring cracks, expansion joints, and structural displacements.',
    longDescription: `OBSESSIO X1 is a connected sensor designed to monitor the evolution of cracks, expansion joints, and other phenomena related to structural displacements. It interfaces with all potentiometric displacement sensors available on the market.

The device also integrates a temperature measurement via a remote thermistor, allowing measurement of concrete surface or core temperature to correlate displacement variations with thermal conditions.

OBSESSIO X1 can be used with different types of communication networks: SIGFOX, LoRaWAN, or LoRa P2P (private network), depending on use cases.`,
    image: './images/product-obsessio-x1.jpg',
    gallery: ['./images/product-obsessio-x1.jpg', './images/product-pack-fissure.jpg'],
    features: [
      'Compatible with wide variety of potentiometric displacement sensors: spring sensor, ball joint sensor, cable sensor...',
      'Battery autonomy: 1 to 3 years (depending on acquisition frequency)',
      'Remote temperature sensor integrated',
      'Waterproof IP66 compliant',
      'Data redundancy with integrated internal memory',
      'Local configuration via smartphone (Bluetooth/NFC)',
      'Rugged material suitable for industrial environments',
      'Quick sensor connection terminal block',
    ],
    applications: [
      'Crack monitoring in concrete structures',
      'Expansion joint measurement',
      'Bridge deformation tracking',
      'Building settlement monitoring',
      'Tunnel convergence measurement',
      'Dam structural health monitoring',
    ],
    specs: [
      {
        category: 'General Specifications',
        items: [
          { label: 'Dimensions (L x W x H)', value: '98 x 64 x 35 mm' },
          {
            label: 'Housing Material',
            value: 'Polycarbonate, UV resistant, V0 flame retardant, IK10 shock resistant',
          },
          { label: 'Total Weight', value: '0.2 kg' },
          { label: 'Protection Rating', value: 'IP66' },
          { label: 'Operating Temperature', value: '-20°C to +60°C' },
          { label: 'Mounting Options', value: 'Wall mounting plate available, 4mm oblong holes' },
        ],
      },
      {
        category: 'Power & Communication',
        items: [
          { label: 'Power Supply', value: '3.6V Type A Battery' },
          { label: 'External Power Option', value: '4.8 to 32 VDC' },
          { label: 'Sensor Connection', value: 'Quick terminal block' },
          { label: 'Antenna', value: 'Straight or Omnidirectional - 3 dBi gain' },
          { label: 'Configuration', value: 'Bluetooth/NFC via smartphone' },
        ],
      },
      {
        category: 'Displacement Measurement',
        items: [
          { label: 'Compatible Sensor Type', value: 'Potentiometric' },
          { label: 'Excitation', value: '2.5 VDC' },
          { label: 'Recommended Nominal Resistance', value: '> 1 kOhm' },
          { label: 'Resolution', value: '21 bits FS' },
          { label: 'Measurement Accuracy (module + probe)', value: '≤ 20 µm (with temperature variation)' },
          { label: 'Linearity', value: '± 0.5% FS' },
        ],
      },
      {
        category: 'Temperature Measurement',
        items: [
          { label: 'Compatible Sensor Type', value: 'Remote NTC thermistor' },
          { label: 'Measurement Range', value: '-40°C to 105°C' },
          { label: 'Resolution', value: '± 0.01°C' },
          { label: 'Measurement Accuracy', value: '± 0.5°C (between 0 and 40°C)' },
        ],
      },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    relatedProducts: ['obsessio-x2', 'pack-fissure', 'distancio'],
    datasheetUrl: '#',
  },
  'obsessio-x2': {
    id: 'obsessio-x2',
    name: 'OBSESSIO X2',
    fullName: 'OBSESSIO X2 - LVDT Displacement Sensor',
    subtitle: 'LVDT Displacement',
    category: 'Displacement Range',
    description: 'High-precision LVDT sensor for crack monitoring with exceptional accuracy.',
    longDescription: `OBSESSIO X2 is a connected sensor designed to monitor crack evolution and structural displacements. It interfaces with LVDT (Linear Variable Differential Transformer) sensors recognized for their high precision, low temperature disturbance, and long-term reliability.

The device integrates a temperature measurement via a remote thermistor, allowing measurement of concrete surface or core temperature to correlate displacement variations with thermal conditions.

OBSESSIO X2 can be used with different types of communication networks: SIGFOX, LoRaWAN, or LoRa P2P (private network), depending on use cases.`,
    image: './images/product-obsessio-x2.jpg',
    gallery: ['./images/product-obsessio-x2.jpg'],
    features: [
      'High precision LVDT sensor interface',
      'Low temperature disturbance',
      'Great long-term reliability',
      'Battery autonomy: 1 to 3 years',
      'Remote temperature sensor',
      'Waterproof IP66 compliant',
      'Data redundancy with internal memory',
      'Local configuration via smartphone',
    ],
    applications: [
      'High-precision crack monitoring',
      'Structural deformation analysis',
      'Laboratory testing',
      'Quality control applications',
      'Research projects',
      'Critical infrastructure monitoring',
    ],
    specs: [
      {
        category: 'General Specifications',
        items: [
          { label: 'Dimensions (L x W x H)', value: '98 x 64 x 35 mm' },
          { label: 'Housing Material', value: 'Polycarbonate, UV resistant, V0 flame retardant' },
          { label: 'Total Weight', value: '0.2 kg' },
          { label: 'Protection Rating', value: 'IP66' },
          { label: 'Operating Temperature', value: '-20°C to +60°C' },
        ],
      },
      {
        category: 'Displacement Measurement',
        items: [
          { label: 'Compatible Sensor Type', value: 'LVDT' },
          { label: 'Excitation', value: '3.0 VAC @ 5 kHz' },
          { label: 'Resolution', value: '± 0.01 µm' },
          { label: 'Measurement Accuracy', value: '≤ 5 µm' },
          { label: 'Linearity', value: '0.5% FS' },
        ],
      },
      {
        category: 'Temperature Measurement',
        items: [
          { label: 'Compatible Sensor Type', value: 'Remote NTC thermistor' },
          { label: 'Measurement Range', value: '-40°C to 105°C' },
          { label: 'Resolution', value: '± 0.01°C' },
          { label: 'Measurement Accuracy', value: '± 0.5°C (between 0 and 40°C)' },
        ],
      },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    relatedProducts: ['obsessio-x1', 'distancio', 'pack-fissure'],
    datasheetUrl: '#',
  },
  'pack-fissure': {
    id: 'pack-fissure',
    name: 'PACK FISSURE AUTONOME',
    fullName: 'PACK FISSURE AUTONOME - Complete Crack Monitoring Kit',
    subtitle: 'Complete Crack Monitoring Kit',
    category: 'Complete Solutions',
    description: 'Turnkey entry-level solution for reliable and continuous crack monitoring.',
    longDescription: `The Autonomous Crack Pack is the ideal entry-level solution to ensure reliable and continuous crack monitoring on your structures.

The pack includes all necessary components for immediate deployment: OBSESSIO X1 module, radio card, MIRAN potentiometric displacement sensor with 25mm or 50mm stroke, remote temperature probe, and 1-year SIGFOX or LoRaWAN subscription.

Note: OBSESSIO X1 mounting accessories and sensor mounting kit are not included in the pack price.`,
    image: './images/product-pack-fissure.jpg',
    gallery: ['./images/product-pack-fissure.jpg', './images/product-obsessio-x1.jpg'],
    features: [
      'Turnkey solution for crack monitoring',
      'Includes all necessary components',
      '1-year SIGFOX or LoRaWAN subscription included',
      'Complete metrological verification certificate',
      'Battery autonomy: 1 to 3 years',
      'Easy installation and configuration',
      'Ready to deploy',
      'Technical support included',
    ],
    applications: [
      'Building crack monitoring',
      'Infrastructure health tracking',
      'Insurance claim documentation',
      'Property management',
      'Safety compliance',
      'Preventive maintenance',
    ],
    specs: [
      {
        category: 'Package Contents',
        items: [
          { label: 'OBSESSIO X1 Module', value: '1 unit' },
          { label: 'Radio Card', value: '1 unit' },
          { label: 'Potentiometric Sensor', value: 'MIRAN KTR2, 25mm or 50mm' },
          { label: 'Temperature Probe', value: '1 remote probe' },
          { label: 'Subscription', value: '1 year SIGFOX or LoRaWAN' },
          { label: 'Certificate', value: 'Complete metrological verification' },
        ],
      },
      {
        category: 'Sensor Specifications',
        items: [
          { label: 'Sensor Type', value: 'MIRAN model KTR2' },
          { label: 'Excitation', value: '2.5 VDC' },
          { label: 'Nominal Resistance', value: '2 kΩ (0-25mm), 5 kΩ (0-50mm)' },
          { label: 'Resolution', value: 'Infinite' },
          { label: 'Measurement Accuracy', value: '≤ 50 µm' },
          { label: 'Linearity', value: '± 0.1% FS' },
        ],
      },
    ],
    technologies: ['SIGFOX', 'LoRaWAN'],
    relatedProducts: ['obsessio-x1', 'obsessio-x2', 'distancio'],
    datasheetUrl: '#',
  },
  distancio: {
    id: 'distancio',
    name: 'DISTANCIO',
    fullName: 'DISTANCIO - Laser Distance & Inclinometer',
    subtitle: 'Laser Distance & MEMS Inclinometer',
    category: 'Displacement Range',
    description: '2-in-1 sensor for precise non-contact measurements up to 150 meters.',
    longDescription: `DISTANCIO is a 2-in-1 sensor that enables precise non-contact measurements over a range of up to 150 meters. It features a high-performance laser developed by a world-leading manufacturer, guaranteeing ±1mm accuracy across the entire measurement range.

It integrates a dual-axis MEMS inclinometer, offering complementary tilt measurement for even more reliable and complete applications.

DISTANCIO can be used with different types of communication networks: SIGFOX, LoRaWAN, or LoRa P2P (private network), depending on use cases.`,
    image: './images/product-distancio.jpg',
    gallery: ['./images/product-distancio.jpg'],
    features: [
      '2-in-1 sensor (Laser distance + MEMS inclinometer)',
      'Non-contact measurement up to 150 meters',
      'High precision laser with ±1mm accuracy',
      'Battery autonomy: 1 to 3 years',
      'Waterproof IP66 compliant',
      'Data redundancy with internal memory',
      'Local configuration via smartphone',
      'Aluminum housing for harsh environments',
    ],
    applications: [
      'Bridge clearance monitoring',
      'Slope stability measurement',
      'Mining operation monitoring',
      'Tunnel convergence',
      'Structural deformation tracking',
      'Geotechnical applications',
    ],
    specs: [
      {
        category: 'General Specifications',
        items: [
          { label: 'Dimensions (L x W x H)', value: '170 x 111 x 61 mm' },
          { label: 'Housing Material', value: 'Aluminum, UV resistant, V0 flame retardant' },
          { label: 'Total Weight', value: '0.65 kg' },
          { label: 'Protection Rating', value: 'IP66' },
          { label: 'Operating Temperature', value: '-10°C to +50°C' },
        ],
      },
      {
        category: 'Laser Measurement',
        items: [
          { label: 'Laser Type', value: 'Diode laser 620-690nm (red, typical 655nm)' },
          { label: 'Laser Class', value: 'Class 2 (IEC 60825-1:2014)' },
          { label: 'Max Radiant Power', value: '1 mW' },
          { label: 'Range (natural surfaces)', value: '0.05 to 15 m' },
          { label: 'Range (reflective targets)', value: '40 to 150 m' },
          { label: 'Measurement Accuracy', value: '± 1.0 mm (distance independent)' },
          { label: 'Resolution', value: '0.1 mm' },
          { label: 'Repeatability', value: '± 0.3 mm' },
        ],
      },
      {
        category: 'Inclinometer',
        items: [
          { label: 'Sensor Type', value: '2-axis MEMS accelerometer' },
          { label: 'Measurement Range', value: '± 90°' },
          { label: 'Resolution', value: '± 0.1°' },
        ],
      },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    relatedProducts: ['horizio', 'obsessio-x1', 'obsessio-x2'],
    datasheetUrl: '#',
  },
  horizio: {
    id: 'horizio',
    name: 'HORIZIO XY',
    fullName: 'HORIZIO XY - Capacitive Inclinometer 2-Axis',
    subtitle: 'Capacitive Inclinometer 2-Axis',
    category: 'Inclinometry Range',
    description: 'High-precision capacitive inclinometer for structural tilt measurement.',
    longDescription: `HORIZIO measures inclination phenomena of structures (facades, bridge piers...), slope sliding, railway uplift and settlement. It features high-precision capacitive sensors offering numerous advantages.

With 0.001° resolution and measurement range up to ±10°, it provides a robust and reliable solution for measuring inclination phenomena, even in the most demanding environments, thanks to its low sensitivity to temperature variations.

HORIZIO can be used with different types of communication networks: SIGFOX, LoRaWAN, or LoRa P2P (private network), depending on use cases.`,
    image: './images/product-horizio.jpg',
    gallery: ['./images/product-horizio.jpg'],
    features: [
      'High precision measurement with 0.001° resolution',
      'Very low temperature variation',
      'No hysteresis on output signal',
      'Angle independent of local gravitational acceleration',
      'Insensitive to magnetic field interference',
      'Waterproof IP66 compliant',
      'Battery autonomy: 1 to 3 years',
      'Adjustable mechanical offset (±40°)',
    ],
    applications: [
      'Building facade monitoring',
      'Bridge pier inclination tracking',
      'Slope stability measurement',
      'Railway track monitoring',
      'Tower alignment verification',
      'Wind turbine foundation monitoring',
    ],
    specs: [
      {
        category: 'General Specifications',
        items: [
          { label: 'Dimensions (L x W x H)', value: '98 x 60 x 45 mm' },
          { label: 'Housing Material', value: 'Aluminum, UV resistant, V0 flame retardant' },
          { label: 'Total Weight', value: '0.4 kg' },
          { label: 'Protection Rating', value: 'IP66' },
          { label: 'Operating Temperature', value: '-40°C to +85°C' },
        ],
      },
      {
        category: 'Inclination Measurement',
        items: [
          { label: 'Sensor Type', value: 'Capacitive' },
          { label: 'Range', value: '± 10°' },
          { label: 'Resolution', value: '0.001°' },
          { label: 'Linearity', value: '< 0.1% FS' },
          { label: 'Transverse Sensitivity', value: '0.5% at 45° inclination' },
          { label: 'Temperature Drift', value: '< ±0.001°/K' },
          { label: 'Adjustable Offset', value: '-40° to +40° (X and Y)' },
        ],
      },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    relatedProducts: ['distancio', 'extenso', 'module-thx'],
    datasheetUrl: '#',
  },
  extenso: {
    id: 'extenso',
    name: 'EXTENSO X1 / X3',
    fullName: 'EXTENSO - Strain Gauge Module',
    subtitle: 'Strain Gauge Module',
    category: 'Extensometry Range',
    description: 'Wireless module for measuring mechanical deformations using strain gauges.',
    longDescription: `EXTENSO measures mechanical deformations of a material or structure using strain gauges. A strain gauge is a device that converts mechanical deformation into electrical resistance variation. Attached to a material surface, it detects elongation or compression.

It can interface with cold-bonded gauges, hot-welded spot gauges, and different wiring types (quarter bridge, half bridge, full bridge), making it extremely versatile: tension monitoring of tie rods, deformations of metal structures, measuring signals from load cells or pressure sensors.

EXTENSO can be used with different types of communication networks: SIGFOX, LoRaWAN, or LoRa P2P (private network), depending on use cases.`,
    image: './images/product-extenso.jpg',
    gallery: ['./images/product-extenso.jpg'],
    features: [
      'High precision for material deformations',
      'High sensitivity for micro-deformation measurement',
      'Compatible with wide range of gauge types',
      'Adjustable gauge factor',
      'Battery autonomy: 1 to 3 years',
      'Waterproof IP66 compliant',
      'Data redundancy with internal memory',
      'Local configuration via smartphone',
    ],
    applications: [
      'Tie rod tension monitoring',
      'Metal structure deformation analysis',
      'Load cell signal measurement',
      'Pressure sensor integration',
      'Material testing',
      'Structural health monitoring',
    ],
    specs: [
      {
        category: 'General Specifications',
        items: [
          { label: 'Dimensions (L x W x H)', value: '98 x 64 x 35 mm' },
          { label: 'Housing Material', value: 'Polycarbonate, UV resistant' },
          { label: 'Total Weight', value: '0.2 kg' },
          { label: 'Protection Rating', value: 'IP66' },
          { label: 'Operating Temperature', value: '-40°C to +85°C' },
        ],
      },
      {
        category: 'Strain Measurement',
        items: [
          { label: 'Compatible Types', value: '1/4 bridge, 1/2 bridge, full bridge' },
          { label: 'Measurement Range', value: 'Customer specific' },
          { label: 'Resolution', value: '0.001°' },
          { label: 'Gauge Factor', value: 'Adjustable' },
        ],
      },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    relatedProducts: ['obsessio-x1', 'obsessio-x2', 'horizio'],
    datasheetUrl: '#',
  },
  'module-thx': {
    id: 'module-thx',
    name: 'Module THx',
    fullName: 'Module THx - Temperature & Humidity',
    subtitle: 'Temperature & Humidity Monitoring',
    category: 'Environment Range',
    description: 'Connected sensor for continuous monitoring of temperature and humidity conditions.',
    longDescription: `The THx module is a connected sensor designed to continuously monitor temperature and humidity conditions. It interfaces with two probe ranges:

Standard range with TH50 probe, and premium range with VAISALA® HMP110 probe, offering excellent metrological performance (VAISALA® being a reference manufacturer in humidity measurement and monitoring).

The THx module can be used with different types of communication networks: SIGFOX, LoRaWAN, or LoRa P2P (private network), depending on use cases.`,
    image: './images/product-thx.jpg',
    gallery: ['./images/product-thx.jpg'],
    features: [
      'Two ranges available according to needs',
      'Premium VAISALA® HMP110 option',
      'Battery autonomy: 1 to 3 years',
      'Waterproof IP66 compliant',
      'Data redundancy with internal memory',
      'Local configuration via smartphone',
      'Quick probe connection',
      'Excellent metrological performance',
    ],
    applications: [
      'Environmental monitoring',
      'Concrete curing tracking',
      'Warehouse climate control',
      'Museum artifact preservation',
      'HVAC system optimization',
      'Weather station integration',
    ],
    specs: [
      {
        category: 'General Specifications',
        items: [
          { label: 'Dimensions (L x W x H)', value: '98 x 64 x 35 mm' },
          { label: 'Housing Material', value: 'Polycarbonate, UV resistant' },
          { label: 'Total Weight', value: '0.2 kg' },
          { label: 'Protection Rating', value: 'IP66' },
          { label: 'Operating Temperature', value: '-20°C to +60°C' },
        ],
      },
      {
        category: 'TH50 Probe (Standard)',
        items: [
          { label: 'Humidity Accuracy', value: '± 3% RH (0-80% RH)' },
          { label: 'Temperature Accuracy', value: '± 0.1°C (20 to +60°C)' },
        ],
      },
      {
        category: 'HMP110 Probe (Premium)',
        items: [
          { label: 'Humidity Accuracy', value: '± 1.5% RH (0-90% RH)' },
          { label: 'Humidity Accuracy (high)', value: '± 2.5% RH (90-100% RH)' },
          { label: 'Temperature Accuracy', value: '± 0.2°C (0 to +40°C)' },
          { label: 'Temperature Accuracy (ext)', value: '± 0.4°C (-40 to 0°C / +40 to +80°C)' },
        ],
      },
    ],
    technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    relatedProducts: ['horizio', 'distancio', 'extenso'],
    datasheetUrl: '#',
  },
};

const tabLabels = [
  { value: 'overview', label: 'Overview' },
  { value: 'specs', label: 'Specifications' },
  { value: 'features', label: 'Features' },
  { value: 'applications', label: 'Applications' },
];

const quickStats = [
  { icon: 'battery', value: '1-3 Years', label: 'Battery Life' },
  { icon: 'droplets', value: 'IP66', label: 'Protection' },
  { icon: 'thermometer', value: 'Integrated', label: 'Temp. Sensor' },
  { icon: 'signal', value: 'Multiple', label: 'Protocols' },
];

function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id') || 'obsessio-x1';
}

function renderHero(product) {
  document.title = `ADVARNA - ${product.name}`;
  document.getElementById('breadcrumb-product').textContent = product.name;
  document.getElementById('product-category').textContent = product.category;
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-subtitle').textContent = product.subtitle;
  document.getElementById('product-description').textContent = product.description;
  const heroImage = document.getElementById('product-hero-image');
  heroImage.src = product.image;
  heroImage.alt = product.name;

  const techContainer = document.getElementById('product-tech');
  techContainer.innerHTML = product.technologies
    .map(
      (tech) => `
        <span class="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white/80 text-sm">
          <span data-lucide="wifi" class="w-4 h-4 text-[#54b9ff]"></span>
          ${tech}
        </span>
      `
    )
    .join('');

  document.getElementById('contact-title').textContent = `Interested in ${product.name}?`;
}

function renderTabs(product) {
  const tabList = document.getElementById('tab-list');
  const tabContent = document.getElementById('tab-content');

  tabList.innerHTML = tabLabels
    .map(
      (tab, index) => `
        <button
          type="button"
          class="px-6 py-3 rounded-lg text-sm font-semibold ${
            index === 0
              ? 'bg-[#54b9ff] text-white'
              : 'bg-white text-[#2c3e50] hover:bg-[#e8f4fc]'
          }"
          data-tab-trigger="${tab.value}"
        >
          ${tab.label}
        </button>
      `
    )
    .join('');

  const overviewContent = `
    <div class="bg-white rounded-2xl p-8 shadow-sm" data-tab-panel="overview">
      <div class="grid lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <h2 class="text-2xl font-bold text-[#2c3e50] mb-6">Product Description</h2>
          <div class="prose prose-gray max-w-none">
            ${product.longDescription
              .split('\n\n')
              .map(
                (paragraph) => `
                  <p class="text-gray-600 leading-relaxed mb-4">${paragraph}</p>
                `
              )
              .join('')}
          </div>
        </div>
        <div class="space-y-6">
          <div class="p-6 bg-[#e8f4fc] rounded-xl">
            <h3 class="font-bold text-[#2c3e50] mb-4 flex items-center gap-2">
              <span data-lucide="zap" class="w-5 h-5 text-[#54b9ff]"></span>
              Key Benefits
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <span data-lucide="check" class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"></span>
                Battery autonomy: 1-3 years
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <span data-lucide="check" class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"></span>
                IP66 waterproof rating
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <span data-lucide="check" class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"></span>
                Data redundancy with internal memory
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <span data-lucide="check" class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"></span>
                Bluetooth/NFC configuration
              </li>
            </ul>
          </div>
          <div class="p-6 bg-[#fff3e8] rounded-xl">
            <h3 class="font-bold text-[#2c3e50] mb-4 flex items-center gap-2">
              <span data-lucide="shield" class="w-5 h-5 text-[#ff8c42]"></span>
              Certifications
            </h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• IP66 Protection Rating</li>
              <li>• Railway Approval (DIN45545-2)</li>
              <li>• V0 Flame Retardant</li>
              <li>• UV Resistant</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  const specsContent = `
    <div class="bg-white rounded-2xl p-8 shadow-sm" data-tab-panel="specs" hidden>
      <h2 class="text-2xl font-bold text-[#2c3e50] mb-8">Technical Specifications</h2>
      <div class="space-y-8">
        ${product.specs
          .map(
            (specCategory) => `
              <div>
                <h3 class="text-lg font-semibold text-[#54b9ff] mb-4 pb-2 border-b border-gray-100">
                  ${specCategory.category}
                </h3>
                <div class="grid md:grid-cols-2 gap-4">
                  ${specCategory.items
                    .map(
                      (item) => `
                        <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <span class="text-gray-600 text-sm">${item.label}</span>
                          <span class="text-[#2c3e50] font-medium text-sm text-right">${item.value}</span>
                        </div>
                      `
                    )
                    .join('')}
                </div>
              </div>
            `
          )
          .join('')}
      </div>
    </div>
  `;

  const featuresContent = `
    <div class="bg-white rounded-2xl p-8 shadow-sm" data-tab-panel="features" hidden>
      <h2 class="text-2xl font-bold text-[#2c3e50] mb-8">Key Features</h2>
      <div class="grid md:grid-cols-2 gap-6">
        ${product.features
          .map(
            (feature) => `
              <div class="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-[#e8f4fc] transition-colors duration-300">
                <div class="w-10 h-10 bg-[#54b9ff] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span data-lucide="check" class="w-5 h-5 text-white"></span>
                </div>
                <p class="text-gray-700">${feature}</p>
              </div>
            `
          )
          .join('')}
      </div>
    </div>
  `;

  const applicationsContent = `
    <div class="bg-white rounded-2xl p-8 shadow-sm" data-tab-panel="applications" hidden>
      <h2 class="text-2xl font-bold text-[#2c3e50] mb-8">Typical Applications</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${product.applications
          .map(
            (application) => `
              <div class="p-6 bg-gradient-to-br from-[#e8f4fc] to-white rounded-xl border border-[#54b9ff]/10 hover:border-[#54b9ff]/30 transition-all duration-300 hover:-translate-y-1">
                <div class="w-12 h-12 bg-[#54b9ff]/10 rounded-xl flex items-center justify-center mb-4">
                  <span data-lucide="ruler" class="w-6 h-6 text-[#54b9ff]"></span>
                </div>
                <p class="text-[#2c3e50] font-medium">${application}</p>
              </div>
            `
          )
          .join('')}
      </div>
    </div>
  `;

  tabContent.innerHTML = `${overviewContent}${specsContent}${featuresContent}${applicationsContent}`;
}

function setupTabs() {
  const triggers = document.querySelectorAll('[data-tab-trigger]');
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const value = trigger.getAttribute('data-tab-trigger');
      document.querySelectorAll('[data-tab-panel]').forEach((panel) => {
        panel.hidden = panel.getAttribute('data-tab-panel') !== value;
      });

      triggers.forEach((button) => {
        button.classList.toggle('bg-[#54b9ff]', button === trigger);
        button.classList.toggle('text-white', button === trigger);
        button.classList.toggle('bg-white', button !== trigger);
        button.classList.toggle('text-[#2c3e50]', button !== trigger);
      });
    });
  });
}

function renderQuickStats() {
  const container = document.getElementById('quick-stats');
  container.innerHTML = quickStats
    .map(
      (stat) => `
        <div class="flex items-center gap-3">
          <span data-lucide="${stat.icon}" class="w-8 h-8 text-[#54b9ff]"></span>
          <div>
            <div class="text-white font-bold">${stat.value}</div>
            <div class="text-white/60 text-sm">${stat.label}</div>
          </div>
        </div>
      `
    )
    .join('');
}

function renderRelatedProducts(product) {
  const container = document.getElementById('related-products');
  const related = product.relatedProducts.map((id) => productsData[id]).filter(Boolean);
  container.innerHTML = related
    .map(
      (item) => `
        <a href="./product.html?id=${item.id}" class="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
          <div class="aspect-video overflow-hidden">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div class="p-6">
            <span class="text-xs text-[#54b9ff] font-semibold uppercase tracking-wider">${item.category}</span>
            <h3 class="text-lg font-bold text-[#2c3e50] mt-2 group-hover:text-[#54b9ff] transition-colors">
              ${item.name}
            </h3>
            <p class="text-gray-500 text-sm mt-2 line-clamp-2">${item.description}</p>
            <div class="flex items-center gap-2 mt-4 text-[#54b9ff] font-medium text-sm">
              View Details
              <span data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1"></span>
            </div>
          </div>
        </a>
      `
    )
    .join('');
}

function setupDatasheetModal(product) {
  const modal = document.getElementById('datasheet-modal');
  const message = document.getElementById('datasheet-message');
  const trigger = document.getElementById('datasheet-trigger');
  const closeButtons = modal.querySelectorAll('[data-modal-close]');

  message.textContent = `The datasheet for ${product.name} will be available soon. Please contact us for more information.`;

  trigger.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  });
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
    });
  });
}

function setFooterYear() {
  document.getElementById('footer-year').textContent = new Date().getFullYear();
}

const product = productsData[getProductId()] || productsData['obsessio-x1'];
renderHero(product);
renderTabs(product);
renderQuickStats();
renderRelatedProducts(product);
setupTabs();
setupDatasheetModal(product);
setupScrollLinks();
setFooterYear();

if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}
