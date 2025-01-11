export default function AboutView() {
  return (
    <div className="mt-[150px] flex flex-col items-center min-[1540px]:items-start ms-3">
      <h2 className="text-4xl font-bold mb-5">About</h2>
      <div className="mx-5 min-[1540px]:mx-0 flex flex-col gap-3">
        <p>
          Hi! My name is Noah. I am a computer science student at UCI graduating
          2026. I love playing the bass guitar, playing basketball, and drinking
          coffee.
        </p>
        <p>
          I am adamant about building cool things. Part of why web development
          has piqued my interest at an early age is because I loved being able
          to build and publish things using free resources on the internet. Now, I hope to work at a company where my work will be put to good
        </p>
        <p>
          I have worked in multiple full-stack development settings in which I
          have developed skills in all facets of the craft. I have designed and
          built multiple industry-standard REST APIs, Figma mockups, frontend
          web applications, AWS architectures, and DevOps tools.
        </p>
      </div>
    </div>
  );
}
