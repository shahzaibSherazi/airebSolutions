import { Link } from "react-router-dom";
import { ArrowUpRight, Palette, Code, Lightbulb, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning interfaces that users love to interact with.",
    link: "/services",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building fast, responsive, and scalable websites using cutting-edge technologies.",
    link: "/services",
  },
  {
    icon: Lightbulb,
    title: "Brand Identity",
    description: "Crafting memorable brand experiences that resonate with your target audience.",
    link: "/services",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Driving growth through strategic digital marketing campaigns and SEO optimization.",
    link: "/services",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-28 bg-card relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-widest">What We Do</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3">Our Services</h2>
            </div>
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-primary group">
              <Link to="/services" className="flex items-center gap-2">
                View All Services
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link
                to={service.link}
                className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 block h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowUpRight className="ml-2" size={16} />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;