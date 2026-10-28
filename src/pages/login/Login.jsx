import { useState } from "react";
import * as yup from "yup";

import PageHeader from "../../components/pageHeader/PageHeader";

import styles from "./Login.module.css";

const loginSchema = yup.object({
    email: yup
        .string()
        .email("Indtast en gyldig email")
        .required("Email er påkrævet"),

    password: yup
        .string()
        .required("Password er påkrævet"),
});

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await loginSchema.validate(
                {
                    email,
                    password,
                },
                { abortEarly: false }
            );

            // Simulation af login
            window.location.href = "/backoffice";
        } catch (error) {
            const validationErrors = {};

            error.inner.forEach((err) => {
                validationErrors[err.path] = err.message;
            });

            setErrors(validationErrors);
        }
    };

    return (
        <article className={styles.loginContainer}>
            <PageHeader
                Title="Login "
                Breadcrum={[
                    { label: "Forside", path: "/" },
                    { label: "Login", path: "/login" },
                ]}
            />
            <div className={styles.title}>
                <p>Login</p>
                <h1>backoffice</h1>
            </div>

            <form
                className={styles.loginForm}
                onSubmit={handleSubmit}
            >
                <div>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {errors.email && (
                        <p className={styles.error}>{errors.email}</p>
                    )}
                </div>

                <div>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {errors.password && (
                        <p className={styles.error}>{errors.password}</p>
                    )}
                </div>

                <button type="submit">
                    Log ind
                </button>
            </form>
        </article>
    );
};

export default Login;