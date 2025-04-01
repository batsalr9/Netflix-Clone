
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email || !password || !name) {
      setError('Please fill in all fields.');
      return;
    }
    
    if (!agreeTerms) {
      setError('You must agree to the terms and conditions.');
      return;
    }
    
    // For demo purposes, just redirect to home
    window.location.href = '/';
  };
  
  return (
    <div 
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2000&auto=format&fit=crop)'
      }}
    >
      <div className="max-w-md w-full space-y-8 bg-black bg-opacity-80 p-8 rounded-lg">
        <div>
          <Link to="/" className="flex justify-center mb-8">
            <span className="text-netflix text-4xl font-bold">STREAMFLIX</span>
          </Link>
          <h2 className="text-center text-3xl font-extrabold text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Join thousands of viewers today
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-900 border border-red-700 text-white px-4 py-3 rounded-md">
              {error}
            </div>
          )}
          
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#333] border-0 text-white placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#333] border-0 text-white placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#333] border-0 text-white placeholder-gray-500"
              />
            </div>
          </div>

          <div className="flex items-center">
            <Checkbox
              id="agree-terms"
              checked={agreeTerms}
              onCheckedChange={(checked) => setAgreeTerms(checked === true)}
              className="text-netflix focus:ring-netflix"
            />
            <label
              htmlFor="agree-terms"
              className="ml-2 block text-sm text-gray-300"
            >
              I agree to the{' '}
              <a href="#" className="text-netflix hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-netflix hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-netflix hover:bg-netflix-light"
            >
              Sign up
            </Button>
          </div>
          
          <div className="text-center text-sm text-gray-400">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="text-white hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
