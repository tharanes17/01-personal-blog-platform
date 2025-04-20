import { useNavigate, useParams } from "react-router-dom";
import { getArticleById } from "../api/ArticleAPI";
import { useEffect, useState } from "react";


export default function ArticleDetailEdit() {

    const { id } = useParams();
    const [article, setArticle] = useState();

    const nav = useNavigate();
    useEffect(() => {
        const fetchArticle = async() => {
            let response = await getArticleById(id);
            console.log(response);
            setArticle(response);
        };
        fetchArticle();
    }, []);

    return <>
        {
            article ? 
                <div>
                    <input type="text" className="w-full border p-2 rounded" value={article.title} />

                </div>
            :   <div className="p-4">Loading...</div>
        }
    </>;
};