import location from "../imgs/location.png";
import gmail from "../imgs/gmail.png";
import whatsapp from "../imgs/whatsapp.png";
import github from "../imgs/github.png";
import linkedin from "../imgs/linkedin.png";

export interface InfoObj {
  src: string;
  alt: string;
  title: string;
  href: string;
}

export const info: InfoObj[] = [
  {
    src: location,
    alt: "location",
    title: "Rosario, Santa Fe, Argentina",
    href: "https://www.google.com/maps/place/Rosario,+Santa+Fe/@-32.9521898,-60.7666792,12z/data=!3m1!4b1!4m5!3m4!1s0x95b6539335d7d75b:0xec4086e90258a557!8m2!3d-32.9587022!4d-60.6930416",
  },
  {
    src: gmail,
    alt: "gmail",
    title: "fede.avelin.dev@gmail.com",
    href: "mailto:fede.avelin.dev@gmail.com",
  },
  {
    src: whatsapp,
    alt: "whatsapp",
    title: "+54 341 3434734",
    href: "https://api.whatsapp.com/send?phone=543413434734",
  },
  {
    src: github,
    alt: "github",
    title: "github.com/Fedex159",
    href: "https://github.com/Fedex159/",
  },
  {
    src: linkedin,
    alt: "linkedin",
    title: "linkedin.com/in/federico-avelin-dev/",
    href: "https://www.linkedin.com/in/federico-avelin-dev/",
  },
];
