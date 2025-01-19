"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import projects from "@/assets/data/projects";

import DateText from "@/app/(home)/components/DateText";

import { ChevronLeftIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function Page() {
  const { id } = useParams();
  const currProject = projects.find((project) => project.id === Number(id));

  const [selectedImage, setSelectedImage] = useState<number>(-1);

  const imageDirectory = "/images/projects";

  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      // Clicked outside the modal
      setSelectedImage(-1); // Close the modal or perform your desired action
    }
  };

  useEffect(() => {
    if (selectedImage != -1) {
      document.body.classList.add("no-doc-scroll");
    } else {
      document.body.classList.remove("no-doc-scroll");
    }

    if (selectedImage !== -1) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedImage]);

  if (!currProject) {
    return <div>Project not found!</div>;
  }

  return (
    <div>
      <div
        className={`${
          selectedImage === -1 ? "opacity-0 z-0" : "opacity-100 z-40"
        } bg-black w-full h-full bg-opacity-25 overscroll-contain fixed inset-0 flex items-center justify-center duration-200`}
      >
        <div className="relative" ref={modalRef}>
          <button onClick={() => setSelectedImage(-1)}>
            <Cross2Icon className="absolute w-10 h-10 text-gray-600 z-50 right-8 top-12" />
          </button>
          {selectedImage !== -1 && (
            <Image
              src={`${imageDirectory}/${currProject.images[selectedImage]}`}
              alt="Project image"
              className="rounded-2xl"
              width={1000}
              height={1600}
            />
          )}
        </div>
      </div>
      <div className="px-4 md:px-16 pt-8 md:container md:mx-auto justify-center">
        <div className="flex flex-col mt-[4vw] mb-[200px] text-lg">
          <h2 className="text-3xl font-bold mb-2">{currProject.name}</h2>

          <DateText
            startDate={currProject.startDate}
            endDate={currProject.endDate}
          />
          <div className="flex flex-wrap gap-5 mt-8">
            {currProject.images.map((imageURL, key) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedImage(key);
                }}
                className="relative w-80 cursor-pointer flex justify-start"
              >
                <Image
                  src={`${imageDirectory}/${imageURL}`}
                  alt="Project image"
                  className="rounded-2xl"
                  width={400}
                  height={400}
                />
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-8">
            {currProject.description.map((desc, descKey) => (
              <p key={descKey}>{desc}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <Link
              href={currProject.repository}
              className="text-blue-600 underline underline-offset-4 w-fit"
            >
              GitHub
            </Link>
            {currProject.demo && (
              <Link
                href={currProject.demo}
                className="text-blue-600 underline underline-offset-4 w-fit"
              >
                Live Site
              </Link>
            )}
          </div>

          <div className="mt-8">
            <h3 className="mb-2 underline underline-offset-4">Technologies</h3>
            <ul className="list-disc ms-6">
              {currProject.technologies.map((technology, techKey) => (
                <li key={techKey}>{technology}</li>
              ))}
            </ul>
          </div>

          <Link
            href="/"
            className="underline underline-offset-4 mt-16 flex items-center gap-2 hover:bg-foreground w-fit px-2 py-1 rounded-lg hover:text-background duration-300"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            Back to projects
          </Link>
        </div>
      </div>
    </div>
  );
}
