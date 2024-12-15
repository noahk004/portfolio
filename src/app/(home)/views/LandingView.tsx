import Image from "next/image";
import Link from "next/link"

export default function LandingView() {
  return (
    <div className="flex gap-[20px] items-center justify-center mt-[100px]">
      <div className="w-[500px]">
        <p className="text-xl">Hello, my name is</p>
        <h1 className="text-6xl font-bold mt-1 bg-gradient-to-r from-[#a600ff] to-[#4200ff]  inline-block text-transparent bg-clip-text">Noah M. Kim</h1>
        <p className="mb-5 mt-2 text-xl">Avid enthusiast of green squares and JetBrain Mono.</p>
        <Link href="#contact" className="px-4 py-2 bg-foreground text-background hover:bg-background hover:text-foreground rounded-lg duration-300 text-lg">Contact Me</Link>
      </div>
      <Image src="/images/headshot-min.jpg" alt="Headshot photo" width={300} height={300} className="rounded-2xl" />
    </div>
  );
}
