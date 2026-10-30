import { serverPath } from "../settings";

const getData = async (
    path,
    errorText = "Fejl ved hentning"
) => {
    const res = await fetch(`${serverPath}${path}`);

    if (!res.ok) {
        throw new Response(errorText, {
            status: res.status,
        });
    }

    const json = await res.json();
    return json.data;
};

export const backofficeLoader = async () => {
    const [blogs, faqs, reviews, messages] = await Promise.all([
        getData("/blogs"),
        getData("/faqs"),
        getData("/reviews"),
        getData("/messages"),
    ]);

    return {
        blogs,
        faqs,
        reviews,
        messages,
    };
};

export default backofficeLoader;