import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/motion/fade-in";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";


const team = [
  {
    name: "Jane Doe",
    role: "Founder & Design Lead",
    photo: "/images/team/jane.png",
    bio: "15 years designing products for startups and enterprises.",
    links: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "Marcus Lee",
    role: "Engineering Lead",
    photo: "/images/team/jane.png",
    bio: "Previously staff engineer at a Series C fintech.",
    links: { github: "https://github.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "Priya Shah",
    role: "Strategy & Product",
    photo: "/images/team/jane.png",
    bio: "Helps teams find clarity before we write a single line of code.",
    links: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "Alex Rivera",
    role: "Design Engineer",
    photo: "/images/team/jane.png",
    bio: "Lives at the intersection of Figma and TypeScript.",
    links: { github: "https://github.com", twitter: "https://twitter.com" },
  },
];

export function TeamGrid() {
  return (
    <section className="container mx-auto px-4 py-20 border-t">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Team</h2>
        <p className="mt-4 text-xl text-muted-foreground leading-relaxed max-w-2xl">
          A small senior team. No handoffs, no juniors learning on your dime.
        </p>
      </div>

      <Stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {team.map((m) => (
          <StaggerItem key={m.name}>
            <div className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <div className="font-semibold">{m.name}</div>
                <div className="text-sm text-muted-foreground">{m.role}</div>
                <p className="text-sm text-muted-foreground mt-2">{m.bio}</p>
                <div className="flex gap-3 mt-3">
                  {m.links.twitter && (
                    <a href={m.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition">
                      <FaTwitter className="h-4 w-4" />
                    </a>
                  )}
                  {m.links.linkedin && (
                    <a href={m.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition">
                      <FaLinkedin className="h-4 w-4" />
                    </a>
                  )}
                  {m.links.github && (
                    <a href={m.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition">
                      <FaGithub className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}