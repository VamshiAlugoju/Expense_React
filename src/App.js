
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import AuthPage from './Components/Pages/AuthPage';
function App() {
  return (
    <div className="App">
      <Navbar />
     <AuthPage />

    </div>
  );
}

export default App;
