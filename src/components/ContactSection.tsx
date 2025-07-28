import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "priyanshu.dev@email.com",
      href: "mailto:priyanshu.dev@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gwalior, Madhya Pradesh, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/priyanshu",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/priyanshu-dev",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/priyanshu_dev",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="mobile-section relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-bg-secondary opacity-5"></div>
      <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-20 w-56 sm:w-80 h-56 sm:h-80 bg-accent-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="mobile-container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mobile-heading mb-4">
            <span className="neon-text-glow">Let's Connect</span>
          </h2>
          <p className="mobile-subheading text-muted-foreground">Ready to bring your ideas to life? Let's talk!</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mobile-first layout: Stack vertically, then side-by-side */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 animate-slide-in-left order-2 lg:order-1">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    Get in Touch
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    I'm always excited to discuss new opportunities and collaborate on interesting projects.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3 sm:gap-4 group">
                      <div className="bg-gradient-primary rounded-full p-2 sm:p-3 group-hover:shadow-glow transition-all duration-300">
                        <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm text-muted-foreground">{info.label}</div>
                        <a 
                          href={info.href}
                          className="font-medium hover:neon-text transition-all duration-300 text-sm sm:text-base break-all"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Follow Me</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Stay connected and follow my journey in tech
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <div className="bg-muted rounded-full p-3 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 group-active:scale-95">
                          <social.icon className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-300 ${social.color}`} />
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right order-1 lg:order-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Send a Message</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Have a project in mind? Let's discuss how we can work together.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="mobile-form-input"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="mobile-form-input"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="mobile-form-input"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or idea..."
                        rows={4}
                        className="mobile-form-input resize-none"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="btn-neon w-full text-base sm:text-lg py-4 sm:py-6">
                      <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;