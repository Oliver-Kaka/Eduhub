import { Button } from "@/components/ui/button";
import { BookOpen, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                Supporting UN SDG 4: Quality Education
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Empowering Learning
              <span className="block text-primary mt-2">
                For Everyone
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Access comprehensive educational resources, AI-powered study tools, 
              and personalized learning plans. Together, we're building a future 
              where quality education is accessible to all.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  document.querySelector('.quick-access-section')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="font-semibold border-2 hover:bg-secondary/50 transition-all duration-300"
                asChild
              >
                <Link to="/learn-more">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="animate-fade-in relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Students collaborating in modern learning environment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-primary">10k+</div>
              <div className="text-sm text-muted-foreground">Active Learners</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Courses Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
