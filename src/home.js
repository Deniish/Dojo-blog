import { useState,useEffect } from 'react';
import BlogList from './bloglist';
import useFetch from './useFetch1';

const Home = () => {
    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); 
    const [name, setName] = useState('Denish');
    const handleClick = () => {
        setName(prevName => prevName === 'denish' ? 'Sharma' : 'denish');
    }
    
    return ( 
        <div className="home">
            <h1>Welcome to Homepage</h1>
            {error && <div className='err-handling'>{error}</div>}
            {isPending && <div>Loading....</div>} 
            {blogs && <BlogList blogs={blogs} title="All Blogs!" /> }

            <p>{name}</p>
            <button className="btnclick" onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;