
import { useParams, Navigate } from 'react-router-dom';
import { Play, Plus, Check, ThumbsUp, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getMovieById, getRelatedMovies } from '@/data/mockData';
import MainLayout from '@/layout/MainLayout';
import ContentRow from '@/components/ContentRow';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const movie = id ? getMovieById(id) : undefined;
  const relatedMovies = movie ? getRelatedMovies(movie) : [];
  const { toast } = useToast();
  const [isInList, setIsInList] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  if (!movie) {
    return <Navigate to="/" replace />;
  }

  const handleAddToList = () => {
    setIsInList(!isInList);
    toast({
      title: isInList ? "Removed from My List" : "Added to My List",
      description: isInList ? `${movie.title} has been removed from your list` : `${movie.title} has been added to your list`,
      duration: 2000,
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed Like" : "Added Like",
      description: isLiked ? `You no longer like ${movie.title}` : `You liked ${movie.title}`,
      duration: 2000,
    });
  };

  const handleShare = () => {
    // In a real app, we would show a share dialog
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Movie link copied to clipboard",
      duration: 2000,
    });
  };

  return (
    <MainLayout>
      <div className="pt-16">
        {/* Hero Banner */}
        <div className="relative w-full h-[70vh]">
          {movie.videoUrl ? (
            <div className="absolute inset-0 w-full h-full">
              <video
                src={movie.videoUrl}
                poster={movie.backdropUrl}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
              />
            </div>
          ) : (
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${movie.backdropUrl})` }}
            />
          )}
          <div className="netflix-gradient" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full md:w-3/4 lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{movie.title}</h1>
            <div className="flex flex-wrap gap-4">
              <Link to={`/watch/${movie.id}`}>
                <Button className="bg-white hover:bg-gray-200 text-black">
                  <Play size={18} className="mr-2" /> Play
                </Button>
              </Link>
              <Button 
                variant="secondary" 
                onClick={handleAddToList}
              >
                {isInList ? <Check size={18} className="mr-2" /> : <Plus size={18} className="mr-2" />}
                {isInList ? 'In My List' : 'My List'}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLike}
                className={isLiked ? "bg-white/20" : ""}
              >
                <ThumbsUp size={18} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleShare}
              >
                <Share2 size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Movie Info */}
        <div className="px-6 md:px-12 py-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-green-500 font-semibold">{movie.rating}</span>
              <span>{movie.year}</span>
              <span>{movie.duration}</span>
            </div>
            
            <p className="text-base text-gray-200">
              {movie.description}
            </p>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-400">Genres:</h3>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map(genre => (
                  <span key={genre} className="px-3 py-1 bg-netflix-gray rounded-full text-sm">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="w-full rounded-md overflow-hidden">
              <AspectRatio ratio={2/3}>
                <img 
                  src={movie.posterUrl} 
                  alt={movie.title} 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
        
        {/* Related Content */}
        {relatedMovies.length > 0 && (
          <div className="mt-8">
            <ContentRow title="More Like This" movies={relatedMovies} />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Details;
