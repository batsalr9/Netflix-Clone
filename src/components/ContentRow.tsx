
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '@/data/mockData';
import ContentCard from './ContentCard';
import { Button } from '@/components/ui/button';

interface ContentRowProps {
  title: string;
  movies: Movie[];
}

const ContentRow = ({ title, movies }: ContentRowProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [delayHandler, setDelayHandler] = useState<number | null>(null);

  const scrollAmount = 400;

  const handleScroll = () => {
    if (!sliderRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    
    const { scrollLeft } = sliderRef.current;
    const left = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
    
    sliderRef.current.scrollTo({
      left,
      behavior: 'smooth',
    });
  };

  const handleMouseEnter = (index: number) => {
    if (delayHandler) window.clearTimeout(delayHandler);
    const handler = window.setTimeout(() => {
      setHoveredIndex(index);
    }, 800); // Delay before showing expanded card
    setDelayHandler(handler as unknown as number);
  };

  const handleMouseLeave = () => {
    if (delayHandler) window.clearTimeout(delayHandler);
    setDelayHandler(null);
    setHoveredIndex(null);
  };

  useEffect(() => {
    return () => {
      if (delayHandler) window.clearTimeout(delayHandler);
    };
  }, [delayHandler]);

  return (
    <div className="py-6 relative">
      <h2 className="text-xl md:text-2xl font-medium mb-4 px-4">{title}</h2>
      
      <div className="relative group">
        {showLeftArrow && (
          <Button 
            variant="ghost"
            size="icon"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full hidden md:flex"
            onClick={() => scroll('left')}
          >
            <ChevronLeft size={24} />
          </Button>
        )}
        
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll space-x-4 px-4 scrollbar-none scroll-smooth pb-10"
          onScroll={handleScroll}
        >
          {movies.map((movie, index) => (
            <div 
              key={movie.id} 
              className={`flex-shrink-0 transition-all duration-200 relative ${hoveredIndex === index ? 'scale-110 z-10' : 'z-0'}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <ContentCard 
                movie={movie} 
                width={180}
                isExpanded={hoveredIndex === index}
              />
            </div>
          ))}
        </div>
        
        {showRightArrow && (
          <Button 
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full hidden md:flex"
            onClick={() => scroll('right')}
          >
            <ChevronRight size={24} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ContentRow;
