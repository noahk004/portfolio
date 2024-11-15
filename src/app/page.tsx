"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

export default function Page() {
  const [imageURL, setImageURL] = useState<string>("");

  const fetchData = async () => {
    const response = await fetch("/api/projects");
    const data = await response.json();
    setImageURL(data.url);
  };

  fetchData();

  return (
    <div className="w-16">{imageURL && <Image src={imageURL} alt="zina" width={800} height={0} priority />}</div>
  );
}
