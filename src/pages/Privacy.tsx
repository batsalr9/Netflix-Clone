
import React from 'react';
import MainLayout from '@/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const Privacy = () => {
  return (
    <MainLayout>
      <div className="pt-24 px-4 md:px-8 pb-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <Card className="mb-6 bg-netflix-gray border-netflix-lightgray">
          <CardContent className="pt-6">
            <p className="text-gray-300 mb-6">
              This Privacy Policy explains our practices regarding the collection, use, and disclosure of your information
              through the Streamflix service.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">1. Information Collection</h2>
            <p className="text-gray-300 mb-4">
              We collect information when you create an account, use our service, or contact customer service.
              This information includes your name, email address, payment method, viewing history, search queries,
              device information, and IP address.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">2. Use of Information</h2>
            <p className="text-gray-300 mb-4">
              We use your information to provide, analyze, administer, enhance, and personalize our services,
              process your subscription, communicate with you, and prevent fraud and other illegal activities.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">3. Disclosure of Information</h2>
            <p className="text-gray-300 mb-4">
              We may disclose your information to service providers who perform services on our behalf,
              to partners with whom we offer co-branded services or products, and as required by law.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">4. Your Choices</h2>
            <p className="text-gray-300 mb-4">
              You can review and update your personal information in your account settings.
              You can also request to delete your account by contacting our customer service.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">5. Security</h2>
            <p className="text-gray-300 mb-4">
              We use reasonable administrative, logical, physical, and managerial measures to safeguard
              your personal information against loss, theft, and unauthorized access.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">6. Children's Privacy</h2>
            <p className="text-gray-300">
              Our services are not directed to children under the age of 13, and we do not knowingly
              collect personal information from children under 13.
            </p>
          </CardContent>
        </Card>
        
        <p className="text-sm text-gray-400">Last updated: April 1, 2024</p>
      </div>
    </MainLayout>
  );
};

export default Privacy;
