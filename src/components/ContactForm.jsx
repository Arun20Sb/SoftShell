import { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const licenseTypes = [
    { value: '', label: 'Select License Type' },
    { value: 'enterprise', label: 'Enterprise License' },
    { value: 'individual', label: 'Individual License' },
    { value: 'subscription', label: 'Subscription License' },
    { value: 'perpetual', label: 'Perpetual License' },
    { value: 'volume', label: 'Volume License' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    // License type validation
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would send the form data to a server here
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-blue-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get in Touch
          </h2>
          <p className={`max-w-3xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Ready to sell your unused software licenses? Fill out the form below and our team will get back to you within 24 hours with a valuation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form 
            onSubmit={handleSubmit} 
            className={`rounded-xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}
          >
            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-100 border border-green-200 text-green-700 flex items-center">
                <div className="mr-3 bg-green-200 rounded-full p-1">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
                <span>Thank you! Your message has been sent. We'll be in touch soon.</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Full Name*
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-200' 
                      : `${darkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-200'}`
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="col-span-1">
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Email Address*
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-200' 
                      : `${darkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-200'}`
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="col-span-1">
                <label 
                  htmlFor="company" 
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Company Name*
                </label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                    errors.company 
                      ? 'border-red-500 focus:ring-red-200' 
                      : `${darkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-200'}`
                  }`}
                  placeholder="Acme Inc."
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.company}
                  </p>
                )}
              </div>

              <div className="col-span-1">
                <label 
                  htmlFor="licenseType" 
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  License Type*
                </label>
                <select 
                  id="licenseType" 
                  name="licenseType" 
                  value={formData.licenseType}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                    errors.licenseType 
                      ? 'border-red-500 focus:ring-red-200' 
                      : `${darkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-200'}`
                  }`}
                >
                  {licenseTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.licenseType && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.licenseType}
                  </p>
                )}
              </div>

              <div className="col-span-1 md:col-span-2">
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Message*
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-200' 
                      : `${darkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-200'}`
                  }`}
                  placeholder="Please describe the software licenses you're looking to sell..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button 
                type="submit" 
                className={`px-6 py-3 rounded-lg font-medium flex items-center ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Submit Request
                <Send size={18} className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;