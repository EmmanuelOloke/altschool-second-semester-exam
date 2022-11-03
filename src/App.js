import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import RepoList from './components/RepoList/RepoList';
import Repo from './components/Repo/Repo';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="repos"> Repos </Link>
          <Link to="about"> About </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos">
            <Route index element={<RepoList />} />
            <Route path=":repo" element={<Repo />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
