import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

import basicInfo from "@/assets/data/basic";
import ContactButton from "../components/ContactButton";

export default function ContactView() {
  return (
    <div id="contact" className="flex justify-center mt-[150px] mb-[200px]">
      <div>
        <h2 className="text-4xl mb-3 font-bold text-center">Contact Me!</h2>
        <div className="flex gap-3 justify-center">
          <ContactButton
            Icon={EnvelopeClosedIcon}
            url={"mailto:" + basicInfo.email}
          />
          <ContactButton Icon={LinkedInLogoIcon} url={basicInfo.linkedin} />
          <ContactButton Icon={GitHubLogoIcon} url={basicInfo.github} />
        </div>
      </div>
    </div>
  );
}
