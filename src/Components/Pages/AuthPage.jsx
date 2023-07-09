import React from 'react'
import "./authpage.css"
import Login from '../AuthComponents/Login'
import Signup from '../AuthComponents/Signup';
import ExpenseContext from '../../Context/Contex';


function AuthPage() {

    const [LoginMode , setLoginMode] = React.useState(true);
    const ExpenseCtx = React.useContext(ExpenseContext)
    function changeMode()
    {
        setLoginMode(prev=>!prev);
    }

    function handleClick()
    {
         if(LoginMode)
         {
          console.log("login")
           ExpenseContext.Login()
         }
         else{
          console.log("Signup")
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