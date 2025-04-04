import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
    return (
        <div className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition">
            <Link to={`/articles/${article.id}`} >
                <h2 className="text-xl font-semibold text-blue-600">{article.title}</h2>
                <p className="text-gray-700 mt-1">{article.summary}</p>
                <div className="text-sm text-gray-500 mt-2">
                    on {new Date(article.createdAt).toLocaleDateString()}
                </div>
            </Link>
        </div>
    );
}