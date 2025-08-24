import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  content: string;
  rating: number;
}

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Student",
      department: "Computer Science Engineering",
      image: "/api/placeholder/100/100?text=PS",
      content: "Being part of the Gender Equality Club has completely changed my perspective. The workshops and discussions have given me the confidence to speak up and advocate for change. It's amazing to see how we're building a more inclusive campus together.",
      rating: 5
    },
    {
      id: 2,
      name: "Arjun Kumar",
      role: "Student",
      department: "Electrical Engineering",
      image: "/api/placeholder/100/100?text=AK",
      content: "I joined the club to learn more about gender equality and I've been blown away by the impact we've made. The events are not just educational but also create a sense of community. Everyone should experience this.",
      rating: 5
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      role: "Guest Speaker",
      department: "Gender Studies, MIT",
      image: "/api/placeholder/100/100?text=SJ",
      content: "I was impressed by the level of engagement and thoughtful questions from the students. The Gender Equality Club is doing exceptional work in creating awareness and fostering meaningful discussions. This is exactly what educational institutions need.",
      rating: 5
    },
    {
      id: 4,
      name: "Meera Patel",
      role: "Alumni",
      department: "Information Technology",
      image: "/api/placeholder/100/100?text=MP",
      content: "Even after graduating, I still feel connected to the club's mission. The skills and values I learned here continue to influence my professional life. I'm proud to have been part of such an impactful initiative.",
      rating: 5
    },
    {
      id: 5,
      name: "Rahul Verma",
      role: "Student",
      department: "Mechanical Engineering",
      image: "/api/placeholder/100/100?text=RV",
      content: "The club has taught me that gender equality is everyone's responsibility. Through various activities, I've learned to be more empathetic and understanding. It's made me a better person and leader.",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Community Says
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from students, alumni, and guest speakers about their experiences with our Gender Equality Club
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Testimonial Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Rating */}
                <div className="flex justify-center items-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-xl text-foreground/80 italic leading-relaxed mb-8 max-w-3xl mx-auto">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center space-y-3">
                  <Avatar className="w-16 h-16 ring-4 ring-primary/20">
                    <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-lg font-semibold">
                      {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{currentTestimonial.name}</h4>
                    <p className="text-primary font-medium">{currentTestimonial.role}</p>
                    <p className="text-muted-foreground text-sm">{currentTestimonial.department}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center mt-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-play
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
