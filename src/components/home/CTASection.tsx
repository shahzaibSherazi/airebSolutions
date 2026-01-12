import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/motion";

const CTASection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Start A Project</span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mt-4 mb-8">
              Ready to Start Your
              <span className="text-gradient block mt-2">Next Project?</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's work together to create something amazing. Get in touch with us today and let's bring your vision to life.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button size="lg" asChild className="group h-14 px-10 text-base">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 px-10 text-base border-border hover:border-primary/50 hover:bg-primary/10">
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;