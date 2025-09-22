import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import heroImage from "@/assets/aviation-hero.jpg";
import pilotImage from "@/assets/hero-pilot-woman.jpg";

const AboutAvia = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center border border-vulcan-red/30 rounded-full px-6 py-2 text-sm font-medium text-vulcan-red mb-6 bg-vulcan-red/10">
              ABOUT AVIA
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div className="space-y-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your Trusted Pathway To Excellence In Professional Pilot Careers
                </h2>
                
                {/* Testimonial */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                  <Quote className="h-12 w-12 text-vulcan-red mb-6" />
                  <blockquote className="text-lg italic text-muted-foreground mb-6 leading-relaxed">
                    "A great pilot is not born from talent alone but from discipline, persistence and an unshakable passion for the skies."
                  </blockquote>
                  <div className="text-vulcan-red font-semibold">
                    Capt. Alexander Moore, Founder & CEO
                  </div>
                </div>
                
                {/* Years Experience */}
                <div className="flex items-center gap-8">
                  <div className="text-6xl md:text-7xl font-bold text-vulcan-red">32+</div>
                  <div>
                    <div className="text-xl font-bold text-foreground">YEARS OF AVIATION</div>
                    <div className="text-xl font-bold text-foreground">EXCELLENCE</div>
                  </div>
                </div>
                
                {/* Aircraft Image */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={heroImage} 
                    alt="Training aircraft on runway with mountains in background" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-8">
                {/* Cockpit Image */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={pilotImage} 
                    alt="Professional pilots in aircraft cockpit during training" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Description */}
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With expert instructors and advanced resources, we equip aspiring pilots with skills and confidence to thrive in aviation careers worldwide.
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-vulcan-red text-vulcan-red hover:bg-vulcan-red hover:text-white bg-transparent px-8 py-4 text-lg font-semibold"
                  >
                    READ MORE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAvia;