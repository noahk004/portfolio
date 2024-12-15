"use client"

import LandingView from "./views/LandingView";
import ProjectView from "./views/ProjectView";
import ContactView from "./views/ContactView";

export default function Page() {
  return (
    <div className="container mx-auto">
      <LandingView />
      <ProjectView />
      <ContactView />
    </div>
  );
}
