import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const socialIcons = [
  { icon: <FaGithub />, path: "https://github.com/swafvanSFK" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/swafvan-k-137390290" },
  { icon: <FaInstagram />, path: "https://www.linkedin.com/in/swafvan-k-137390290" },
  { icon: <FaFacebook />, path: "https://www.linkedin.com/in/swafvan-k-137390290" },
];

type SocialsProps = {
    containerStyles?: string;
    iconStyles?: string;
  };

const Socials : React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialIcons.map((link, index) => {
        return (
          <Link target="new" className={iconStyles} key={index} href={link.path}>
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
