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
        "md:text-md my-8 text-5xl md:my-0",
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
      <Link href={href} passHref legacyBehavior>
        <a
          className="text-nuetralText-dark hover:text-nuetralText-light dark:hover:text-lightText"
          target="_blank"
        >
          {icon}
        </a>
      </Link>
    </div>
  );
}
