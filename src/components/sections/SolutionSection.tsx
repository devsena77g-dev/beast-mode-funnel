import { Check, Sparkles, Leaf, Clock, Shield, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Deep Clean Excellence",
    description: "Our 50-point cleaning checklist ensures no corner is left untouched.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "Safe for your family, pets, and the planet. No harsh chemicals ever.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book online 24/7. Same-day service available for urgent needs.",
  },
  {
    icon: Shield,
    title: "Fully Insured & Bonded",
    description: "Complete peace of mind with $2M liability coverage.",
  },
  {
    icon: Heart,
    title: "Satisfaction Guaranteed",
    description: "Not happy? We'll re-clean for free within 24 hours.",
  },
  {
    icon: Award,
    title: "Trained Professionals",
    description: "Background-checked, uniformed, and expertly trained teams.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Check className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Solution You've Been Waiting For</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Introducing <span className="text-gradient">SparkleClean Pro</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Where luxury meets reliability. We've redefined what professional cleaning means, 
            so you can enjoy a pristine home without lifting a finger.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
