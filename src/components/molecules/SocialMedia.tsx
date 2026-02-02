import { socialLinks } from "@/utils/socialLinks";
import { FC } from "react";

type SocialMediaType = 'footer' | 'contact';
interface SocialMediaProps {
  type?: SocialMediaType;
}

export const SocialMedia: FC<SocialMediaProps> = ({ type = 'footer' }) => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          target="_blank"
          key={link.name}
          href={link.href}
          className={
            type === 'footer'
              ? `text-gray-400 ${link.footerHoverColor} transition-colors`
              : `bg-gray-100 p-3 rounded-lg ${link.contactBgHover} transition-colors`
          }
        >
          <svg
            className={
              type === 'footer'
                ? "w-6 h-6"
                : `w-6 h-6 ${link.contactIconColor} ${link.contactHoverColor}`
            }
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d={link.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}
