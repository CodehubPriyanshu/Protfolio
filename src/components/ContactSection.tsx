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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-bg-secondary opacity-5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="neon-text-glow">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground">Ready to bring your ideas to life? Let's talk!</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Get in Touch
                </CardTitle>
                <CardDescription>
                  I'm always excited to discuss new opportunities and collaborate on interesting projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="bg-gradient-primary rounded-full p-3 group-hover:shadow-glow transition-all duration-300">
                      <info.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <a 
                        href={info.href}
                        className="font-medium hover:neon-text transition-all duration-300"
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
                <CardTitle className="text-xl">Follow Me</CardTitle>
                <CardDescription>
                  Stay connected and follow my journey in tech
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="bg-muted rounded-full p-3 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                        <social.icon className={`h-5 w-5 transition-colors duration-300 ${social.color}`} />
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Have a project in mind? Let's discuss how we can work together.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="glass-card focus:shadow-glow transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="glass-card focus:shadow-glow transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="glass-card focus:shadow-glow transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      className="glass-card focus:shadow-glow transition-all duration-300 resize-none"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="btn-neon w-full text-lg py-6">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;