import styles from "./Footer.module.css";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
    const msg = encodeURIComponent("Olá Renan, vim do seu portfólio!");
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <p>
                    <a
                        href="https://www.linkedin.com/in/renanramos3"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        title="Abrir LinkedIn"
                    >
                        <FaLinkedin size={22} />
                    </a>
                </p>
                <p>
                    <a
                        href="https://github.com/renanramos3"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        title="Abrir GitHub"
                    >
                        <FaGithub size={22} />
                    </a>
                </p>
                <p>
                    <a
                        href={`mailto:renanramos3@gmail.com?subject=${encodeURIComponent(
                            "Contato do portfólio",
                        )}&body=${msg}`}
                        aria-label="Enviar e-mail"
                        title="Enviar e-mail"
                    >
                        <FaEnvelope size={22} />
                    </a>
                </p>
            </div>

            <p className={styles.rights}>
                2025 - Renan Ramos - All Rights Reserved
            </p>
        </div>
    );
};

export default Footer;
