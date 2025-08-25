import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, ChevronDown, Search, Filter, Users, Award } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';


const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const events = [
    {
      id: 1,
      title: "Inaugural Function",
      date: "3rd week of August, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Main Auditorium",
      description: "Kickoff event for the academic year with expert lectures.",
      status: "completed",
      category: "Event",
      image: "/api/placeholder/400/200?text=Inaugural+Function",
      attendees: 150,
      highlights: ["Expert Speakers", "Networking", "Refreshments"]
    },
    {
      id: 2,
      title: "Prometheus '25 - Intra College Symposium",
      date: "3rd week of September, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Conference Hall",
      description: "Technical symposium with presentations and competitions.",
      status: "upcoming",
      category: "Symposium",
      image: "/api/placeholder/400/200?text=Prometheus+25",
      attendees: 200,
      highlights: ["Technical Presentations", "Competitions", "Prizes"]
    },
    {
      id: 3,
      title: "Guest Lecture",
      date: "August 30, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "CT-UG Seminar Hall",
      description: "Lecture by an industry expert on sustainability.",
      status: "ongoing",
      category: "Lecture",
      image: "/api/placeholder/400/200?text=Guest+Lecture",
      attendees: 80,
      highlights: ["Industry Expert", "Q&A Session", "Certificate"]
    },
    {
      id: 4,
      title: "Rudra' 25 - International Men's Day",
      date: "4th week of November, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Main Hall",
      description: "Celebration and awareness program for International Men's Day.",
      status: "upcoming",
      category: "Awareness",
      image: "/api/placeholder/400/200?text=Rudra+25",
      attendees: 120,
      highlights: ["Awareness Program", "Cultural Activities", "Discussion"]
    },
    {
      id: 5,
      title: "Equality Through Art",
      date: "4th week of December, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Art Gallery",
      description: "Art event promoting equality and inclusion.",
      status: "upcoming",
      category: "Art",
      image: "/api/placeholder/400/200?text=Equality+Art",
      attendees: 90,
      highlights: ["Art Exhibition", "Workshops", "Live Performances"]
    },
    {
      id: 6,
      title: "Workshop on AI",
      date: "3rd week of January, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Innovation Center",
      description: "Hands-on workshop on Artificial Intelligence.",
      status: "upcoming",
      category: "Workshop",
      image: "/api/placeholder/400/200?text=AI+Workshop",
      attendees: 60,
      highlights: ["Hands-on Training", "AI Tools", "Project Work"]
    },
    {
      id: 7,
      title: "Hackathon (Both hardware and software)",
      date: "2nd week of February, 2026",
      time: "9:00 AM - Next Day 9:00 AM",
      location: "Innovation Center",
      description: "24-hour hackathon for hardware and software solutions.",
      status: "upcoming",
      category: "Hackathon",
      image: "/api/placeholder/400/200?text=Hackathon",
      attendees: 100,
      highlights: ["24-hour Challenge", "Mentorship", "Prizes"]
    },
    {
      id: 8,
      title: "Aurora '25 – International Women's Day",
      date: "1st week of March, 2026",
      time: "10:00 AM - 1:00 PM",
      location: "Main Hall",
      description: "Celebration and awareness program for International Women's Day.",
      status: "upcoming",
      category: "Awareness",
      image: "/api/placeholder/400/200?text=Aurora+25",
      attendees: 150,
      highlights: ["Celebration", "Awareness", "Cultural Program"]
    },
    {
      id: 9,
      title: "Awareness Program",
      date: "1st week of April, 2026",
      time: "2:00 PM - 4:00 PM",
      location: "Seminar Hall",
      description: "Program to raise awareness on sustainability topics.",
      status: "upcoming",
      category: "Awareness",
      image: "/api/placeholder/400/200?text=Awareness+Program",
      attendees: 75,
      highlights: ["Awareness", "Discussion", "Materials"]
    },
    {
      id: 10,
      title: "Valedictory Function",
      date: "3rd week of April, 2026",
      time: "10:00 AM - 12:00 PM",
      location: "Main Auditorium",
      description: "Closing ceremony for the academic year's events.",
      status: "upcoming",
      category: "Event",
      image: "/api/placeholder/400/200?text=Valedictory+Function",
      attendees: 200,
      highlights: ["Closing Ceremony", "Awards", "Cultural Program"]
    }
  ];

  const categories = ['all', ...new Set(events.map(event => event.category))];

  const filteredEvents = events.filter(event => {
    const matchesStatus = activeFilter === 'all' || event.status === activeFilter;
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-muted-foreground/20 text-muted-foreground";
      case "ongoing":
        return "bg-accent/20 text-accent";
      case "upcoming":
        return "bg-primary/20 text-primary";
      default:
        return "bg-muted-foreground/20 text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "ongoing":
        return "Ongoing";
      case "upcoming":
        return "Upcoming";
      default:
        return status;
    }
  };

  const ongoingEvents = events.filter(event => event.status === 'ongoing');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us for events that promote sustainability and environmental awareness.
          </p>
        </div>
      </header>

      {/* Ongoing Events Popup Style */}
      {ongoingEvents.length > 0 && (
        <div className="relative py-8 px-4 bg-accent/10" data-aos="fade-down">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-l-accent transform transition-all duration-300 hover:shadow-xl">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full mb-3 md:mb-0">
                      Ongoing Event
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                      {ongoingEvents[0].title}
                    </h2>
                    <p className="text-gray-600 mt-2">{ongoingEvents[0].description}</p>
                  </div>
                    <button
                      className="mt-4 md:mt-0 bg-accent hover:bg-accent/90 text-white py-2 px-6 rounded-md transition-colors"
                      onClick={() => navigate('/RegistrationForm')}
                    >
                      Register
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-accent" />
                    <span>{ongoingEvents[0].date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-accent" />
                    <span>{ongoingEvents[0].time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-accent" />
                    <span>{ongoingEvents[0].location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <h2 className="text-2xl font-bold text-gray-800" data-aos="fade-right">Our Events</h2>
            
            {/* Search Bar */}
            <div className="relative w-full lg:w-80" data-aos="fade-up">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div className="relative">
                <button 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <Filter className="w-4 h-4" />
                  {activeFilter === 'all' ? 'All Events' : getStatusText(activeFilter)}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isFilterOpen && (
                  <div className="absolute z-10 right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <button
                      onClick={() => { setActiveFilter('all'); setIsFilterOpen(false); }}
                      className={`block w-full text-left px-4 py-2 ${activeFilter === 'all' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                    >
                      All Events
                    </button>
                    <button
                      onClick={() => { setActiveFilter('upcoming'); setIsFilterOpen(false); }}
                      className={`block w-full text-left px-4 py-2 ${activeFilter === 'upcoming' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                    >
                      Upcoming
                    </button>
                    <button
                      onClick={() => { setActiveFilter('ongoing'); setIsFilterOpen(false); }}
                      className={`block w-full text-left px-4 py-2 ${activeFilter === 'ongoing' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                    >
                      Ongoing
                    </button>
                    <button
                      onClick={() => { setActiveFilter('completed'); setIsFilterOpen(false); }}
                      className={`block w-full text-left px-4 py-2 ${activeFilter === 'completed' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                    >
                      Completed
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredEvents.length} of {events.length} events
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <div 
                key={event.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105
                  ${event.status === 'ongoing' ? 'border-l-4 border-l-accent ring-2 ring-accent ring-opacity-50' : 
                  event.status === 'upcoming' ? 'border-l-4 border-l-primary' : 'border-l-4 border-l-muted-foreground'}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-40 bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl relative">
                  <span>{event.category}</span>
                  {event.status === 'ongoing' && (
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                      {event.category}
                    </span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                      {getStatusText(event.status)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Event Highlights */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-gray-700">Highlights</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {event.highlights.map((highlight, idx) => (
                        <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Attendees Count */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    {event.status === 'upcoming' && (
                      <button
                        className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md transition-colors font-semibold"
                        onClick={() => navigate('/gallery')}
                      >
                        View Details
                      </button>
                    )}
                    {event.status === 'ongoing' && (
                      <button
                        className="w-full bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-md transition-colors"
                        onClick={() => navigate('/gallery')}
                      >
                        View Details
                      </button>
                    )}
                    {event.status === 'completed' && (
                      <button className="w-full bg-muted-foreground hover:bg-muted-foreground/80 text-white py-2 px-4 rounded-md transition-colors">
                        View Recap
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12" data-aos="fade-up">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
            Explore Our Events
          </h2>
          <p className="text-xl mb-8 opacity-90" data-aos="fade-up" data-aos-delay="200">
            Discover amazing opportunities and be part of our vibrant community events!
          </p>
          <button
            onClick={() => navigate('/gallery')}
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            View Gallery
          </button>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default Events;