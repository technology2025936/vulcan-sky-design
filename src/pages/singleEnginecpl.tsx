import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SingleEngineCPL = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 bg-gradient-hero text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-4">
            Single-Engine Instrument CPL
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Build your professional flying career with a strong foundation in single-engine instrument operations across India and South Africa.
          </p>
        </section>

        <section className="py-20 container mx-auto px-4 max-w-5xl space-y-12">
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-aviation-grey">Overview</h2>
              <p>
                The Single-Engine Instrument CPL programme is tailored for students who wish to build a professional flying career with a solid foundation in single-engine aircraft operations under instrument flight conditions.
              </p>
              <p>
                Training begins in India at <strong>Aviakul, New Delhi</strong>, where students complete approximately five months of intensive ground school covering Air Law, Aircraft General Knowledge, Flight Planning, Meteorology, Human Performance, and Navigation.
              </p>
              <p>
                After theory, students move to <strong>Vulcan Aviation, South Africa</strong>, beginning at Rustenburg Aerodrome for PPL and hour-building, before advancing to Lanseria International Airport for Night Rating, Instrument Rating, and Commercial Pilot Licence skill test.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-aviation-grey">Training Path</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ground School at Aviakul (India) – 5 months</li>
                <li>PPL Training & Hour Building at Rustenburg Aerodrome</li>
                <li>Advanced Training at Lanseria International Airport</li>
                <li>Night Rating & Single-Engine Instrument Rating</li>
                <li>Commercial Pilot Licence (CPL) Flight Test</li>
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

export default SingleEngineCPL;
