
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,useNavigate} from "react-router-dom"
import AuthPage from './Components/Pages/AuthPage';
import DummyPage from './Components/Pages/DummyPages/DummyPage';
import ExpensePage from './Components/Pages/ExpensePage';
import React from 'react';
import ExpenseContext from './Context/Contex';

function App() {
   
  const ExpenseCtx = React.useContext(ExpenseContext);
  const Navigate = useNavigate();
  React.useEffect(()=>{
       const token = localStorage.getItem("token");
       if(token){
           ExpenseCtx.Login();
       }
       else{
          Navigate("/Auth");
       }
  },[])

  return (
    <div className="App">

      <Navbar  />
      <Routes>
       <Route path='/DummyPage' element={<DummyPage /> } />
       <Route path='/Auth' element={ <AuthPage />} />
       <Route path="/ExpensePage" element={<ExpensePage />} />
      </Routes>

    </div>
  );
}

export default App;
