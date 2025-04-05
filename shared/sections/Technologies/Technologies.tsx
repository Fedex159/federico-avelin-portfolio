import { CommonSection, CommonTitle } from "@/shared/components";
import { SectionIdEnum } from "@/shared/types/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  StyledCategoryTitle,
  StyledItem,
  StyledItemsContainer,
  StyledItemsList,
  StyledTechContainer,
  StyledTechName,
  technologiesSectionClassname,
  technologiesTitleClassname,
} from "./Technologies.styles";
import { TECHNOLOGIES_LIST } from "./constants";

export const Technologies = () => {
  const t = useTranslations("technologies");

  return (
    <CommonSection
      className={technologiesSectionClassname}
      id={SectionIdEnum.TECHNOLOGIES}
    >
      <CommonTitle className={technologiesTitleClassname}>
        {t("title")}
      </CommonTitle>
      <StyledTechContainer>
        {TECHNOLOGIES_LIST.map(({ categoryTranslationKey, items }) => {
          return (
            <StyledItemsContainer key={categoryTranslationKey}>
              <StyledCategoryTitle>
                {t(categoryTranslationKey)}
              </StyledCategoryTitle>
              <StyledItemsList>
                {items.map(({ icon, translationKey }) => {
                  const techName = t(translationKey);

                  return (
                    <StyledItem key={translationKey}>
                      <Image src={icon} alt={techName} height={50} />
                      <StyledTechName>{techName}</StyledTechName>
                    </StyledItem>
                  );
                })}
              </StyledItemsList>
            </StyledItemsContainer>
          );
        })}
      </StyledTechContainer>
    </CommonSection>
  );
};
