import { Button } from "@/components/ui/button";
import { Sparkles, Phone, Mail, Clock, MapPin } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elegant border border-border/50 text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Limited Time Offer</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Ready for a Spotless Home?
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Join 10,000+ happy customers who've reclaimed their weekends. 
              Book now and get <span className="text-primary font-semibold">20% OFF</span> your first cleaning!
            </p>
            
            <div className="inline-block bg-accent/10 rounded-lg px-4 py-2 mb-8">
              <p className="text-sm font-medium text-accent">
                Use code: <span className="font-bold">SPARKLE20</span> at checkout
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-10 py-6 rounded-full glow-primary transition-all duration-300 hover:scale-105 gradient-accent border-0">
                Get Your Free Quote Now
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 rounded-full border-2 hover:bg-primary/5 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              No credit card required • Free cancellation • Same-day service available
            </p>
          </div>

          {/* Contact info */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Phone, label: "Call Us", value: "(555) 123-4567" },
              { icon: Mail, label: "Email", value: "hello@sparkleclean.pro" },
              { icon: Clock, label: "Hours", value: "Mon-Sun 7AM-9PM" },
              { icon: MapPin, label: "Service Area", value: "Greater Metro Area" },
            ].map((item, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 text-center border border-border/30 hover:border-primary/30 transition-colors duration-300">
                <div className="w-10 h-10 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
