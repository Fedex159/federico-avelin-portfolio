import { CommonSection, CommonTitle } from "@/shared/components";
import { useTranslations } from "next-intl";
import { Classname, SC } from "./Experience.styles";
import { EXPERIENCE_LIST } from "./constants";
import { SectionIdEnum } from "@/shared/types/common";

export const Experience = () => {
  const t = useTranslations("experience");

  return (
    <CommonSection className={Classname.Section} id={SectionIdEnum.EXPERIENCE}>
      <CommonTitle>{t("title")}</CommonTitle>
      <SC.Wrapper>
        {EXPERIENCE_LIST.map(
          (
            {
              companyTranslationKey,
              descriptionTranslationKey,
              positionTranslationKey,
              timeTranslationKey,
            },
            index,
          ) => (
            <SC.Article key={`${timeTranslationKey}-${index.toString()}`}>
              <SC.Time>{t(timeTranslationKey)}</SC.Time>
              <SC.Company>{t(companyTranslationKey)}</SC.Company>
              <SC.Position>{t(positionTranslationKey)}</SC.Position>
              <SC.Description>{t(descriptionTranslationKey)}</SC.Description>
            </SC.Article>
          ),
        )}
      </SC.Wrapper>
    </CommonSection>
  );
};
