import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Components/Homepage";
import Repositories from "./Components/Repositories";
import Events from "./Components/Events";
import Members from "./Components/Members";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

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
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
