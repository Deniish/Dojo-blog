import { Link } from "react-router-dom";

const BlogList = ( {blogs, title, }/*props*/) => {
    // const blogs = props.blogs;
    // console.log(props,blogs);
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
         {blogs.map((blog) => (
             <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h3>{blog.title}</h3>
                        {/* <p>{blog.body}</p> */}
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;