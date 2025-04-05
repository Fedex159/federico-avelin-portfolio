import {
  IconGithub,
  IconGmail,
  IconLinkedin,
  IconLocation,
} from "@/public/assets";
import { Translations } from "@/shared/types/translations";

type InfoList = {
  alt: string;
  icon: string;
  url: string;
  translationKey: Translations<"contact">;
}[];

export const INFO_LIST: InfoList = [
  {
    alt: "location",
    icon: IconLocation,
    translationKey: "info.location",
    url: "https://www.google.com/maps/place/Rosario,+Santa+Fe/@-32.9521898,-60.7666792,12z/data=!3m1!4b1!4m5!3m4!1s0x95b6539335d7d75b:0xec4086e90258a557!8m2!3d-32.9587022!4d-60.6930416",
  },
  {
    alt: "gmail",
    icon: IconGmail,
    url: "mailto:fede.avelin.dev@gmail.com",
    translationKey: "info.email",
  },
  {
    alt: "github",
    icon: IconGithub,
    url: "https://github.com/Fedex159/",
    translationKey: "info.github",
  },
  {
    alt: "linkedin",
    icon: IconLinkedin,
    url: "https://www.linkedin.com/in/federico-avelin-dev/",
    translationKey: "info.linkedin",
  },
];
