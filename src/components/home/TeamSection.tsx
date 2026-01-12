import { Linkedin, Twitter } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const team = [
  {
    name: "Alex Thompson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Jessica Park",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Maria Garcia",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    linkedin: "#",
    twitter: "#",
  },
];

const TeamSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Team</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3">Meet The Experts</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Our talented team of designers and developers are passionate about creating exceptional digital experiences.
            </p>
          </div>
        </ScrollReveal>

        {/* Team Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.12}>
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <div className="group text-center">
                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={member.linkedin}
                      className="w-11 h-11 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-11 h-11 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
                
                {/* Info */}
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TeamSection;