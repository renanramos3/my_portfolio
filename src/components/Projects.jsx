import styles from "./Projects.module.css";
import ImageProjectOne from "../assets/images/project1.png";
import primeflixImg from "../assets/images/primeflix.jpg";

const Projects = () => {
    return (
        <div className={styles.container}>
            <h2>Projects</h2>

            <div className={styles.example}>
                <div className={styles.exampleProject}>
                    <p>PrimeFlix</p>
                    <div>
                        <img src={primeflixImg} alt="Imagem do projeto" />
                    </div>
                    <p>
                        Descrição do projeto: Plataforma de filmes online,
                        utilizando html, css, javascript e react, react router
                        para roteamento entre as páginas, tdas as informações
                        dos filmes foi extraida da API pública the movie db,
                        utilizei o axios para fazer as requisições http, projeto
                        conta com salvamento de arquivos na local storage,
                        projeto simples porém com muitas funcionalidades legais
                    </p>
                    <p>Technologies: Html, css, JavaScript</p>
                    <div className={styles.buttons}>
                        <a
                            href="https://primeflix-npwo.vercel.app/"
                            target="_blank"
                        >
                            <button className={styles.button}>
                                View Project
                            </button>
                        </a>
                        <a
                            href="https://github.com/renanramos3/primeflix"
                            target="_blank"
                        >
                            <button className={styles.button}>View Code</button>
                        </a>
                    </div>
                </div>
                <div className={styles.exampleProject}>
                    <p>Project Example</p>
                    <div>
                        <img src={ImageProjectOne} alt="Imagem do projeto" />
                    </div>
                    <p>
                        Descrição do projeto: Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Tempora quos minus labore
                        quam culpa? Ea earum, tenetur consectetur pariatur
                        veritatis temporibus, quaerat enim cum placeat dolorum
                        molestias possimus. Tempore, exercitationem?
                    </p>
                    <p>Technologies: Html, css, JavaScript</p>
                    <div className={styles.buttons}>
                        <button className={styles.button}>View Project</button>
                        <button className={styles.button}>View Code</button>
                    </div>
                </div>
                <div className={styles.exampleProject}>
                    <p>Project Example</p>
                    <div>
                        <img src={ImageProjectOne} alt="Imagem do projeto" />
                    </div>
                    <p>
                        Descrição do projeto: Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Tempora quos minus labore
                        quam culpa? Ea earum, tenetur consectetur pariatur
                        veritatis temporibus, quaerat enim cum placeat dolorum
                        molestias possimus. Tempore, exercitationem?
                    </p>
                    <p>Technologies: Html, css, JavaScript</p>
                    <div className={styles.buttons}>
                        <button className={styles.button}>View Project</button>
                        <button className={styles.button}>View Code</button>
                    </div>
                </div>
                <div className={styles.exampleProject}>
                    <p>Project Example</p>
                    <div>
                        <img src={ImageProjectOne} alt="Imagem do projeto" />
                    </div>
                    <p>
                        Descrição do projeto: Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Tempora quos minus labore
                        quam culpa? Ea earum, tenetur consectetur pariatur
                        veritatis temporibus, quaerat enim cum placeat dolorum
                        molestias possimus. Tempore, exercitationem?
                    </p>
                    <p>Technologies: Html, css, JavaScript</p>
                    <div className={styles.buttons}>
                        <button className={styles.button}>View Project</button>
                        <button className={styles.button}>View Code</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
