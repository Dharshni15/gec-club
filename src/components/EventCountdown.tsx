import { useState, useEffect } from 'react';
import { Clock, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EventCountdown = () => {
  const [countdown, setCountdown] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Next major event - Prometheus Symposium 2025
  const eventDate = new Date('2025-09-20T09:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('countdown-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-4 mb-2 shadow-lg">
        <div className="text-3xl md:text-4xl font-bold">{value.toString().padStart(2, '0')}</div>
      </div>
      <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{label}</div>
    </div>
  );

  return (
    <section id="countdown-section" className="py-16 bg-gradient-to-br from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Countdown to
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Prometheus '25 Symposium
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for our annual technical symposium featuring presentations, competitions, and networking opportunities.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-white/50 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold text-foreground">
              Event Details
            </CardTitle>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>September 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Conference Hall</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <CountdownBox value={countdown.days} label="Days" />
              <CountdownBox value={countdown.hours} label="Hours" />
              <CountdownBox value={countdown.minutes} label="Minutes" />
              <CountdownBox value={countdown.seconds} label="Seconds" />
            </div>

            <div className="mt-8 text-center">
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20">
                <Clock className="w-5 h-5 mr-2" />
                Event Registration Opens Soon
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EventCountdown;
