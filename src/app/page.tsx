// src/app/page.tsx
import { CertificationsStrip } from "@/components/home/CertificationsStrip";
import { ClientsTeaser } from "@/components/home/ClientsTeaser";
import { FinalCta } from "@/components/home/FinalCta";
import { HeroSection } from "@/components/home/HeroSection";
import { QualitySustainabilitySection } from "@/components/home/QualitySustainabilitySection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CertificationsStrip />
      <SolutionsSection />
      <SectorsSection />
      <QualitySustainabilitySection />
      <ClientsTeaser />
      <FinalCta />
    </>
  );
}
