import { IconGithub, IconLink } from "@/public/assets";
import { CommonSection, CommonTitle, ProjectLink } from "@/shared/components";
import { SectionIdEnum } from "@/shared/types/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { PROJECTS_LIST } from "./constants";
import {
  projectImageClassname,
  projectsSectionClassname,
  projectTitleClassname,
  StyledColImage,
  StyledColInfo,
  StyledProjectContainer,
  StyledProjectDescription,
  StyledProjectSwapCardCheckbox,
  StyledProjectSwapCardLabel,
  StyledProjectTitle,
} from "./Projects.styles";

export const Projects = () => {
  const t = useTranslations("projects");

  return (
    <CommonSection
      className={projectsSectionClassname}
      id={SectionIdEnum.PROJECTS}
    >
      <CommonTitle className={projectTitleClassname}>{t("title")}</CommonTitle>
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
            <StyledProjectContainer key={titleTranslationKey}>
              <StyledProjectSwapCardCheckbox
                id={titleTranslationKey}
                type="checkbox"
              />
              <StyledProjectSwapCardLabel htmlFor={titleTranslationKey} />
              <StyledColInfo>
                <StyledProjectTitle>{projectTitle}</StyledProjectTitle>
                <StyledProjectDescription>
                  {t(descriptionTranslationKey)}
                </StyledProjectDescription>
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
              </StyledColInfo>
              <StyledColImage>
                <Image
                  className={projectImageClassname}
                  src={image}
                  alt={`${projectTitle}-image`}
                  width={380}
                />
              </StyledColImage>
            </StyledProjectContainer>
          );
        },
      )}
    </CommonSection>
  );
};
