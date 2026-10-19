import React from "react";
import { FAQS_DATA } from "@/data/faqs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";
import { ServiceFAQ } from "@/types/service";
import { PhoneCall, Sparkles } from "lucide-react";


export interface FAQSectionProps {
  badge?: string;
  title?: React.ReactNode;
  subtitle?: string;
  faqs?: ServiceFAQ[] | typeof FAQS_DATA;
  serviceName?: string;
  sidebarTitle?: string;
  sidebarText?: string;
}

export function FAQSection({
  badge = "Got Questions?",
  title = <>Frequently Asked Questions <span className="gradient-text-accent">About Irvine Plumbing</span></>,
  subtitle = "Helpful answers to common homeowner questions regarding emergency repairs, water heaters, slab leak warning signs, and finding local plumbing assistance.",
  faqs,
  serviceName = "Irvine Plumbing",
  sidebarTitle = "Have a Question Not Listed Here?",
  sidebarText = "Call our Irvine line directly to explain your situation, ask about technician availability, or request guidance on water shutoff valves.",
}: FAQSectionProps = {}) {
  const displayFaqs = (faqs && faqs.length > 0 ? faqs : FAQS_DATA) as any[];

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 cols): Sticky Heading & 3D Phone Support Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#168DFF]/10 text-[#087BDB] border border-[#168DFF]/25 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>

            <h2 className="section-title font-extrabold font-heading text-[#0F172A] mb-4">
              {title}
            </h2>

            <p className="text-base text-[#475569] leading-relaxed mb-8">
              {subtitle}
            </p>

            {/* Direct 3D Glass Phone Support Box */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_16px_35px_-8px_rgba(15,23,42,0.08)] bento-card-3d card-sheen">
              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center shadow-lg shadow-[#168DFF]/30">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-[#0F172A]">
                    {sidebarTitle}
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    We are available by phone to answer questions.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                {sidebarText}
              </p>

              <PhoneCTA
                placement="faq_sidebar"
                label={`Call ${BUSINESS_PHONE.display}`}
                variant="primary"
                className="w-full text-xs py-3.5 font-bold shadow-lg shadow-[#168DFF]/25 btn-3d"
                showIcon={true}
              />
            </div>
          </div>

          {/* Right Column (7 cols): Full Accordion List */}
          <div className="lg:col-span-7">
            <FAQAccordion items={displayFaqs} />
          </div>

        </div>
      </div>
    </section>
  );
}

