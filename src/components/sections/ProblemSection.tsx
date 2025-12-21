import { XCircle } from "lucide-react";

const problems = [
  {
    title: "No Time to Clean",
    description: "Between work, family, and life, who has hours to scrub floors and dust shelves?",
  },
  {
    title: "Inconsistent Results",
    description: "DIY cleaning never quite reaches that professional, showroom-quality finish.",
  },
  {
    title: "Toxic Products",
    description: "Worried about harsh chemicals around your family and pets?",
  },
  {
    title: "Unreliable Services",
    description: "Tired of no-shows, hidden fees, and cleaners who cut corners?",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Sound Familiar?</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            You Deserve Better Than This
          </h2>
          <p className="text-lg text-muted-foreground">
            Life is too short to spend it cleaning. And when you do try, these frustrations keep getting in the way...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-destructive/20 hover:border-destructive/40 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-display text-foreground/80 italic">
            "There has to be a better way..."
          </p>
          <p className="text-primary font-semibold mt-2">There is. ↓</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
