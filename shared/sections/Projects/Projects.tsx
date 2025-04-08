import { IconGithub, IconLink } from "@/public/assets";
import { CommonSection, CommonTitle, ProjectLink } from "@/shared/components";
import { SectionIdEnum } from "@/shared/types/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { PROJECTS_LIST } from "./constants";
import { Classname, SC } from "./Projects.styles";

export const Projects = () => {
  const t = useTranslations("projects");

  return (
    <CommonSection className={Classname.Section} id={SectionIdEnum.PROJECTS}>
      <CommonTitle className={Classname.Title}>{t("title")}</CommonTitle>
      {PROJECTS_LIST.map(
        ({
          descriptionTranslationKey,
          image,
          repositoryUrl,
          titleTranslationKey,
          websiteUrl,
        }) => {
          const projectTitle = t(titleTranslationKey);

          return (
            <SC.ProjectContainer key={titleTranslationKey}>
              <SC.ProjectSwapCardCheckbox
                id={titleTranslationKey}
                type="checkbox"
              />
              <SC.ProjectSwapCardLabel htmlFor={titleTranslationKey} />
              <SC.ProjectColInfo>
                <SC.ProjectTitle>{projectTitle}</SC.ProjectTitle>
                <SC.ProjectDescription>
                  {t(descriptionTranslationKey)}
                </SC.ProjectDescription>
                <ProjectLink
                  href={repositoryUrl}
                  icon={IconGithub}
                  iconAlt="icon-github"
                >
                  {t("links.repository")}
                </ProjectLink>
                <ProjectLink
                  icon={IconLink}
                  iconAlt="icon-link"
                  href={websiteUrl}
                >
                  {t("links.website")}
                </ProjectLink>
              </SC.ProjectColInfo>
              <SC.ProjectColImage>
                <Image
                  className={Classname.ProjectImage}
                  src={image}
                  alt={`${projectTitle}-image`}
                  width={380}
                />
              </SC.ProjectColImage>
            </SC.ProjectContainer>
          );
        },
      )}
    </CommonSection>
  );
};
