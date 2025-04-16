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
      <CommonTitle>{t("title")}</CommonTitle>
      <SC.TechContainer>
        {TECHNOLOGIES_LIST.map(({ icon, translationKey }) => (
          <SC.TechItem key={translationKey} title={t(translationKey)}>
            <SC.ItemFaceOne />
            <SC.ItemFaceTwo />
            <SC.ItemFaceThird>
              <Image
                className={Classname.TechImage}
                src={icon}
                alt={`icon-${translationKey}`}
              />
            </SC.ItemFaceThird>
            <SC.ItemFaceFour />
          </SC.TechItem>
        ))}
      </SC.TechContainer>
    </CommonSection>
  );
};
