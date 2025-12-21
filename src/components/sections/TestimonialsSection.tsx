import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Busy Mom of 3",
    content: "SparkleClean Pro has been a game-changer for our family. I finally have weekends free to spend with my kids instead of scrubbing bathrooms. Worth every penny!",
    rating: 5,
    image: "SM",
  },
  {
    name: "David Chen",
    role: "Tech Executive",
    content: "As someone who works 60+ hours a week, this service is invaluable. My apartment has never looked better, and the team is incredibly professional.",
    rating: 5,
    image: "DC",
  },
  {
    name: "Emily Rodriguez",
    role: "Real Estate Agent",
    content: "I recommend SparkleClean Pro to all my clients. Their move-out cleaning service helps my sellers get top dollar for their homes. Absolutely impeccable work!",
    rating: 5,
    image: "ER",
  },
  {
    name: "Michael Thompson",
    role: "Small Business Owner",
    content: "We use them for our office and the difference is night and day. Employees love coming to work in a spotless environment. Reliable, thorough, and affordable.",
    rating: 5,
    image: "MT",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Real Results</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-lg text-muted-foreground">
            See why thousands of homeowners trust us with their spaces
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant relative group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent" fill="currentColor" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-lg leading-relaxed mb-6 text-foreground/90">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "10,000+", label: "Happy Customers" },
            { number: "50,000+", label: "Cleanings Done" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "98%", label: "Rebook Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient">{stat.number}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
