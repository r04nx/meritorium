"use client";

import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer1() {
  return (
    <footer
      className="bg-background section-padding-y"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Top Section */}
        <div className="flex w-full flex-col items-center gap-12 text-center">
          {/* Logo Section */}
          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>

          {/* Main Navigation */}
          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Footer navigation"
          >
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </Link>
            <Link
              href="https://www.shadcndesign.com/pro-blocks"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <Link
              href="#faq"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </nav>
        </div>

        {/* Section Divider */}
        <Separator role="presentation" />

        {/* Bottom Section */}
        <div className="flex w-full flex-col-reverse items-center gap-12 text-sm lg:flex-row lg:justify-between lg:gap-6">
          {/* Copyright Text */}
          {/* Copyright Text */}
          <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
            <p className="text-muted-foreground">
              &copy; 2020 Meritorium Knowledge Academy. All Rights Reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              Site Designed and Maintained by Prism Technology
            </p>
            <div className="text-muted-foreground text-sm flex flex-col items-center lg:items-start mt-2">
              <p>Swapnapoorti CHS, Bldg No L-4, Shop No 7, Sector-36, Kharghar, New Mumbai</p>
              <p>+91 9324764352 / +91 9773690698</p>
              <a href="mailto:director.meritorium@gmail.com" className="hover:underline">director.meritorium@gmail.com</a>
            </div>
          </div>

          {/* Legal Navigation */}
          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Legal links"
          >
            <Link
              href="https://www.shadcndesign.com/pro-blocks"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://www.shadcndesign.com/pro-blocks"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="https://www.shadcndesign.com/pro-blocks"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
