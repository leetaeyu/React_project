import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Todo from './pages/Todo';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
export default App;