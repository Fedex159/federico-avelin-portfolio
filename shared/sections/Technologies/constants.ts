import {
  IconCss,
  IconTailwind,
  IconHTML,
  IconMaterialUI,
  IconJavascript,
  IconTypescript,
  IconReact,
  IconReactHookForm,
  IconTanstack,
  IconExpress,
  IconNodeJs,
  IconNextjs,
  IconPostgresql,
  IconGit,
  IconLinux,
  IconVite,
  IconPwa,
  IconStyledComponents,
  IconDocker,
  IconNpm,
} from "@/public/assets";
import { Translations } from "@/shared/types/translations";
import { StaticImageData } from "next/image";

type TechnologiesList = {
  icon: string | StaticImageData;
  translationKey: Translations<"technologies">;
}[];

export const TECHNOLOGIES_LIST: TechnologiesList = [
  {
    icon: IconCss,
    translationKey: "icons.css",
  },
  {
    icon: IconTailwind,
    translationKey: "icons.tailwind",
  },
  {
    icon: IconHTML,
    translationKey: "icons.html",
  },
  {
    icon: IconMaterialUI,
    translationKey: "icons.materialUI",
  },
  {
    icon: IconStyledComponents,
    translationKey: "icons.styledComponents",
  },
  {
    icon: IconJavascript,
    translationKey: "icons.javascript",
  },
  {
    icon: IconTypescript,
    translationKey: "icons.typescript",
  },
  {
    icon: IconReact,
    translationKey: "icons.react",
  },
  {
    icon: IconReactHookForm,
    translationKey: "icons.reactHookForm",
  },
  {
    icon: IconTanstack,
    translationKey: "icons.tanstack",
  },
  {
    icon: IconExpress,
    translationKey: "icons.express",
  },
  {
    icon: IconNodeJs,
    translationKey: "icons.node",
  },
  {
    icon: IconNextjs,
    translationKey: "icons.nextjs",
  },
  {
    icon: IconPostgresql,
    translationKey: "icons.postgresql",
  },
  {
    icon: IconDocker,
    translationKey: "icons.docker",
  },
  {
    icon: IconGit,
    translationKey: "icons.git",
  },
  {
    icon: IconLinux,
    translationKey: "icons.linux",
  },
  {
    icon: IconVite,
    translationKey: "icons.vite",
  },
  {
    icon: IconPwa,
    translationKey: "icons.pwa",
  },
  {
    icon: IconNpm,
    translationKey: "icons.npm",
  },
];
