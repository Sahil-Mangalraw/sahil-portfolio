import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Mr. Vimal Daga',
      role: 'Founder, LinuxWorld Informatics',
      content: 'Sahil shows curiosity and initiative in DevOps, GenOps, and automation.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-[#475569]'}
      />
    ));
  };

  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-4">
            What Others Say About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#F59E0B] mx-auto mb-6"></div>
          <p className="text-xl text-[#94a3b8]">
            Feedback from mentors, colleagues, and collaborators
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="bg-[#1e293b] p-8 md:p-12 rounded-2xl shadow-lg border border-[#475569] hover-lift animate-scale-in">
            <div className="flex items-center justify-center mb-6">
              <div className="flex gap-1">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
            </div>
            
            <div className="flex justify-center mb-6">
              <Quote size={40} className="text-[#3B82F6]" />
            </div>
            
            <blockquote className="text-xl md:text-2xl text-[#94a3b8] italic text-center mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#475569]"
              />
              <div className="text-center">
                <p className="font-bold text-[#f1f5f9] text-lg">{testimonials[currentTestimonial].name}</p>
                <p className="text-[#94a3b8]">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-[#1e293b] p-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 hover:scale-110 border border-[#475569] text-[#f1f5f9]"
              >
                <ChevronLeft size={24} className="text-[#3B82F6]" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-[#1e293b] p-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 hover:scale-110 border border-[#475569] text-[#f1f5f9]"
              >
                <ChevronRight size={24} className="text-[#3B82F6]" />
              </button>
            </>
          )}

          {/* Dots indicator */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition duration-300 ${
                    index === currentTestimonial
                      ? 'bg-[#3B82F6] scale-125'
                      : 'bg-[#475569] hover:bg-[#64748b]'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;