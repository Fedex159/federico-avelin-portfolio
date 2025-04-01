import { Project } from "../../../assets/jsons/projects";
import github from "../../../assets/imgs/github.png";
import link from "../../../assets/imgs/link.png";
import s from "./Card.module.css";

function Card({ title, img, description, repo, prod }: Project) {
  return (
    <div
      className={s.container}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h4>{title}</h4>
      <p>{description}</p>
      <div className={s.buttons}>
        <div className={s.button}>
          <a href={repo} rel="noopener noreferrer" target="_blank">
            <img width="40px" src={github} alt="github" />
          </a>
        </div>
        <div className={s.button}>
          <a href={prod} rel="noopener noreferrer" target="_blank">
            <img width="40px" src={link} alt="link" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
