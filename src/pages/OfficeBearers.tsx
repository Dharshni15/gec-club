import { Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

// Import all images
import Haritha from '@/assets/HARITHA copy.jpg';
import Dharanidharan from '@/assets/DHARANIDHARAN.jpg';
import Dheepisha from '@/assets/DHEEPISHA.jpg';
import Avaneesh from '@/assets/AVANEESH.jpg';
import Dharshni from '@/assets/DHARSHNI.jpg';
import Gowthaam from '@/assets/GOWTHAAM.jpg';
import Harinee from '@/assets/HARINEE.jpg';
import Prakash from '@/assets/PRAKASH.jpg';
import Abhinav from '@/assets/ABHINAV KRISHNA.jpg';
import Harinivash from '@/assets/HARINIVASH.jpg';
import Harini from '@/assets/HARINI D.jpg';
import Miruthula from '@/assets/MIRUTHULA.jpg';
import Deepika from '@/assets/DEEPIKA S.jpg';
import Ahish from '@/assets/AHISH.jpg';
import Praneesh from '@/assets/PRANEESH.jpg';
import Vidulasri from '@/assets/VIDULASRI.jpg';
import Dhanushya from '@/assets/DHANUSHYA V.jpeg';
import Harish from '@/assets/HARISH.png';
import AadhiPranesh from '@/assets/AADHI.jpg';  
import Abhinav2 from '@/assets/ABHINAV.jpg';
import Sujhay from '@/assets/SUJHAY.jpg';
import Monisha from '@/assets/MONISHA.jpg';
import Bhavani from '@/assets/BHAVANI.jpg';
import Dharshini from '@/assets/DHARSHINI.jpg';
import Kishore from '@/assets/KISHORE.jpg';
import Aswaythi from '@/assets/ASWAYTHI.jpg';
import Gobika from '@/assets/GOBIKA.jpg';
import Yohith from '@/assets/24CHR052 YOHITH N M.jpg';
import Sanjay from '@/assets/SANJAY.jpg';
import Prajit from '@/assets/PRAJIT.jpg';
import Kavin from '@/assets/KAVIN.jpg';
import Sahana from '@/assets/SAHANA.jpg';
import Vedha from '@/assets/VEDHA.jpg';
import Nanthitha from '@/assets/NANTHITHA.jpg';
import Pranav from '@/assets/PRANAV.jpg';
import Dharshan from '@/assets/DHARSHAN.jpg';
import Bharani from '@/assets/BHARANI.jpg';
import Harsa from '@/assets/HARSA PRIYA.jpg';
import Divya from '@/assets/DIVYA.jpg';
import MIDUNAVARSHINI from '@/assets/MIDUNAVARSHINI.jpg';
import Dinesh from '@/assets/WhatsApp Image 2025-08-16 at 22.00.12_e444af7b.jpg';
import Mohana from '@/assets/WhatsApp Image 2025-08-16 at 22.00.52_06fc34c9.jpg';

const OfficeBearers = () => {
  const Secretary = [
    {
      name: "Mr. V. Dharanidharan",
      position: "Secretary",
      department: "Computer Science And Design",
      year: "Third Year",
      image: Dharanidharan,
    },
    {
      name: "Ms. G. Dheepisha",
      position: "Secretary",
      department: "Computer Science Engineering",
      year: "Third Year",
      image: Dheepisha,
    },
  ];
  
  const Tresurer = [
    {
      name: "Mr. R. Avaneesh",
      position: "Treasurer",
      department: "Computer Science And Design",
      year: "Third Year",
      image: Avaneesh,
    },
    {
      name: "Ms. J. Dharshini",
      position: "Treasurer",
      department: "Information Technology",
      year: "Third Year",
      image: Dharshni
    },
  ];
  
  const JointSecretary = [
    {
      name: "Mr. A. Gowthaam",
      position: "Joint Secretary",
      department: "Electrical And Electronics Engineering",
      year: "Third Year",
      image: Gowthaam,
    },
    {
      name: "Ms. E. Haritha",
      position: "Joint Secretary",
      department: "Computer Science Engineering",
      year: "Final Year",
      image: Haritha
    },
  ];
  
  const JointTreaaure = [
    {
      name: "Ms. N.J. Harinee",
      position: "Joint Treasurer",
      department: "Computer Science Engineering",
      year: "Final Year",
      image: Harinee,
    },
  ];
  
  const EventOrganizing = [
    {
      name: "Mr. K. Prakash",
      department: "Chemical Engineering",
      year: "Third Year",
      image: Prakash,
    },
    {
      name: "Mr. B. Abhinav Krishna",
      department: "Computer Science Engineering",
      year: "Third Year",
      image: Abhinav,
    },
    {
      name: "Mr. S. Harinivash",
      department: "Computer Science And Design",
      year: "Third Year",
      image: Harinivash,
    },
    {
      name: "Ms. D. Harini",
      department: "Information Technology",
      year: "Third Year",
      image: Harini,
    },
    {
      name: "Ms. T. Miruthula",
      department: "Food Technology",
      year: "Third Year",
      image: Miruthula,
    },
    {
      name: "Ms. S. Deepika",
      department: "Electronics And Communication Engineering",
      year: "Third Year",
      image: Deepika,
    },
    {
      name: "Mr. M. Ahish",
      department: "Electrical And Electronics Engineering",
      year: "Second Year",
      image: Ahish,
    },
    {
      name: "Mr. S. Praneesh",
      department: "Artificial Intelligence And Data Science",
      year: "Second Year",
      image: Praneesh,
    },
    {
      name: "Ms. R.D. Vidulasri",
      department: "Computer Science Engineering",
      year: "Second Year",
      image: Vidulasri,
    },
    {
      name: "Ms. V. Dhanushya",
      department: "Master Of Computer Applications",
      year: "Second Year",
      image: Dhanushya,
    },
  ];
  
  const Documentation = [
    {
      name: "Mr. G. Kishore Shankar",
      department: "Computer Science Engineering",
      year: "Third Year",
      image: Kishore,
    },
    {
      name: "Ms. S. Aswathy",
      department: "Artificial Intelligence And Data Science",
      year: "Third Year",
      image: Aswaythi,
    },
    {
      name: "Ms. K. Dharshini",
      department: "Computer Science Engineering",
      year: "Third Year",
      image: Dharshini,
    },
    {
      name: "Ms. R. Gobika",
      department: "Computer Science Engineering",
      year: "Third Year",
      image: Gobika,
    },
    {
      name: "Mr. N.M. Yohith",
      department: "Chemical Engineering",
      year: "Second Year",
      image: Yohith,
    },
    {
      name: "Ms. S. Bhavani",
      department: "Master Of Computer Applications",
      year: "Second Year",
      image: Bhavani,
    },
  ];
  
  const multimedia = [
    {
      name: "Mr. M. Harish",
      department: "Chemical Engineering",
      year: "Final Year",
      image: Harish,
    },
    {
      name: "Mr. S.S. Aadhi Pranesh",
      department: "Computer Science Engineering",
      year: "Third Year",
      image: AadhiPranesh,
    },
    {
      name: "Mr. K. Abhinav",
      department: "Computer Science Engineering",
      year: "Third Year",
      image: Abhinav2,
    },
    {
      name: "Ms. S. Midunavarshini",
      department: "Computer Science Engineering",
      year: "Third Year",
      image: MIDUNAVARSHINI,
    },
    {
      name: "Mr. E. Sujhay Prajin",
      department: "Artificial Intelligence And Data Science",
      year: "Second Year",
      image: Sujhay,
    },
    {
      name: "Ms. N. Monisha",
      department: "Computer Science Engineering",
      year: "Second Year",
      image: Monisha,
    },
  ];

  const executive = [
    {
      name: "Mr. S. Sanjay",
      department: "Electrical And Electronics Engineering",
      year: "Third Year",
      image: Sanjay,
    },
    {
      name: "Mr. K. Prajit",
      department: "Artificial Intelligence And Data Science",
      year: "Third Year",
      image: Prajit,
    },
    {
      name: "Mr. P. Kavin",
      department: "Electrical And Electronics Engineering",
      year: "Third Year",
      image: Kavin,
    },
    {
      name: "Ms. R. Sahana",
      department: "Computer Science And Design",
      year: "Third Year",
      image: Sahana,
    },
    {
      name: "Ms. K. Vedha",
      department: "Artificial Intelligence And Machine Learning",
      year: "Third Year",
      image: Vedha,
    },
    {
      name: "Ms. N. Nanthitha",
      department: "Electronics And Instrumentation Engineering",
      year: "Third Year",
      image: Nanthitha,
    },
    {
      name: "Mr. Pranav Ramalingam",
      department: "Computer Science Engineering",
      year: "Second Year",
      image: Pranav,
    },
    {
      name: "Mr. R. Dharshan",
      department: "Computer Science Engineering",
      year: "Second Year",
      image: Dharshan,
    },
    {
      name: "Mr. K. Bharani",
      department: "Artificial Intelligence And Data Science",
      year: "Second Year",
      image: Bharani,
    },
    {
      name: "Ms. P. Harsa Priya",
      department: "Food Technology",
      year: "Second Year",
      image: Harsa,
    },
    {
      name: "Ms. B. Divya",
      department: "Master Of Computer Applications",
      year: "Second Year",
      image: Divya,
    },
  ];

  const advisors = [
    {
      name: "Dr. K. Dinesh",
      position: "Faculty Coordinator",
      department: "Associate Professor, Computer Science",
      email: "dinesh.nova@gmail.com",
      phone: "+91 99448 46480",
      image: Dinesh 
    },
    {
      name: "Ms. S. Mohana Saranya",
      position: "Faculty Coordinator",
      department: "Assistant Professor, Computer Science",
      email: "mohanasaranya.cse@kongu.edu",
      phone: "04294-226588",
      image: Mohana
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Office Bearers
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Meet the dedicated team of students and faculty who lead our 
              gender equality initiatives at Kongu Engineering College.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Advisors - Enhanced Section with Full Images */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Faculty Advisors</h2>
            <p className="text-lg text-gray-600">
              Our experienced faculty members guide and support our mission.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 justify-center items-start mb-16">
            {advisors.map((advisor, index) => (
              <div key={index} className="flex flex-col items-center w-full md:w-1/2 max-w-md">
                <div className="relative mb-6 w-64 h-80 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={advisor.image}
                    alt={advisor.name}
                    className="max-h-full max-w-full object-contain"
                    style={{ maxHeight: '320px', maxWidth: '256px' }}
                  />
                </div>
                
                <Card className="w-full border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{advisor.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{advisor.position}</p>
                    <p className="text-gray-600 mb-4">{advisor.department}</p>
                    
                    <div className="flex flex-col gap-2 mt-4">
                      <Button variant="outline" className="justify-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {advisor.email}
                      </Button>
                      <Button variant="outline" className="justify-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {advisor.phone}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secretary Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Secretaries</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {Secretary.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative mb-4 mx-auto w-40 h-40 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{member.position}</p>
                    <p className="text-gray-600 text-sm mb-1">{member.department}</p>
                    <p className="text-gray-500 text-sm">{member.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treasurer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Treasurer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {Tresurer.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative mb-4 mx-auto w-40 h-40 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{member.position}</p>
                    <p className="text-gray-600 text-sm mb-1">{member.department}</p>
                    <p className="text-gray-500 text-sm">{member.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Joint Secretary Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Joint Secretaries</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {JointSecretary.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative mb-4 mx-auto w-40 h-40 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{member.position}</p>
                    <p className="text-gray-600 text-sm mb-1">{member.department}</p>
                    <p className="text-gray-500 text-sm">{member.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Joint Treasurer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Joint Treasurer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {JointTreaaure.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative mb-4 mx-auto w-40 h-40 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{member.position}</p>
                    <p className="text-gray-600 text-sm mb-1">{member.department}</p>
                    <p className="text-gray-500 text-sm">{member.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Organizing Team */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Event Organizing Team</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {EventOrganizing.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-4 text-center">
                  <div className="relative mb-3 mx-auto w-24 h-24 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-xs mb-1">{member.department}</p>
                  <p className="text-gray-500 text-xs">{member.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Documentation Team</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {Documentation.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-4 text-center">
                  <div className="relative mb-3 mx-auto w-24 h-24 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-xs mb-1">{member.department}</p>
                  <p className="text-gray-500 text-xs">{member.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Multimedia Team */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Multimedia Team</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {multimedia.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-4 text-center">
                  <div className="relative mb-3 mx-auto w-24 h-24 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-xs mb-1">{member.department}</p>
                  <p className="text-gray-500 text-xs">{member.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Members */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Executive Members</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {executive.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-4 text-center">
                  <div className="relative mb-3 mx-auto w-24 h-24 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-xs mb-1">{member.department}</p>
                  <p className="text-gray-500 text-xs">{member.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default OfficeBearers;