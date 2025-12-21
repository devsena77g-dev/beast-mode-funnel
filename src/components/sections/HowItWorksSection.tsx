import { Calendar, Users, Sparkles, Check } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Book in 60 Seconds",
    description: "Choose your service, pick a time that works, and you're done. It's that simple.",
  },
  {
    number: "02",
    icon: Users,
    title: "We Arrive on Time",
    description: "Your dedicated cleaning team shows up exactly when scheduled, ready to transform your space.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Relax & Enjoy",
    description: "While we work our magic, you focus on what matters. Come home to pure perfection.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Simple Process</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Clean Home in 3 Easy Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            We've made professional cleaning as effortless as possible
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
            
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card border-4 border-primary/20 mb-6 relative z-10 group-hover:border-primary transition-colors duration-300">
                  <span className="text-2xl font-display font-bold text-gradient">{step.number}</span>
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick benefits */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {["No Contracts", "Cancel Anytime", "Instant Confirmation", "Secure Payment"].map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
