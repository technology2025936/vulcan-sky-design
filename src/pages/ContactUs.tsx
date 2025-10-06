"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";




const ContactUs = () => {

  const [open, setOpen] = useState(false);
  const [popupSubmitted, setPopupSubmitted] = useState(false);
  const [popupForm, setPopupForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handlePopupChange = (e: any) => {
    const { id, value } = e.target;
    setPopupForm((prev) => ({ ...prev, [id]: value }));
  };

  const handlePopupSubmit = (e: any) => {
    e.preventDefault();
    setPopupSubmitted(true);

    // Optionally trigger file download
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/downloads/DGCA_Estimate.pdf"; // Replace with actual file path
      link.download = "DGCA_Estimate.pdf";
      link.click();
      setOpen(false);
      setPopupSubmitted(false);
      setPopupForm({ name: "", email: "", phone: "" });
    }, 2000);
  };


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    height: "",
    education: "",
    licence: "",
    medical: "",
    english: "",
    careerGoal: "",
    citizenship: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Contact Vulcan Aviation
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Ready to start your aviation journey? Get in touch with our team
              today
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                  <CardTitle className="text-lg mb-2">Location</CardTitle>
                  <CardDescription>
                    1234 Aviation Drive
                    <br />
                    Sky Harbor Airport
                    <br />
                    Phoenix, AZ 85034
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Phone className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                  <CardTitle className="text-lg mb-2">Phone</CardTitle>
                  <CardDescription>
                    +91 866 0164381
                    <br />
                    +27 71 113 7209
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Mail className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                  <CardTitle className="text-lg mb-2">Email</CardTitle>
                  <CardDescription>
                    enquires@flyvulcan.co.za
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                  <CardTitle className="text-lg mb-2">Hours</CardTitle>
                  <CardDescription>
                    Mon-Fri: 7:00 AM - 7:00 PM
                    <br />
                    Saturday: 8:00 AM - 5:00 PM
                    <br />
                    Sunday: 9:00 AM - 4:00 PM
                  </CardDescription>
                </CardContent>
              </Card>
            </div> */}

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Questionnaire Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-aviation-grey">
                    Aviation Enquiry Questionnaire
                  </CardTitle>
                  <CardDescription>
                    Please fill out all the questions below. Our admissions team
                    will reach out to you within 24 hours.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {submitted ? (
                    <div className="p-8 text-center bg-muted rounded-lg">
                      <h3 className="text-2xl font-semibold text-sky-primary mb-2">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground">
                        Your details have been submitted successfully. Our team
                        will contact you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Full Name */}
                      <div className="space-y-2">
                        <Label htmlFor="fullName">
                          What is your full name (as per passport/ID)?
                        </Label>
                        <Input
                          id="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email">What is your email address?</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <Label htmlFor="phone">What is your phone number?</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Date of Birth */}
                      <div className="space-y-2">
                        <Label htmlFor="dob">What is your date of birth?</Label>
                        <Input
                          id="dob"
                          type="date"
                          value={formData.dob}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Height */}
                      <div className="space-y-2">
                        <Label htmlFor="height">
                          What is your current height? (Minimum requirement: 155 cm)
                        </Label>
                        <Input
                          id="height"
                          placeholder="Enter your height in cm"
                          value={formData.height}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Education */}
                      <div className="space-y-2">
                        <Label htmlFor="education">
                          What is your highest completed level of education?
                        </Label>
                        <Input
                          id="education"
                          placeholder="Enter your qualification"
                          value={formData.education}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Licence */}
                      <div className="space-y-2">
                        <Label htmlFor="licence">
                          Do you currently hold any pilot licence or aviation
                          experience? If yes, please specify.
                        </Label>
                        <Textarea
                          id="licence"
                          placeholder="Enter details of your licence or experience"
                          value={formData.licence}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Medical */}
                      <div className="space-y-2">
                        <Label htmlFor="medical">
                          Have you completed a Class 1 or Class 2 Aviation Medical?
                        </Label>
                        <select
                          id="medical"
                          className="w-full p-3 border border-input rounded-lg bg-background"
                          value={formData.medical}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select option</option>
                          <option value="Class 1">Class 1</option>
                          <option value="Class 2">Class 2</option>
                          <option value="Not Completed">Not Completed</option>
                        </select>
                      </div>

                      {/* English */}
                      <div className="space-y-2">
                        <Label htmlFor="english">
                          What is your level of English proficiency (speaking, reading, writing)?
                        </Label>
                        <Input
                          id="english"
                          placeholder="Example: Fluent / Intermediate / Basic"
                          value={formData.english}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Career Goal */}
                      <div className="space-y-2">
                        <Label htmlFor="careerGoal">
                          What is your career goal in aviation (airline pilot, charter, instructor, etc.)?
                        </Label>
                        <Textarea
                          id="careerGoal"
                          placeholder="Describe your career goal"
                          value={formData.careerGoal}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Citizenship */}
                      <div className="space-y-2">
                        <Label htmlFor="citizenship">
                          Are you a South African citizen or an international applicant?
                          If international, what is your country of origin?
                        </Label>
                        <Input
                          id="citizenship"
                          placeholder="Enter your citizenship or country"
                          value={formData.citizenship}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button
                        variant="aviation"
                        size="lg"
                        className="w-full"
                        type="submit"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Submit Form
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>


              {/* Map and Additional Info */}
              <div className="space-y-8">
                {/* <Card>
                  <CardHeader>
                    <CardTitle className="text-aviation-grey">
                      Visit Our Facility
                    </CardTitle>
                    <CardDescription>
                      Located at Sky Harbor Airport with easy access to runways
                      and modern training facilities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center mb-6">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-sky-primary mx-auto mb-4" />
                        <p className="text-muted-foreground">
                          Interactive Map Coming Soon
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-aviation-grey mb-2">
                          Parking
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Free parking available in our dedicated lot
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-aviation-grey mb-2">
                          Public Transport
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Accessible via Sky Harbor shuttle and bus routes
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card> */}

                <Card className="p-2">
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                    <Card className="text-center">
                      <CardContent className="pt-6">
                        <MapPin className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                        <CardTitle className="text-lg mb-2">Location</CardTitle>
                        <CardDescription>
                          1234 Aviation Drive
                          <br />
                          Sky Harbor Airport
                          <br />
                          Phoenix, AZ 85034
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card className="text-center">
                      <CardContent className="pt-6">
                        <Phone className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                        <CardTitle className="text-lg mb-2">Phone</CardTitle>
                        <CardDescription>
                          +91 866 0164381
                          <br />
                          +27 71 113 7209
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card className="text-center">
                      <CardContent className="pt-6">
                        <Mail className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                        <CardTitle className="text-lg mb-2">Email</CardTitle>
                        <CardDescription>
                          enquires@flyvulcan.co.za
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card className="text-center">
                      <CardContent className="pt-6">
                        <Clock className="h-8 w-8 text-sky-primary mx-auto mb-4" />
                        <CardTitle className="text-lg mb-2">Hours</CardTitle>
                        <CardDescription>
                          Mon-Fri: 7:00 AM - 7:00 PM
                          <br />
                          Saturday: 8:00 AM - 5:00 PM
                          <br />
                          Sunday: 9:00 AM - 4:00 PM
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-aviation-grey">
                      Quick Links
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <span>Download DGCA Estimate</span>
                      <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            Download Now
                          </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle className="text-aviation-grey">
                              DGCA Estimate
                            </DialogTitle>
                            <DialogDescription>
                              Please fill out the form to access the download.
                            </DialogDescription>
                          </DialogHeader>

                          {!popupSubmitted ? (
                            <form onSubmit={handlePopupSubmit} className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                  id="name"
                                  placeholder="Enter your full name"
                                  value={popupForm.name}
                                  onChange={handlePopupChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  placeholder="Enter your email"
                                  value={popupForm.email}
                                  onChange={handlePopupChange}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                  id="phone"
                                  type="tel"
                                  placeholder="Enter your phone number"
                                  value={popupForm.phone}
                                  onChange={handlePopupChange}
                                  required
                                />
                              </div>

                              <Button type="submit" variant="aviation" className="w-full">
                                <Send className="h-4 w-4 mr-2" /> Submit & Download
                              </Button>
                            </form>
                          ) : (
                            <div className="text-center py-6">
                              <h3 className="text-lg font-semibold text-sky-primary mb-2">
                                Thank You!
                              </h3>
                              <p className="text-muted-foreground">
                                Your download will start automatically.
                              </p>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>

                    </div>

                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-aviation-grey mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-sky-primary">
                    How long does pilot training take?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Training duration varies by license type. PPL typically
                    takes 8-12 weeks, while commercial training can take 16-20
                    weeks depending on your schedule and weather conditions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-sky-primary">
                    What are the medical requirements?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    You'll need an FAA medical certificate. For private pilots,
                    a 3rd class medical is sufficient. Commercial pilots require
                    a 1st or 2nd class medical certificate.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-sky-primary">
                    Do you offer financing options?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Yes, we offer various financing options including payment
                    plans, student loans, and partnerships with financial
                    institutions to make training more accessible.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-sky-primary">
                    Can I train part-time?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Absolutely! We offer flexible scheduling to accommodate work
                    and personal commitments. Part-time training typically takes
                    longer but allows you to maintain your current lifestyle.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
