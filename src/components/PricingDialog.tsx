import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Crown, Zap } from "lucide-react";

interface PricingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PricingDialog = ({ open, onOpenChange }: PricingDialogProps) => {
  const tiers = [
    {
      name: "Freemium",
      icon: Sparkles,
      price: "Free",
      period: "Get Pro for 10 hours per approved document",
      features: [
        "Basic learning resources",
        "Standard AI tools access",
        "Upload and share documents",
        "Earn 10 hours Pro access per approved document"
      ],
      cta: "Current Plan",
      variant: "outline" as const,
      badge: null,
    },
    {
      name: "Pro",
      icon: Zap,
      price: "300 Ksh",
      period: "per month",
      annualPrice: "3,000 Ksh",
      annualPeriod: "per year",
      features: [
        "Everything in Freemium",
        "Ad-free experience",
        "Up to 6 professional presentations daily (Gamma AI/Prezi)",
        "Podcast mode: Convert notes to audio",
        "Priority support"
      ],
      cta: "Upgrade to Pro",
      variant: "default" as const,
      badge: "Popular",
    },
    {
      name: "Pro+",
      icon: Crown,
      price: "500 Ksh",
      period: "per month",
      annualPrice: "5,000 Ksh",
      annualPeriod: "per year",
      features: [
        "Everything in Pro",
        "Unlimited professional presentations (Gamma AI/Prezi)",
        "Access to video lectures",
        "Professional assignment help",
        "Premium support",
        "Early access to new features"
      ],
      cta: "Upgrade to Pro+",
      variant: "default" as const,
      badge: "Best Value",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">Upgrade Your Learning Experience</DialogTitle>
          <DialogDescription>
            Choose the plan that fits your educational journey
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative border-2 rounded-lg p-6 ${
                tier.badge ? "border-primary shadow-lg" : "border-border"
              }`}
            >
              {tier.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  {tier.badge}
                </Badge>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <tier.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{tier.name}</h3>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{tier.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{tier.period}</p>
                {tier.annualPrice && (
                  <p className="text-sm text-muted-foreground mt-1">
                    or {tier.annualPrice} {tier.annualPeriod}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={tier.variant}
                disabled={tier.name === "Freemium"}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center pt-4">
          All paid plans include a 7-day free trial. Cancel anytime.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default PricingDialog;
