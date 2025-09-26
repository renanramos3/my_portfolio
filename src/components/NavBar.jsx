import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.navBar}>
            <p onClick={() => scrollToSection("about")}>Sobre</p>
            <p onClick={() => scrollToSection("about")}>Habilidades</p>
            <p onClick={() => scrollToSection("projects")}>Projetos</p>
        </div>
    );
};

export default NavBar;
