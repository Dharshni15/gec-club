import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
// Dynamic image groups for new gallery sections
const oldImages = Object.values(
  import.meta.glob('@/assets/old/*.{jpg,jpeg,png,JPG,PNG}', { eager: true, query: '?url', import: 'default' })
) as string[];
const inaugImages = Object.values(
  import.meta.glob('@/assets/inaug 2025-2026/*.{jpg,jpeg,png,JPG,PNG}', { eager: true, query: '?url', import: 'default' })
) as string[];
const guestImages = Object.values(
  import.meta.glob('@/assets/geust 2025-2026/*.{jpg,jpeg,png,JPG,PNG}', { eager: true, query: '?url', import: 'default' })
) as string[];
const technoImages = Object.values(
  import.meta.glob('@/assets/techno 2025-2026/*.{jpg,jpeg,png,JPG,PNG}', { eager: true, query: '?url', import: 'default' })
) as string[];
// removed legacy static image imports to use folder-based grouping


const Gallery = () => {
  // Lightbox for grouped sections
  const [lb, setLb] = useState<{ list: string[]; index: number } | null>(null);
  // Toggle between groups
  const [group, setGroup] = useState<'old' | 'new'>('old');

  const closeLb = () => {
    setLb(null);
    document.body.style.overflow = 'unset';
  };

  const lbNext = () => {
    if (lb) {
      setLb({ list: lb.list, index: (lb.index + 1) % lb.list.length });
    }
  };

  const lbPrev = () => {
    if (lb) {
      setLb({ list: lb.list, index: lb.index === 0 ? lb.list.length - 1 : lb.index - 1 });
    }
  };

  // no-op key handler for legacy modal removed

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

      {/* Grouped Gallery Sections */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle buttons */}
          <div className="flex justify-center gap-3 mb-10">
            <Button
              variant={group === 'old' ? 'default' : 'outline'}
              onClick={() => setGroup('old')}
            >
              Old Events
            </Button>
            <Button
              variant={group === 'new' ? 'default' : 'outline'}
              onClick={() => setGroup('new')}
            >
              2025-2026 Events
            </Button>
          </div>

          {group === 'old' ? (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground text-center">Old Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {oldImages.map((src, idx) => (
                  <div
                    key={`old-${idx}`}
                    className="group relative overflow-hidden rounded-xl card-gradient hover-lift cursor-pointer transition-all duration-300 hover:scale-105"
                    onClick={() => { setLb({ list: oldImages, index: idx }); document.body.style.overflow = 'hidden'; }}
                  >
                    <img src={src} alt={`Old Event ${idx + 1}`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg">Old Event</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              <h2 className="text-3xl font-bold text-foreground text-center">2025-2026 Events</h2>
              {/* Inaugural */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Inaugural</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {inaugImages.map((src, idx) => (
                    <div
                      key={`inaug-${idx}`}
                      className="group relative overflow-hidden rounded-xl card-gradient hover-lift cursor-pointer transition-all duration-300 hover:scale-105"
                      onClick={() => { setLb({ list: inaugImages, index: idx }); document.body.style.overflow = 'hidden'; }}
                    >
                      <img src={src} alt={`Inaugural ${idx + 1}`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg">Inaugural</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guest Lecture */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Guest Lecture</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {guestImages.map((src, idx) => (
                    <div
                      key={`guest-${idx}`}
                      className="group relative overflow-hidden rounded-xl card-gradient hover-lift cursor-pointer transition-all duration-300 hover:scale-105"
                      onClick={() => { setLb({ list: guestImages, index: idx }); document.body.style.overflow = 'hidden'; }}
                    >
                      <img src={src} alt={`Guest Lecture ${idx + 1}`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg">Guest Lecture</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Techno Canvas */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Techno Canvas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {technoImages.map((src, idx) => (
                    <div
                      key={`techno-${idx}`}
                      className="group relative overflow-hidden rounded-xl card-gradient hover-lift cursor-pointer transition-all duration-300 hover:scale-105"
                      onClick={() => { setLb({ list: technoImages, index: idx }); document.body.style.overflow = 'hidden'; }}
                    >
                      <img src={src} alt={`Techno Canvas ${idx + 1}`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg">Techno Canvas</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox for grouped sections */}
      {lb !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900 rounded-full w-12 h-12 p-0 shadow-lg border border-gray-200"
              onClick={closeLb}
            >
              <X className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={lbPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900 rounded-full w-12 h-12 p-0 shadow-lg border border-gray-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={lbNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900 rounded-full w-12 h-12 p-0 shadow-lg border border-gray-200"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            <div className="relative">
              <img 
                src={lb.list[lb.index]}
                alt={`Gallery ${lb.index + 1}`}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6 bg-white">
                <div className="mt-2 text-center text-sm text-muted-foreground">
                  {lb.index + 1} of {lb.list.length}
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