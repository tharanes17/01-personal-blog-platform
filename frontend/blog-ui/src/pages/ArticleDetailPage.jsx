import { useParams } from "react-router-dom";

export default function ArticleDetail() {

    const { id } = useParams();
    const article = {
        id,
        title: "Sample Article",
        content: "This is the full content of the article.",
        author: "John Doe",
        publishedAt: "2025-04-04",
      };

      return (
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
          <p className="text-gray-500 text-sm mb-4">
            By {article.author} on {article.publishedAt}
          </p>
          <div className="text-base leading-relaxed">{article.content}</div>
        </div>
      );

}