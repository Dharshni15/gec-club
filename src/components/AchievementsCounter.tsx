import { useState, useEffect, useRef } from 'react';
import { Users, Calendar, Globe, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Achievement {
  icon: React.ReactNode;
  label: string;
  target: number;
  suffix: string;
  color: string;
}

const AchievementsCounter = () => {
  const [counts, setCounts] = useState({ members: 0, events: 0, outreach: 0, awards: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements: Achievement[] = [
    {
      icon: <Users className="w-8 h-8" />,
      label: "Active Members",
      target: 150,
      suffix: "+",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      label: "Events Hosted",
      target: 25,
      suffix: "+",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      label: "Outreach Programs",
      target: 12,
      suffix: "+",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      label: "Awards & Recognition",
      target: 8,
      suffix: "+",
      color: "from-orange-500 to-orange-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timers = achievements.map((achievement, index) => {
      const key = Object.keys(counts)[index] as keyof typeof counts;
      let current = 0;
      const increment = achievement.target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= achievement.target) {
          current = achievement.target;
          clearInterval(timer);
        }

        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);

      return timer;
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Impact & Achievements
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Together, we've made significant strides in promoting gender equality and building an inclusive community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const key = Object.keys(counts)[index] as keyof typeof counts;
            const currentCount = counts[key];

            return (
              <Card 
                key={achievement.label}
                className="group hover:scale-105 transition-all duration-500 hover:shadow-xl border-0 bg-white/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {achievement.icon}
                    </div>
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {currentCount.toLocaleString()}{achievement.suffix}
                  </div>
                  
                  <p className="text-muted-foreground font-medium">
                    {achievement.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">
              Growing stronger every day with your support!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsCounter;
