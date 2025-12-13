"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FaqSection2() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline>FAQ</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-foreground">
              Find answers to our frequently asked questions
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              We&apos;ve compiled the most important information to help you get
              the most out of your experience. Can&apos;t find what you&apos;re
              looking for?{" "}
              <Link href="#" className="text-primary underline">
                Contact us.
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                General
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="General FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How does enrollment work?
                  </AccordionTrigger>
                  <AccordionContent>
                    Enrollment is simple. You can register online through our portal or visit our campus.
                    We offer counseling sessions to help you choose the right course before you sign up.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    What subjects are covered?
                  </AccordionTrigger>
                  <AccordionContent>
                    We cover a wide range of subjects including Mathematics, Sciences, Humanities, and standardized test preparations.
                    Our curriculum is designed to cater to various academic boards and competitive exams.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Are study materials accessible online?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, all enrolled students get access to our comprehensive digital library.
                    You can access recorded lectures, notes, and practice tests 24/7 through our student dashboard.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What is the student-to-mentor ratio?
                  </AccordionTrigger>
                  <AccordionContent>
                    We maintain a low student-to-mentor ratio to ensure personalized attention.
                    Typically, it is 15:1 for classroom sessions and 1:1 for personal mentorship programs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Billing FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Billing
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="Billing FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="billing-1">
                  <AccordionTrigger className="text-left">
                    How does the free plan work?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our free plan includes up to 5 hours of meeting
                    transcription per month, basic AI summaries, and access to
                    core features. You can upgrade to paid plans anytime for
                    unlimited transcription, advanced analytics, and premium
                    features. No credit card required to start with the free
                    plan.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="billing-2">
                  <AccordionTrigger className="text-left">
                    Can I change my plan anytime?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, you can upgrade, downgrade, or cancel your plan at any
                    time. Changes take effect immediately, and we&apos;ll
                    prorate any charges. If you downgrade, you&apos;ll keep
                    access to premium features until the end of your current
                    billing period. No long-term contracts or cancellation fees.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="billing-3">
                  <AccordionTrigger className="text-left">
                    Do you offer annual billing discounts?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer a 20% discount when you choose annual billing.
                    This applies to all paid plans and can save you
                    significantly over monthly billing. Annual plans are billed
                    upfront and automatically renew unless cancelled. You can
                    still change plans during your annual term.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="billing-4">
                  <AccordionTrigger className="text-left">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, Mastercard, American
                    Express, Discover), PayPal, and bank transfers for annual
                    plans. All payments are processed securely through Stripe.
                    We also support corporate invoicing for enterprise customers
                    with net 30 payment terms.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
