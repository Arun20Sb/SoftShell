import { Upload, Calculator, CreditCard } from 'lucide-react';

const HowItWorks = ({ darkMode }) => {
  const steps = [
    {
      id: 1,
      title: 'Upload License',
      description: 'Securely upload your software license details through our encrypted portal.',
      icon: <Upload size={40} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
    },
    {
      id: 2,
      title: 'Get Valuation',
      description: 'Our AI-powered system analyzes market data to provide an accurate valuation for your license.',
      icon: <Calculator size={40} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
    },
    {
      id: 3,
      title: 'Get Paid',
      description: 'Accept our offer and receive payment directly to your bank account within 24 hours.',
      icon: <CreditCard size={40} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
    },
  ];

  return (
    <section id="how-it-works" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            How It Works
          </h2>
          <p className={`max-w-3xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Converting your unused software licenses to cash has never been easier. Our streamlined process ensures you get the best value with minimal effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className={`rounded-xl p-8 text-center transition-transform duration-300 hover:transform hover:scale-105 ${
                darkMode ? 'bg-gray-700 shadow-gray-900/30' : 'bg-white shadow-lg'
              }`}
            >
              <div className="inline-flex items-center justify-center p-4 rounded-full mb-6 bg-opacity-10 bg-blue-100">
                {step.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {step.title}
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a 
            href="#contact" 
            className={`px-8 py-3 text-lg font-medium rounded-lg ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Start Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;