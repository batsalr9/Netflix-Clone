
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout';
import ContentCard from '@/components/ContentCard';
import { getAllMovies, allGenres } from '@/data/mockData';
import { Button } from '@/components/ui/button';

const Browse = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialType = query.get('type') || 'all';
  const initialFilter = query.get('filter') || '';
  
  const [activeType, setActiveType] = useState(initialType);
  const [activeGenre, setActiveGenre] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const allMovies = getAllMovies();
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  
  useEffect(() => {
    let result = allMovies;
    
    // Filter by type (we don't have TV shows in our mock data, but would work with real data)
    if (activeType !== 'all') {
      // This is just a placeholder - in a real app, you'd have a type field
      result = result.filter(movie => 
        activeType === 'movie' ? !movie.title.includes('Series') : movie.title.includes('Series')
      );
    }
    
    // Filter by genre
    if (activeGenre) {
      result = result.filter(movie => 
        movie.genres.includes(activeGenre)
      );
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by 'new' or 'trending'
    if (initialFilter === 'new') {
      result = result.filter(movie => movie.isNew);
    } else if (initialFilter === 'trending') {
      result = result.filter(movie => movie.isTrending);
    }
    
    setFilteredMovies(result);
  }, [activeType, activeGenre, searchTerm, initialFilter, allMovies]);
  
  const handleGenreClick = (genre: string) => {
    if (activeGenre === genre) {
      setActiveGenre(null);
    } else {
      setActiveGenre(genre);
    }
  };
  
  return (
    <MainLayout>
      <div className="pt-24 px-4 md:px-8">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold">
              {activeGenre ? activeGenre : initialFilter === 'new' ? 'New Releases' : initialFilter === 'trending' ? 'Trending Now' : 'Browse'}
            </h1>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-netflix-gray text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-netflix"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={activeType === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveType('all')}
              className="text-sm"
            >
              All
            </Button>
            <Button
              variant={activeType === 'movie' ? 'default' : 'outline'}
              onClick={() => setActiveType('movie')}
              className="text-sm"
            >
              Movies
            </Button>
            <Button
              variant={activeType === 'tv' ? 'default' : 'outline'}
              onClick={() => setActiveType('tv')}
              className="text-sm"
            >
              TV Shows
            </Button>
          </div>
          
          <div className="overflow-x-auto pb-4 mb-4">
            <div className="flex space-x-2">
              {allGenres.map((genre) => (
                <Button
                  key={genre}
                  variant={activeGenre === genre ? 'default' : 'outline'}
                  onClick={() => handleGenreClick(genre)}
                  className="text-sm whitespace-nowrap"
                >
                  {genre}
                </Button>
              ))}
            </div>
          </div>
          
          {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {filteredMovies.map((movie) => (
                <div key={movie.id}>
                  <ContentCard movie={movie} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <p className="text-xl text-gray-400 mb-4">No results found</p>
              <p className="text-gray-500">
                Try adjusting your filters or search term
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Browse;
