import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Mr. Vimal Dadhich',
      role: 'Founder, LinuxWorld Informatics',
      content: 'Sahil is a self-driven student who takes initiative to build real-world automation tools. His interest in DevOps and cloud platforms is outstanding at this stage of his career.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Octopyder Dev Team',
      role: 'Development Team',
      content: 'We appreciated Sahil\'s hands-on approach and fast grasp of Flutter and AI-based logic. He showed true dedication during his internship with us.',
      rating: 4,
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Startup Founder',
      role: 'Accurate Solutions',
      content: 'Sahil worked well with our early-stage team and contributed with research, brainstorming, and early product development for student-hostel matchmaking.',
      rating: 4,
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
            What Others Say About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#68bbe3] via-[#0e86d4] to-[#055c9d] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Feedback from mentors, colleagues, and collaborators
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <div className="flex gap-1">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 italic text-center mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              />
              <div className="text-center">
                <p className="font-bold text-[#1F2937] text-lg">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 hover:scale-110 border border-gray-200"
          >
            <ChevronLeft size={24} className="text-[#3B82F6]" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 hover:scale-110 border border-gray-200"
          >
            <ChevronRight size={24} className="text-[#3B82F6]" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  index === currentTestimonial
                    ? 'bg-[#3B82F6] scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All testimonials grid - hidden on mobile */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`p-6 rounded-xl transition duration-300 cursor-pointer ${
                index === currentTestimonial
                  ? 'bg-[#3B82F6] text-white shadow-lg scale-105'
                  : 'bg-white hover:bg-gray-50 shadow-md'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex justify-center mb-3">
                <div className="flex gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className={`text-sm mb-4 text-center ${
                index === currentTestimonial ? 'text-white' : 'text-gray-600'
              }`}>
                "{testimonial.content.substring(0, 100)}..."
              </p>
              
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className={`font-semibold text-sm ${
                    index === currentTestimonial ? 'text-white' : 'text-[#1F2937]'
                  }`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-xs ${
                    index === currentTestimonial ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    {testimonial.role}
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