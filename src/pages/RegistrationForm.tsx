import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Loader2, User, Mail, Phone, GraduationCap, Hash, Users, Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Form validation schema
const registrationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  department: z.string().min(1, "Please select a department"),
  rollNo: z.string().min(1, "Roll number is required"),
  section: z.string().min(1, "Section is required"),
  year: z.string().min(1, "Please select your year"),
  eventType: z.string().min(1, "Please select an event type"),
  additionalInfo: z.string().optional(),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const RegistrationForm = () => {
  const query = useQuery();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
    reset,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      rollNo: query.get("rollno") || "",
      section: query.get("section") || "",
    },
    mode: "onChange",
  });

  // Save form data to localStorage as user types
  const watchedValues = watch();
  useEffect(() => {
    const formData = Object.keys(watchedValues).reduce((acc, key) => {
      if (watchedValues[key as keyof typeof watchedValues]) {
        acc[key] = watchedValues[key as keyof typeof watchedValues];
      }
      return acc;
    }, {} as Record<string, any>);
    
    if (Object.keys(formData).length > 0) {
      localStorage.setItem('registrationFormData', JSON.stringify(formData));
    }
  }, [watchedValues]);

  // Load saved form data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('registrationFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        Object.keys(parsedData).forEach(key => {
          if (parsedData[key]) {
            setValue(key as keyof RegistrationFormData, parsedData[key]);
          }
        });
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
  }, [setValue]);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Registration data:", data);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Registration Successful! 🎉",
      description: "Thank you for registering. We'll send you a confirmation email shortly.",
    });
    
    // Reset form after success
    setTimeout(() => {
      reset();
      setIsSuccess(false);
      localStorage.removeItem('registrationFormData');
    }, 3000);
  };

  // Add rollno and section state
  const [rollno, setRollno] = useState(query.get('rollno') || '');
  const [section, setSection] = useState(query.get('section') || '');

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <Navbar />
        <div className="flex items-center justify-center min-h-[80vh] mt-20 px-4">
          <Card className="w-full max-w-lg text-center" data-aos="zoom-in">
            <CardContent className="pt-8">
              <div className="bg-accent/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-accent mb-3">Registration Complete! 🎉</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Thank you for registering! You'll receive a confirmation email shortly with all the event details.
              </p>
              
              <div className="bg-primary/10 rounded-lg p-4 mb-6 text-left">
                <h4 className="font-semibold text-primary mb-2">What's Next?</h4>
                <ul className="text-sm text-primary/80 space-y-1">
                  <li>✓ Check your email for confirmation</li>
                  <li>✓ Save the event details to your calendar</li>
                  <li>✓ Share this event with your friends</li>
                  <li>✓ Prepare for an amazing experience!</li>
                </ul>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  onClick={() => setIsSuccess(false)}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  Register Another Person
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.history.back()}
                  className="flex-1"
                >
                  Back to Events
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Navbar />
      <div className="flex items-center justify-center min-h-[80vh] mt-20 px-4">
        <Card className="w-full max-w-2xl shadow-2xl border-0" data-aos="fade-up">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Event Registration
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground mb-4">
              Join our exciting event and be part of an amazing experience!
            </CardDescription>
            
            {/* Current Date and Time */}
            <div className="text-sm text-muted-foreground bg-gray-50 rounded-lg p-3 inline-block">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="w-4 h-4" />
                <span>{new Date().toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: true 
                })}</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <User className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      {...register("fullName")}
                      placeholder="Enter your full name"
                      className={errors.fullName ? "border-red-500 focus:ring-red-500" : ""}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="Enter your email"
                      className={errors.email ? "border-red-500 focus:ring-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    {...register("phoneNumber")}
                    placeholder="Enter your 10-digit phone number"
                    className={errors.phoneNumber ? "border-red-500 focus:ring-red-500" : ""}
                  />
                  {errors.phoneNumber && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Academic Information Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-800">Academic Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department" className="text-sm font-medium text-gray-700">
                      Department *
                    </Label>
                    <Select onValueChange={(value) => setValue("department", value)}>
                      <SelectTrigger className={errors.department ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CSE">Computer Science</SelectItem>
                        <SelectItem value="ECE">Electronics & Communication</SelectItem>
                        <SelectItem value="EEE">Electrical & Electronics</SelectItem>
                        <SelectItem value="IT">Information Technology</SelectItem>
                        <SelectItem value="MECH">Mechanical</SelectItem>
                        <SelectItem value="CIVIL">Civil</SelectItem>
                        <SelectItem value="OTHER">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.department && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.department.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year" className="text-sm font-medium text-gray-700">
                      Year *
                    </Label>
                    <Select onValueChange={(value) => setValue("year", value)}>
                      <SelectTrigger className={errors.year ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1st Year</SelectItem>
                        <SelectItem value="2">2nd Year</SelectItem>
                        <SelectItem value="3">3rd Year</SelectItem>
                        <SelectItem value="4">4th Year</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.year && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.year.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="section" className="text-sm font-medium text-gray-700">
                      Section *
                    </Label>
                    <Input
                      id="section"
                      {...register("section")}
                      placeholder="Enter section"
                      className={errors.section ? "border-red-500 focus:ring-red-500" : ""}
                    />
                    {errors.section && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.section.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rollNo" className="text-sm font-medium text-gray-700">
                    Roll Number *
                  </Label>
                  <Input
                    id="rollNo"
                    {...register("rollNo")}
                    placeholder="Enter your roll number"
                    className={errors.rollNo ? "border-red-500 focus:ring-red-500" : ""}
                  />
                  {errors.rollNo && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.rollNo.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Event Information Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <Hash className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-800">Event Details</h3>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="eventType" className="text-sm font-medium text-gray-700">
                    Event Type *
                  </Label>
                  <Select onValueChange={(value) => setValue("eventType", value)}>
                    <SelectTrigger className={errors.eventType ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="seminar">Seminar</SelectItem>
                      <SelectItem value="competition">Competition</SelectItem>
                      <SelectItem value="cultural">Cultural Event</SelectItem>
                      <SelectItem value="technical">Technical Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.eventType && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.eventType.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="text-sm font-medium text-gray-700">
                    Additional Information
                  </Label>
                  <textarea
                    id="additionalInfo"
                    {...register("additionalInfo")}
                    placeholder="Any special requirements or additional information..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                    rows={3}
                  />
                </div>
              </div>

              {/* Form Progress Indicator */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Form Completion</span>
                  <span>{Math.round((Object.keys(watchedValues).filter(key => watchedValues[key as keyof typeof watchedValues]).length / 8) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(Object.keys(watchedValues).filter(key => watchedValues[key as keyof typeof watchedValues]).length / 8) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 text-center">
                  {Object.keys(watchedValues).filter(key => watchedValues[key as keyof typeof watchedValues]).length}/8 fields completed
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to clear all form data? This action cannot be undone.')) {
                      reset();
                      localStorage.removeItem('registrationFormData');
                      toast({
                        title: "Form Cleared",
                        description: "All form data has been cleared.",
                      });
                    }
                  }}
                  className="flex-1 border-gray-300 hover:bg-gray-50"
                >
                  Clear Form
                </Button>
                
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-3 text-lg font-semibold shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing Registration...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Submit Registration
                    </>
                  )}
                </Button>
              </div>

              {/* Form Status */}
              <div className="text-center">
                {isValid && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Form is ready to submit
                  </Badge>
                )}
              </div>

              {/* Helpful Tips */}
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Helpful Tips
                </h4>
                <ul className="text-sm text-primary/80 space-y-1">
                  <li>• All fields marked with * are required</li>
                  <li>• Your form progress is automatically saved</li>
                  <li>• You can clear the form anytime using the Clear Form button</li>
                  <li>• Make sure your contact information is accurate</li>
                  <li>• Check your email for confirmation after registration</li>
                </ul>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default RegistrationForm;
