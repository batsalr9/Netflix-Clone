export interface Movie {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  backdropUrl: string;
  year: number;
  rating: string;
  duration: string;
  genres: string[];
  videoUrl?: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isTrending?: boolean;
}

export interface Category {
  id: string;
  name: string;
  movies: Movie[];
}

export const featuredMovie: Movie = {
  id: "m1",
  title: "The Midnight Shadow",
  description: "A detective with a troubled past must face his demons when a series of mysterious murders shake the city. As he delves deeper into the case, he discovers a conspiracy that goes all the way to the top.",
  posterUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=500&auto=format&fit=crop",
  backdropUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2000&auto=format&fit=crop",
  year: 2023,
  rating: "TV-MA",
  duration: "2h 15m",
  genres: ["Thriller", "Drama", "Mystery"],
  videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  isFeatured: true,
};

export const moviesData: Movie[] = [
  {
    id: "m2",
    title: "Eternal Echo",
    description: "Two strangers connected by a mysterious device that allows them to experience each other's lives must find each other before time runs out.",
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2000&auto=format&fit=crop",
    year: 2023,
    rating: "TV-14",
    duration: "1h 48m",
    genres: ["Sci-Fi", "Romance"],
    isTrending: true,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  },
  {
    id: "m3",
    title: "Azure Horizon",
    description: "A marine biologist discovers a new species that could change everything we know about evolution, but powerful forces want to keep it secret.",
    posterUrl: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2000&auto=format&fit=crop",
    year: 2022,
    rating: "PG-13",
    duration: "2h 05m",
    genres: ["Adventure", "Documentary"],
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  },
  {
    id: "m4",
    title: "The Last Stand",
    description: "In a post-apocalyptic world, a group of survivors must band together to fight off marauders and establish a new society.",
    posterUrl: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?q=80&w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?q=80&w=2000&auto=format&fit=crop",
    year: 2023,
    rating: "TV-MA",
    duration: "1h 55m",
    genres: ["Action", "Sci-Fi", "Thriller"],
    isNew: true,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  },
  {
    id: "m5",
    title: "Whispers in the Wind",
    description: "A writer retreats to a remote cabin to finish her novel, only to experience strange phenomena that seem connected to her story.",
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop",
    year: 2021,
    rating: "TV-14",
    duration: "1h 42m",
    genres: ["Horror", "Mystery"],
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  },
  {
    id: "m6",
    title: "Revolution's Dawn",
    description: "The true story of a peaceful protest that sparked a revolution and changed the course of history forever.",
    posterUrl: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?q=80&w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?q=80&w=2000&auto=format&fit=crop",
    year: 2022,
    rating: "R",
    duration: "2h 12m",
    genres: ["Drama", "Historical", "Political"],
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  },
  {
    id: "m7",
    title: "Neon Dreams",
    description: "In a cyberpunk future, a hacker discovers a digital consciousness that's evolving inside the network and must protect it from exploitation.",
    posterUrl: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2000&auto=format&fit=crop",
    year: 2023,
    rating: "TV-MA",
    duration: "2h 20m",
    genres: ["Sci-Fi", "Cyberpunk", "Action"],
    isNew: true,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  },
  {
    id: "m8",
    title: "Hearts of Stone",
    description: "Two rival sculptors in Renaissance Italy compete for the same prestigious commission, leading to a dangerous game of art and deception.",
    posterUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=2000&auto=format&fit=crop",
    year: 2021,
    rating: "PG-13",
    duration: "2h 28m",
    genres: ["Drama", "Historical", "Romance"],
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  },
  {
    id: "m9",
    title: "Digital Wasteland",
    description: "In a world where virtual reality has replaced real experiences, one hacker discovers the truth behind the system and fights to free humanity.",
    posterUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop",
    year: 2023,
    rating: "TV-MA",
    duration: "2h 08m",
    genres: ["Sci-Fi", "Action", "Thriller"],
    isNew: true,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  },
  {
    id: "m10",
    title: "Ocean's Whisper",
    description: "A marine biologist discovers a new species with extraordinary abilities, but a powerful corporation wants to exploit it for military purposes.",
    posterUrl: "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?q=80&w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?q=80&w=2000&auto=format&fit=crop",
    year: 2022,
    rating: "PG-13",
    duration: "1h 55m",
    genres: ["Adventure", "Drama", "Mystery"],
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  },
  {
    id: "m11",
    title: "Lost in Time",
    description: "When a physics experiment goes wrong, a scientist finds herself jumping between different time periods, trying to find her way back home.",
    posterUrl: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=2000&auto=format&fit=crop",
    year: 2023,
    rating: "TV-14",
    duration: "1h 52m",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    isTrending: true,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  },
  {
    id: "m12",
    title: "Midnight Requiem",
    description: "A renowned pianist returns to her hometown for a concert, only to uncover dark secrets about her family's past and a supernatural connection to the music.",
    posterUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2000&auto=format&fit=crop",
    year: 2022,
    rating: "TV-MA",
    duration: "2h 02m",
    genres: ["Horror", "Mystery", "Drama"],
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  },
  {
    id: "m13",
    title: "Kingdom of Sand",
    description: "An archaeologist discovers an ancient civilization buried beneath the desert that challenges everything we know about human history.",
    posterUrl: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=2000&auto=format&fit=crop",
    year: 2023,
    rating: "PG-13",
    duration: "2h 12m",
    genres: ["Adventure", "Historical", "Mystery"],
    isNew: true,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  },
  {
    id: "m14",
    title: "Crimson Heights",
    description: "A family moves into a seemingly perfect suburban neighborhood, only to discover that their neighbors are hiding dangerous secrets.",
    posterUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
    year: 2022,
    rating: "TV-MA",
    duration: "1h 48m",
    genres: ["Thriller", "Horror", "Mystery"],
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  },
  {
    id: "m15",
    title: "The Last Algorithm",
    description: "An AI researcher creates a groundbreaking algorithm that develops consciousness, leading to a philosophical journey about what it means to be alive.",
    posterUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2000&auto=format&fit=crop",
    year: 2023,
    rating: "PG-13",
    duration: "2h 05m",
    genres: ["Sci-Fi", "Drama", "Philosophy"],
    isTrending: true,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  },
  {
    id: "m16",
    title: "Urban Legends",
    description: "A journalist investigates a series of strange events in a small town that seem to be connected to old urban legends coming to life.",
    posterUrl: "https://images.unsplash.com/photo-1533922922960-9fceb9ef4733?q=80&w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1533922922960-9fceb9ef4733?q=80&w=2000&auto=format&fit=crop",
    year: 2022,
    rating: "TV-14",
    duration: "1h 58m",
    genres: ["Horror", "Mystery", "Thriller"],
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
  }
];

