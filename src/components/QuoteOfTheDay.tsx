import { useState, useEffect } from 'react';
import { Quote, RefreshCw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const QuoteOfTheDay = () => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentAuthor, setCurrentAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const quotes = [
    {
      text: "Gender equality is not a women's issue, it is a human issue. It affects us all.",
      author: "Ban Ki-moon"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "We cannot all succeed when half of us are held back.",
      author: "Malala Yousafzai"
    },
    {
      text: "Equality is not a concept. It's not something we should be striving for. It's a necessity. Equality is like gravity. We need it to stand on this earth as men and women.",
      author: "Joss Whedon"
    },
    {
      text: "The question isn't who's going to let me; it's who is going to stop me.",
      author: "Ayn Rand"
    },
    {
      text: "I raise up my voice—not so I can shout, but so that those without a voice can be heard.",
      author: "Malala Yousafzai"
    },
    {
      text: "Women are the real architects of society.",
      author: "Harriet Beecher Stowe"
    },
    {
      text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart"
    },
    {
      text: "We need to stop buying into the myth about gender equality. It isn't a reality yet.",
      author: "Beyoncé"
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    }
  ];

  const getQuoteForDay = () => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    const quoteIndex = dayOfYear % quotes.length;
    return quotes[quoteIndex];
  };

  const refreshQuote = () => {
    setIsLoading(true);
    setTimeout(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setCurrentQuote(randomQuote.text);
      setCurrentAuthor(randomQuote.author);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    const dailyQuote = getQuoteForDay();
    setCurrentQuote(dailyQuote.text);
    setCurrentAuthor(dailyQuote.author);
  }, []);

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Quote className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-foreground">Quote of the Day</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={refreshQuote}
                disabled={isLoading}
                className="w-8 h-8 p-0 hover:bg-primary/10"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              </Button>
            </div>
            
            <blockquote className="text-foreground/80 italic mb-3 leading-relaxed">
              "{currentQuote}"
            </blockquote>
            
            <footer className="text-sm text-muted-foreground font-medium">
              — {currentAuthor}
            </footer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteOfTheDay;
