
import React from 'react';
import MainLayout from '@/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <MainLayout>
      <div className="pt-24 px-4 md:px-8 pb-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About Streamflix</h1>
        
        <div className="grid gap-8">
          <Card className="bg-netflix-gray border-netflix-lightgray">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2022, Streamflix has quickly grown to become one of the leading streaming services worldwide.
                Our mission is to entertain the world by providing access to the best movies, TV shows, documentaries, and more.
              </p>
              <p className="text-gray-300">
                What started as a small startup has evolved into a global entertainment platform with millions of subscribers
                in over 190 countries enjoying our content in numerous languages.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-netflix-gray border-netflix-lightgray">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-300">
                We believe entertainment has the power to connect people across cultures and backgrounds.
                By bringing diverse stories to screens everywhere, we aim to create moments of joy,
                inspiration, and understanding that resonate with audiences around the world.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-netflix-gray border-netflix-lightgray">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              <p className="text-gray-300 mb-4">
                Behind Streamflix is a diverse team of passionate individuals dedicated to creating
                the best streaming experience possible. From our content curators to our engineering team,
                everyone plays a vital role in bringing Streamflix to life.
              </p>
              <p className="text-gray-300">
                We're always looking for talented people to join our team. Check out our careers page
                for current opportunities.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-netflix-gray border-netflix-lightgray">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Corporate Responsibility</h2>
              <p className="text-gray-300">
                At Streamflix, we believe in giving back to communities and reducing our environmental impact.
                Through our Streamflix Foundation, we support various initiatives related to education,
                environmental conservation, and digital inclusion. We're committed to operating sustainably
                and creating positive social change.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
