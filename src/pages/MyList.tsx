
import { useState, useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import ContentCard from '@/components/ContentCard';
import { getAllMovies } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';

const MyList = () => {
  // In a real app, this would fetch the user's saved movies
  // For now, we'll simulate a saved list with local state
  const [savedMovies, setSavedMovies] = useState(getAllMovies().slice(0, 6));
  const [isEmpty, setIsEmpty] = useState(false);
  
  useEffect(() => {
    // Check if the list is empty
    setIsEmpty(savedMovies.length === 0);
  }, [savedMovies]);
  
  const handleRemoveFromList = (movieId: string) => {
    setSavedMovies(prev => prev.filter(movie => movie.id !== movieId));
  };
  
  return (
    <MainLayout>
      <div className="pt-24 px-4 md:px-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">My List</h1>
        
        {isEmpty ? (
          <Card className="bg-netflix-gray border-netflix-lightgray">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <h2 className="text-xl text-center mb-4">Your list is empty</h2>
              <p className="text-gray-400 text-center max-w-md">
                Add movies and shows to your list to watch them later
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {savedMovies.map((movie) => (
              <div key={movie.id}>
                <ContentCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default MyList;
