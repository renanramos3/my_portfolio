import styles from "./AboutMe.module.css";

import { FaGraduationCap } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaVuejs,
    FaLaptopCode,
} from "react-icons/fa";

const AboutMe = () => {
    return (
        <div className={styles.container}>
            <h2>Sobre mim</h2>
            <div className={styles.info}>
                <div className={styles.description}>
                    <p>
                        <FaBriefcase />
                    </p>
                    <p>Experiência</p>
                    <p>+2 anos desenvolvimento Front-end</p>
                </div>
                <div className={styles.description}>
                    <p>
                        <FaGraduationCap />
                    </p>
                    <p>Educação</p>
                    <p>Curso superior em Engenharia Elétrica</p>
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
                <p>
                    Html <FaHtml5 />
                </p>
                <p>
                    CSS <FaCss3Alt />
                </p>
                <p>
                    JavaScript ES6 <FaJs />
                </p>
                <p>
                    React <FaReact />
                </p>
                <p>
                    Git <FaGitAlt />
                </p>
                <p>
                    Vue.js <FaVuejs />
                </p>
                <p>
                    Front-end <FaLaptopCode />
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
