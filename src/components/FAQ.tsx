
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is YouTube packaging?",
      answer: "YouTube packaging is the strategic combination of thumbnail design and title optimization working together to maximize click-through rate. We don't just design thumbnails in isolation—we develop packaging concepts where the visual and text work in harmony to drive clicks."
    },
    {
      question: "How fast is delivery?",
      answer: "Starter Audit delivers within 48 hours per thumbnail. Creator Packaging clients get 48-hour turnaround on scheduled uploads. Growth System clients receive priority delivery with structured A/B testing."
    },
    {
      question: "Do you provide revisions?",
      answer: "Yes! Starter Audit includes 1 revision round per thumbnail. Creator Packaging and Growth System clients get ongoing revision support to ensure your packaging is perfect before launch."
    },
    {
      question: "Do you help with titles?",
      answer: "Absolutely! Title strategy is a core part of our packaging service. We provide 2–3 title options designed to work synergistically with your thumbnail, maximizing curiosity and click-through rate."
    },
    {
      question: "Can you match my existing brand style?",
      answer: "Yes! Growth System includes a complete visual system (palette, typography, layout rules) that strengthens your brand credibility while optimizing for performance. We maintain consistency across your entire channel."
    },
    {
      question: "What's the member add-on rate?",
      answer: "While on Creator Packaging or Growth System plans, you can purchase additional thumbnails at 15% off our standard per-thumbnail price. This gives you flexibility for high-upload months."
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Get answers to common questions about our YouTube packaging service.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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

export default FAQ;
