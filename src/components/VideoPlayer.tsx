
import { useState, useRef, useEffect } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, SkipBack, 
  SkipForward, X, ArrowLeft
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Movie } from '@/data/mockData';

interface VideoPlayerProps {
  movie: Movie;
  autoPlay?: boolean;
}

const VideoPlayer = ({ movie, autoPlay = true }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Autoplay was prevented, set playing to false
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    // Hide controls after 3 seconds of inactivity
    if (isControlsVisible) {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }

      controlsTimeoutRef.current = setTimeout(() => {
        if (isPlaying) {
          setIsControlsVisible(false);
        }
      }, 3000);
    }

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isControlsVisible, isPlaying]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setProgress((videoRef.current.currentTime / duration) * 100);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && duration) {
      const progressBar = e.currentTarget;
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
      const clickPercentage = clickPosition / progressBar.clientWidth;
      const seekTime = duration * clickPercentage;
      
      videoRef.current.currentTime = seekTime;
      setProgress(clickPercentage * 100);
    }
  };

  const handleMouseMove = () => {
    setIsControlsVisible(true);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        }).catch((err) => {
          console.error(`Error attempting to exit full-screen mode: ${err.message}`);
        });
      }
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div 
      className="relative w-full h-full bg-black"
      onMouseMove={handleMouseMove}
      onClick={() => isPlaying ? setIsPlaying(false) : setIsPlaying(true)}
    >
      <video
        ref={videoRef}
        src={movie.videoUrl}
        className="w-full h-full"
        poster={movie.backdropUrl}
        autoPlay={autoPlay}
        playsInline
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onClick={(e) => e.stopPropagation()}
      />

      {/* Video Controls */}
      {isControlsVisible && (
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 flex flex-col justify-between p-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top controls */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={goBack} className="text-white">
              <ArrowLeft size={24} className="mr-2" /> Back
            </Button>
            <Button variant="ghost" onClick={goBack} size="icon" className="text-white">
              <X size={24} />
            </Button>
          </div>
          
          {/* Center play/pause */}
          <div className="flex justify-center items-center">
            {!isPlaying && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full w-16 h-16 bg-white/20 backdrop-blur-sm"
                onClick={() => setIsPlaying(true)}
              >
                <Play size={30} fill="white" />
              </Button>
            )}
          </div>
          
          {/* Bottom controls */}
          <div className="space-y-2">
            {/* Progress bar */}
            <div 
              className="w-full h-1 bg-gray-600 cursor-pointer relative"
              onClick={handleProgressBarClick}
            >
              <div 
                className="absolute h-full bg-netflix"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(!isPlaying);
                  }}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMuted(!isMuted);
                  }}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </Button>
                
                <div className="text-sm text-white">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
              >
                <Maximize size={20} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
