import { Button } from "@/components/ui/button";
import { Check, Sparkles, Star, Crown } from "lucide-react";

const plans = [
  {
    name: "Essential Clean",
    description: "Perfect for regular maintenance",
    price: 99,
    frequency: "per visit",
    features: [
      "All rooms cleaned & dusted",
      "Bathrooms sanitized",
      "Kitchen surfaces & appliances",
      "Floors vacuumed & mopped",
      "Trash removal",
      "Beds made",
    ],
    cta: "Book Essential",
    popular: false,
  },
  {
    name: "Deep Clean",
    description: "Our most popular option",
    price: 179,
    frequency: "per visit",
    features: [
      "Everything in Essential, plus:",
      "Inside fridge & oven cleaning",
      "Window sills & blinds",
      "Baseboards & light fixtures",
      "Cabinet fronts wiped",
      "Door handles sanitized",
      "Pet hair removal",
    ],
    cta: "Book Deep Clean",
    popular: true,
  },
  {
    name: "Premium Package",
    description: "The ultimate clean experience",
    price: 299,
    frequency: "per visit",
    features: [
      "Everything in Deep Clean, plus:",
      "Interior windows cleaned",
      "Closet organization",
      "Laundry folded",
      "Dishes done",
      "Pantry organization",
      "Aromatherapy finish",
      "Priority scheduling",
    ],
    cta: "Book Premium",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Transparent Pricing</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Choose Your Perfect Clean
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees. No surprises. Just crystal-clear pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary shadow-elegant"
                  : "bg-card border border-border/50 hover:border-primary/30 hover:shadow-elegant"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="gradient-accent text-accent-foreground text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4" fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  {index === 0 && <Sparkles className="w-7 h-7 text-primary" />}
                  {index === 1 && <Star className="w-7 h-7 text-primary" />}
                  {index === 2 && <Crown className="w-7 h-7 text-primary" />}
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-semibold text-muted-foreground">$</span>
                  <span className="text-5xl font-display font-bold">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{plan.frequency}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                size="lg"
                className={`w-full rounded-full transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "gradient-accent border-0 glow-accent"
                    : "bg-primary hover:bg-primary/90"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-soft border border-primary/20">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="w-5 h-5 text-primary" />
            </div>
            <p className="font-medium">
              <span className="text-primary">100% Satisfaction Guarantee</span> — Not happy? We'll re-clean for free!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
