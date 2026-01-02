import React from 'react';

// Google Sign-in Button Component
export const GoogleButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-full p-3.5 flex items-center justify-center gap-3 mb-6 bg-white border-2 border-gray-200 rounded-xl text-gray-700 font-medium text-sm md:text-base cursor-pointer transition-all hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5"
  >
    <span className="font-bold text-lg bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">
      G
    </span>
    Continue with Google
  </button>
);

// Divider Component
export const Divider = ({ text = 'or' }) => (
  <div className="relative text-center my-7 text-gray-400 text-sm">
    <span className="relative z-10 px-3 bg-white dark:bg-gray-900">{text}</span>
    <div className="absolute left-0 right-0 top-1/2 border-t border-gray-200 dark:border-gray-800"></div>
  </div>
);

// Form Input Component
export const FormInput = ({ label, type = 'text', name, value, onChange, placeholder, error }) => (
  <div className="mb-6">
    <label htmlFor={name} className="block text-sm font-semibold text-gray-900 dark:text-white mb-2.5">
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-3 border rounded-xl text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 transition-all ${
        error 
          ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
          : 'border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500'
      }`}
    />
    {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
  </div>
);

// Submit Button Component
export const SubmitButton = ({ children, disabled, loading, onClick, type = 'submit' }) => (
  <button
    type={type}
    disabled={disabled || loading}
    onClick={onClick}
    className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 text-base font-semibold mt-3 rounded-xl border-none cursor-pointer transition-all ${
      disabled || loading 
        ? 'opacity-70 cursor-not-allowed' 
        : 'hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30'
    }`}
  >
    {loading ? (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
        <span className="ml-2">Processing...</span>
      </div>
    ) : (
      children
    )}
  </button>
);

// Optional: Forgot Password Link Component
export const ForgotPasswordLink = () => (
  <div className="text-right mb-6">
    <a 
      href="/forgot-password" 
      className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
    >
      Forgot password?
    </a>
  </div>
);

// Optional: Remember Me Checkbox Component
export const RememberMeCheckbox = ({ checked, onChange }) => (
  <div className="flex items-center mb-6">
    <input
      type="checkbox"
      id="remember"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    />
    <label htmlFor="remember" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
      Remember me
    </label>
  </div>
);