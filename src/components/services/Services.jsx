
import styles from "./Services.module.css";

import { FaFilm, FaRegImages } from "react-icons/fa";
import { RiMusicFill } from "react-icons/ri";
import { MdVideoCameraBack } from "react-icons/md";

const services = [
    {
        icon: FaFilm,
        title: "Filmproduktion",
        description:
            "Vi skaber professionelle filmproduktioner, der formidler dit budskab klart, engagerende og visuelt overbevisende.",
    },
    {
        icon: FaRegImages,
        title: "Kreativ retning",
        description:
            "Vi sikrer en kreativ retning, der løfter dit projekt fra almindeligt til uforglemmeligt.",
    },
    {
        icon: MdVideoCameraBack,
        title: "TV-produktion",
        description:
            "Vi leverer komplette løsninger inden for formatudvikling, optagelse og redigering.",
    },
    {
        icon: RiMusicFill,
        title: "Musikvideo",
        description:
            "Lad din musik træde frem i et visuelt univers, der forstærker din lyd og dit budskab.",
    },
];

const Services = () => {
    return (
        <section className={styles.servicesContainer}>
            <div className={styles.content}>
                <p className={styles.heading}>Services</p>

                <h1 className={styles.header}>
                    Hvilken service tilbyder vi?
                </h1>

                <div className={styles.grid}>
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                className={styles.card}
                                key={service.title}
                            >
                                <div className={styles.iconWrapper}>
                                    <Icon
                                        size={64}
                                        className={styles.icon}
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className={styles.infoContainer}>
                                    <h2 className={styles.title}>
                                        {service.title}
                                    </h2>

                                    <p className={styles.info}>
                                        {service.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
