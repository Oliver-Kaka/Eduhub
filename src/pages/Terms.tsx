import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/auth">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
        </Link>
        <h1 className="font-serif text-4xl font-bold mb-2 text-foreground">Terms and Conditions</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: September 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>By creating an account on EduHub, you agree to these Terms and Conditions and our Privacy Policy. If you do not agree, do not use the service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Account Responsibilities</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Provide accurate information when signing up.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Acceptable Use</h2>
            <p>You agree not to upload content that is illegal, copyrighted without permission, inappropriate, hateful, or misleading. Admins review uploads and may reject or remove content that violates these rules.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. User-Generated Content</h2>
            <p>You retain ownership of resources you upload but grant EduHub a non-exclusive license to host, display, and distribute approved content to other users of the platform for educational purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. AI Tools</h2>
            <p>AI-generated summaries, quizzes, flashcards, and presentations are provided for study assistance only. Always verify important information — AI can make mistakes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Subscriptions and Payments</h2>
            <p>Paid plans (Pro, Pro+) renew automatically until cancelled. Prices are shown in Kenyan Shillings. You may cancel at any time from your profile settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Intellectual Property</h2>
            <p>The EduHub name, logo, and platform code are owned by EduHub. You may not copy, modify, or redistribute them without written permission.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">8. Termination</h2>
            <p>We may suspend or terminate accounts that violate these terms. You may delete your account at any time from the profile menu.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">9. Disclaimer</h2>
            <p>EduHub is provided "as is" without warranties of any kind. We do not guarantee the accuracy of user-uploaded resources.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">10. Contact</h2>
            <p>Questions about these terms? Contact support@eduhub.example.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
