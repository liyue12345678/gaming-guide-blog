export interface Game {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  platforms: string[];
  accentColor: string;
  accentGradient: string;
  featured: boolean;
  genre: string;
}

export const games: Game[] = [
  {
    slug: 'elden-ring',
    title: 'Elden Ring',
    description:
      'Master the Lands Between with expert boss strategies, optimal builds, and complete walkthroughs for every region.',
    coverImage: '/images/games/elden-ring.svg',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    accentColor: '#c7a04b',
    accentGradient: 'from-amber-500 to-yellow-600',
    featured: true,
    genre: 'Action RPG',
  },
  {
    slug: 'genshin-impact',
    title: 'Genshin Impact',
    description:
      'Character builds, artifact guides, elemental reaction mechanics, and Spiral Abyss strategies for every update.',
    coverImage: '/images/games/genshin-impact.svg',
    platforms: ['PC', 'PlayStation', 'Mobile'],
    accentColor: '#6bb5ff',
    accentGradient: 'from-blue-400 to-cyan-500',
    featured: true,
    genre: 'Action RPG / Gacha',
  },
  {
    slug: 'baldurs-gate-3',
    title: "Baldur's Gate 3",
    description:
      'Comprehensive class builds, companion guides, romance paths, and honour mode strategies for every act.',
    coverImage: '/images/games/baldurs-gate-3.svg',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    accentColor: '#c41e3a',
    accentGradient: 'from-red-600 to-red-800',
    featured: true,
    genre: 'CRPG',
  },
  {
    slug: 'valorant',
    title: 'Valorant',
    description:
      'Agent mastery guides, map callouts, lineup spots, weapon stats, and aim training routines to climb the ranks.',
    coverImage: '/images/games/valorant.svg',
    platforms: ['PC'],
    accentColor: '#ff4655',
    accentGradient: 'from-red-500 to-rose-600',
    featured: true,
    genre: 'Tactical FPS',
  },
  {
    slug: 'black-myth-wukong',
    title: 'Black Myth: Wukong',
    description:
      'Boss strategies, spell combos, secret areas, and true ending walkthrough for every chapter.',
    coverImage: '/images/games/wukong.svg',
    platforms: ['PC', 'PlayStation'],
    accentColor: '#e8a850',
    accentGradient: 'from-orange-400 to-amber-600',
    featured: false,
    genre: 'Action RPG',
  },
  {
    slug: 'star-rail',
    title: 'Honkai: Star Rail',
    description:
      'Character tier lists, relic optimization, team compositions, and Simulated Universe strategies.',
    coverImage: '/images/games/star-rail.svg',
    platforms: ['PC', 'Mobile', 'PlayStation'],
    accentColor: '#8b5cf6',
    accentGradient: 'from-purple-500 to-violet-700',
    featured: false,
    genre: 'Turn-Based RPG / Gacha',
  },
  {
    slug: 'delta-force',
    title: 'Delta Force',
    description:
      'Operator guides, weapon loadouts, map strategies, and tactical tips for every game mode in Delta Force.',
    coverImage: '/images/games/delta-force.svg',
    platforms: ['PC', 'PlayStation', 'Xbox', 'Mobile'],
    accentColor: '#4ade80',
    accentGradient: 'from-green-400 to-emerald-600',
    featured: true,
    genre: 'Tactical FPS',
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getFeaturedGames(): Game[] {
  return games.filter((g) => g.featured);
}

export function getGameSlugs(): string[] {
  return games.map((g) => g.slug);
}
