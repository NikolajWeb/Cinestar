import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useCrud } from "../../../hooks/UseCrud";
import styles from "../forms/form.module.css";

const emptyValues = {
    title: "",
    teaser: "",
    description: "",
    image: null,
};

const buildSchema = (isEditing) =>
    yup.object({
        title: yup
            .string()
            .trim()
            .required("Titel er påkrævet"),

        teaser: yup
            .string()
            .trim()
            .min(5, "Teaseren skal være mindst 5 tegn")
            .required("Teaser er påkrævet"),

        description: yup
            .string()
            .trim()
            .min(10, "Beskrivelsen skal være mindst 10 tegn")
            .required("Beskrivelse er påkrævet"),

        image: yup
            .mixed()
            .test(
                "image-required",
                "Billede er påkrævet",
                (value) => {
                    if (isEditing) {
                        return true;
                    }

                    return value?.length > 0;
                }
            ),
    });

const BlogForm = ({ blog, onClose }) => {
    const { create, update } = useCrud();

    const isEditing = Boolean(blog);

    const schema = useMemo(
        () => buildSchema(isEditing),
        [isEditing]
    );

    const {
        register,
        handleSubmit,
        reset,
        setError,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: emptyValues,
    });

    useEffect(() => {
        clearErrors();

        if (!blog) {
            reset(emptyValues);
            return;
        }

        reset({
            title: blog.title ?? "",
            teaser: blog.teaser ?? "",
            description: blog.description ?? "",
            image: null,
        });
    }, [blog, reset, clearErrors]);

    const onSubmit = async (data) => {
        clearErrors();

        try {
            const formData = new FormData();

            const title = data.title?.trim() ?? "";
            const teaser = data.teaser?.trim() ?? "";
            const description = data.description?.trim() ?? "";

            if (!title) {
                setError("title", {
                    type: "manual",
                    message: "Titel er påkrævet",
                });
                return;
            }

            if (teaser.length < 5) {
                setError("teaser", {
                    type: "manual",
                    message: "Teaseren skal være mindst 5 tegn",
                });
                return;
            }

            if (description.length < 10) {
                setError("description", {
                    type: "manual",
                    message: "Beskrivelsen skal være mindst 10 tegn",
                });
                return;
            }

            // Tilføj tekstfelter
            formData.append("title", title);
            formData.append("teaser", teaser);
            formData.append("description", description);

            // Tilføj billede, hvis der er valgt et nyt
            const imageFile = data.image?.[0];

            if (imageFile instanceof File) {
                formData.append("file", imageFile);
            }

            // Tilføj ID ved redigering
            if (isEditing) {
                if (!blog?._id) {
                    throw new Error(
                        "Blogindlægget mangler et ID og kan derfor ikke redigeres."
                    );
                }

                formData.append("id", String(blog._id));

                await update("blog", formData);

                toast.success("Blogindlægget blev opdateret!", {
                    autoClose: 3000,
                });
            } else {
                await create("blog", formData);

                toast.success("Blogindlægget blev oprettet!", {
                    autoClose: 3000,
                });
            }

            // Luk formularen efter succes
            onClose();
        } catch (error) {
            console.error(
                isEditing
                    ? "Kunne ikke redigere blogindlægget:"
                    : "Kunne ikke oprette blogindlægget:",
                error
            );

            toast.error(
                error?.message ||
                    "Der opstod en fejl. Prøv igen.",
                {
                    autoClose: 3000,
                }
            );

            setError("root", {
                type: "server",
                message:
                    error?.message ||
                    "Der opstod en fejl. Prøv igen.",
            });
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.formContainer}>
                <h2>
                    {isEditing
                        ? "Rediger blogindlæg"
                        : "Opret blogindlæg"}
                </h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    {/* Generel fejlbesked */}
                    {errors.root && (
                        <p
                            className={styles.error}
                            role="alert"
                        >
                            {errors.root.message}
                        </p>
                    )}

                    {/* Titel */}
                    <div className={styles.formGroup}>
                        <label htmlFor="title">
                            Titel
                        </label>

                        <input
                            id="title"
                            type="text"
                            autoComplete="off"
                            placeholder="Indtast blogindlæggets titel"
                            {...register("title")}
                        />

                        {errors.title && (
                            <p className={styles.error}>
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    {/* Teaser */}
                    <div className={styles.formGroup}>
                        <label htmlFor="teaser">
                            Teaser
                        </label>

                        <textarea
                            id="teaser"
                            placeholder="Skriv en kort introduktion til blogindlægget..."
                            {...register("teaser")}
                        />

                        {errors.teaser && (
                            <p className={styles.error}>
                                {errors.teaser.message}
                            </p>
                        )}
                    </div>

                    {/* Beskrivelse */}
                    <div className={styles.formGroup}>
                        <label htmlFor="description">
                            Beskrivelse
                        </label>

                        <textarea
                            id="description"
                            placeholder="Skriv hele blogindlægget her..."
                            {...register("description")}
                        />

                        {errors.description && (
                            <p className={styles.error}>
                                {errors.description.message}
                            </p>
                        )}
                    </div>

                    {/* Billede */}
                    <div className={styles.formGroup}>
                        <label htmlFor="image">
                            Billede
                            {isEditing &&
                                " (lad feltet være tomt, hvis billedet ikke skal ændres)"}
                        </label>

                        <input
                            id="image"
                            type="file"
                            accept="image/*"
                            {...register("image")}
                        />

                        {errors.image && (
                            <p className={styles.error}>
                                {errors.image.message}
                            </p>
                        )}

                        {/* Vis eksisterende billede */}
                        {isEditing &&
                            (blog?.file || blog?.image) && (
                                <div>
                                    <p>Nuværende billede:</p>

                                    <img
                                        src={blog.file || blog.image}
                                        alt={
                                            blog.title ||
                                            "Nuværende blogbillede"
                                        }
                                        width="120"
                                    />
                                </div>
                            )}
                    </div>

                    {/* Knapper */}
                    <div className={styles.buttons}>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting
                                ? "Gemmer..."
                                : isEditing
                                    ? "Gem ændringer"
                                    : "Opret blogindlæg"}
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isSubmitting}
                        >
                            Annuller
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;