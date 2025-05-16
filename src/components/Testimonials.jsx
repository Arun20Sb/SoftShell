import { Star } from 'lucide-react';

const Testimonials = ({ darkMode }) => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'IT Director',
      company: 'Innovate Solutions',
      text: 'SoftSell made it incredibly easy to recover value from our unused enterprise licenses. The valuation was fair and the payment was processed quickly. I highly recommend their service.',
      stars: 5,
      image: '/person1.png',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'TechForward Inc.',
      text: 'As we transitioned to cloud services, we had dozens of perpetual licenses sitting unused. SoftSell helped us convert those assets into capital we could reinvest. The process was seamless.',
      stars: 5,
      image: '/person2.png',
    },
  ];

  return (
    <section id="testimonials" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            What Our Customers Say
          </h2>
          <p className={`max-w-3xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Don't just take our word for it. Here's what some of our satisfied customers have to say about their experience with SoftSell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`p-8 rounded-xl ${
                darkMode 
                  ? 'bg-gray-700' 
                  : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="flex mr-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={20} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>
              </div>
              <p className={`text-lg italic mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;