export const CATEGORIES = [
  { id: 'all', name: '🔥 Todos os Itens' },
  { id: 'combos', name: '🎁 Combos & Promoções' },
  { id: 'pizzas-35cm', name: '🍕 Pizzas Grandes (35cm)' },
  { id: 'pizzas-pops', name: '🍕 Pizzas Pops (Individuais)' },
  { id: 'pizzas-doces', name: '🍫 Pizzas Doces' },
  { id: 'esfihas-salgadas', name: '🥟 Esfihas Salgadas' },
  { id: 'esfihas-doces', name: '✨ Esfihas Doces' },
  { id: 'bebidas', name: '🥤 Bebidas' },
];

export const PROMO_BANNERS = [
  {
    id: 'promo-1',
    tag: 'COMBO MAKTUB',
    title: 'DOUBLE CHEESE PIZZA',
    subtitle: '2 Pizzas 35cm + Refrigerante 2L',
    price: 'R$ 89,90',
    oldPrice: 'R$ 115,00',
    badge: 'MAIS PEDIDO',
    productId: 'cb-combo-duplo',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    bgGradient: 'from-maktub-charcoal-dark via-maktub-red-dark to-maktub-red'
  },
  {
    id: 'promo-2',
    tag: 'CUPOM 10% OFF',
    title: 'PRIMEIRO PEDIDO MAKTUB',
    subtitle: 'Use o cupom MAKTUB10 no carrinho',
    price: '10% de Desconto',
    oldPrice: 'Válido Hoje',
    badge: 'CUPOM',
    couponCode: 'MAKTUB10',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    bgGradient: 'from-amber-950 via-stone-900 to-maktub-red-dark'
  },
  {
    id: 'promo-3',
    tag: 'FESTIVAL DE ESFIHAS',
    title: '10 ESFIHAS SORTIDAS',
    subtitle: 'Carne, Queijo e Frango c/ Catupiry',
    price: 'R$ 49,90',
    oldPrice: 'R$ 65,00',
    badge: 'ECONOMIA',
    productId: 'cb-combo-esfihas-10',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
    bgGradient: 'from-maktub-red-dark via-zinc-950 to-neutral-900'
  }
];

