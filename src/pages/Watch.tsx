
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getMovieById } from '@/data/mockData';
import VideoPlayer from '@/components/VideoPlayer';
import { Button } from '@/components/ui/button';

const Watch = () => {
  const { id } = useParams<{ id: string }>();
  const movie = id ? getMovieById(id) : undefined;
  const navigate = useNavigate();

  if (!movie) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="h-screen w-screen bg-black relative">
      <div className="absolute top-4 left-4 z-10">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white hover:bg-black/20 flex items-center space-x-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </Button>
      </div>
      
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <h2 className="text-xl font-medium">{movie.title}</h2>
      </div>
      
      <VideoPlayer movie={movie} autoPlay />
    </div>
  );
};

export default Watch;
