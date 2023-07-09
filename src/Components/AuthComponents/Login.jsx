import React from 'react'

function Login(props) {

  const [mail,setmail] = React.useState('');
  const [password, setpassword] = React.useState('');
 
  const [isvalid , setisvalid] = React.useState(false);

   function handleMail(e)
   {
      setmail(e.target.value);
   }
   function handlepassword(e)
   {
      setpassword(e.target.value);
   }

   React.useEffect(()=>{
       if(mail && (password.length >= 6))
       {
        setisvalid(true);
       }
       else{
        setisvalid(false);
       }
   },[mail,password])

   function handleSubmit(e){
    e.preventDefault();
    
    if(isvalid)
    {
      const obj={
        email:mail,
        password:password,
        returnSecureToken:true
      } 
      props.Login(obj)
    }

   }


  return (
    <>

<div className="vh-120">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image" />
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form onSubmit={handleSubmit}>
        <h1 className='text-center fs-1 mb-4'>Login</h1>
          <div className="form-outline mb-4">
            <label className="form-label text-start Form_Label" for="form1Example13">Email address</label>
            <input value={mail} onChange={handleMail} required={true} type="email" placeholder='xyz@gmail.com' id="form1Example13" className="form-control Form_Input form-control-lg" />
          </div>

         
          <div className="form-outline mb-4">
            <label className="form-label text-start Form_Label" for="form1Example23">Password</label>
            <input value={password} onChange={handlepassword} required={true}  type="password" id="form1Example23"  placeholder='123456789' className="form-control Form_Input form-control-lg" />
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">
 
            <a className='text-muted' href="#!">Forgot password?</a>
          </div>

          
          <button disabled={!isvalid} type="submit" className="btn btn-primary btn-lg btn-block">Log in</button>
          <div className="form-outline mb-4 mt-2">
             <p className='fs-5 '>Don't have an Account</p>
             <button onClick={()=>{props.changeState()}} className='btn btn-outline-info '> Sign Up</button>
          </div>
         
        </form>
      </div>
    </div>
  </div>
</div>
      
         
    </>
  )
}

export default Login