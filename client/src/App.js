import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { ItemProvider } from './contexts/ItemContext';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <>
      <ItemProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </ItemProvider>
    </>
  );
}

export default App;
