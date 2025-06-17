
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do your thumbnails differ from AI-generated ones?",
      answer: "Our thumbnails are strategically crafted by experienced designers who understand YouTube psychology and your specific niche. Unlike AI-generated templates, each design is unique, research-backed, and tailored to your brand and content style."
    },
    {
      question: "What's your typical turnaround time?",
      answer: "For single thumbnails, we deliver within 48 hours. Pro retainer clients get 24-hour delivery, and Pro+ clients can access same-day delivery options for urgent content."
    },
    {
      question: "Do you provide revisions?",
      answer: "Yes! Test the Waters includes 2 revision rounds, while Pro and Pro+ clients get unlimited revisions to ensure complete satisfaction with the final design."
    },
    {
      question: "What do I need to provide for my thumbnail design?",
      answer: "We need your video assets (screenshots, photos), video topic/title, any specific text you want included, brand colors/guidelines if available, and any style preferences or reference thumbnails."
    },
    {
      question: "Can you match my existing brand style?",
      answer: "Absolutely! We create custom brand consistency guides and ensure all thumbnails align with your established visual identity while optimizing for maximum click-through rates."
    },
    {
      question: "Do you work with all types of content?",
      answer: "Yes, we have experience across all major YouTube niches including vlogs, educational content, gaming, business, tech, documentaries, and more. Each design is tailored to your specific audience and content type."
    },
    {
      question: "What file formats do you provide?",
      answer: "You'll receive high-resolution files in multiple formats including PNG (recommended for YouTube), JPG, and source files. All thumbnails are optimized for YouTube's display requirements."
    },
    {
      question: "Can I cancel my retainer anytime?",
      answer: "Yes, our monthly retainers can be cancelled at any time with 30 days notice. We believe in earning your business through results, not binding contracts."
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Get answers to common questions about our thumbnail design service.
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
