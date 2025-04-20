import { useNavigate, useParams } from "react-router-dom";
import { deleteArticle, getArticleById } from "../api/ArticleAPI";
import { useCallback, useEffect, useState } from "react";

export default function ArticleDetail() {

    const { id } = useParams();
    const [article, setArticle] = useState();
    const nav = useNavigate();

    // const article = {
    //     id,
    //     title: "Sample Article",
    //     content: "This is the full content of the article.",
    //     author: "John Doe",
    //     publishedAt: "2025-04-04",
    //   };

    useEffect(() => {
      const fetchArticle = async() => {
        let response = await getArticleById(id);
        setArticle(response);
        console.log(response);
      };
      fetchArticle();
    }, []);

    const delArticle = useCallback( async(e) => {
        let response = deleteArticle(id);
        response.then( res => {
          nav("/");
        });
    }, []);


      return (
        <>
          { article ? 
                  <div className="p-4">
                    <div>
                        <button className="bg-blue-500 px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition" onClick={delArticle}>
                          Delete
                        </button>
                        <button className="bg-blue-500 px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition" onClick={() => nav("/articles/edit/" + id)}>
                          Edit
                        </button>
                    </div>
                  <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
                  <p className="text-gray-500 text-sm mb-4">
                    Updated on {article.updatedAt}
                  </p>
                  <div className="text-base leading-relaxed">{article.content}</div>
                </div>
                : <div className="p-4">Loading...</div>  
          }
        </>

      );

}