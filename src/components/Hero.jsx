import avatarImage from "../assets/images/avatar.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.description}>
            <img src={avatarImage} alt="Avatar" />
            <div className={styles.name}>
                <p>Renan Ramos</p>
                <p>Desenvolvedor Front-end</p>
                {/* <button>Download CV</button> */}
                <a href="/cv_renan.pdf" download="Renan-Ramos-CV.pdf">
                    <button>Currículo</button>
                </a>
                <a
                    href="https://wa.me/12981428073?text=Olá%20Renan%2C%20vim%20do%20seu%20portfólio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>WhatsApp</button>
                </a>
            </div>
        </div>
    );
};

export default Hero;
