import styles from "./Projects.module.css";

// imagens
import ImageProjectOne from "../assets/images/project1.png";
import primeflixImg from "../assets/images/primeflix.jpg";
import quizImg from "../assets/images/quiz.jpg";
import gitHubFinderImg from "../assets/images/finder.jpg";
import qrCodeImg from "../assets/images/qrcode.jpg";

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
                        utilizando html, css, javascript e react, todas as
                        informações dos filmes foi extraida da API pública the
                        movie db, utilizei o axios para fazer as requisições
                        http, projeto conta com salvamento de arquivos na local
                        storage.
                    </p>
                    <p>Technologies: Html, css, JavaScript, React</p>
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
                    <p>Quiz React</p>
                    <div>
                        <img src={quizImg} alt="Imagem do projeto" />
                    </div>
                    <p>
                        Descrição do projeto: Um quiz interativo sobre
                        programação desenvolvido em React, com sistema de
                        pontuação, categorias de perguntas e funcionalidades de
                        ajuda para tornar a experiência de aprendizado mais
                        envolvente.
                    </p>
                    <p>Technologies: Html, css, JavaScript, React</p>
                    <div className={styles.buttons}>
                        <a
                            href="https://quiz-react-mq8rymdg7-renanramos3s-projects.vercel.app/"
                            target="_blank"
                        >
                            <button className={styles.button}>
                                View Project
                            </button>
                        </a>
                        <a
                            href="https://github.com/renanramos3/quizReact/tree/main"
                            target="_blank"
                        >
                            <button className={styles.button}>View Code</button>
                        </a>
                    </div>
                </div>

                <div className={styles.exampleProject}>
                    <p>Github Finder</p>
                    <div>
                        <img src={gitHubFinderImg} alt="Imagem do projeto" />
                    </div>
                    <p>
                        Aplicação React para buscar usuários do GitHub e
                        visualizar seus principais repositórios (ordenados por
                        estrelas). Construído com Vite + React Router.
                    </p>
                    <p>Technologies: Html, css, JavaScript, React</p>
                    <div className={styles.buttons}>
                        <a
                            href="https://github-finder-liart-phi.vercel.app/"
                            target="_blank"
                        >
                            <button className={styles.button}>
                                View Project
                            </button>
                        </a>
                        <a
                            href="https://github.com/renanramos3/github_finder"
                            target="_blank"
                        >
                            <button className={styles.button}>View Code</button>
                        </a>
                    </div>
                </div>

                <div className={styles.exampleProject}>
                    <p>Gerador de QrCode</p>
                    <div>
                        <img src={qrCodeImg} alt="Imagem do projeto" />
                    </div>
                    <p>
                        Uma aplicação web simples e elegante para gerar códigos
                        QR a partir de URLs ou texto, utilizando a API gratuita
                        do QR Server.
                    </p>
                    <p>Technologies: Html, css, JavaScript</p>
                    <div className={styles.buttons}>
                        <a
                            href="https://gerador-qr-code-kappa.vercel.app/"
                            target="_blank"
                        >
                            <button className={styles.button}>
                                View Project
                            </button>
                        </a>
                        <a
                            href="https://github.com/renanramos3/geradorQrCode/tree/main"
                            target="_blank"
                        >
                            <button className={styles.button}>View Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
