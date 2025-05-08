import Image from "next/image";

export default function ExperienceView() {
  return (
    <div className="mt-[150px] flex flex-col items-center min-[1540px]:items-start ms-3">
      <h2 className="text-4xl font-bold">Work Experience</h2>
      <div className="mt-10 flex items-center gap-6 px-4 w-full">
        <div>
          <Image
            src="/images/sces-logo.jpg"
            alt="UCI Student Center & Events Services logo"
            width={100}
            height={100}
          />
        </div>

        <div className="w-full text-lg">
          <div className="flex justify-between">
            <p className="font-semibold text-2xl">
              Full Stack Web Developer
            </p>
            <p>Nov 2024 - Present</p>
          </div>

          <p>UCI Student Center & Events Services</p>
        </div>
      </div>
    </div>
  );
}
