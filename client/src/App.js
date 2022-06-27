import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from "./Components/Homepage";
import Repositories from "./Components/Repositories";
import Events from "./Components/Events";
import Members from "./Components/Members";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NotFound from "./Components/NotFound";
import Hooks from "./Components/Hooks";
import Issues from "./Components/Issues";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='display'>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='/repo' element={<Repositories />} />
            <Route path='/events' element={<Events />} />
            <Route path='/members' element={<Members />} />
            <Route path='/hooks' element={<Hooks />} />
            <Route path='/issues' element={<Issues />} />
            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
