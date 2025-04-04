import { Link, useNavigate } from "react-router-dom";
import ArticleCard  from "../components/ArticleCard";
import { useEffect, useState } from "react";
import { getAllArticles } from "../api/ArticleAPI";


const dummyArticles = [
    {
        id: 1,
        title: "How I started writing blogs",
        summary: "A short story of my journey into blogging...",
        author: "Jane Doe",
        createdAt: "2025-04-01",
    },
    {
        id: 2,
        title: "Spring Boot vs Express.js",
        summary: "Comparison of two popular backend frameworks.",
        author: "John Smith",
        createdAt: "2025-04-02",
    },
];



export default function Homepage() {
    const [ articles, setArticles ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await getAllArticles().then(response => response.data);
                setArticles(data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        }
        fetchData();
        console.log( articles);
    }, []);
    const navigate = useNavigate();
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <button
                className="bg-blue-500 px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition"
                onClick={() => navigate("/articles/new")}
            >
                Add Article
            </button>
            <h1 className="text-3xl font-bold mb-6 text-center">Latest Articles</h1>
            <div className="space-y-4">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
}