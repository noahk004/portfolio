"use client"

import LandingView from "./views/LandingView";
import EducationView from "./views/EducationView"
import ExperienceView from "./views/ExperienceView";
import ProjectView from "./views/ProjectView";
import ContactView from "./views/ContactView";

export default function Page() {
  return (
    <div className="container mx-auto">
      <LandingView />
      <EducationView />
      <ExperienceView />
      <ProjectView featured={true}/>
      <ProjectView featured={false}/>
      <ContactView />
    </div>
  );
}
