// src/pages/LandingPage.jsx
import React, { useState } from 'react';
import Navbar from '../common/Navbar';
import headphones from '../../assets/headphones.svg';
import layout_dashboard from '../../assets/layout-dashboard.svg';
import shield_check from '../../assets/shield-check.svg';
import users from '../../assets/users.svg';
import vector from '../../assets/Vector.svg';
import code from '../../assets/code.svg';
import FeatureCard from '../common/FeatureCard';
import { useTheme } from '../../Context/useTheme';
import { useNavigate } from 'react-router-dom';

// Import your auth components
import { GoogleButton, Divider, FormInput, SubmitButton } from '../AuthComponents';
import Footer from '../common/Footer';

const LandingPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loginErrors, setLoginErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const features = [
    {
      title: 'Live Support',
      description: 'Get instant help while you code. Our real-time support ensures quick issue resolution, smooth collaboration, and uninterrupted development for teams of any size.',
      icon: <img src={headphones} alt="Live Support" className="w-10 h-10" />
    },
    {
      title: 'Team Collaboration',
      description: 'Collaborate with your team in real time. Edit code simultaneously, see live cursors, share changes instantly, and communicate efficiently without switching tools.',
      icon: <img src={users} alt="Team Collaboration" className="w-10 h-10" />
    },
    {
      title: 'Seamless Onboarding',
      description: 'Start coding in minutes. Simple setup, intuitive interface, and guided onboarding help developers and teams get productive from day one.',
      icon: <img src={layout_dashboard} alt="Seamless Onboarding" className="w-10 h-10" />
    },
    {
      title: 'Powerful Code Editor',
      description: 'Experience a fast, intelligent editor with syntax highlighting, auto-completion, multi-language support, and customizable workflows built for modern development.',
      icon: <img src={code} alt="Powerful Code Editor" className="w-10 h-10" />
    },
    {
      title: 'Code Quality & Security',
      description: 'Maintain high-quality code with built-in linking, version control integration, access management, and secure real-time synchronization.',
      icon: <img src={shield_check} alt="Code Quality & Security" className="w-10 h-10" />
    },
    {
      title: 'Real-Time Results',
      description: 'Track progress instantly. See changes as they happen, reduce conflicts, accelerate delivery, and turn collaboration into measurable results.',
      icon: <img src={vector} alt="Real-Time Results" className="w-10 h-10" />
    }
  ];

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
    if (loginErrors[name]) {
      setLoginErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateLogin = () => {
    const newErrors = {};
    
    if (!loginData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!loginData.password) {
      newErrors.password = 'Password is required';
    }
    
    return newErrors;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateLogin();
    if (Object.keys(validationErrors).length > 0) {
      setLoginErrors(validationErrors);
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Login successful:', loginData);
      // After successful login, close modal and redirect
      setShowLoginModal(false);
      navigate('/dashboard'); // Change to your dashboard route
    } catch (error) {
      console.error('Login error:', error);
      setLoginErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Implement Google OAuth here
  };
  
  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-[#EDF1FE]'
    }`}>
      <Navbar onLoginClick={() => setShowLoginModal(true)} />
      
      {/* Login Modal Overlay */}
      {showLoginModal && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
          {/* Backdrop - Dark blur effect */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-lg"
            onClick={() => setShowLoginModal(false)}
          />
          
          {/* Modal Content */}
          <div className="relative z-10000 w-full max-w-md animate-[fadeIn_0.3s_ease-out]">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={() => setShowLoginModal(false)}
                className="cursor-pointer absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10 p-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Login Form */}
              <div className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Welcome to Collixy
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sign in to continue coding with your team
                  </p>
                </div>
                
                {loginErrors.general && (
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg text-sm">
                    {loginErrors.general}
                  </div>
                )}
                
                <GoogleButton onClick={handleGoogleLogin} />
                <Divider text="or continue with email" />
                
                <form onSubmit={handleLoginSubmit} className="mt-6">
                  <FormInput
                    label="Email Address"
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    placeholder="you@example.com"
                    error={loginErrors.email}
                  />
                  
                  <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    placeholder="••••••••"
                    error={loginErrors.password}
                  />
                  
                  <div className="flex justify-between items-center mb-6">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 rounded" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Remember me
                      </span>
                    </label>
                    <button 
                      type="button"
                      className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                      onClick={() => {
                        setShowLoginModal(false);
                        // Navigate to forgot password page if you have one
                      }}
                    >
                      Forgot password?
                    </button>
                  </div>
                  
                  <SubmitButton disabled={isLoading} loading={isLoading}>
                    Sign In
                  </SubmitButton>
                </form>
                
                <p className="text-center text-gray-600 dark:text-gray-400 mt-6 text-sm">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setShowLoginModal(false);
                      navigate('/signup');
                    }}
                    className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <main className="grow pt-16">
        {/* Hero Section */}
        <section className={`
          relative
          px-4 sm:px-6 lg:px-8
          py-24 md:py-32 lg:py-40
          text-center
          overflow-hidden
          transition-colors duration-300
          ${theme === 'dark' 
            ? 'bg-linear-to-br from-gray-900/50 to-blue-900/20' 
            : 'bg-linear-to-br from-blue-50/50 to-purple-50/50'
          }
        `}>
          {/* Animated background pattern */}
          <div className="
            absolute
            inset-0
            opacity-10 dark:opacity-5
            bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI3NSIgaGVpZ2h0PSI3NSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDApIj48cGF0aCBkPSJNIDAgMCBMIDAgNzUgTCA3NSA3NSBMIDc1IDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')]
            animate-[moveBackground_20s_linear_infinite]
          " />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <h1 className={`
              text-4xl sm:text-6xl md:text-7xl
              font-black
              mb-6 md:mb-8
              leading-tight
              bg-clip-text text-transparent
              ${theme === 'dark'
                ? 'bg-linear-to-r from-blue-400 via-purple-400 to-blue-400'
                : 'bg-linear-to-r from-blue-600 via-purple-600 to-blue-600'
              }
            `}>
              Code With Your Team Live
            </h1>
            
            <p className={`
              text-xl md:text-2xl lg:text-2xl
              mb-10 md:mb-12 lg:mb-16
              max-w-3xl mx-auto
              leading-relaxed
              ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
            `}>
              Real-time collaborative coding platform for developers
            </p>
            
            <button 
              onClick={() => setShowLoginModal(true)}
              className={`
                relative
                text-white
                px-7 py-3 md:px-10 md:py-4
                text-xl md:text-2xl
                font-bold
                rounded-2xl
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                active:scale-95
                group
                overflow-hidden
                cursor-pointer
                ${theme === 'dark'
                  ? 'bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:shadow-blue-500/40'
                  : 'bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-blue-500/40'
                }
              `}
            >
              {/* Shimmer effect */}
              <span className="
                absolute
                inset-0
                bg-linear-to-r from-transparent via-white/20 to-transparent
                -translate-x-full
                group-hover:translate-x-full
                transition-transform duration-1000
                cursor-pointer
              " />
              
              Get Started
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className={`
          px-4 sm:px-6 lg:px-8
          py-20 md:py-28 lg:py-36
          max-w-7xl
          mx-auto
          transition-colors duration-300
          ${theme === 'dark' ? 'text-white' : ''}
        `}>
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <h2 className={`
              text-4xl sm:text-5xl md:text-6xl
              font-extrabold
              mb-6 md:mb-8
              relative
              inline-block
              ${theme === 'dark' ? 'text-white' : 'text-gray-800'}
            `}>
              Everything You Need to Code Together
              <span className={`
                absolute
                -bottom-4
                left-1/2
                transform -translate-x-1/2
                w-24 h-1.5 md:w-32 md:h-2
                rounded-full
                ${theme === 'dark'
                  ? 'bg-linear-to-r from-blue-400 to-purple-400'
                  : 'bg-linear-to-r from-blue-600 to-purple-600'
                }
              `} />
            </h2>
          </div>
          
          <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-8 lg:gap-10
          ">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                theme={theme}
              />
            ))}
          </div>
        </section>
        <Footer/>
      </main>
    </div>
  );
};

export default LandingPage;