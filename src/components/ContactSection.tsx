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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message successfully sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "priyanshumails.bca2025@gmail.com",
      href: "mailto:priyanshumails.bca2025@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8602062785",
      href: "tel:+918602062785"
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
      href: "https://github.com/CodehubPriyanshu",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/priyanshu-kumar-bca2025/",
      color: "hover:text-blue-600"
    },
    // {
    //   icon: Twitter,
    //   label: "Twitter",
    //   href: "https://twitter.com/priyanshu_dev",
    //   color: "hover:text-blue-400"
    // }
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

        {/* Enhanced mobile-responsive layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">

            {/* Get in Touch Card - Enhanced mobile responsiveness */}
            <div className="animate-slide-in-left">
              <Card className="glass-card contact-card h-full min-h-[400px] sm:min-h-[500px]">
                <CardHeader className="pb-4 sm:pb-6 p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-3 text-lg sm:text-xl lg:text-2xl">
                    <div className="bg-gradient-primary rounded-full p-2 shadow-glow">
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary-foreground" />
                    </div>
                    Get in Touch
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    I'm always excited to discuss new opportunities and collaborate on interesting projects.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                  {/* Contact Information with improved mobile layout */}
                  <div className="space-y-3 sm:space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center gap-3 sm:gap-4 group contact-info-item">
                        <div className="bg-gradient-primary rounded-full p-2 sm:p-3 group-hover:shadow-glow-strong transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                          <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs sm:text-sm text-muted-foreground font-medium">{info.label}</div>
                          <a
                            href={info.href}
                            className="font-semibold hover:neon-text transition-all duration-300 text-sm sm:text-base break-words"
                            aria-label={`Contact via ${info.label}: ${info.value}`}
                            tabIndex={0}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links Section with improved mobile layout */}
                  <div className="pt-4 border-t border-border/50">
                    <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Follow My Journey</h4>
                    <div className="flex gap-3 sm:gap-4 justify-start">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group social-link"
                          aria-label={`Visit my ${social.label} profile`}
                          tabIndex={0}
                        >
                          <div className="bg-muted rounded-full p-2 sm:p-3 group-hover:shadow-glow-strong transition-all duration-300 group-hover:scale-110 group-active:scale-95 border border-border/20 group-hover:border-primary/50">
                            <social.icon className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-300 ${social.color}`} />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Send a Message Card - Enhanced mobile responsiveness */}
            <div className="animate-slide-in-right">
              <Card className="glass-card contact-card h-full min-h-[400px] sm:min-h-[500px]">
                <CardHeader className="pb-4 sm:pb-6 p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-3 text-lg sm:text-xl lg:text-2xl">
                    <div className="bg-gradient-primary rounded-full p-2 shadow-glow">
                      <Send className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary-foreground" />
                    </div>
                    Send a Message
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    Have a project in mind? Let's discuss how we can work together.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-4 sm:p-6 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Name and Email row - responsive grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="mobile-form-input"
                          aria-required="true"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="mobile-form-input"
                          aria-required="true"
                          required
                        />
                      </div>
                    </div>

                    {/* Subject field */}
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="mobile-form-input"
                        aria-required="true"
                        required
                      />
                    </div>

                    {/* Message field */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or idea..."
                        rows={4}
                        className="mobile-form-input resize-none min-h-[100px] sm:min-h-[120px]"
                        aria-required="true"
                        required
                      />
                    </div>

                    {/* Submit button */}
                    <Button
                      type="submit"
                      className="btn-neon w-full text-sm sm:text-base lg:text-lg py-3 sm:py-4 lg:py-6 shadow-glow-strong"
                      disabled={isSubmitting}
                      aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
                    >
                      <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
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