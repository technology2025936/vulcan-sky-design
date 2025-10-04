import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Trophy, BookOpen, Navigation, ArrowRight, Star, } from "lucide-react";
import whychoose from "@/assets/why choose.jpg";
import test from "@/assets/test3.jpg"
import testone from "@/assets/cardtest.jpg"
import testtwo from "@/assets/instrument.jpg"
import testthree from "@/assets/cardtestsecond.jpg"
import { Link } from "react-router-dom";


const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Single-Engine Instrument CPL (Commercial Pilot Licence)",
      description: "Build a professional flying career with solid single-engine flight training under instrument conditions across India and South Africa.",
      icon: Plane, 
      image: test,
      slug: "single-engine"
    },
    {
      id: 2,
      title: "Multi-Engine Instrument CPL (Commercial Pilot Licence)", 
      description: "Train for professional aviation with advanced multi-engine handling, instrument rating, and CPL flight test at Lanseria International Airport.",
      icon: Trophy,
      image: testone,
      slug: "multi-engine"
    },
    {
      id: 3,
      title: "Commercial Pilot License (CPL)",
      description: "Aviakul’s flagship CPL program designed for aspiring pilots who want to fly for airlines, corporates, or charter operations.",
      icon: Navigation,
      image: testtwo,
      slug: "commercial-pilot"
    },
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-vulcan-red/10 text-vulcan-red px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              AVIATION PROGRAMS
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Experience The Power Of Flight
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our programs deliver hands-on training, advanced simulation, and expert mentorship to help you master every aspect of flying.
            </p>
          </div>
          {/* <Button 
            variant="outline" 
            size="lg" 
            className="hidden lg:flex border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            MORE PROGRAMS
          </Button> */}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
  {programs.map((program) => {
    const IconComponent = program.icon;
    return (
      <Card key={program.id} className="group relative overflow-hidden bg-white border-2 border-gray-100 hover:border-vulcan-red/30 transition-all duration-500 hover:shadow-xl rounded-3xl">
        <div className="relative">
          <div className="aspect-[4/3] relative overflow-hidden rounded-t-3xl">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
              <Link to={`/${program.slug}`}>
              <ArrowRight className="w-6 h-6 text-white" />
              </Link>
            </div>
            
          </div>
          
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-vulcan-red transition-colors duration-300">
              {program.title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              {program.description}
            </p>
          </div>
        </div>
      </Card>
    );
  })}
</div>


        {/* Call to Action */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 text-muted-foreground mb-4">
            
            <Button 
              className="bg-vulcan-red hover:bg-vulcan-red/90 text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 group"
            >
              REGISTER NOW
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>



      {/* second section */}
      {/* Background Pattern */}
      

      <div className="container mx-auto px-4 relative z-10 mt-20">
        <div className="max-w-7xl mx-auto ">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Cockpit Image */}
        

            {/* Right Column - Content */}
            <div className="space-y-1">
              {/* Header */}
              <div>
                {/* <div className="inline-flex items-center border border-vulcan-red/30 rounded-full px-6 py-2 text-sm font-medium text-vulcan-red mb-6 bg-vulcan-red/10">
                  WHY CHOOSE AVIA
                </div> */}
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                Are You A 

                  <span className="block text-vulcan-red">Foreign Student?</span>
                </h2>
              </div>


              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
              <b>Contact us for a detailed quote to suit your local CAA requirements</b>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              Committing to the right flight school should not be a difficult step to take. This can be challenging when flooded with information relating to which school to join or the endless
               career possibilities that are available in this diverse industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              Allow the qualified staff at Vulcan Aviation to guide you on this journey and answer all your aviation and training-related questions. 
              We will assist you in making the best decision to suit your specific needs and requirements.
              </p>
               {/* Call to Action */}
        <div className="text-center">
          <div className="flex items-left justify-left py-4 gap-4 text-muted-foreground mb-4">
            
            <Button 
              className="bg-vulcan-red hover:bg-vulcan-red/90 text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 group"
            >
              REGISTER NOW
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
             
              {/* CTA Button */}
              {/* <Button 
                variant="outline" 
                size="lg" 
                className="border-vulcan-red text-vulcan-red hover:bg-vulcan-red hover:text-white bg-transparent px-8 py-4 text-lg font-semibold group"
              >
                LEARN MORE ABOUT US
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button> */}
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={test} 
                  alt="Professional pilot operating aircraft controls in modern cockpit"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-vulcan-red/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-vulcan-red/5 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Programs;