import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Bot, Calendar, Share2, Search, Shield, Target } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-serif font-bold text-foreground">EduHub</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link to="/learn-more">
                <Button variant="ghost">Learn More</Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/auth">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Target className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Supporting UN SDG 4: Quality Education
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                Empowering Learning
                <span className="block text-primary mt-2">For Everyone</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                EduHub is a collaborative educational platform where students and educators share resources, 
                generate AI-powered study tools, and build personalized learning plans — all aligned with the mission 
                of making quality education accessible to all.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link to="/auth">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Get Started
                  </Button>
                </Link>
                <Link to="/learn-more">
                  <Button size="lg" variant="outline" className="font-semibold border-2 hover:bg-secondary/50 transition-all duration-300">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-3">What You Can Do</h2>
              <p className="text-muted-foreground">Tools designed to support every student's journey</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Search,
                  title: "Find Units",
                  description: "Search by unit code, name, or browse by course and year of study.",
                },
                {
                  icon: Share2,
                  title: "Share Resources",
                  description: "Upload notes, past papers, and presentations for others to download.",
                },
                {
                  icon: Bot,
                  title: "AI Study Tools",
                  description: "Generate quizzes, summaries, flashcards, and presentations from your notes.",
                },
                {
                  icon: Calendar,
                  title: "Study Plans",
                  description: "Create AI-powered study plans and sync them with your Google Calendar.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-3">How It Works</h2>
              <p className="text-muted-foreground">Three simple steps to start learning</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Create an Account",
                  description: "Sign up for free as a student to access resources and AI tools.",
                },
                {
                  step: "02",
                  title: "Find or Upload Materials",
                  description: "Browse approved resources by course and year, or upload your own notes.",
                },
                {
                  step: "03",
                  title: "Study Smarter",
                  description: "Use AI tools to summarize notes, create quizzes, and build study plans.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust / Safety */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 p-6 rounded-xl border border-border bg-card">
              <Shield className="w-6 h-6 text-primary" />
              <p className="text-sm text-muted-foreground">
                All uploaded resources are reviewed by admins to ensure they are accurate, appropriate, and well-categorized.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-serif font-bold">Ready to Start Learning?</h2>
            <p className="text-muted-foreground">
              Join EduHub today and be part of a community dedicated to quality education for everyone.
            </p>
            <Link to="/auth">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Create Your Free Account
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EduHub. Supporting UN SDG 4: Quality Education.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
