
import MainLayout from '@/layout/MainLayout';
import HeroSection from '@/components/HeroSection';
import ContentRow from '@/components/ContentRow';
import { featuredMovie, categories } from '@/data/mockData';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection movie={featuredMovie} />
      <div className="mt-[-100px] relative z-10 py-4">
        {categories.map((category) => (
          <ContentRow 
            key={category.id} 
            title={category.name} 
            movies={category.movies} 
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default Index;
