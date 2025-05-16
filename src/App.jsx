import { useState } from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen hubot-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <HeroSection darkMode={darkMode} />
        <HowItWorks darkMode={darkMode} />
        <WhyChooseUs darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <ContactForm darkMode={darkMode} />
      </main>
      <ChatWidget darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;