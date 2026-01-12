import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    id: 2,
    title: "Finance Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    id: 3,
    title: "Healthcare App",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
  },
  {
    id: 4,
    title: "Real Estate Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Portfolio</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3">Featured Projects</h2>
            </div>
            <Button variant="outline" asChild className="border-border hover:border-primary/50">
              <Link to="/projects" className="flex items-center gap-2">
                View All Projects
                <ArrowUpRight size={18} />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <Link
                to={`/projects/${project.id}`}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3] block"
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-primary text-sm font-medium mb-2 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex items-center text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <span className="text-sm font-medium">View Project</span>
                    <ArrowUpRight className="ml-2" size={16} />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProjectsSection;