import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/auth">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
        </Link>
        <h1 className="font-serif text-4xl font-bold mb-2 text-foreground">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: September 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
            <p>We collect information you provide when creating an account (name, email, password), profile details (photo, preferences), and content you upload such as study notes, past papers, and presentations. We also collect usage data such as pages visited and features used.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p>Your information is used to provide and improve EduHub services, authenticate your account, deliver AI-powered study tools, share approved resources with other learners, and communicate important updates.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Sharing of Information</h2>
            <p>We do not sell your personal data. Approved study resources you upload may be visible to other users. We may share limited data with trusted service providers (hosting, AI providers) strictly to operate the platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
            <p>We use industry-standard measures to protect your data, including encrypted connections and access controls. However, no online service is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
            <p>You may access, update, or delete your account and personal data at any time from your profile settings. You may also request a copy of the data we hold about you.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Cookies</h2>
            <p>We use cookies and similar technologies to keep you signed in and remember your preferences.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Children's Privacy</h2>
            <p>EduHub is intended for users aged 13 and above. We do not knowingly collect data from children under 13.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">8. Changes to This Policy</h2>
            <p>We may update this policy periodically. Continued use of EduHub after changes means you accept the revised policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">9. Contact</h2>
            <p>For privacy-related questions, contact us at privacy@eduhub.example.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
