import Link from "next/link";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const socialMediaLinks = [
  { id: 1, icon: <FaGithub />, href: "https://github.com/kelley-sharp" },
  { id: 2, icon: <FaLinkedin />, href: "https://www.linkedin.com/in/kelley-sharp/" },
  { id: 3, icon: <FaEnvelope />, href: "mailto:hello@kelleysharp.me" },
];

export function NavBar() {
  return (
    <nav className="fixed top-0 z-10 w-full p-10">
      <div className="prose mx-auto flex flex-col justify-between md:prose-xl md:flex-row md:px-6">
        <h1 className="mb-2 grid place-content-center text-3xl font-bold md:mb-0">
          <Link
            href="/"
            className=" text-slate-500 no-underline hover:text-slate-400 dark:text-white/70 dark:hover:text-white/70"
          >
            <div className="flex flex-col text-7xl md:text-4xl">
              <div className="flex flex-col text-center">
                <span>Kelley</span>
                <span>Sharp</span>
              </div>
              <span className="p-4 text-xl md:p-10 md:text-center md:text-sm">
                Software Engineer
              </span>
            </div>
          </Link>
        </h1>
        <div className="relative top-[240px] flex flex-row justify-center gap-10 align-middle text-6xl sm:justify-evenly md:static md:top-[180px] md:gap-4 md:text-4xl ">
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
      <Link className="text-slate-500 hover:text-slate-400 dark:hover:text-white/70" href={href}>
        {icon}
      </Link>
    </div>
  );
}
