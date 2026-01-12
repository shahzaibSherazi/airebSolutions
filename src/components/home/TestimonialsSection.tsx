import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/motion";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "DesignCo transformed our vision into reality. Their attention to detail and creative approach exceeded all our expectations. The team was professional and delivered on time.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
  },
  {
    id: 2,
    quote: "Working with DesignCo was an absolute pleasure. They understood our brand perfectly and created a website that truly represents who we are. Highly recommended!",
    author: "Michael Chen",
    role: "Founder, Innovate Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  },
  {
    id: 3,
    quote: "The team at DesignCo is incredibly talented. They brought fresh ideas to the table and helped us stand out in a competitive market. Our conversion rates have increased by 40%.",
    author: "Emily Rodriguez",
    role: "Marketing Director, GlobalBrand",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-28 bg-card relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <ScrollReveal>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Testimonials</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-16">What Our Clients Say</h2>
          </ScrollReveal>

          {/* Testimonial Card */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <Quote className="absolute -top-4 left-1/2 -translate-x-1/2 text-primary/20" size={80} />
              
              <div className="bg-background border border-border rounded-3xl p-10 md:p-14 relative z-10 overflow-hidden min-h-[300px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-10 italic">
                      "{current.quote}"
                    </p>
                    
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={current.avatar}
                        alt={current.author}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-foreground text-lg">{current.author}</div>
                        <div className="text-sm text-muted-foreground">{current.role}</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-6 mt-10">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full w-12 h-12 border-border hover:border-primary/50 hover:bg-primary/10"
                >
                  <ChevronLeft size={20} />
                </Button>
                
                <div className="flex gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? "bg-primary w-8" 
                          : "bg-border hover:bg-muted-foreground w-3"
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full w-12 h-12 border-border hover:border-primary/50 hover:bg-primary/10"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;