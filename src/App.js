
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import AuthPage from './Components/Pages/AuthPage';
import DummyPage from './Components/Pages/DummyPages/DummyPage';

function App() {
  return (
    <div className="App">

      <Navbar  />
      <Routes>
       <Route path='/DummyPage' element={<DummyPage /> } />
       <Route path='/Auth' element={ <AuthPage />} />
      
      </Routes>

    </div>
  );
}

export default App;
