import { Shield, Zap, DollarSign, UserCheck } from 'lucide-react';

const WhyChooseUs = ({ darkMode }) => {
  const features = [
    {
      id: 1,
      title: 'Maximum Value',
      description: 'Our market analytics ensure you get the best possible price for your software licenses.',
      icon: <DollarSign size={32} className={darkMode ? 'text-green-400' : 'text-green-600'} />,
    },
    {
      id: 2,
      title: 'Secure Transactions',
      description: 'End-to-end encryption and compliance with industry standards keep your data safe.',
      icon: <Shield size={32} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
    },
    {
      id: 3,
      title: 'Fast Processing',
      description: 'Complete the entire process, from valuation to payment, in less than 48 hours.',
      icon: <Zap size={32} className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} />,
    },
    {
      id: 4,
      title: 'Expert Support',
      description: 'Our team of license specialists is available 24/7 to guide you through the process.',
      icon: <UserCheck size={32} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />,
    },
  ];

  return (
    <section id="why-choose-us" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Why Choose SoftSell
          </h2>
          <p className={`max-w-3xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            We've revolutionized the software license resale market with our innovative approach and customer-first philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={`p-6 rounded-lg ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-white shadow-md hover:shadow-lg'
              } transition-all duration-300`}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;