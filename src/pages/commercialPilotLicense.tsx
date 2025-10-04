import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CommercialPilotLicense = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 bg-gradient-hero text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-4">
            Commercial Pilot License (CPL)
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Begin your high-flying career with Aviakul’s flagship CPL program designed to prepare you for airline and charter operations.
          </p>
        </section>

        <section className="py-20 container mx-auto px-4 max-w-5xl space-y-12">
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-aviation-grey">Overview</h2>
              <p>
                The Aviakul CPL programme is designed for aspiring pilots seeking professional roles in aviation. It combines intensive ground school, advanced simulator sessions, and structured flight training aligned with DGCA standards.
              </p>
              <p>
                Ground school runs for approximately four months, covering Air Regulation, Aviation Meteorology, Air Navigation, Aircraft Technical General, and Radio Telephony, blending classroom and LMS learning.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-aviation-grey">Flight Training</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pre-Flight Ground Training (PFGT) and SPL/FRTOL exams</li>
                <li>Minimum of 200 total flying hours</li>
                <li>100 hours as Pilot-in-Command</li>
                <li>50 hours of Cross-Country Flight</li>
                <li>50 hours of Instrument Time (20 on simulator max)</li>
                <li>4 hours by night with minimum 10 take-offs and landings</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button variant="aviation" size="lg">
              Apply Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommercialPilotLicense;
