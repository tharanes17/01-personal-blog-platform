import { useState } from "react";
import { createArticle } from "../api/ArticleAPI";
import { useNavigate } from "react-router-dom";

export default function ArticleForm() {

    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);
    const [ tag, setTag] = useState("");

    const navigate = useNavigate(); // Correctly initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        let newArticle = {
            title, summary, content, tags
        }
        createArticle(newArticle);
        console.log("Form submitted", newArticle);
        navigate("/"); // Use navigate function to redirect
    }

    const addTag = ( e) => {
        if( !tags.includes(tag) ) {
            setTags([...tags, tag]);   
        }
        setTag("");
    }

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Create New Article</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-semibold mb-1">Title</label>
                    <input
                        type="text"
                        className="w-full border p-2 rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Summary</label>
                    <input
                        type="text"
                        className="w-full border p-2 rounded"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Content</label>
                    <textarea
                        className="w-full border p-2 rounded h-40"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div>
                    <label className="block font-semibold mb-1">Tags</label> 
                    { tags?.length > 0 ? 
                            <div className="flex flex-wrap gap-2 mb-2">
                            Linked Tags : {tags.map((t, index) => (
                                <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                                    {t} 
                                    <a
                                        className="ml-2 text-red-500"
                                        onClick={() => setTags(tags.filter((_, i) => i !== index))}>
                                    &times;
                                    </a>
                                </span>
                            ))}
                        </div>
                        : ""}
                    <input
                        type="text"
                        className="w-full border p-2 rounded"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    />
                    <button
                        type="button"
                        className="bg-blue-500 px-2 py-1 rounded mt-2"
                        onClick={ addTag }
                    >
                        Add Tag
                    </button>
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 px-4 py-2 rounded"
                >
                    Submit Article
                </button>
            </form>
        </div>
    );

}