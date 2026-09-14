import { ColorPattern, ProductItem, ProjectShowcase, Dealer, ResourceDoc } from '../types';

export const DECKRITE_PATTERNS: ColorPattern[] = [
  {
    id: 'antique-beachwood',
    name: 'Antique Beachwood',
    series: 'Platinum Series',
    thickness: '60 mil',
    tone: 'warm',
    description: 'Rustic coastal driftwood grain blending weathered silver-tan with authentic timber wash, bringing beachside organic warmth without wood splinters.',
    texturePattern: 'Embossed Coastal Grain',
    colorHex: '#cfc4b2',
    secondaryHex: '#b2a590',
    accentColor: '#8a7c66',
    features: ['CAN/CGSB 37.54-95 Approved', 'Embossed Anti-Slip Tread', 'UV-Stabilized Pigments', 'Hot-Air Weldable'],
    bestFor: 'Lakefront docks, coastal verandas, and rustic craftsman sundecks.',
    isPopular: true,
    textureStyle: 'wood'
  },
  {
    id: 'baltic-grey',
    name: 'Baltic Grey',
    series: 'Platinum Series',
    thickness: '60 mil',
    tone: 'cool',
    description: 'Crisp, contemporary pale granite wash with subtle charcoal stippling for clean, high-contrast modern architectural designs.',
    texturePattern: 'Granite Stipple',
    colorHex: '#b8c0c8',
    secondaryHex: '#8f9ba6',
    accentColor: '#63707c',
    features: ['High Solar Reflectance', 'ADA Slip-Resistant Rated', 'Class A Fire Assembly', 'Cool Foot Feel'],
    bestFor: 'Modern urban townhomes, rooftop terraces, and black aluminum railing suites.',
    isPopular: true,
    textureStyle: 'granite'
  },
  {
    id: 'baltic-tan',
    name: 'Baltic Tan',
    series: 'Platinum Series',
    thickness: '60 mil',
    tone: 'warm',
    description: 'Gentle champagne-tan aggregate fleck providing a comfortable, welcoming neutral platform that coordinates with stone and cedar.',
    texturePattern: 'Fine Aggregate Texture',
    colorHex: '#d5c9b7',
    secondaryHex: '#b8aa94',
    accentColor: '#8c7b64',
    features: ['Barefoot Comfort', 'Dirt-Camouflage Fleck', 'Stain Resistant', '1000D Polyester Core'],
    bestFor: 'Sun porches, walkout patios, and traditional residential decks.',
    textureStyle: 'sand'
  },
  {
    id: 'country-wood',
    name: 'Country Wood',
    series: 'Platinum Series',
    thickness: '60 mil',
    tone: 'warm',
    description: 'Warm natural oak and cedar plank aesthetic without warping, checking, or seasonal staining demands.',
    texturePattern: 'Weathered Woodgrain',
    colorHex: '#c4a67b',
    secondaryHex: '#9e7e52',
    accentColor: '#705329',
    features: ['Natural Timber Look', '100% Waterproof Membrane', 'Zero Splinters', 'Hot-Air Sealed Seams'],
    bestFor: 'Cabin getaways, covered verandas, and woodsy backyard sundecks.',
    isPopular: true,
    textureStyle: 'wood'
  },
  {
    id: 'dove-grey',
    name: 'Dove Grey',
    series: 'Platinum Series',
    thickness: '60 mil',
    tone: 'neutral',
    description: 'Soft, airy neutral pearl grey engineered for expansive decks desiring a calm, sophisticated Scandinavian aesthetic.',
    texturePattern: 'Honed Stone Micro-Tread',
    colorHex: '#cbd3da',
    secondaryHex: '#a4b1bd',
    accentColor: '#758390',
    features: ['High Reflectance', 'Clean Modern Look', 'Anti-Fungal Treated', 'Heavy Traffic Tested'],
    bestFor: 'Contemporary elevated decks, luxury condominiums, and pool surrounds.',
    textureStyle: 'quartz'
  },
  {
    id: 'garden-brown',
    name: 'Garden Brown',
    series: 'Platinum Series',
    thickness: '60 mil',
    tone: 'earth',
    description: 'Rich earthen soil and toasted hazelnut tones designed to blend effortlessly into lush landscape gardens and pergolas.',
    texturePattern: 'Mottled Fieldstone',
    colorHex: '#9c8167',
    secondaryHex: '#7d644d',
    accentColor: '#5a4532',
    features: ['Organic Earth Tones', 'Heavy Pigment Load', 'Fade Resistant', 'High Tear Strength'],
    bestFor: 'Garden terraces, mountain residences, and natural stone veneer pairings.',
    textureStyle: 'stone'
  },
  {
    id: 'granite-grey',
    name: 'Granite Grey',
    series: 'Platinum Series',
    thickness: 'Both',
    tone: 'cool',
    description: 'Timeless speckled granite matrix formulated with multi-dimensional flecks that camouflage outdoor dust and pollen between cleanings.',
    texturePattern: 'Quarried Granite Stipple',
    colorHex: '#9ba5b0',
    secondaryHex: '#737f8d',
    accentColor: '#4f5965',
    features: ['Proven Best Seller', 'Maximum Camouflage', 'Slip-Resistant Emboss', 'Commercial Roof Grade'],
    bestFor: 'High-traffic sundecks, commercial hospitality dining, and family gathering decks.',
    isPopular: true,
    textureStyle: 'granite'
  },
  {
    id: 'graphite',
    name: 'Graphite',
    series: 'Platinum Series',
    thickness: '60 mil',
    tone: 'cool',
    description: 'Bold, dramatic deep charcoal finish with sleek chiseled slate depth for stunning architectural contrast.',
    texturePattern: 'Chiseled Slate Texture',
    colorHex: '#525b68',
    secondaryHex: '#3a424e',
    accentColor: '#242b35',
    features: ['Dramatic Contrast', 'Low Glare Surface', 'Heavy-Duty Wear Layer', 'Industrial Durability'],
    bestFor: 'Urban rooftop lounges, contemporary glass railings, and luxury penthouses.',
    isNew: true,
    textureStyle: 'slate'
  },
  {
    id: 'greystone',
    name: 'Greystone',
    series: 'Platinum Series',
    thickness: 'Both',
    tone: 'neutral',
    description: 'Balanced slate-gray and quartz-limestone fusion offering versatile architectural styling with any exterior paint scheme.',
    texturePattern: 'Natural Stone Aggregate',
    colorHex: '#a2abb4',
    secondaryHex: '#7e8791',
    accentColor: '#586068',
    features: ['Versatile Neutral', 'Slip-Resistant Embossing', 'ASTM E303 Compliant', 'Non-Porous Barrier'],
    bestFor: 'Standard residential sundecks, stairs, and multi-family balconies.',
    textureStyle: 'stone'
  },
  {
    id: 'hemlock-grey',
    name: 'Hemlock Grey',
    series: 'Platinum Series',
    thickness: '60 mil',
    tone: 'cool',
    description: 'Refined deep alpine timber-gray inspired by Pacific Northwest hemlock forests and weathered cedar shakes.',
    texturePattern: 'Subtle Timber-Stone Grain',
    colorHex: '#808b96',
    secondaryHex: '#5d6873',
    accentColor: '#3e4751',
    features: ['Pacific Northwest Styling', 'All-Weather Durability', 'Cold Flex to -40°', 'Superior UV Defense'],
    bestFor: 'West Coast custom homes, ski chalets, and mountain view decks.',
    textureStyle: 'wood'
  },
  {
    id: 'hempstone-charcoal',
    name: 'Hempstone Charcoal',
    series: 'Platinum Series',
    thickness: '60 mil',
    tone: 'cool',
    description: 'Subtle woven cross-hatch textile geometry combined with mineral charcoal for a tailored designer look.',
    texturePattern: 'Textile-Stone Micro-Weave',
    colorHex: '#5e6872',
    secondaryHex: '#454e57',
    accentColor: '#2d343c',
    features: ['Designer Woven Texture', 'Modern Aesthetic', 'Scratch Resistant', 'Roof-Grade Certified'],
    bestFor: 'Rooftop entertaining, executive walkouts, and architectural show homes.',
    isPopular: true,
    textureStyle: 'stone'
  },
  {
    id: 'hempstone-grey',
    name: 'Hempstone Grey',
    series: 'Platinum Series',
    thickness: '60 mil',
    tone: 'neutral',
    description: 'Mid-tone textural stone with subtle tactile micro-grooves that provide exceptional barefoot stability when wet.',
    texturePattern: 'Textile-Stone Micro-Weave',
    colorHex: '#8e98a2',
    secondaryHex: '#6d7782',
    accentColor: '#4f5761',
    features: ['Superior Wet Traction', 'Refined Mid-Grey', 'Tear Resistant Core', 'Clean Monolithic Seams'],
    bestFor: 'Pool surrounds, lake docks, and family backyard sundecks.',
    textureStyle: 'stone'
  },
  {
    id: 'hempstone-tan',
    name: 'Hempstone Tan',
    series: 'Platinum Series',
    thickness: '60 mil',
    tone: 'warm',
    description: 'Warm natural jute and linen undertones encapsulated in heavy-duty vinyl for an inviting outdoor living room feeling.',
    texturePattern: 'Textile-Stone Micro-Weave',
    colorHex: '#c5b7a1',
    secondaryHex: '#a3947e',
    accentColor: '#7a6c57',
    features: ['Warm Interior-Style Comfort', 'Barefoot Friendly', 'Mildew Inhibited', 'UV Shielded'],
    bestFor: 'Covered porches, screened-in decks, and outdoor kitchens.',
    textureStyle: 'sand'
  },
  {
    id: 'limestone',
    name: 'Limestone',
    series: 'Platinum Series',
    thickness: 'Both',
    tone: 'neutral',
    description: 'Bright, radiant quarried limestone styling that reflects midday sun and keeps walking surfaces noticeably cooler.',
    texturePattern: 'Honed Limestone Grain',
    colorHex: '#dfdacd',
    secondaryHex: '#c2bcad',
    accentColor: '#968f7f',
    features: ['Maximum Solar Reflectance', 'Cool Touch Surface', 'Easy Garden Hose Cleaning', 'Resistant to Chlorine'],
    bestFor: 'Sun-drenched south-facing decks, pool decks, and coastal properties.',
    textureStyle: 'granite'
  },
  {
    id: 'marble-grey',
    name: 'Marble Grey',
    series: 'Platinum Series',
    thickness: 'Both',
    tone: 'neutral',
    description: 'Luxurious veined Carrara marble aesthetic delivering five-star resort elegance to private residential sundecks.',
    texturePattern: 'Veined Marble Texture',
    colorHex: '#d8d5cc',
    secondaryHex: '#b0a99d',
    accentColor: '#80796e',
    features: ['High-End Luxury Look', 'Slip-Resistant Emboss', 'Dirt-Concealing Veining', 'Hot-Air Weldable'],
    bestFor: 'Luxury estates, outdoor dining platforms, and upper-level master suites.',
    isPopular: true,
    textureStyle: 'marble'
  },
  {
    id: 'mist',
    name: 'Mist',
    series: 'Platinum Series',
    thickness: '60 mil',
    tone: 'neutral',
    description: 'Ultra-light ethereal morning cloud tone with delicate aggregate stippling, making outdoor living spaces feel expansive and open.',
    texturePattern: 'Fine Cloud Stipple',
    colorHex: '#dbe1e6',
    secondaryHex: '#b9c3cb',
    accentColor: '#8b98a3',
    features: ['Bright Expansive Feel', 'High UV Reflectance', 'CGSB Approved', 'Stain Resistant'],
    bestFor: 'Smaller balconies, covered verandas, and modern glass rail pairings.',
    textureStyle: 'quartz'
  },
  {
    id: 'pebblestone',
    name: 'Pebblestone',
    series: 'Platinum Series',
    thickness: 'Both',
    tone: 'neutral',
    description: 'Multi-toned riverbed pebble aggregate specifically formulated to conceal foot traffic, dust, and pollen between seasonal cleanings.',
    texturePattern: 'Pebble Aggregate Stipple',
    colorHex: '#94a3b8',
    secondaryHex: '#64748b',
    accentColor: '#475569',
    features: ['High-Traffic Camouflage', 'Aggressive Non-Skid Emboss', 'Pet Claw Resilient', 'Commercial Roof Rated'],
    bestFor: 'Heavy-traffic commercial decks, condominiums, restaurants, and lakeside docks.',
    isPopular: true,
    textureStyle: 'riverstone'
  },
  {
    id: 'sahara-brown',
    name: 'Sahara Brown',
    series: 'Platinum Series',
    thickness: 'Both',
    tone: 'earth',
    description: 'Sun-drenched desert sandstone palette combining rich terracotta and desert bronze with natural masonry texture.',
    texturePattern: 'Granular Sandstone',
    colorHex: '#ba9c7b',
    secondaryHex: '#967957',
    accentColor: '#6f5436',
    features: ['Deep Desert Warmth', 'UV Stabilizer Package', 'Resistant to Furniture Scuffs', 'Zero Splinters'],
    bestFor: 'Southwest style architecture, brick and timber homes, and sunny exposures.',
    textureStyle: 'sand'
  },
  {
    id: 'slate-grey',
    name: 'Slate Grey',
    series: 'Platinum Series',
    thickness: '60 mil',
    tone: 'cool',
    description: 'Contemporary deep architectural slate finish engineered with cool undertones for dramatic visual contrast.',
    texturePattern: 'Chiseled Slate Texture',
    colorHex: '#64748b',
    secondaryHex: '#475569',
    accentColor: '#334155',
    features: ['Modern Charcoal Aesthetics', 'Low Glare Surface', 'Heavy-Traffic Tested', 'Tear-Resistant Core'],
    bestFor: 'Urban rooftop living spaces, contemporary townhomes, and modern black rail pairings.',
    isPopular: true,
    textureStyle: 'slate'
  },
  {
    id: 'stone-grey',
    name: 'Stone Grey',
    series: 'Platinum Series',
    thickness: 'Both',
    tone: 'neutral',
    description: 'Classic quarried fieldstone with balanced charcoal and pewter tones that coordinate naturally with concrete and siding.',
    texturePattern: 'Fieldstone Texture',
    colorHex: '#8b96a1',
    secondaryHex: '#697480',
    accentColor: '#49525c',
    features: ['Versatile Architectural Match', 'Non-Skid Traction', 'Class A Fire Rated Detail', '100% Watertight'],
    bestFor: 'Traditional residential sundecks, walkways, and stairs.',
    textureStyle: 'stone'
  },
  {
    id: 'topaz',
    name: 'Topaz',
    series: 'Platinum Series',
    thickness: '50 mil',
    tone: 'warm',
    description: 'Golden amber and warm wheat tones designed to harmonize seamlessly with cedar siding, pergolas, and garden landscaping.',
    texturePattern: 'Warm Mineral Stipple',
    colorHex: '#c7a77a',
    secondaryHex: '#a38355',
    accentColor: '#785b32',
    features: ['Warm Golden Glow', 'Color-Fast Pigments', 'Resistant to Dragged Chairs', 'Flexible in Cold Weather'],
    bestFor: 'Craftsman style homes, timber-framed sundecks, and country retreats.',
    textureStyle: 'sand'
  },
  {
    id: 'westcoast-driftwood',
    name: 'Westcoast Driftwood',
    series: 'Platinum Series',
    thickness: '60 mil',
    tone: 'neutral',
    description: 'Weathered salt-washed cedar plank character inspired by coastal Pacific shores, pairing timber realism with zero maintenance.',
    texturePattern: 'Weathered Timber Planks',
    colorHex: '#b5aba0',
    secondaryHex: '#91867a',
    accentColor: '#6a6054',
    features: ['Authentic Coastal Timber Look', '100% Waterproof Roof Grade', 'No Wood Rot or Mold', 'Hot-Air Welded'],
    bestFor: 'Oceanfront cottages, lakefront walkouts, and coastal view decks.',
    isPopular: true,
    isNew: true,
    textureStyle: 'wood'
  }
];

