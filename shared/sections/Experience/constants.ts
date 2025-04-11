import { Translations } from "@/shared/types/translations";

type Experience = {
  companyTranslationKey: Translations<"experience">;
  descriptionTranslationKey: Translations<"experience">;
  positionTranslationKey: Translations<"experience">;
  timeTranslationKey: Translations<"experience">;
};

export const EXPERIENCE_LIST: Experience[] = [
  {
    companyTranslationKey: "items.generator.company",
    descriptionTranslationKey: "items.generator.description",
    positionTranslationKey: "items.generator.position",
    timeTranslationKey: "items.generator.time",
  },
  {
    companyTranslationKey: "items.stellar.company",
    descriptionTranslationKey: "items.stellar.description",
    positionTranslationKey: "items.stellar.position",
    timeTranslationKey: "items.stellar.time",
  },
  {
    companyTranslationKey: "items.molo.company",
    descriptionTranslationKey: "items.molo.description",
    positionTranslationKey: "items.molo.position",
    timeTranslationKey: "items.molo.time",
  },
  {
    companyTranslationKey: "items.sofia.company",
    descriptionTranslationKey: "items.sofia.description",
    positionTranslationKey: "items.sofia.position",
    timeTranslationKey: "items.sofia.time",
  },
  {
    companyTranslationKey: "items.liteboxWebsite.company",
    descriptionTranslationKey: "items.liteboxWebsite.description",
    positionTranslationKey: "items.liteboxWebsite.position",
    timeTranslationKey: "items.liteboxWebsite.time",
  },
];
