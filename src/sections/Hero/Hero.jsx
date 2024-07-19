import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Hero Image.jpg";

import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";

import twitterLight from "../../assets/twitter.png";
import twitterDark from "../../assets/twitter.png";

import githubLight from "../../assets/github.png";
import githubDark from "../../assets/github.png";

import facebookLight from "../../assets/facebook.png";
import facebookDark from "../../assets/facebook.png";

import CV from "../../assets/KhantBhoneNaing-CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const facebookIcon = theme === "light" ? facebookLight : facebookDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.Hero}
          src={heroImg}
          alt="Profile picture of Khant Bhone Naing"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color with my Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Khant Bhone Naing</h1>
        <h3>FullStack Developer</h3>
        <span>
          <a href="https://www.facebook.com/noah.khant" target="_blank">
            <img src={facebookIcon} alt="Facebook icon" className="icon" />
          </a>
          <a href="https://github.com/noahkhant" target="_blank">
            <img src={githubIcon} alt="Github icon" className="icon" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" className="icon" />
          </a>
        </span>
        <p className={styles.description}>
          "As a fullstack developer, I am driven by a passion for crafting
          seamless and innovative digital experiences, bridging the gap between
          beautiful design and robust functionality to create solutions that
          inspire and empower users."
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
