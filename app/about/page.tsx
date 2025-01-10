import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>PK</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Backend  Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          I am an ambitious and dedicated backend developer with a strong
          foundation in web development. With experience in working with
          technologies such as Express.js for backend development and React for
          frontend, I have a well-rounded understanding of building full-stack
          applications. My expertise lies in designing and developing efficient
          backend systems that are scalable and robust, with a focus on clean,
          modular code. Currently, I am expanding my technical skills by
          learning Go, a programming language known for its speed, simplicity,
          and efficiency in backend development. This move is aimed at enhancing
          my career and exploring new opportunities in building high-performance
          systems and applications. I am passionate about continuous learning
          and improving my skills in backend technologies, and I actively seek
          to apply my knowledge to real-world projects. My determination to stay
          ahead in the rapidly evolving field of web development makes me a
          valuable asset in any development team.
        </p>
      </div>
    </div>
  );
}
