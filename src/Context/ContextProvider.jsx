import React from 'react'
import ExpenseContext from './Contex';

function ContextProvider(props) {

    const [LoggedIn , setLoggedIn] = React.useState(false);
   function Login()
   {
    setLoggedIn(true)
   }

   function Logout()
   {
    setLoggedIn(false)
   }
 
    const Context = {
        isLoggedin:LoggedIn,
        Login,
        Logout
    }

  return (
     <ExpenseContext.Provider value={Context}>
        {props.children}
     </ExpenseContext.Provider>
  )
}

export default ContextProvider