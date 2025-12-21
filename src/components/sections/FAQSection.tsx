import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book a cleaning?",
    answer: "Booking is simple! Click any 'Get Your Free Quote' button on this page, select your service type, choose your preferred date and time, and confirm your booking. You'll receive instant confirmation via email and text.",
  },
  {
    question: "What's included in each cleaning service?",
    answer: "Each service level builds upon the previous one. Our Essential Clean covers all basic cleaning needs. Deep Clean adds detailed attention to often-overlooked areas. Premium Package includes everything plus special services like laundry, dishes, and aromatherapy finishing touches.",
  },
  {
    question: "Are your cleaning products safe for pets and children?",
    answer: "Absolutely! We exclusively use eco-friendly, non-toxic cleaning products that are safe for your entire family, including pets. All our products are free from harsh chemicals, dyes, and artificial fragrances.",
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer: "Your satisfaction is our top priority. If you're not completely happy with any aspect of our service, simply contact us within 24 hours and we'll return to re-clean the areas of concern at no additional cost. No questions asked.",
  },
  {
    question: "Are your cleaners background-checked and insured?",
    answer: "Yes! Every member of our cleaning team undergoes thorough background checks and is fully insured. We carry $2 million in liability coverage for your complete peace of mind.",
  },
  {
    question: "Can I request the same cleaner each time?",
    answer: "Of course! We understand the comfort of having familiar faces in your home. Simply let us know you'd like to request a specific cleaner, and we'll do our best to accommodate your preference with each booking.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards, debit cards, and digital payment methods including Apple Pay and Google Pay. Payment is processed after your cleaning is complete to your satisfaction.",
  },
  {
    question: "How do I cancel or reschedule a booking?",
    answer: "Life happens! You can cancel or reschedule your booking with no penalty as long as you give us 24 hours notice. Simply log into your account or contact our support team, and we'll handle the rest.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Got Questions?</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our cleaning services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 px-6 hover:border-primary/30 transition-colors duration-300 data-[state=open]:border-primary/30 data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="text-left font-display text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
