
import { useState } from 'react';
import { Play, Info, Plus, Check, VolumeX, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Movie } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useToast } from '@/hooks/use-toast';

interface ContentCardProps {
  movie: Movie;
  width?: number;
  isExpanded?: boolean;
}

const ContentCard = ({ movie, width = 180, isExpanded = false }: ContentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInList, setIsInList] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const { toast } = useToast();

  const handleAddToList = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsInList(!isInList);
    
    toast({
      title: isInList ? "Removed from My List" : "Added to My List",
      description: isInList ? `${movie.title} has been removed from your list` : `${movie.title} has been added to your list`,
      duration: 2000,
    });
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <div 
      className={`relative netflix-card-hover ${isExpanded ? 'z-50' : ''}`}
      style={{ width: `${width}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/details/${movie.id}`}>
        <div className="overflow-hidden rounded-md">
          <AspectRatio ratio={2/3}>
            <img 
              src={movie.posterUrl} 
              alt={movie.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </AspectRatio>
          
          {isHovered && (
            <div className={`absolute inset-0 bg-black bg-opacity-75 rounded-md flex flex-col p-2 transition-all duration-300 ${isExpanded ? 'scale-110 -translate-y-[3%]' : ''}`}>
              {isExpanded && movie.videoUrl && (
                <div className="w-full mb-2 relative">
                  <AspectRatio ratio={16/9}>
                    <video 
                      src={movie.videoUrl} 
                      className="w-full rounded-t-md" 
                      autoPlay={isHovered}
                      loop
                      muted={isMuted}
                    />
                  </AspectRatio>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="absolute bottom-2 right-2 h-6 w-6 rounded-full bg-black bg-opacity-70"
                    onClick={toggleMute}
                  >
                    {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                  </Button>
                </div>
              )}
              
              <div className="flex space-x-2 mb-2">
                <Link to={`/watch/${movie.id}`} className="flex-shrink-0">
                  <Button size="icon" className="h-8 w-8 rounded-full bg-white hover:bg-gray-200 text-black">
                    <Play size={16} />
                  </Button>
                </Link>
                <Button 
                  size="icon" 
                  variant="secondary" 
                  className="h-8 w-8 rounded-full"
                  onClick={handleAddToList}
                >
                  {isInList ? <Check size={16} /> : <Plus size={16} />}
                </Button>
                <Link to={`/details/${movie.id}`} className="ml-auto">
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="h-8 w-8 rounded-full"
                  >
                    <Info size={16} />
                  </Button>
                </Link>
              </div>
              
              <h3 className="font-medium text-sm">{movie.title}</h3>
              
              <div className="flex items-center text-xs space-x-2 mt-1">
                <span className="text-green-500">{movie.rating}</span>
                <span>{movie.duration}</span>
              </div>
              
              <div className="flex flex-wrap gap-1 mt-1">
                {movie.genres.slice(0, 2).map((genre, index) => (
                  <span key={index} className="text-xs bg-netflix-gray px-1 rounded">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {(movie.isNew || movie.isTrending) && !isHovered && (
            <div className="absolute top-1 right-1 bg-netflix px-1 text-xs font-medium rounded">
              {movie.isNew ? 'NEW' : 'TRENDING'}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ContentCard;
