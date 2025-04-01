
import React from 'react';
import MainLayout from '@/layout/MainLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HelpCenter = () => {
  return (
    <MainLayout>
      <div className="pt-24 px-4 md:px-8 pb-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Help Center</h1>
        
        <Card className="mb-8 bg-netflix-gray border-netflix-lightgray">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Streamflix?</AccordionTrigger>
                <AccordionContent>
                  Streamflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>How much does Streamflix cost?</AccordionTrigger>
                <AccordionContent>
                  Watch Streamflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Where can I watch?</AccordionTrigger>
                <AccordionContent>
                  Watch anywhere, anytime. Sign in with your Streamflix account to watch instantly on the web at streamflix.com from your personal computer or on any internet-connected device that offers the Streamflix app.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I cancel?</AccordionTrigger>
                <AccordionContent>
                  Streamflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-netflix-gray border-netflix-lightgray">
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Need more help? Our support team is available 24/7.</p>
              <div className="flex flex-col space-y-2">
                <a href="mailto:support@streamflix.com" className="text-netflix hover:underline">
                  support@streamflix.com
                </a>
                <span>1-800-STREAM-FX</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-netflix-gray border-netflix-lightgray">
            <CardHeader>
              <CardTitle>Device Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Streamflix is available on these devices:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Smart TVs</li>
                <li>Game consoles</li>
                <li>Streaming devices</li>
                <li>Set-top boxes</li>
                <li>Blu-ray players</li>
                <li>Mobile devices & tablets</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default HelpCenter;
