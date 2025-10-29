import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <Button
        asChild
        size="lg"
        className="rounded-full w-14 h-14 shadow-card-hover bg-primary hover:bg-accent"
      >
        <a href="tel:+19543949144" aria-label="Call us">
          <Phone className="h-6 w-6" />
        </a>
      </Button>
      <Button
        asChild
        size="lg"
        className="rounded-full w-14 h-14 shadow-card-hover bg-[#25D366] hover:bg-[#20BA5A]"
      >
        <a href="https://wa.me/19543949144" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingActions;
