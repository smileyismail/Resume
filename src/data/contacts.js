import { HiOutlineMail } from "react-icons/hi";
import { BiPhone, BiLogoGithub } from "react-icons/bi";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

export const contacts = [
  {
    id: Math.floor(Math.random() * 100000).toString(),
    icon: <HiOutlineMail />,
    title: "smileyismail69@gmail.com",
    link: "mailto:smileyismail69@gmail.com",
  },
  {
    id: Math.floor(Math.random() * 100000).toString(),
    icon: <BiPhone />,
    title: "+91 8187050086",
    link: "tel:918187050086",
  },
  {
    id: Math.floor(Math.random() * 100000).toString(),
    icon: <GiEarthAfricaEurope />,
    title: "smiley-ismail.netlify.app/",
    link: "https://smiley-ismail.netlify.app/",
  },
  {
    id: Math.floor(Math.random() * 100000).toString(),
    icon: <BiLogoGithub />,
    title: "github.com/smileyismail/",
    link: "https://github.com/smileyismail/",
  },
  {
    id: Math.floor(Math.random() * 100000).toString(),
    icon: <AiOutlineLinkedin />,
    title: "linkedin.com/in/smileyismail/",
    link: "https://www.linkedin.com/in/smileyismail/",
  },
  {
    id: Math.floor(Math.random() * 100000).toString(),
    icon: <MdOutlineLocationOn />,
    title: "Hyderabad, Telangana, India",
    link: "https://www.google.com/maps/place/Hyderabad,+Telangana/@17.4123487,78.4080455,11z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99daeaebd2c7:0xae93b78392bafbc2!8m2!3d17.385044!4d78.486671!16zL20vMDljNnc?entry=ttu",
  },
];
