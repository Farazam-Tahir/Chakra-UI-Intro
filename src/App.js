import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Create from './pages/Create';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Dashboard}/>
        <Route path='/Create' Component={Create}/>
      </Routes>
    </Router>
  );
}

export default App;
