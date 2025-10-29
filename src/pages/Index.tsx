import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";
import QuickAccessCards from "@/components/QuickAccessCards";
import FloatingChatButton from "@/components/FloatingChatButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SearchSection />
        <QuickAccessCards />
      </main>
      <FloatingChatButton />
    </div>
  );
};

export default Index;
