import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MultiEngineCPL = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 bg-gradient-hero text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-4">
            Multi-Engine Instrument CPL
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Train for professional aviation with multi-engine handling and advanced instrument procedures.
          </p>
        </section>

        <section className="py-20 container mx-auto px-4 max-w-5xl space-y-12">
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-aviation-grey">Overview</h2>
              <p>
                The Multi-Engine Instrument CPL programme prepares students for a career in professional aviation, emphasizing multi-engine aircraft handling and advanced instrument flight proficiency.
              </p>
              <p>
                The journey starts in India at <strong>Aviakul, New Delhi</strong>, with five months of ground school covering all theoretical knowledge requirements. Students then move to South Africa for PPL and hour-building at Rustenburg Aerodrome.
              </p>
              <p>
                Training continues at <strong>Lanseria International Airport</strong>, where cadets receive Night Rating, Multi-Engine Rating on the Piper Seneca, and Multi-Engine Instrument Rating before completing their CPL flight test.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-aviation-grey">Programme Highlights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>PPL and Hour Building at Rustenburg</li>
                <li>Multi-Engine Rating on Piper Seneca</li>
                <li>Multi-Engine Instrument Rating</li>
                <li>CPL Skill Test at Lanseria International Airport</li>
                <li>Experience in Controlled International Airspace</li>
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

export default MultiEngineCPL;
