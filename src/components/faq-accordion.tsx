import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items: Array<{ question: string; answer: string }>;
  defaultOpenIndex?: number;
  className?: string;
};

export function FaqAccordion({
  items,
  defaultOpenIndex = 0,
  className,
}: FaqAccordionProps) {
  return (
    <div className={cn("grid gap-4", className)}>
      {items.map((item, index) => (
        <details
          key={item.question}
          className="surface-card card-lift group rounded-[1.9rem] border border-foreground/8 p-6"
          open={index === defaultOpenIndex}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-5">
            <span className="display-font text-lg leading-7 font-semibold tracking-[-0.035em] text-foreground sm:text-[1.35rem]">
              {item.question}
            </span>
            <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-white/82 text-foreground shadow-[0_8px_18px_rgba(17,23,21,0.06)] transition-transform duration-200 group-open:rotate-45 group-open:border-brand/30 group-open:bg-brand-soft group-open:text-brand-deep">
              <Plus className="size-4" />
            </span>
          </summary>
          <div className="mt-5 border-t border-foreground/8 pt-5">
            <p className="max-w-3xl text-base leading-7 text-muted">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
