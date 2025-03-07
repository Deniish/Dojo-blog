import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch1";


const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return (  
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p>Written by-{blog.author}</p>
                    <div className="blog-body">{blog.body}</div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;