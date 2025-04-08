import { CommonSection, CommonTitle } from "@/shared/components";
import { SectionIdEnum } from "@/shared/types/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Classname, SC } from "./Technologies.styles";
import { TECHNOLOGIES_LIST } from "./constants";

export const Technologies = () => {
  const t = useTranslations("technologies");

  return (
    <CommonSection
      className={Classname.Section}
      id={SectionIdEnum.TECHNOLOGIES}
    >
      <CommonTitle className={Classname.Title}>{t("title")}</CommonTitle>
      <SC.Container>
        {TECHNOLOGIES_LIST.map(({ categoryTranslationKey, items }) => {
          return (
            <SC.ItemsContainer key={categoryTranslationKey}>
              <SC.ItemsCategoryTitle>
                {t(categoryTranslationKey)}
              </SC.ItemsCategoryTitle>
              <SC.ItemsList>
                {items.map(({ icon, translationKey }) => {
                  const techName = t(translationKey);

                  return (
                    <SC.Item key={translationKey}>
                      <Image src={icon} alt={techName} height={50} />
                      <SC.ItemTechName>{techName}</SC.ItemTechName>
                    </SC.Item>
                  );
                })}
              </SC.ItemsList>
            </SC.ItemsContainer>
          );
        })}
      </SC.Container>
    </CommonSection>
  );
};
