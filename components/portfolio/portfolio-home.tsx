"use client";

import { useState } from "react";
import AboutSection from "./about-section";
import ContactSection from "./contact-section";
import ProjectsSection from "./projects-section";
import QualificationsSection from "./qualifications-section";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import SkillsSection from "./skills-section";
import TrajectorySection from "./trajectory-section";

export default function PortfolioHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="portfolio-main">
      <SiteHeader
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <AboutSection />
      <TrajectorySection />
      <SkillsSection />
      <ProjectsSection />
      <QualificationsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
