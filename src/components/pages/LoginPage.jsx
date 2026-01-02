import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../auth/AuthLayout';
import { GoogleButton, Divider, FormInput, SubmitButton, ForgotPasswordLink } from '../AuthComponents';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    email: '', 
    password: '' 
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, redirect to home
      console.log('Login attempt with:', formData);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Implement Google OAuth here
  };
  
  return (
    <AuthLayout>
      <GoogleButton onClick={handleGoogleLogin} />
      <Divider text="or continue with email" />
      
      {errors.general && (
        <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
          {errors.general}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="mt-7">
        <FormInput
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          error={errors.email}
        />
        
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          error={errors.password}
        />
        
        <ForgotPasswordLink />
        
        <SubmitButton disabled={isLoading} loading={isLoading}>
          Sign In
        </SubmitButton>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;