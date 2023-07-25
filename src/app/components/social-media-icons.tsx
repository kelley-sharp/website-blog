import classNames from "classnames";
import Link from "next/link";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const socialMediaIcons = [
  { id: 1, icon: <FaGithub />, href: "https://github.com/kelley-sharp" },
  { id: 2, icon: <FaLinkedin />, href: "https://www.linkedin.com/in/kelley-sharp/" },
  { id: 3, icon: <FaEnvelope />, href: "mailto:hello@kelleysharp.me" },
];

export function SocialMediaIcons() {
  return (
    <div
      className={classNames(
        "flex flex-row items-center gap-10 md:justify-end",
        "my-8 text-5xl md:my-0 md:text-6xl",
        "justify-center md:gap-4 md:text-4xl",
      )}
    >
      {socialMediaIcons.map((link) => {
        return <SocialMediaIcon key={link.id} icon={link.icon} href={link.href} />;
      })}
    </div>
  );
}

type SocialMediaIconProps = {
  icon: React.ReactNode;
  href: string;
};

function SocialMediaIcon({ icon, href }: SocialMediaIconProps) {
  return (
    <div>
      <Link className="text-slate-500 hover:text-slate-400 dark:hover:text-white/70" href={href}>
        {icon}
      </Link>
    </div>
  );
}
