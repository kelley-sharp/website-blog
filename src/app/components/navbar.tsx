import Link from "next/link";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const socialMediaLinks = [
  { id: 1, icon: <FaGithub />, href: "https://github.com/kelley-sharp" },
  { id: 2, icon: <FaLinkedin />, href: "https://www.linkedin.com/in/kelley-sharp/" },
  { id: 3, icon: <FaEnvelope />, href: "mailto:hello@kelleysharp.me" },
];

export function NavBar() {
  return (
    <nav className="sticky top-0 z-10 p-4 drop-shadow-xl">
      <div className="prose prose-xl mx-auto flex flex-col justify-between sm:flex-row">
        <h1 className="mb-2 grid place-content-center text-3xl font-bold md:mb-0">
          <Link href="/" className="text-slate-500 no-underline hover:text-white/70">
            Kelley Sharp
            <span> - Software Engineer</span>
          </Link>
        </h1>
        <div className="relative top-[180px] flex flex-row justify-center gap-4 align-middle text-4xl sm:justify-evenly md:static ">
          {socialMediaLinks.map((link) => {
            return <SocialMediaLink key={link.id} icon={link.icon} href={link.href} />;
          })}
        </div>
      </div>
    </nav>
  );
}

type SocialMediaLinkProps = {
  icon: React.ReactNode;
  href: string;
};

function SocialMediaLink({ icon, href }: SocialMediaLinkProps) {
  return (
    <div>
      <Link className="text-slate-500 hover:text-white/70" href={href}>
        {icon}
      </Link>
    </div>
  );
}
