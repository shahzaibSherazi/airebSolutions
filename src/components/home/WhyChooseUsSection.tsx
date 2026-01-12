import { Check, Zap, Shield, Users } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We deliver projects on time without compromising on quality.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your data and projects are handled with the utmost security.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Our team is always available to help you succeed.",
  },
];

const benefits = [
  "Award-winning design team",
  "Transparent pricing and process",
  "Agile development methodology",
  "Post-launch support included",
  "100% satisfaction guarantee",
  "Modern tech stack",
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-28 bg-card relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-primary/15 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal direction="left">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-widest">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6">
                We Create Digital
                <span className="text-gradient block">Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                With years of experience and a passion for innovation, we deliver exceptional 
                digital solutions that help businesses grow and succeed in the modern world.
              </p>
              
              {/* Benefits List */}
              <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.08}>
                {benefits.map((benefit) => (
                  <StaggerItem key={benefit} direction="left">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{benefit}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
          
          {/* Right Content - Feature Cards */}
          <StaggerContainer className="space-y-6" staggerDelay={0.15}>
            {features.map((feature) => (
              <StaggerItem key={feature.title} direction="right">
                <div className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;