
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllMovies } from '@/data/mockData';
import { Movie } from '@/data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const allMovies = getAllMovies();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filteredMovies = allMovies.filter(movie => 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.genres.some(genre => genre.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
    setSearchResults(filteredMovies);
  }, [searchQuery]);

  const handleMovieClick = (movieId: string) => {
    navigate(`/details/${movieId}`);
    onClose();
    setSearchQuery('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={open => !open && onClose()}>
      <DialogContent className="sm:max-w-md border-gray-800 bg-netflix-black p-0">
        <div className="flex items-center border-b border-gray-800 p-4">
          <Search className="h-5 w-5 text-gray-400 mr-2" />
          <Input
            className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white placeholder:text-gray-400"
            placeholder="Search for movies, TV shows, genres..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-4">
          {searchResults.length > 0 ? (
            <div className="space-y-4">
              {searchResults.map((movie) => (
                <div 
                  key={movie.id} 
                  className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer"
                  onClick={() => handleMovieClick(movie.id)}
                >
                  <img 
                    src={movie.posterUrl} 
                    alt={movie.title} 
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium text-white">{movie.title}</h4>
                    <p className="text-xs text-gray-400">{movie.genres.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : searchQuery.trim() !== '' ? (
            <div className="text-center py-8">
              <p className="text-gray-400">No results found for "{searchQuery}"</p>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
