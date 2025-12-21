import { Button } from "@/components/ui/button";
import { Sparkles, Star, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Trust badges floating */}
      <div className="absolute top-32 left-8 md:left-20 opacity-0 animate-slide-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 shadow-soft border border-border/50">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-accent" fill="currentColor" />
            </div>
            <div>
              <p className="font-semibold text-sm">4.9/5 Rating</p>
              <p className="text-xs text-muted-foreground">2,500+ Reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-40 right-8 md:right-20 opacity-0 animate-slide-in-right" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 shadow-soft border border-border/50">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-sm">100% Insured</p>
              <p className="text-xs text-muted-foreground">Peace of Mind</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-40 left-8 md:left-32 opacity-0 animate-slide-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 shadow-soft border border-border/50">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-sm">Same Day</p>
              <p className="text-xs text-muted-foreground">Service Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-8 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted by 10,000+ Happy Homes</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Transform Your Space Into a
            <span className="text-gradient block mt-2">Sparkling Sanctuary</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Professional cleaning services that give you back your time and peace of mind. 
            Experience the luxury of coming home to perfection—every single time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-slide-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button size="lg" className="text-lg px-8 py-6 rounded-full glow-primary transition-all duration-300 hover:scale-105 gradient-accent border-0">
              Get Your Free Quote
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-2 hover:bg-primary/5 transition-all duration-300">
              See Our Work
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-0 animate-slide-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center text-primary-foreground text-xs font-bold">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-accent" fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Join 10,000+ satisfied customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-slide-up" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
