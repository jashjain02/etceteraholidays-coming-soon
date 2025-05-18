"use client";

import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#", color: "#1877F2" },
    { icon: Instagram, label: "Instagram", href: "#", color: "#E4405F" },
    { icon: Twitter, label: "Twitter", href: "#", color: "#1DA1F2" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "#0A66C2" },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        
        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={`Follow us on ${social.label}`}
            className="group relative"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 shadow-md transform transition-all duration-300 ease-in-out hover:scale-110">
              <Icon 
                size={16} 
                className="text-gray-600 dark:text-gray-300 transition-all duration-300 group-hover:text-[#0BCEAF]" 
              />
            </div>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
              {social.label}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks