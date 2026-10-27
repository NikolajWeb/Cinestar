
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./ProjectsComp.module.css";

import Slide1 from "../../assets/daughter_mom.jpg";
import Slide2 from "../../assets/school_life.jpg";
import Slide3 from "../../assets/into_your_heart.jpg";

const slides = [
    {
        image: Slide1,
        title: "Daughter & Mom",
        alt: "Datter og mor",
    },
    {
        image: Slide2,
        title: "School Life",
        alt: "Skoleliv",
    },
    {
        image: Slide3,
        title: "Into Your Heart",
        alt: "Into Your Heart",
    },
];

const ProjectsComp = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + slides.length) % slides.length
        );
    };

    return (
        <section className={styles.projects}>
            <div className={styles.headerContainer}>
                <p className={styles.heading}>Portfolio</p>
                <h1 className={styles.header}>Udvalgte projekter</h1>
            </div>

            <div className={styles.sliderContainer}>
                <div className={styles.slide}>
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].alt}
                        className={styles.slideImage}
                    />

                    <button
                        type="button"
                        className={`${styles.arrowButton} ${styles.prevButton}`}
                        onClick={prevSlide}
                        aria-label="Forrige slide"
                    >
                        <FaArrowRight />
                    </button>

                    <button
                        type="button"
                        className={styles.arrowButton}
                        onClick={nextSlide}
                        aria-label="Næste slide"
                    >
                        <FaArrowRight />
                    </button>
                </div>

                <div
                    className={styles.pagination}
                    aria-label="Paginering"
                >
                    {slides.map((slide, index) => (
                        <button
                            key={slide.title}
                            type="button"
                            className={`${styles.dot} ${
                                currentSlide === index
                                    ? styles.activeDot
                                    : ""
                            }`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Gå til slide ${index + 1}`}
                            aria-current={
                                currentSlide === index ? "true" : undefined
                            }
                        />
                    ))}
                </div>
            </div>

            <div className={styles.infoContainer}>
                <p className={styles.infoText}>
                    Her præsenterer vi et udvalg af de produktioner,
                    vi er stolte af at have skabt.
                </p>

                <p className={styles.infoText}>
                    Hvert projekt fortæller sin unikke historie og illustrerer
                    vores ambition om at levere høj kvalitet, originalitet
                    og visuel gennemslagskraft.
                </p>

                <p className={styles.infoText}>
                    Gå på opdagelse, og lad dig inspirere af vores arbejde.
                </p>
            </div>
        </section>
    );
};

export default ProjectsComp;
