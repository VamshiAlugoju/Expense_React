import React from 'react'
import "./authpage.css"
import Login from '../AuthComponents/Login'
import Signup from '../AuthComponents/Signup';
import ExpenseContext from '../../Context/Contex';
import axios from 'axios';
import {redirect,useNavigate} from "react-router-dom"

function AuthPage() {

    const [LoginMode , setLoginMode] = React.useState(true);
    const ExpenseCtx = React.useContext(ExpenseContext)
    const navigate = useNavigate()
    function changeMode()
    {
        setLoginMode(prev=>!prev);
    }

    async function handleClick(item)
    {
         if(LoginMode)
         {
          try{
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRgbTFD72i47aWtRsLtEWmDyNrk5uqXdU',item)
             console.log(res);
             localStorage.setItem("token",res.data.idToken);
         
             ExpenseCtx.Login()
            navigate("/ExpensePage")
          }
          catch(err){
              alert(err.response.data.error.message)
          }
         }
         else{
        try{
         const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRgbTFD72i47aWtRsLtEWmDyNrk5uqXdU',item);
         console.log(res);
         changeMode();
        }
        catch(err)
        {
          alert(err.response.data.error.message);
        }
         }
    }

  return (
    <> 
            {LoginMode ? 
              <Login Login={handleClick} changeState={changeMode} /> : 
            <Signup signUp={handleClick} changeState={changeMode} /> }
    </>
  )
}

export default AuthPage