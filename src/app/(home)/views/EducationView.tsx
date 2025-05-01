import Image from "next/image";

export default function EducationView() {
  return (
    <div className="mt-[150px] flex flex-col items-center min-[1540px]:items-start ms-3">
      <h2 className="text-4xl font-bold">Education</h2>
      <div className="mt-10 flex items-center gap-6 px-4 w-full">
        <div>
          <Image
            src="/images/uci-logo.png"
            alt="UCI logo"
            width={100}
            height={100}
          />
        </div>

        <div className="w-full text-lg">
          <div className="flex justify-between">
            <p className="font-semibold text-2xl">
              University of California, Irvine
            </p>
            <p>Sept 2023 - June 2026</p>
          </div>

          <p>B.S. Computer Science</p>
        </div>
      </div>
    </div>
  );
}
