import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/abel-boop", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/abel-boop", icon: <FaLinkedin />, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-gradient-to-r from-[#5542ff] to-[#4535cc] py-8 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4">
        <div className="flex items-center space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-white/80 transition-all duration-300 hover:text-white"
            >
              <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </span>
              <span className="text-sm font-light">{link.label}</span>
            </a>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-sm font-light text-white/80">
            Crafted by <span className="font-medium text-white">Abel Desalegn</span>
          </p>
          <p className="mt-2 text-xs font-light text-white/60">
            Visual inspiration drawn from the award-winning website (Zentry.com)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
