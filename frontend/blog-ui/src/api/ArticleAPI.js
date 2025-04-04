import AxiosInstance from "./AxiosInstance";

export const createArticle = (article) => {
    return AxiosInstance.post("/articles", article)
        .then(response => response.data)
        .catch(error => {
            console.error("Error creating article:", error);
            throw error;
        });
}

export const  getAllArticles = () => {
    return AxiosInstance.get("/articles");
}

export const getArticleById = (id) => {
    return AxiosInstance.get(`/articles/${id}`)
        .then(response => response.data)
        .catch(error => {
            console.error("Error fetching article:", error);
            throw error;
        });
}

export const getByTag = (tag) => {
    return AxiosInstance.get(`/articles/${tag}`)
        .then(response => response.data)
        .catch(error => {
            console.error("Error fetching articles by tag:", error);
            throw error;
        });
}