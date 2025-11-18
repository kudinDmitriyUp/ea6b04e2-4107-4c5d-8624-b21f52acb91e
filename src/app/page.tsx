"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { BarChart, Building, Clock, Headphones, Target, TrendingUp, Users, Workflow, Zap, MessageSquare, Mail } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="large"
      background="plain"
      cardStyle="solid-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1763461743566-wa6jcn9k.jpg"
          logoAlt="StaffToday"
          brandName="StaffToday"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Streamline Your Staffing Today"
          description="Connect top talent with leading companies through our comprehensive staffing platform. Efficient, reliable, and tailored to your needs."
          tag="Staffing Solutions"
          tagIcon={Users}
          buttons={[
            {
              text: "Find Talent",
              href: "contact"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1763461744253-58a7r0ku.jpg"
          imageAlt="Professional staffing team meeting"
          frameStyle="card"
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutMetric
          title="At StaffToday, we revolutionize staffing by connecting exceptional talent with forward-thinking companies through innovative technology and personalized service."
          metrics={[
            {
              icon: TrendingUp,
              label: "Successful Placements",
              value: "10,000+"
            },
            {
              icon: Building,
              label: "Partner Companies",
              value: "500+"
            },
            {
              icon: Users,
              label: "Active Candidates",
              value: "50K+"
            },
            {
              icon: Clock,
              label: "Average Placement Time",
              value: "7 Days"
            }
          ]}
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardFive
          title="Platform Features"
          description="Powerful tools designed to make staffing simple and effective"
          tag="Features"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          showIconBoxBackground={true}
          features={[
            {
              title: "Smart Matching",
              icon: Target
            },
            {
              title: "Real-time Analytics",
              icon: BarChart
            },
            {
              title: "Automated Workflows",
              icon: Workflow
            },
            {
              title: "24/7 Support",
              icon: Headphones
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Real feedback from companies who trust StaffToday"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "HR Director at TechCorp",
              testimonial: "StaffToday transformed our hiring process. We found quality candidates 50% faster than traditional methods.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1763461747700-zt798ywe.jpg",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Operations Manager at StartupXYZ",
              testimonial: "The platform's matching algorithm is incredible. Every candidate we interviewed was a perfect fit for our company culture.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1763461748442-1ucken7e.jpg",
              imageAlt: "Mike Chen portrait"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Recruitment Lead at GrowthCo",
              testimonial: "StaffToday's analytics gave us insights we never had before. Our placement success rate improved dramatically.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1763461749229-8i5vap01.jpg",
              imageAlt: "Emma Rodriguez portrait"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to Transform Your Staffing?"
          description="Join hundreds of companies who trust StaffToday for their staffing needs. Get started today and experience the difference."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1763461744253-58a7r0ku.jpg"
          imageAlt="StaffToday platform"
          mediaPosition="right"
          inputPlaceholder="Enter your business email"
          buttonText="Get Started"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1763461743566-wa6jcn9k.jpg"
          logoAlt="StaffToday"
          logoText="StaffToday"
          columns={[
            {
              items: [
                {
                  label: "Find Talent",
                  href: "contact"
                },
                {
                  label: "Post Jobs",
                  href: "contact"
                },
                {
                  label: "Platform Demo",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Features",
                  href: "features"
                },
                {
                  label: "Testimonials",
                  href: "testimonials"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "https://stafftoday.com/privacy"
                },
                {
                  label: "Terms of Service",
                  href: "https://stafftoday.com/terms"
                },
                {
                  label: "Contact Support",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}