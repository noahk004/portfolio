"use client"

import LandingView from "./views/LandingView";
import EducationView from "./views/EducationView"
import ProjectView from "./views/ProjectView";
import ContactView from "./views/ContactView";

export default function Page() {
  return (
    <div className="container mx-auto">
      <LandingView />
      <EducationView />
      <ProjectView featured={true}/>
      <ProjectView featured={false}/>
      <ContactView />
    </div>
  );
}
