import { useRevalidator } from "react-router";
import { serverPath } from "../settings.jsx";

const useCrud = () => {
    const revalidator = useRevalidator();

    // Håndterer API-svar
    const handleResponse = async (response) => {
        const text = await response.text();

        console.log("HTTP status:", response.status);
        console.log("Backend svar:", text);

        let data = null;

        if (text) {
            try {
                data = JSON.parse(text);
            } catch {
                data = text;
            }
        }

        if (!response.ok) {
            let message = "Der opstod en fejl";

            if (data && typeof data === "object") {
                message =
                    data.message ||
                    data.error ||
                    `HTTP fejl ${response.status}`;
            } else if (typeof data === "string" && data) {
                message = data;
            }

            throw new Error(message);
        }

        return data;
    };

    // CREATE
    const create = async (endpoint, data) => {
        try {
            const isFormData = data instanceof FormData;

            const response = await fetch(
                `${serverPath}/${endpoint}`,
                {
                    method: "POST",
                    headers: isFormData
                        ? {}
                        : {
                            "Content-Type": "application/json",
                        },
                    body: isFormData
                        ? data
                        : JSON.stringify(data),
                }
            );

            const result = await handleResponse(response);

            revalidator.revalidate();

            return result;
        } catch (error) {
            console.error("Create error:", error);
            throw error;
        }
    };

    // DELETE
    const remove = async (endpoint, id) => {
        try {
            const response = await fetch(
                `${serverPath}/${endpoint}/${id}`,
                {
                    method: "DELETE",
                }
            );

            const result = await handleResponse(response);

            revalidator.revalidate();

            return result;
        } catch (error) {
            console.error("Delete error:", error);
            throw error;
        }
    };

    // UPDATE
    const update = async (endpoint, formData) => {
        try {
            const response = await fetch(
                `${serverPath}/${endpoint}`,
                {
                    method: "PUT",
                    body: formData,
                }
            );

            const result = await handleResponse(response);

            revalidator.revalidate();

            return result;
        } catch (error) {
            console.error("Update error:", error);
            throw error;
        }
    };

    return {
        create,
        remove,
        update,
        isLoading: false,
        error: null,
    };
};

export { useCrud };