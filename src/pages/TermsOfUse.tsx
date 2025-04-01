
import React from 'react';
import MainLayout from '@/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const TermsOfUse = () => {
  return (
    <MainLayout>
      <div className="pt-24 px-4 md:px-8 pb-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>
        
        <Card className="mb-6 bg-netflix-gray border-netflix-lightgray">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using the Streamflix service, you accept and agree to be bound by these Terms of Use.
              If you do not agree to these Terms, you should not use the service.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">2. Subscription</h2>
            <p className="text-gray-300 mb-4">
              Your Streamflix subscription gives you access to streaming content on the Streamflix platform.
              The subscription plans vary in features and pricing. Streamflix may change the plans and the
              price of its services from time to time.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">3. Free Trials</h2>
            <p className="text-gray-300 mb-4">
              Your Streamflix subscription may start with a free trial. The free trial eligibility
              is determined by Streamflix at its sole discretion and we may limit eligibility to prevent
              free trial abuse.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">4. Billing and Cancellation</h2>
            <p className="text-gray-300 mb-4">
              The subscription fee for the Streamflix service and any other charges you may incur
              will be billed to your payment method on the specific billing date indicated on your account page.
              You can cancel your subscription at any time, and you will continue to have access to the service
              through the end of your billing period.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">5. Streamflix Service</h2>
            <p className="text-gray-300 mb-4">
              You must be at least 18 years of age to subscribe to the Streamflix service.
              The Streamflix service and any content accessed through the service is for your personal
              and non-commercial use only and may not be shared with individuals beyond your household.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">6. Passwords and Account Access</h2>
            <p className="text-gray-300">
              You are responsible for maintaining the confidentiality of your account information,
              including your password, and for all activity that occurs under your account.
              Streamflix reserves the right to terminate accounts that may be deemed to be in violation
              of these Terms of Use.
            </p>
          </CardContent>
        </Card>
        
        <p className="text-sm text-gray-400">Last updated: April 1, 2024</p>
      </div>
    </MainLayout>
  );
};

export default TermsOfUse;
