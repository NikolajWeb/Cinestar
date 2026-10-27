import { useRef, useState } from "react";
import { MdOutlinePlayCircle } from "react-icons/md";
import { IoIosPause } from "react-icons/io";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPause, setShowPause] = useState(false);

    const toggleVideo = async () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            try {
                await video.play();
            } catch (error) {
                console.error("Videoen kunne ikke afspilles:", error);
            }
        } else {
            video.pause();
        }
    };

    return (
        <section className={styles.portfolioContainer}>
            <div className={styles.infoStart}>
                <p className={styles.heading}>Cinestar Studio</p>
                <h1 className={styles.header}>
                    Har du en ide til dit næste projekt?
                </h1>
                <p className={styles.startText}>
                    Lad os omsætte dine visioner til levende billeder, der fænger dit publikum. Hos os får du en professionel, kreativ proces fra idéudvikling til færdig produktion.
                </p>
            </div>

            <div
                className={styles.videoPlayer}
                onMouseEnter={() => setShowPause(true)}
                onMouseLeave={() => setShowPause(false)}
            >
                <video
                    ref={videoRef}
                    className={styles.video}
                    muted
                    playsInline
                    preload="metadata"
                    poster="https://placehold.co/1280x720/171717/ffffff?text=Cinestar+Studio"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                >
                    <source
                        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                        type="video/mp4"
                    />
                    Din browser understøtter ikke video.
                </video>

                {(!isPlaying || showPause) && (
                    <button
                        className={styles.playButton}
                        onClick={toggleVideo}
                        type="button"
                        aria-label={isPlaying ? "Sæt video på pause" : "Afspil video"}
                    >
                        {isPlaying ? <IoIosPause /> : <MdOutlinePlayCircle />}
                    </button>
                )}
            </div>

            
            <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>TØV IKKE MED AT VÆLGE CINESTAR TIL DIT NÆSTE FILM-PROJEKT</h2>
                <p className={styles.startText}>Hos Cinestar kombinerer vi vores passion for historiefortælling med et skarpt øje for detaljen. Med moderne udstyr og et erfarent team sikrer vi, at din produktion løfter sig fra skitse til strålende slutresultat – hver gang.</p>
                
                <div className={styles.facts}>
                    <div className={styles.numberContainer}>
                        <p className={styles.number}>250+</p>
                        <p className={styles.numberInfo}>Film produktion</p>
                    </div>
                    <div className={styles.numberContainer}>
                        <p className={styles.number}>78+</p>
                        <p className={styles.numberInfo}>Musik video</p>
                    </div>
                </div>

            </div>



        </section>
    );
};

export default Portfolio;
