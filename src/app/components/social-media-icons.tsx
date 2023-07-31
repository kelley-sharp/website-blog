import classNames from "classnames";
import Link from "next/link";
import { FaGithub, FaEnvelope, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const socialMediaIcons = [
  { id: 1, icon: <FaGithub />, href: "https://github.com/kelley-sharp" },
  { id: 2, icon: <FaLinkedin />, href: "https://www.linkedin.com/in/kelley-sharp/" },
  { id: 4, icon: <FaTwitterSquare />, href: "https://twitter.com/sharpkel2275" },
  { id: 3, icon: <FaEnvelope />, href: "mailto:hello@kelleysharp.me" },
];

type SocialMediaIconsProps = {
  className?: string;
};

export function SocialMediaIcons({ className }: SocialMediaIconsProps) {
  return (
    <div
      className={classNames(
        "md:text-md my-8 text-5xl md:my-0",
        "flex justify-around md:justify-end",
        "gap-8 text-6xl md:gap-4 md:text-4xl",
        className,
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
