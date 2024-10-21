import './App.css';
import NavHeader from './components/NavHeader.tsx';
import NavMenu from './components/NavMenu.tsx';
import Dashboard from './pages/dashboard.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavHeader />
        <NavMenu />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
