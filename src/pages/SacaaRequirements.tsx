import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Moon, Radio, Plane, BookOpen } from "lucide-react";

const SacaaRequirements = () => {
  const requirements = [
    {
      title: "Private Pilot Licence (PPL)",
      icon: Plane,
      highlights: [
        { label: "Minimum Age", value: "17 years" },
        { label: "Medical", value: "Valid Class 2 Medical Certificate" },
        { label: "Radio Telephony", value: "Hold a Restricted Radio Telephony Licence" },
        { label: "Minimum Flight Hours", value: "45 total (25 Dual, 15 Solo, 5 Solo Cross-Country)" },
        { label: "Theoretical Exams", value: "7 subjects to be completed" },
        { label: "Skills Test", value: "Conducted with Designated Flight Examiner (DFE)" },
        { label: "Licence Requirement", value: "Hold SACAA Student Pilot Licence (SPL)" },
      ],
    },
    {
      title: "Night Rating",
      icon: Moon,
      highlights: [
        { label: "Licence Requirement", value: "Hold a valid PPL (or CPL/ATPL)" },
        { label: "Medical", value: "Valid Class 2 Medical (or higher)" },
        { label: "Theoretical Knowledge", value: "Night Rating Exam" },
        { label: "Minimum Flight Hours", value: "10 total (5 Dual Night, 5 Instrument – 2 may overlap PPL)" },
        { label: "Solo Operations", value: "5 Solo Take-offs & Landings at Night" },
        { label: "Skills Test", value: "With Grade II Instructor or DFE" },
      ],
    },
    {
      title: "Instrument Rating (IR)",
      icon: BookOpen,
      highlights: [
        { label: "Licence Requirement", value: "Hold a valid PPL (with Night Rating) or CPL" },
        { label: "Medical", value: "Valid Class 2 (PPL) / Class 1 (CPL/ATPL)" },
        { label: "Radio Licence", value: "Hold a General Radio Telephony Licence" },
        { label: "Theoretical Exams", value: "Instrument Rating subjects (Air Law, Instruments, Flight Planning, etc.)" },
        { label: "Minimum Flight Hours", value: "40 Instrument Time (Max 20 Simulator, Rest in Aircraft)" },
        { label: "Aircraft Type", value: "At least 5 hours in aircraft of rating sought" },
        { label: "Skills Test", value: "Instrument Rating Skills Test with DFE (on type)" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              South African Civil Aviation Authority (SACAA)
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              SACAA Licensing Requirements
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your complete guide to obtaining SACAA pilot certifications including PPL, Night Rating, and Instrument Rating.
            </p>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                SACAA Pilot Training Requirements
              </h2>
              <p className="text-lg text-muted-foreground">
                Each stage of pilot licensing under SACAA standards has unique eligibility and flight requirements.
              </p>
            </div>

            <div className="space-y-12">
              {requirements.map((req, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all"
                >
                  <CardHeader className="border-b border-muted/30 bg-muted/20">
                    <div className="flex items-center gap-3">
                      <div className="bg-vulcan-red/10 p-3 rounded-lg">
                        <req.icon className="h-7 w-7 text-vulcan-red" />
                      </div>
                      <CardTitle className="text-2xl font-bold">
                        {req.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      {req.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 bg-muted/40 rounded-lg"
                        >
                          <CheckCircle className="h-5 w-5 text-vulcan-red mt-1" />
                          <div>
                            <h4 className="font-semibold text-foreground">
                              {item.label}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your Pilot Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your aviation career with recognized SACAA-certified programs and become a licensed pilot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-vulcan-red font-semibold rounded-lg hover:bg-white/90 transition">
                Apply Now
              </button>
              <button className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
                Contact Admissions
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SacaaRequirements;
