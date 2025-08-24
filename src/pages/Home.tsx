import { Calendar, Users, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import EventCountdown from '@/components/EventCountdown';
import QuoteOfTheDay from '@/components/QuoteOfTheDay';
import ContactForm from '@/components/ContactForm';
import video from '@/assets/WhatsApp Video 2025-08-16 at 22.22.40_7324f47d.mp4';
import eventsImage from '@/assets/Event 2/Copy of gec2.jpg';
import { useEffect, useState } from 'react';

// Example ongoing event data (replace with actual ongoing event details)
const initialOngoingEvent = {
  name: "Guest Lecture", // <-- Updated event name
  endTime: "2024-06-15T17:00:00Z" // <-- Keep or update the end time as needed
};

const Home = () => {
  const navItems = [
    { name: 'Events', path: '/events' },
    { name: 'Office Bearers', path: '/office-bearers' }
  ];

  const [ongoingEvent, setOngoingEvent] = useState<{ name: string; endTime: string } | null>(initialOngoingEvent);

  useEffect(() => {
    // Replace with your actual fetch logic or context/store
    fetch('/api/events/ongoing') // Example endpoint
      .then(res => res.json())
      .then(data => {
        // Expecting { name: string, endTime: string }
        setOngoingEvent(data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar className="text-white" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8 fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
              Building an
              <span className="block accent-gradient bg-clip-text text-transparent drop-shadow-lg">
                Equal Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed drop-shadow">
              A gender-equal society would be one where the word 'gender' does not exist: where everyone can be themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/events">
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary hover-lift text-lg px-8 py-4">
                  View Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="space-y-8 slide-up">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                  About <span className="text-primary">KEC </span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed drop-shadow">
                  Kongu Engineering College, one of the foremost multi professional research-led Institutions is internationally a recognized leader in professional and career-oriented education. 
                  It provides an integral, inter-disciplinary education - a unique intersection between theory and practice, passion and reason. 
                  The College offers courses of study that are on the frontiers of knowledge and it connects the spiritual and practical dimensions of intellectual life, in a stimulating environment that fosters rigorous scholarship and supportive community. 
                  This Institute is a great possession of the committed Trust called 'The Kongu Vellalar Institute of Technology Trust' in Erode District, Tamilnadu. 
                  The noble Trust has taken the institute to greater heights since its inception in 1983 and has established the college as a forum for imparting value based education for men and women.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                  About Our
                  <span className="text-primary"> Club</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed drop-shadow">
                  The Gender Equality Club at Kongu Engineering College works to promote equal opportunities, respect, and inclusiveness among all students on campus. The club creates awareness about the importance of gender balance in education, workplace, and society.
                  <br></br>
                  Through workshops, seminars, discussions, and cultural events, the club encourages students to break stereotypes, respect diversity, and build confidence. It also works hand-in-hand with the Women Development Cell to provide a safe and supportive environment, while motivating both male and female students to contribute positively to society. 
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Link to="/office-bearers">
                    <div className="w-12 h-12 button-gradient rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </Link>
                  <h3 className="text-xl font-semibold text-foreground">50+ Members</h3>
                  <p className="text-muted-foreground">Active student community</p>
                </div>
                
                <div className="space-y-2">
                  <Link to="/events">
                    <div className="w-12 h-12 button-gradient rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </Link>
                  <h3 className="text-xl font-semibold text-foreground">5+ Events</h3>
                  <p className="text-muted-foreground">Workshops and Guest lectures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote of the Day Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteOfTheDay />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${eventsImage})` }}
        >
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Ready to Make a
              <span className="block accent-gradient bg-clip-text text-transparent drop-shadow-lg">
                Difference?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow">
              Join our community of change-makers and help build a more inclusive 
              and equitable future for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gallery">
                <Button
                  size="lg"
                  variant="primary"
                  className="bg-white text-primary font-bold hover:bg-primary hover:text-white hover-lift text-lg px-8 py-4 border-2 border-white shadow-lg"
                >
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;