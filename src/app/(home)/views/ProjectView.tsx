import Image from "next/image";
import Link from "next/link";

import projects from "@/assets/data/projects";
import { Project } from "@/lib/types";

import DateText from "../components/DateText";

interface ProjectViewProps {
  featured: boolean;
}

export default function ProjectView({ featured }: ProjectViewProps) {
  const sortedProjects = [...projects].filter((project) => project.featured == featured).sort(
    (a, b) => b.endDate.getTime() - a.endDate.getTime()
  );
  return (
    <div className="mt-[150px] flex flex-col items-center min-[1540px]:items-start ms-3">
      <h2 className="text-4xl font-bold">{featured ? "Featured Projects" : "All Projects"}</h2>
      <div className="flex flex-wrap gap-x-[50px] gap-y-[80px] mt-10 justify-center">
        {sortedProjects.map((item: Project) => (
          <div
            key={item.id}
            className="flex flex-col w-[320px] sm:w-[450px] md:w-[474px] relative"
          >
            <div className="mb-4">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <DateText startDate={item.startDate} endDate={item.endDate} />
            </div>

            <Image
              src={`/images/projects/${item.images[0]}`}
              alt="Project image"
              width={500}
              height={300}
              className="rounded-xl"
            />

            <div className="flex flex-col gap-2 mt-4">
              <p className="line-clamp-3">{item.description[0]}</p>
            </div>
            <div className="h-14" />
            <Link
              href={`/projects/${item.id}`}
              className="px-3 py-2 w-fit bg-foreground text-background hover:bg-background hover:text-foreground rounded-lg duration-300 absolute bottom-0 mt-4"
            >
              See more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
