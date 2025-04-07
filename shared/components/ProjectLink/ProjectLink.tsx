import Link from "next/link";
import { ComponentProps } from "react";
import { linkClassname } from "./ProjectLink.styles";
import Image from "next/image";

type Props = {
  icon: string;
  iconAlt: string;
} & ComponentProps<typeof Link>;

export const ProjectLink = ({ children, icon, iconAlt, ...props }: Props) => {
  return (
    <Link
      {...props}
      className={linkClassname}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={icon} alt={iconAlt} width={25} />
      {children}
    </Link>
  );
};