export const categories: Category[] = [
  {
    id: "c1",
    name: "Trending Now",
    movies: moviesData.filter(movie => movie.isTrending || Math.random() > 0.5),
  },
  {
    id: "c2",
    name: "New Releases",
    movies: moviesData.filter(movie => movie.isNew || Math.random() > 0.5),
  },
  {
    id: "c3",
    name: "Action & Adventure",
    movies: moviesData.filter(movie => movie.genres.includes("Action") || movie.genres.includes("Adventure")),
  },
  {
    id: "c4",
    name: "Drama",
    movies: moviesData.filter(movie => movie.genres.includes("Drama")),
  },
  {
    id: "c5",
    name: "Sci-Fi & Fantasy",
    movies: moviesData.filter(movie => movie.genres.includes("Sci-Fi")),
  },
];

export const allGenres = ["Action", "Adventure", "Comedy", "Crime", "Documentary", "Drama", "Fantasy", "Historical", "Horror", "Mystery", "Political", "Romance", "Sci-Fi", "Thriller"];

export const getMovieById = (id: string): Movie | undefined => {
  if (featuredMovie.id === id) return featuredMovie;
  return moviesData.find(movie => movie.id === id);
};

export const getRelatedMovies = (movie: Movie): Movie[] => {
  return moviesData
    .filter(m => m.id !== movie.id && m.genres.some(genre => movie.genres.includes(genre)))
    .slice(0, 4);
};

export const getAllMovies = (): Movie[] => {
  return [featuredMovie, ...moviesData];
};
