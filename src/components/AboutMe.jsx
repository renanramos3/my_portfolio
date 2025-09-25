import styles from "./AboutMe.module.css";

import { FaGraduationCap } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";

const AboutMe = () => {
    return (
        <div className={styles.container}>
            <h2>About me</h2>
            <div className={styles.info}>
                <div className={styles.description}>
                    <p><FaBriefcase /></p>
                    <p>Experience</p>
                    <p>2+ years Frontend Development</p>
                </div>
                <div className={styles.description}>
                    <p>
                        <FaGraduationCap />
                    </p>
                    <p>Education</p>
                    <p>Bachelors Degree Electrical Engineer</p>
                </div>
            </div>
            <p className={styles.about}>
                Sou Desenvolvedor Front-end com mais de dois anos de experiência
                em HTML5, CSS3, JavaScript, Vue.js e React.js. Tenho atuação
                consistente na construção de interfaces responsivas, interativas
                e intuitivas, sempre focado na melhor experiência do usuário.
                Tenho experiência com Git/Github, versionamento de código e
                consumo de APIs. Gosto de colaborar em equipes
                multidisciplinares, valorizando comunicação clara e troca de
                conhecimento. Apaixonado por tecnologia e inovação, estou em
                busca de novos desafios que me permitam evoluir e expandir
                minhas habilidades.
            </p>
            <h2>Skills</h2>
            <div className={styles.skills}>
                <p>Html</p>
                <p>CSS</p>
                <p>JavaScript ES6</p>
                <p>React</p>
                <p>Git</p>
                <p>Vue.js</p>
                <p>Front-end</p>
                <p>Flex-box</p>
            </div>
        </div>
    );
};

export default AboutMe;
