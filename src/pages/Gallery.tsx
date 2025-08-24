import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Mock gallery data - now organized by year
  const galleryItems = [
    {
      id: 1,
      title: "International Women's Day",
      category: "Celebration",
      year: "2024",
      date: "March 8, 2024",
      description: "Students celebrating with cultural performances and inspiring speeches",
      image: "src/assets/Event 2/Copy of gec2.jpg"
    },
    {
      id: 2,
      title: "Leadership Workshop",
      category: "Workshop",
      year: "2024",
      date: "February 15, 2024",
      description: "Interactive session on women leadership in technology",
      image: "src/assets/Event 2/Copy of gec4.jpg"
    },
    {
      id: 3,
      title: "Panel Discussion",
      category: "Discussion",
      year: "2024",
      date: "January 20, 2024",
      description: "Industry experts sharing insights on gender equality",
      image: "src/assets/Event 2/Copy of gec5.jpg"
    },
    {
      id: 4,
      title: "Awareness Campaign",
      category: "Campaign",
      year: "2023",
      date: "December 10, 2023",
      description: "Campus-wide awareness activities and exhibitions",
      image: "src/assets/Event 2/Copy of gec6.jpg"
    },
    {
      id: 5,
      title: "Student Participation",
      category: "Workshop",
      year: "2023",
      date: "November 25, 2023",
      description: "Active student engagement in equality discussions",
      image: "src/assets/Event 2/Copy of gec8.jpg"
    },
    {
      id: 6,
      title: "Collaborative Learning",
      category: "Training",
      year: "2023",
      date: "October 15, 2023",
      description: "Group activities promoting inclusive thinking",
      image: "src/assets/Event 2/Copy of Office barrier.jpg"
    },
    {
      id: 7,
      title: "Guest Speaker Session",
      category: "Seminar",
      year: "2024",
      date: "September 30, 2024",
      description: "Renowned speaker addressing gender equality in workplace",
      image: "src/assets/Event 2/Copy of pray.jpg"
    },
    {
      id: 8,
      title: "Team Building",
      category: "Activity",
      year: "2024",
      date: "August 20, 2024",
      description: "Fun activities promoting unity and understanding",
      image: "src/assets/Event 3/1.JPG"
    },
    {
      id: 9,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2024",
      date: "July 12, 2024",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 3/2.jpg"
    },
    {
      id: 10,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2025",
      date: "July 12, 2025",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 4/WhatsApp Image 2025-08-15 at 22.19.39_4239702e.jpg"
    },
    {
      id: 11,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2025",
      date: "July 12, 2025",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 4/WhatsApp Image 2025-08-15 at 22.19.39_baca41a6.jpg"
    },
    {
      id: 12,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2025",
      date: "July 12, 2025",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 4/WhatsApp Image 2025-08-15 at 22.19.39_d6f51afd.jpg"
    },
    {
      id: 13,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2025",
      date: "July 12, 2025",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 4/WhatsApp Image 2025-08-15 at 22.19.40_34da6e1e.jpg"
    },
    {
      id: 14,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2025",
      date: "July 12, 2025",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 4/WhatsApp Image 2025-08-15 at 22.19.40_93ec50f5.jpg"
    },
    {
      id: 15,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2025",
      date: "July 12, 2025",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 4/WhatsApp Image 2025-08-15 at 22.19.40_97525012.jpg"
    },
    {
      id: 16,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2025",
      date: "July 12, 2025",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 4/WhatsApp Image 2025-08-15 at 22.19.42_16736e39.jpg"
    },
    {
      id: 17,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2025",
      date: "July 12, 2025",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 4/WhatsApp Image 2025-08-15 at 22.19.42_d9613d37.jpg"
    },
    {
      id: 18,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2025",
      date: "July 12, 2025",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 5/Copy of Event photo .png"
    },
    {
      id: 19,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2025",
      date: "July 12, 2025",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 5/Copy of Event photo 2 .png"
    },
    {
      id: 20,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2025",
      date: "July 12, 2025",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 6/Copy of WhatsApp Image 2025-05-18 at 15.58.45_26c8a95b.jpg"
    },
    {
      id: 21,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2025",
      date: "July 12, 2025",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 6/Copy of WhatsApp Image 2025-05-18 at 15.58.45_26c8a95b.jpg"
    },
    {
      id: 22,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2025",
      date: "July 12, 2025",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 6/Copy of WhatsApp Image 2025-05-18 at 15.58.45_3627ede9.jpg"
    },
    {
      id: 23,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2025",
      date: "July 12, 2025",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 6/Copy of WhatsApp Image 2025-05-18 at 15.58.45_cd91be45.jpg"
    },
    {
      id: 24,
      title: "Workshop Participation",
      category: "Workshop",
      year: "2025",
      date: "July 12, 2025",
      description: "Students actively participating in skill-building sessions",
      image: "src/assets/Event 6/Copy of WhatsApp Image 2025-05-18 at 15.58.46_fc8e8dea.jpg"
    }
  ];

  // Extract unique years from gallery items
  const years = ["All", ...new Set(galleryItems.map(item => item.year))];
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredItems = selectedYear === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.year === selectedYear);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'ArrowLeft') {
      goToPrevious();
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-6 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Explore moments from our events, workshops, and activities organized by year.
            </p>
          </div>
        </div>
      </section>

      {/* Year Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedYear(year)}
                className={selectedYear === year ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white" : "hover:border-primary hover:text-primary"}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedYear !== "All" && (
            <h2 className="text-3xl font-bold mb-8 text-foreground">{selectedYear} Events</h2>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-xl card-gradient hover-lift cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => openModal(index)}
              >
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="mb-2">
                          {item.category}
                        </Badge>
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No images found for the selected year.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Modal with Navigation */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900 rounded-full w-12 h-12 p-0 shadow-lg border border-gray-200"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900 rounded-full w-12 h-12 p-0 shadow-lg border border-gray-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900 rounded-full w-12 h-12 p-0 shadow-lg border border-gray-200"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
            
            <div className="relative">
              <img 
                src={filteredItems[selectedImage].image}
                alt={filteredItems[selectedImage].title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6 bg-white">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex gap-2 mb-2">
                      <Badge variant="secondary">
                        {filteredItems[selectedImage].category}
                      </Badge>
                      <Badge variant="outline">
                        {filteredItems[selectedImage].year}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {filteredItems[selectedImage].title}
                    </h3>
                    <p className="text-muted-foreground">
                      {filteredItems[selectedImage].date}
                    </p>
                  </div>
                </div>
                <p className="text-foreground">
                  {filteredItems[selectedImage].description}
                </p>
                
                {/* Image Counter */}
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  {selectedImage + 1} of {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Gallery;