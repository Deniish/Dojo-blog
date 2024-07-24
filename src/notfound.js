import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h1>404💀</h1>
            <p>Sorry..</p>
            <p>The page is not found...😥</p><br></br><br></br>
            <Link to="/">Return to the Homepage...👾</Link>
        </div>
    );
}
 
export default NotFound;