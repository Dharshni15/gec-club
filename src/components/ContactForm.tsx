import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Google Sheets integration (you'll need to set up Google Apps Script)
      const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'Gender Equality Club Website'
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Message Sent Successfully! 🎉",
          description: "Thank you for contacting us. We'll get back to you soon!",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "dinesh.nova@gmail.com",
      href: "mailto:dinesh.nova@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 99448 46480",
      href: "tel:+919944846480"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "Kongu Engineering College, Perundurai, Erode - 638060",
      href: "#"
    }
  ];

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-700 mb-3">Message Sent Successfully!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <center></center>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-8 text-muted-foreground">
                {contactInfo.map((info, index) => (
                  <>
                    <div key={index} className="inline-flex items-center gap-2 whitespace-nowrap">
                      <span className="text-primary">{info.icon}</span>
                      <span className="font-medium text-foreground">{info.label}:</span>
                      {info.href !== "#" ? (
                        <a href={info.href} className="hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                    {index < contactInfo.length - 1 && (
                      <span className="hidden md:inline text-foreground/30">|</span>
                    )}
                  </>
                ))}
              </div>
            </div>

            

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Quick Response
              </h3>
              <div className="space-y-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Response within 24 hours
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Professional support team
                </Badge>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
