import Navbar from "@/components/Navbar";
import FloatingChatButton from "@/components/FloatingChatButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Sparkles, 
  FileText, 
  Calendar, 
  MessageCircle, 
  Presentation, 
  Headphones,
  Rocket,
  Target,
  Mail,
  Phone
} from "lucide-react";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Learn More
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover all the features that make EduHub your ultimate learning companion
            </p>
          </div>

          {/* Current Features Section */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-foreground mb-8">Current Features</h2>
            
            {/* AI-Powered Study Tools */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Sparkles className="h-6 w-6 text-primary" />
                  AI-Powered Study Tools
                </CardTitle>
                <CardDescription className="text-base">
                  Enhance your learning efficiency with intelligent tools designed to simplify your workload:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Note Summarization</strong> – Quickly convert long notes into clear, concise summaries.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Presentation Generation</strong> – Instantly turn your content into structured presentation slides.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Quiz Generation</strong> – Create customized quizzes to test your understanding.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Flashcard Generation</strong> – Automatically generate digital flashcards for effective revision.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Extensive Shared Resource Library */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <FileText className="h-6 w-6 text-primary" />
                  Extensive Shared Resource Library
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access a wide pool of study resources shared by students and educators. Upload, browse, and exchange notes, guides, and materials in a collaborative learning space.
                </p>
              </CardContent>
            </Card>

            {/* Smart Study Plan Generator */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calendar className="h-6 w-6 text-primary" />
                  Smart Study Plan Generator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Create personalized study plans based on your goals and schedule.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Sync seamlessly with Google Calendar to receive reminders and stay on track.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 24/7 Study Assistant Chatbot */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  24/7 Study Assistant Chatbot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ask questions, get explanations, and receive study support anytime. Our AI-powered chatbot is always available to help you learn, revise, and explore new topics.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Coming Soon Section */}
          <section className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-foreground mb-8">Coming Soon</h2>
            
            {/* Advanced Presentation Builder */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Presentation className="h-6 w-6 text-primary" />
                  Advanced Presentation Builder
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A beautiful, interactive presentation creator integrated with Gamma AI and Prezi—perfect for students who want stunning slides with minimal effort.
                </p>
              </CardContent>
            </Card>

            {/* Podcast Mode */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Headphones className="h-6 w-6 text-primary" />
                  Podcast Mode
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Convert your notes into an immersive, listenable podcast format—similar to Google's NotebookLM. Study anywhere, even on the go.
                </p>
              </CardContent>
            </Card>

            {/* More Outstanding Features */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Rocket className="h-6 w-6 text-primary" />
                  More Outstanding Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're constantly innovating. Expect more powerful tools, smarter integrations, and improved study experiences as we continue growing.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Our Goal Section */}
          <section className="animate-fade-in-up">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-6 w-6 text-primary" />
                  Our Goal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We are committed to empowering learners worldwide by providing accessible, high-quality educational tools.
                </p>
                <p className="text-muted-foreground">
                  Our mission aligns with the United Nations Sustainable Development Goal 4 (Quality Education)—ensuring inclusive, equitable, and lifelong learning opportunities for all.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information Section */}
          <section className="animate-fade-in-up">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Have questions, suggestions, or partnership inquiries? We'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a 
                      href="tel:+254702833485" 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      +254 702 833 485
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a 
                      href="mailto:oliverkaka715@gmail.com" 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      oliverkaka715@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <FloatingChatButton />
    </div>
  );
};

export default LearnMore;