export const DECKRITE_PRODUCTS: ProductItem[] = [
  {
    id: 'deckrite-platinum',
    title: 'DeckRite Platinum Series 60 mil Membrane',
    category: 'membranes',
    mil: '60 mil nominal (70 mil overall)',
    tagline: 'North America’s premier 6 ft wide code-certified walk-on roof membrane over living spaces.',
    description: 'Engineered as a dual-purpose single-ply roofing membrane and heavy-duty pedestrian walking surface. Certified to CAN/CGSB 37.54-95 and ICC-ES standards for installation directly over habitable living rooms, bedrooms, or garages below. Over 20 designer patterns available.',
    warranty: 'DeckRite Manufacturer Warranty (2-Yr Limited Material) + Certified Dealer 10/15-Yr System Warranty',
    applications: [
      'Second-story walkout decks over finished living rooms or bedrooms',
      'Rooftop patios and terrace entertaining areas',
      'Multi-family apartment & condominium balconies',
      'Commercial outdoor hospitality and restaurant dining platforms'
    ],
    specifications: {
      'Thickness': '60 mils nominal (70 mils overall with embossed tread)',
      'Roll Width': '6 feet wide (72 inches)',
      'Roll Length': 'Standard master rolls and custom linear cuts',
      'Reinforcement': 'Heavy-duty 1000 Denier woven polyester core',
      'Seam Method': 'Hot-air molecular weld (Leister Triac @ 6.5–7)',
      'Code Approvals': 'CAN/CGSB 37.54-95, ICC-ES AC75 compliant',
      'Fire Rating': 'ASTM E108 Class A & Class C compliant assemblies',
      'Slip Resistance': 'ASTM E303 (Meets ADA wet/dry requirements)'
    },
    features: [
      '100% waterproof seal creating completely dry living or storage space below',
      'Hot-air welded seams permanently fuse vinyl at the molecular level',
      'Embossed anti-slip texture provides secure traction wet or dry',
      'Superior resistance to UV breakdown, mildew, sunscreen, and household spills',
      'Over 40 years of proven manufacturing heritage in North America'
    ],
    image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'deckrite-industrial',
    title: 'DeckRite Industrial Series (102" Wide Seamless Membrane)',
    category: 'membranes',
    mil: '60 mil nominal (70 mil overall)',
    tagline: 'Extra-wide 8 ft 6 in rolls engineered to eliminate seams on wide sundecks & commercial walkways.',
    description: 'Manufactured in massive 102-inch widths (8 feet 6 inches) to allow seamless full-width coverage on residential sundecks and multi-family walkways up to 8.5 feet without a single field seam. Maximizes waterproofing security and speeds up contractor installation.',
    warranty: 'DeckRite Manufacturer Warranty + Certified Dealer 10/15-Yr System Warranty',
    applications: [
      'Decks up to 8.5 ft wide with zero field seams',
      'Multi-family apartment & hotel exterior access walkways',
      'Retirement living balconies and commercial corridors',
      'High-traffic public platforms and municipal docks'
    ],
    specifications: {
      'Thickness': '60 mils nominal (70 mils overall)',
      'Roll Width': '102 inches (8 feet 6 inches)',
      'Roll Length': 'Continuous master rolls',
      'Reinforcement': 'Heavy-duty woven polyester scrim matrix',
      'Seam Elimination': 'Zero field seams on decks up to 8.5 ft projection',
      'Code Approvals': 'CAN/CGSB 37.54-95 compliant',
      'Surface': 'Heavy-duty textured slip-resistant embossing'
    },
    features: [
      'Eliminates visible field seams on walkways and balconies up to 8.5 ft deep',
      'Drastically reduces contractor installation time and labor costs',
      'Fewer seams equals even higher waterproofing reliability',
      'Reinforced core resists heavy foot traffic, luggage wheels, and furniture'
    ],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'deckrite-slickback',
    title: 'DeckRite Standard & Slick Back Series (68" Width)',
    category: 'membranes',
    mil: '50 mil & 60 mil',
    tagline: 'Proven 68-inch master rolls with smooth-back design for specialized subfloor bonding.',
    description: 'The time-tested DeckRite standard roll width at 68 inches (5 ft 8 in) x 90 lineal feet. Available in 50 mil residential and 60 mil commercial grades, featuring a smooth-back profile designed for high-tack adhesion with DeckRite MD-101 and MD-102 bonding adhesives.',
    warranty: '10-Year to 15-Year Performance Track Record',
    applications: [
      'Residential backyard sundecks and patio walkouts',
      'Swimming pool perimeters and hot tub platforms',
      'Covered front verandas and exterior stairways',
      'Lakefront docks and boathouse walkways'
    ],
    specifications: {
      'Thickness': 'Available in 50 mil (1.27mm) and 60 mil (1.52mm)',
      'Roll Width': '68 inches (5 feet 8 inches)',
      'Roll Length': '90 lineal feet per master roll',
      'Backing': 'Slick-back smooth vinyl for maximum adhesive contact',
      'Cold Flexibility': 'Tested to -40°F / -40°C without cracking',
      'Tensile Strength': 'Exceeds 200 lbs/in ASTM D751'
    },
    features: [
      'Eliminates splinters, nails, and rotting wood joists permanently',
      'Resistant to barbecue grease, sunscreen, chlorine, and common household cleaners',
      'Simple maintenance: wash with mild liquid soap and garden hose 2-3 times/year',
      'Comfortable barefoot texture that does not splinter or retain burning heat'
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'deckrail-systems',
    title: 'DeckRail™ Architectural Aluminum & Glass Railings',
    category: 'railings',
    tagline: 'Engineered powder-coated aluminum railings with Topless "Infinity" Glass and Picket styles.',
    description: 'Manufactured from 6005-T5 architectural grade extruded aluminum with an AAMA 2604 compliant powder-coat finish. Features both Topless "Infinity" Glass (for unobstructed panoramic views) and traditional picket designs, engineered with custom waterproof deck isolation pads.',
    warranty: '20-Year Powder-Coat Finish Warranty',
    applications: [
      'Topless "Infinity" Glass systems for panoramic lake & mountain views',
      'Standard 6mm & 10mm tempered glass panel railing suites',
      'Traditional 3/4" pickets and wide slat modern pickets',
      'Stair railing kits, gates, and commercial ADA handrails'
    ],
    specifications: {
      'Material': '6005-T5 Architectural Extruded Aluminum',
      'Finish': 'AAMA 2604 architectural exterior powder coat',
      'Styles': 'Topless Infinity Glass, Glass Infill, Pickets, Wide Slat',
      'Colors': 'Textured Matte Black, Slate Gray, Architectural Bronze, Pure White',
      'Heights': '36", 42", and custom commercial heights',
      'Mounting': 'Base Plate with Waterproof EPDM Gaskets & Fascia Mount'
    },
    features: [
      'Will never rust, rot, warp, or require seasonal repainting',
      'Custom waterproof isolation pads prevent fastener penetrations from leaking',
      'Hidden fastener system for clean, high-end architectural sightlines',
      'Exceeds all IBC and NBC structural loading safety standards'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'deckrite-adhesives',
    title: 'DeckRite Chemical Bonding Adhesives (MD-101 & MD-102)',
    category: 'accessories',
    tagline: 'Engineered water-based acrylic & solvent-based contact adhesives for secure subfloor bonding.',
    description: 'DeckRite MD-101 (Water-Based Acrylic Latex) is specifically formulated for porous plywood subfloors with a coverage rate of 100 to 125 sq. ft. per gallon. DeckRite MD-102 (Solvent-Based Contact Adhesive) and Winter Contact are engineered for perimeter metal flashing, vertical wall turn-ups, and non-porous surfaces.',
    warranty: 'System Integrated Warranty',
    applications: [
      'MD-101: Field bonding over 3/4" exterior T&G plywood subfloors',
      'MD-102: Perimeter drip edge and 6" vertical house wall turn-ups',
      'Winter Contact: Cold-weather installations down to freezing temperatures',
      'Stair riser and tread wrap bonding'
    ],
    specifications: {
      'MD-101 Spread Rate': '100 to 125 sq. ft. per gallon (apply with 3/8" nap roller)',
      'MD-101 Base': 'Water-based acrylic latex (Low VOC, odorless, eco-friendly)',
      'MD-102 Base': 'Solvent-based synthetic rubber contact cement',
      'Curing Time': 'Immediate tack with full cure within 24-48 hours',
      'Containers': 'Available in 1-Gallon and 5-Gallon pails'
    },
    features: [
      'Specially formulated for permanent chemical adhesion with DeckRite vinyl backing',
      'Will not degrade vinyl plasticizers or cause yellowing/bubbling',
      'MD-101 is water-soluble for easy cleanup before curing',
      'MD-102 provides high initial tack on vertical wall flashings'
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'deckrite-accessories',
    title: 'DeckRite System Flashings, Drains & Tooling',
    category: 'accessories',
    tagline: 'PVC-clad metal drip edge, overflow drains, box scuppers, and Leister hot-air welders.',
    description: 'The complete system approach: 26-gauge galvanized steel factory-laminated with DeckRite PVC allows the membrane to be directly hot-air fused to the perimeter drip edge. Complete lineup of PVC-coated drains, scuppers, Planipatch leveling compound, MasterSeal NP1 sealants, and Leister Triac welding guns.',
    warranty: 'System Integrated Warranty',
    applications: [
      'Deck perimeter drip edge with factory-laminated PVC',
      'PVC-coated overflow and floor drains (Watts DD1 compatible)',
      'PVC-coated welded box scuppers for parapet walls',
      'Planipatch compound for plywood seam and knothole smoothing',
      'Aluminum L-Trim and Mini L-Trim termination bars'
    ],
    specifications: {
      'Drip Edge Metal': '26-gauge galvanized steel with factory-laminated DeckRite PVC',
      'Profiles': 'Standard profile & Ultra-profile with clips',
      'Drains': 'PVC-coated floor drains and overflow spouts',
      'Scuppers': 'Custom fabricated PVC-clad box scuppers',
      'Sealants': 'MasterSeal NP1 & Supra Expert polyurethane sealants',
      'Heat Welder': 'Leister Triac ST / AT (Settings 6.5 to 7 recommended)'
    },
    features: [
      'PVC-clad metal allows direct molecular heat-weld of membrane to perimeter edge',
      'Guarantees water cannot wick behind fascia boards or edge joists',
      'Pre-formed accessories drastically speed up contractor installation',
      'Engineered detail drawings for every architectural condition'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  }
];

export const COMPARISON_DATA = [
  {
    feature: '100% Waterproof (Dry Space / Living Below)',
    deckrite: { value: true, text: 'YES - Roof-grade certified membrane creating dry usable space or living space below' },
    composite: { value: false, text: 'NO - Gapped boards allow rainwater and debris to pour through' },
    wood: { value: false, text: 'NO - Water passes between boards; causes rot and pooling below' },
    coatings: { value: 'partial', text: 'PARTIAL - Prone to hairline cracking, peeling, and seam failure' }
  },
  {
    feature: 'Annual Maintenance Required',
    deckrite: { value: true, text: 'ZERO - Simply rinse with mild soap and water once or twice a year' },
    composite: { value: 'partial', text: 'MODERATE - Scrubbing mould in grooves, fading over time' },
    wood: { value: false, text: 'HEAVY - Annual sanding, pressure washing, bleaching, and chemical staining' },
    coatings: { value: false, text: 'HIGH - Must re-coat every 2-3 years to maintain seal' }
  },
  {
    feature: 'Splinter-Free & Barefoot Friendly',
    deckrite: { value: true, text: 'YES - Soft, embossed cushion texture, never splinters, no exposed hot nails' },
    composite: { value: 'partial', text: 'MODERATE - Highly heat-retentive in sun; can burn bare feet' },
    wood: { value: false, text: 'NO - Develops splinters, checking, cracked grain, and raised screw heads' },
    coatings: { value: 'partial', text: 'ROUGH - Gritty sandpaper texture can be abrasive on feet and knees' }
  },
  {
    feature: 'Puncture & Tear Resistance',
    deckrite: { value: true, text: 'SUPERIOR - 3-ply heavy-duty polyester encapsulated core' },
    composite: { value: true, text: 'HIGH - Solid board composition' },
    wood: { value: true, text: 'HIGH - Solid lumber board' },
    coatings: { value: false, text: 'POOR - Unreinforced liquid film easily scratched through by chair legs' }
  },
  {
    feature: 'Expected Service Lifespan',
    deckrite: { value: true, text: '20+ to 30 Years with proven North American installations since late 1970s' },
    composite: { value: true, text: '15 to 25 Years' },
    wood: { value: false, text: '10 to 15 Years before board rot and structural replacement' },
    coatings: { value: false, text: '3 to 5 Years before complete stripping and re-application' }
  },
  {
    feature: 'Warranty Protection',
    deckrite: { value: true, text: '10 to 15 Year Membrane Warranty + Dealer Workmanship' },
    composite: { value: true, text: '25-Year Manufacturer (prorated; exclusions for mold/scratch)' },
    wood: { value: false, text: 'None or 1-Year installer warranty' },
    coatings: { value: false, text: '1 to 2-Year limited warranty' }
  },
  {
    feature: '10-Year Total Cost of Ownership',
    deckrite: { value: true, text: 'LOWEST - One-time installation with $0 in stains, sealers, or repairs' },
    composite: { value: 'partial', text: 'HIGH - Very expensive initial material cost' },
    wood: { value: false, text: 'HIGHEST - Staining supplies ($200-$500/yr) + replacement boards' },
    coatings: { value: false, text: 'MODERATE-HIGH - Repeated re-coat labor and materials' }
  }
];

export const SHOWCASE_PROJECTS: ProjectShowcase[] = [
  {
    id: 'proj-1',
    title: 'Emerald Lake Waterfront Overhang',
    location: 'Kelowna, British Columbia',
    category: 'lakefront',
    patternUsed: 'Lakewood Marble 60 mil',
    patternId: 'lakewood-marble',
    description: 'Redesigned a decaying cedar sundeck over an enclosed boathouse. The 60 mil DeckRite Lakewood Marble membrane completely waterproofed the boathouse below while delivering an elegant marble-look lakeside entertainment deck with black aluminum glass railings.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1200&q=80',
    features: ['100% Watertight Boathouse Below', 'Glass Balustrade Integration', 'Continuous Heat-Welded Seams']
  },
  {
    id: 'proj-2',
    title: 'Skyline View Penthouse Rooftop Terrace',
    location: 'Seattle, Washington',
    category: 'rooftop',
    patternUsed: 'Slate Gray 60 mil',
    patternId: 'slate-gray',
    description: 'Transforming an unutilized commercial gravel flat roof into a contemporary 1,400 sq ft luxury rooftop sanctuary. Engineered with DeckRite 60 mil Slate Gray to serve as the certified primary roofing membrane and walk-on entertaining surface.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    features: ['ICC-ES Roof-Grade Certified', 'Outdoor Kitchen & Fire Table Safe', 'Zero Water Pooling']
  },
  {
    id: 'proj-3',
    title: 'Suburban Two-Story Walkout & Dry Patio',
    location: 'Denver, Colorado',
    category: 'residential',
    patternUsed: 'Sahara Tan 60 mil',
    patternId: 'sahara-tan',
    description: 'Homeowners previously couldn’t enjoy their lower walkout patio whenever it rained because water poured through the upper deck boards. Installing DeckRite Sahara Tan instantly created a completely dry, shaded outdoor family lounge below.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    features: ['Doubled Usable Outdoor Space', 'Built-in Under-Deck Recessed Lighting', 'Barefoot Temperature Comfort']
  },
  {
    id: 'proj-4',
    title: 'Pacific Coast Multi-Family Condominiums',
    location: 'Portland, Oregon',
    category: 'commercial',
    patternUsed: 'Riverstone 60 mil',
    patternId: 'riverstone',
    description: 'Replacement of 48 failing liquid-coated balconies on a premier residential complex. The Riverstone multi-fleck pattern was selected by the HOA for superior pedestrian slip-resistance, low lifecycle maintenance, and proven marine climate performance.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    features: ['48 Unit Rapid Turnaround', 'HOA Approved Acoustic Deadening', 'Class A Fire Rated Detail']
  },
  {
    id: 'proj-5',
    title: 'Resort Poolside Pavilion & Sundeck',
    location: 'Scottsdale, Arizona',
    category: 'lakefront',
    patternUsed: 'Tropical Cream 50 mil',
    patternId: 'tropical-cream',
    description: 'Designed to handle intense desert sunshine and heavy pool splash zones. The high-reflectance Tropical Cream formulation stays significantly cooler than concrete or composite pavers, while resisting chlorinated pool water effortlessly.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    features: ['Chlorine & Saltwater Resilient', 'High Solar Reflectance Index', 'Textured Non-Slip Grip']
  },
  {
    id: 'proj-6',
    title: 'Modern Timber & Stone Mountain Deck',
    location: 'Calgary, Alberta',
    category: 'residential',
    patternUsed: 'Tuscany Sand 60 mil',
    patternId: 'tuscany-sand',
    description: 'Engineered for extreme sub-zero Canadian freeze-thaw cycles (-35°C winters). The heavy-duty polyester reinforcement withstands heavy snow shoveling and thermal contraction without cracking or peeling.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    features: ['Tested to -40° Cold Flexibility', 'Heavy Snow Load Tested', 'Seamless Wall Turn-Ups']
  }
];

export const SISTER_BRANDS = [
  {
    name: 'MariDeck',
    tagline: 'Marine Vinyl Flooring',
    url: 'https://marideck.net/',
    domain: 'marideck.net',
    description: 'The industry-leading slip-resistant vinyl flooring for pontoon boats, fishing vessels, houseboats, and marine docks. Engineered to withstand heavy sun, fuel, and saltwater exposure.',
    highlight: 'Official Marine Flooring Partner to Top Boat Builders',
    badge: 'Marine Systems',
    colors: 'text-cyan-700 bg-cyan-50 border-cyan-200'
  },
  {
    name: 'DeckRite RV',
    tagline: 'RV Flooring & Slide-Out Products',
    url: 'https://deckriterv.com/',
    domain: 'deckriterv.com',
    description: 'Engineered high-performance woven and solid PVC sheet flooring designed specifically for recreational vehicles, motorhomes, toy haulers, and travel trailers.',
    highlight: 'OEM-grade durability and lightweight moisture barrier',
    badge: 'RV & Travel',
    colors: 'text-amber-700 bg-amber-50 border-amber-200'
  }
];

export const RESOURCE_DOCUMENTS: ResourceDoc[] = [
  {
    id: 'doc-video-series',
    title: 'DeckRite 4-Part Official Installation Video Series',
    category: 'Installation Guides',
    docType: 'PDF',
    fileSize: 'Video Guide',
    description: 'Master instructional walkthrough covering (1) Subfloor Prep & Leveling, (2) PVC-Clad Drip Edge Installation, (3) Membrane Laying & MD-101 Adhesive, and (4) Hot Air Seam Welding.'
  },
  {
    id: 'doc-cgsb',
    title: 'CAN/CGSB 37.54-95 Code Compliance Evaluation Report',
    category: 'Building Codes',
    docType: 'PDF',
    fileSize: '1.8 MB',
    description: 'Authoritative testing laboratory evaluation confirming DeckRite 60 mil meets Canadian General Standards Board standard for PVC roofing and waterproofing membranes over habitable space.'
  },
  {
    id: 'doc-spec',
    title: 'Architectural CSI 3-Part Specification (Section 07 18 13 Traffic Coatings)',
    category: 'Architectural & Specs',
    docType: 'DOC',
    fileSize: '420 KB',
    description: 'CSI MasterFormat 3-part specification document for architects, structural engineers, and general contractors specifying DeckRite sheet membranes.'
  },
  {
    id: 'doc-cad',
    title: 'Standard Architectural CAD Detail Drawings (DWG & PDF)',
    category: 'Architectural & Specs',
    docType: 'CAD / DWG',
    fileSize: '4.2 MB',
    description: '22 precise CAD cross-section drawings covering PVC-clad drip edges, wall turn-ups, door sills, post penetrations, inside/outside corners, and scupper drains.'
  },
  {
    id: 'doc-install-guide',
    title: 'DeckRite Certified Applicator Installation Manual',
    category: 'Installation Guides',
    docType: 'PDF',
    fileSize: '3.4 MB',
    description: 'Complete 28-page technical manual detailing subfloor preparation, plywood requirements, adhesive spread rates, hot-air welder settings (6.5–7), and edge detailing.'
  },
  {
    id: 'doc-deckrail-manual',
    title: 'DeckRail™ Glass & Aluminum Railing Installation Guide',
    category: 'Installation Guides',
    docType: 'PDF',
    fileSize: '2.1 MB',
    description: 'Engineering guide for anchoring Topless Infinity Glass, standard glass infill, and picket posts through DeckRite vinyl with waterproof EPDM isolation pads.'
  },
  {
    id: 'doc-warranty',
    title: 'Manufacturer Limited Warranty Certificate & Care Instructions',
    category: 'Warranty & Care',
    docType: 'PDF',
    fileSize: '650 KB',
    description: 'DeckRite 2-Year Limited Material Warranty, Certified Dealer extended system warranty terms, seasonal maintenance guide, and warranty registration instructions.'
  },
  {
    id: 'doc-brochure',
    title: 'DeckRite Architectural Product & Color Lookbook Catalog',
    category: 'Installation Guides',
    docType: 'PDF',
    fileSize: '5.6 MB',
    description: 'High-resolution consumer and architect lookbook showcasing all 22 designer color patterns, Platinum & Industrial series specifications, and finished photography.'
  }
];

export const AUTHORIZED_DEALERS: Dealer[] = [
  {
    id: 'd-1',
    name: 'DeckRite Corporate Headquarters (Little Rock Holdings)',
    type: 'Authorized Distributor',
    address: '3912 East Progress',
    city: 'North Little Rock',
    stateOrProvince: 'AR',
    country: 'USA',
    postalCode: '72114',
    phone: '(888) 450-DECK (3325)',
    email: 'DeckRitesupport@deckrite.com',
    servesRegions: ['Nationwide US', 'Midwest', 'South', 'East Coast']
  },
  {
    id: 'd-2',
    name: 'DeckRite Canada Sundecks Ltd.',
    type: 'Authorized Distributor',
    address: 'Unit 3, 20133 – 102nd Avenue',
    city: 'Langley',
    stateOrProvince: 'BC',
    country: 'Canada',
    postalCode: 'V1M 4B4',
    phone: '1-888-303-2792',
    email: 'info@deckritecanada.com',
    servesRegions: ['British Columbia', 'Alberta', 'Saskatchewan', 'Manitoba', 'Pacific Northwest']
  },
  {
    id: 'd-3',
    name: 'Cascade Waterproofing & Deck Solutions',
    type: 'Certified Master Installer',
    address: '14200 SE 98th Ave',
    city: 'Seattle / Clackamas',
    stateOrProvince: 'WA',
    country: 'USA',
    postalCode: '98101',
    phone: '(206) 555-0192',
    email: 'estimates@cascadedecks.com',
    servesRegions: ['Washington', 'Oregon', 'Idaho']
  },
  {
    id: 'd-4',
    name: 'Rocky Mountain Sundecks & Vinyl Roofing',
    type: 'Certified Master Installer',
    address: '7850 E Arapahoe Rd',
    city: 'Denver',
    stateOrProvince: 'CO',
    country: 'USA',
    postalCode: '80112',
    phone: '(303) 555-8841',
    email: 'sales@rockymountainvinyl.com',
    servesRegions: ['Colorado', 'Utah', 'Wyoming']
  },
  {
    id: 'd-5',
    name: 'Northern Exposure Decking & Railing',
    type: 'Authorized Distributor',
    address: '5400 50 Ave',
    city: 'Edmonton / Calgary',
    stateOrProvince: 'AB',
    country: 'Canada',
    postalCode: 'T6B 2Z8',
    phone: '(780) 555-3419',
    email: 'orders@northernexposuredecking.ca',
    servesRegions: ['Alberta', 'Northern BC', 'Saskatchewan']
  },
  {
    id: 'd-6',
    name: 'Great Lakes Vinyl Systems & Exterior Living',
    type: 'Decking Contractor',
    address: '2210 Pilot Knob Rd',
    city: 'Minneapolis / St. Paul',
    stateOrProvince: 'MN',
    country: 'USA',
    postalCode: '55120',
    phone: '(612) 555-9204',
    email: 'info@greatlakesdecks.com',
    servesRegions: ['Minnesota', 'Wisconsin', 'Iowa', 'Illinois']
  },
  {
    id: 'd-7',
    name: 'Apex Waterproofing Specialists',
    type: 'Certified Master Installer',
    address: '3350 Commercial Ave',
    city: 'Kelowna / Okanagan',
    stateOrProvince: 'BC',
    country: 'Canada',
    postalCode: 'V1Y 7P2',
    phone: '(250) 555-6120',
    email: 'service@apexwaterproofing.ca',
    servesRegions: ['Okanagan Valley', 'Interior BC']
  },
  {
    id: 'd-8',
    name: 'Lone Star Outdoor Structures & Vinyl Decks',
    type: 'Decking Contractor',
    address: '11800 Metric Blvd',
    city: 'Austin',
    stateOrProvince: 'TX',
    country: 'USA',
    postalCode: '78758',
    phone: '(512) 555-4729',
    email: 'contact@lonestardeckrite.com',
    servesRegions: ['Texas', 'Oklahoma', 'Louisiana']
  }
];