export const PRODUCTS = [
  // COMBOS & PROMOÇÕES
  {
    id: 'cb-combo-duplo',
    name: 'Combo Maktub em Dobro (2 Pizzas 35cm)',
    category: 'combos',
    price: 89.90,
    oldPrice: 115.00,
    description: '2 Pizzas Grandes 35cm (8 fatias cada) nos sabores tradicionais à sua escolha + 1 Refrigerante 2L bem gelado.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    badge: 'SUPER OFERTA',
    popular: true,
    rating: 5.0,
    serves: '6-8 pessoas'
  },
  {
    id: 'cb-combo-esfihas-10',
    name: 'Festival de Esfihas (10 Unidades Sortidas)',
    category: 'combos',
    price: 49.90,
    oldPrice: 65.00,
    description: 'Combo com 4 Esfihas de Carne com tempero árabe, 3 de Queijo derretido e 3 de Frango com Catupiry Original.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    badge: 'Mais Vendido',
    popular: true,
    rating: 4.9,
    serves: '3-4 pessoas'
  },
  {
    id: 'cb-combo-casal',
    name: 'Combo Casal (1 Pizza 35cm + 2 Esfihas Doces + Refri)',
    category: 'combos',
    price: 64.90,
    oldPrice: 78.00,
    description: '1 Pizza Grande 35cm à sua escolha + 2 Esfihas Doces de sobremesa + 1 Refrigerante 1.5L geladinho.',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
    badge: 'Destaque',
    popular: true,
    rating: 4.9,
    serves: '2-3 pessoas'
  },

  // PIZZAS 35CM (GRANDES)
  {
    id: 'pz-baiacatu',
    name: 'Pizza Baiacatu (35cm)',
    category: 'pizzas-35cm',
    price: 48.99,
    oldPrice: 56.00,
    description: 'Molho de tomate artesanal, mussarela especial fatiada, calabresa moída selecionada, Catupiry Original, cebola no azeite e azeitonas.',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
    badge: 'Especial da Casa',
    popular: true,
    rating: 5.0,
    serves: '3-4 pessoas (8 fatias)',
    sizes: [
      { name: 'Pop Individual (4 fatias)', price: 32.99 },
      { name: 'Grande 35cm (8 fatias)', price: 48.99 },
      { name: 'Família 40cm (12 fatias)', price: 64.90 }
    ],
    borderOptions: [
      { name: 'Sem Borda Recheada', price: 0 },
      { name: 'Borda Catupiry Original', price: 8.90 },
      { name: 'Borda Cheddar Cremoso', price: 8.90 },
      { name: 'Borda Cream Cheese', price: 11.90 }
    ]
  },
  {
    id: 'pz-calabresa-tradicional',
    name: 'Pizza de Calabresa Especial (35cm)',
    category: 'pizzas-35cm',
    price: 42.99,
    oldPrice: 49.00,
    description: 'Molho de tomate da casa, mussarela derretida, fatias finas de calabresa defumada crocante, cebola roxa marinada e orégano.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    badge: 'Mais Pedida',
    popular: true,
    rating: 4.9,
    serves: '3-4 pessoas (8 fatias)',
    sizes: [
      { name: 'Pop Individual (4 fatias)', price: 29.99 },
      { name: 'Grande 35cm (8 fatias)', price: 42.99 },
      { name: 'Família 40cm (12 fatias)', price: 58.90 }
    ],
    borderOptions: [
      { name: 'Sem Borda Recheada', price: 0 },
      { name: 'Borda Catupiry Original', price: 8.90 },
      { name: 'Borda Cheddar Cremoso', price: 8.90 }
    ]
  },
  {
    id: 'pz-quatro-queijos-35cm',
    name: 'Pizza 4 Queijos Nobres (35cm)',
    category: 'pizzas-35cm',
    price: 49.99,
    description: 'Molho de tomate, combinação perfeita de Mussarela, Provolone defumado, Gorgonzola italiano e Catupiry genuíno.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    badge: 'Clássica',
    popular: true,
    rating: 4.8,
    serves: '3-4 pessoas (8 fatias)',
    sizes: [
      { name: 'Pop Individual (4 fatias)', price: 34.99 },
      { name: 'Grande 35cm (8 fatias)', price: 49.99 },
      { name: 'Família 40cm (12 fatias)', price: 66.90 }
    ],
    borderOptions: [
      { name: 'Sem Borda Recheada', price: 0 },
      { name: 'Borda Catupiry Original', price: 8.90 },
      { name: 'Borda Vulcão 4 Queijos', price: 12.90 }
    ]
  },
  {
    id: 'pz-frango-catupiry-35cm',
    name: 'Pizza Frango com Catupiry (35cm)',
    category: 'pizzas-35cm',
    price: 47.99,
    description: 'Peito de frango cozido e desfiado fininho com tempero suave, coberto com generosa camada de Catupiry Original e azeitonas.',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80',
    badge: 'Favorita',
    popular: true,
    rating: 4.9,
    serves: '3-4 pessoas (8 fatias)',
    sizes: [
      { name: 'Pop Individual (4 fatias)', price: 32.99 },
      { name: 'Grande 35cm (8 fatias)', price: 47.99 },
      { name: 'Família 40cm (12 fatias)', price: 63.90 }
    ],
    borderOptions: [
      { name: 'Sem Borda Recheada', price: 0 },
      { name: 'Borda Catupiry Original', price: 8.90 },
      { name: 'Borda Cheddar Cremoso', price: 8.90 }
    ]
  },
  {
    id: 'pz-margherita-35cm',
    name: 'Pizza Margherita Napolitana (35cm)',
    category: 'pizzas-35cm',
    price: 46.99,
    description: 'Molho San Marzano, fatias de mozzarella, rodelas de tomate cereja confitado, folhas frescas de manjericão e azeite.',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
    popular: false,
    rating: 4.8,
    serves: '3-4 pessoas (8 fatias)',
    sizes: [
      { name: 'Pop Individual (4 fatias)', price: 31.99 },
      { name: 'Grande 35cm (8 fatias)', price: 46.99 },
      { name: 'Família 40cm (12 fatias)', price: 62.90 }
    ],
    borderOptions: [
      { name: 'Sem Borda Recheada', price: 0 },
      { name: 'Borda Catupiry Original', price: 8.90 }
    ]
  },
  {
    id: 'pz-lombo-canadense',
    name: 'Pizza Lombo Canadense com Catupiry (35cm)',
    category: 'pizzas-35cm',
    price: 49.99,
    description: 'Fatias de lombo canadense defumado de primeira linha, cebola no azeite, queijo mussarela e cobertura de Catupiry.',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
    popular: false,
    rating: 4.8,
    serves: '3-4 pessoas (8 fatias)',
    sizes: [
      { name: 'Pop Individual (4 fatias)', price: 33.99 },
      { name: 'Grande 35cm (8 fatias)', price: 49.99 },
      { name: 'Família 40cm (12 fatias)', price: 66.90 }
    ],
    borderOptions: [
      { name: 'Sem Borda Recheada', price: 0 },
      { name: 'Borda Catupiry Original', price: 8.90 }
    ]
  },

  // PIZZAS POPS (INDIVIDUAIS)
  {
    id: 'pop-calabresa',
    name: 'Pizza Pop Calabresa (Individual)',
    category: 'pizzas-pops',
    price: 29.99,
    oldPrice: 34.00,
    description: 'Tamanho individual com 4 fatias. Molho de tomate, mussarela, calabresa e cebola.',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
    badge: 'Individual',
    popular: true,
    rating: 4.8,
    serves: '1-2 pessoas (4 fatias)'
  },
  {
    id: 'pop-bacon',
    name: 'Pizza Pop Bacon Crocante (Individual)',
    category: 'pizzas-pops',
    price: 32.99,
    description: 'Mussarela derretida coberta com generosos cubos de bacon dourados no forno a lenha.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    popular: true,
    rating: 4.9,
    serves: '1-2 pessoas (4 fatias)'
  },
  {
    id: 'pop-lombo',
    name: 'Pizza Pop Lombo Canadense (Individual)',
    category: 'pizzas-pops',
    price: 33.99,
    description: 'Lombo canadense fatiado, cebola e Catupiry em massa artesanal de 4 fatias.',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
    popular: false,
    rating: 4.8,
    serves: '1-2 pessoas (4 fatias)'
  },

  // ESFIHAS SALGADAS ABERTAS
  {
    id: 'esf-carne-maktub',
    name: 'Esfiha Aberta de Carne com Tempero Árabe',
    category: 'esfihas-salgadas',
    price: 4.99,
    oldPrice: 5.90,
    description: 'Receita tradicional Maktub: carne moída fresca, tomate maduro, cebola picadinha e tempero árabe especial.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    badge: 'Tradicional',
    popular: true,
    rating: 5.0,
    serves: '1 unidade'
  },
  {
    id: 'esf-queijo-derretido',
    name: 'Esfiha Aberta de Três Queijos',
    category: 'esfihas-salgadas',
    price: 5.50,
    description: 'Queijo minas curado derretido com mussarela e toque suave de salsinha.',
    image: 'https://images.unsplash.com/photo-1598023696416-0193a0bcd302?auto=format&fit=crop&w=800&q=80',
    popular: true,
    rating: 4.8,
    serves: '1 unidade'
  },
  {
    id: 'esf-frango-catupiry',
    name: 'Esfiha Aberta de Frango com Catupiry',
    category: 'esfihas-salgadas',
    price: 5.90,
    description: 'Frango cozido e desfiado em fios tenros com generosa cobertura de Catupiry Original.',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=800&q=80',
    popular: true,
    rating: 4.9,
    serves: '1 unidade'
  },
  {
    id: 'esf-calabresa-queijo',
    name: 'Esfiha Aberta de Calabresa com Queijo',
    category: 'esfihas-salgadas',
    price: 5.50,
    description: 'Calabresa moída com tempero especial coberta com mussarela gratinada.',
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80',
    popular: false,
    rating: 4.7,
    serves: '1 unidade'
  },
  {
    id: 'esf-carne-seca-cream',
    name: 'Esfiha Aberta de Carne Seca com Cream Cheese',
    category: 'esfihas-salgadas',
    price: 6.90,
    description: 'Carne seca desfiada refogada na manteiga e finalizada com cream cheese e cebolinha.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    popular: false,
    rating: 4.9,
    serves: '1 unidade'
  },
  {
    id: 'esf-bacon-queijo',
    name: 'Esfiha Aberta de Bacon com Mussarela',
    category: 'esfihas-salgadas',
    price: 5.90,
    description: 'Cubinhos de bacon crocante salpicados sobre queijo mussarela derretido.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    popular: false,
    rating: 4.8,
    serves: '1 unidade'
  },

  // ESFIHAS DOCES
  {
    id: 'esf-nutella-morango',
    name: 'Esfiha Doce de Nutella com Morango',
    category: 'esfihas-doces',
    price: 6.90,
    description: 'Creme de avelã Nutella original com lâminas de morango fresco selecionado.',
    image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=800&q=80',
    badge: 'Delícia',
    popular: true,
    rating: 5.0,
    serves: '1 unidade'
  },
  {
    id: 'esf-doce-leite-nozes',
    name: 'Esfiha Doce de Leite com Nozes',
    category: 'esfihas-doces',
    price: 6.50,
    description: 'Doce de leite cremoso com pedaços crocantes de nozes nobres.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    popular: false,
    rating: 4.8,
    serves: '1 unidade'
  },
  {
    id: 'esf-romeu-julieta',
    name: 'Esfiha Aberta Romeu & Julieta',
    category: 'esfihas-doces',
    price: 5.90,
    description: 'Goiabada cascão cremosa derretida sobre queijo minas quentinho.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    popular: false,
    rating: 4.7,
    serves: '1 unidade'
  },
  {
    id: 'esf-brigadeiro',
    name: 'Esfiha Aberta de Brigadeiro Tradicional',
    category: 'esfihas-doces',
    price: 5.90,
    description: 'Chocolate cremoso ao leite com granulado de chocolate belga.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    popular: false,
    rating: 4.8,
    serves: '1 unidade'
  },

  // PIZZAS DOCES
  {
    id: 'pz-nutella-morango-doce',
    name: 'Pizza Doce Nutella com Morangos Frescos',
    category: 'pizzas-doces',
    price: 49.90,
    description: 'Nutella genuína, morangos frescos fatiados, raspas de chocolate branco belga e leite Ninho.',
    image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=800&q=80',
    badge: 'Irresistível',
    popular: true,
    rating: 5.0,
    serves: '2-3 pessoas (6 fatias)',
    sizes: [
      { name: 'Broto Doce (4 fatias)', price: 36.90 },
      { name: 'Média Doce (6 fatias)', price: 49.90 }
    ]
  },
  {
    id: 'pz-banoffee-doce',
    name: 'Pizza Doce Banoffee Especial',
    category: 'pizzas-doces',
    price: 44.90,
    description: 'Doce de leite argentino cremoso, bananas douradas no forno, farofa crocante e canela.',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80',
    popular: false,
    rating: 4.8,
    serves: '2-3 pessoas (6 fatias)'
  },

  // BEBIDAS
  {
    id: 'beb-coca-2l',
    name: 'Coca-Cola Original 2L (Super Gelada)',
    category: 'bebidas',
    price: 14.00,
    description: 'Garrafa pet de 2 Litros entregue super gelada para acompanhar seu pedido.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    serves: '4-5 copos'
  },
  {
    id: 'beb-guarana-2l',
    name: 'Guaraná Antarctica 2L (Gelado)',
    category: 'bebidas',
    price: 13.00,
    description: 'O autêntico refrigerante brasileiro em garrafa de 2 Litros super gelada.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    serves: '4-5 copos'
  },
  {
    id: 'beb-coca-lata',
    name: 'Coca-Cola Lata 350ml (Gelada)',
    category: 'bebidas',
    price: 6.50,
    description: 'Lata 350ml trincando de gelada.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    serves: '1 copo'
  },
  {
    id: 'beb-agua-500',
    name: 'Água Mineral sem Gás 500ml',
    category: 'bebidas',
    price: 4.00,
    description: 'Garrafa 500ml bem geladinha.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80',
    serves: '1 copo'
  }
];

export const VOLTA_REDONDA_NEIGHBORHOODS = [
  'Aterrado (Bairro da Pizzaria)',
  'Vila Santa Cecília',
  'Retiro',
  'Vila Rica',
  'Sessenta',
  'Santo Agostinho',
  'Ponte Alta',
  'Nossa Senhora das Graças',
  'Jardim Amália',
  'Bela Vista',
  'Conforto',
  'Laranjal',
  'São João',
  'Santa Cruz',
  'Vila Americana',
  'Água Limpa',
  'Belmonte',
  'Siderlândia',
  'Voldac',
  'Outro Bairro de Volta Redonda'
];

export const PIZZERIA_INFO = {
  name: 'Maktub Pizzaria & Esfiharia',
  city: 'Volta Redonda - RJ',
  phone: '(24) 3337-4377',
  phoneClean: '552433374377', // WhatsApp & Disk Entrega
  address: 'Av. Oscar de Almeida Gama, 263 - Aterrado, Volta Redonda - RJ',
  hours: 'Terça a Domingo: 18:00 às 22:30',
  instagram: '@maktub.voltaredonda',
  deliveryFee: 5.00,
  freeDeliveryThreshold: 75.00,
  isOpenNow: true
};
