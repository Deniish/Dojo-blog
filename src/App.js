import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './notfound';

function App() {
  const link = "https://github.com/Deniish";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
              {/* <Route path="/blogs/:id" element={<BlogDetails />} /> */}
            </Switch>
            <p>{"Hello Denish"}</p>
            <a href={link}>GithubSite</a>
          </div>
        </header>
      </div>
    </Router>
 
  );
}

export default App;
