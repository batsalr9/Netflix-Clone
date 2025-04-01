
import { useState, useEffect } from 'react';
import { Play, Info, VolumeX, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Movie } from '@/data/mockData';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  movie: Movie;
}

const HeroSection = ({ movie }: HeroSectionProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-hide video after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlaying(false);
    }, 15000);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="netflix-hero relative">
      {isVideoLoaded && isPlaying && movie.videoUrl ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            src={movie.videoUrl}
            className="absolute w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            onEnded={() => setIsPlaying(false)}
            onLoad={() => setIsVideoLoaded(true)}
          />
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-16">
            <Button
              variant="secondary"
              size="icon"
              onClick={toggleMute}
              className="rounded-full bg-black bg-opacity-50 border border-white/20"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </Button>
          </div>
        </div>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.backdropUrl})` }}
        />
      )}
      
      <div className="netflix-gradient" />
      
      <div className="absolute bottom-0 left-0 p-6 md:p-12 lg:p-16 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{movie.title}</h1>
        <div className="flex items-center space-x-4 text-sm mb-4">
          <span className="text-green-500 font-semibold">{movie.rating}</span>
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
        </div>
        <p className="text-sm md:text-base text-gray-200 mb-6 line-clamp-3 md:line-clamp-4">
          {movie.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to={`/watch/${movie.id}`}>
            <Button className="bg-white hover:bg-gray-200 text-black">
              <Play size={18} className="mr-2" /> Play
            </Button>
          </Link>
          <Link to={`/details/${movie.id}`}>
            <Button variant="secondary">
              <Info size={18} className="mr-2" /> More Info
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
