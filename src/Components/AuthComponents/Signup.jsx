import React from 'react'

function Signup(props) {

    const [mail,setmail] = React.useState('')
    const [password,setpassword] = React.useState('')
    const [confirm_pass,setconfirm] = React.useState('');


    const [matched , setmatched] = React.useState(false);
    const [showError , setshowError] = React.useState(false);


    const handlePassword = (e)=>{
        setpassword(e.target.value);
    }
    const handleConfirm = (e)=>{
        setconfirm(e.target.value);
    }

    const handlemail = (e)=>
    {
        setmail(e.target.value);
    }

    React.useEffect(()=>{

      if(password !== confirm_pass)
      {
        setshowError(true);
        setmatched(false);
      }
      else{
        setshowError(false);
        setmatched(true);
      }

    },[confirm_pass,mail])

    function OnSubmit(e){

      e.preventDefault();
        if(matched)
        {
         const obj = {
          email:mail,
          password:password,
          returnSecureToken:true
         }
         props.signUp(obj);
        }
        else{
            
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
        <form onSubmit={OnSubmit}>
        <h1 className='text-center fs-1 mb-4'>Sign Up</h1>
          <div className="form-outline mb-4">
            <label className="form-label text-start Form_Label" for="form1Example13">Email address</label>
            <input onChange={handlemail} value={mail} type="email" placeholder='xyz@gmail.com' required={true} id="form1Example13" className="form-control Form_Input form-control-lg" />
          </div>
         

          <div className="form-outline mb-4">
            <label className="form-label text-start Form_Label" for="form1Example23">Password</label>
            <input  value={password}  onChange={handlePassword} type="password" id="form1Example23"  placeholder='123456789' className="form-control Form_Input form-control-lg" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label text-start Form_Label" for="form1Example23">Confirm Password</label>
            <input   value={confirm_pass} onChange={handleConfirm} type="password" id="form1Example23"  placeholder='123456789' className="form-control Form_Input form-control-lg" />
           { showError && <p className=' text-danger fs-5 text-start ps-3 '>!Password doesn't match </p>}
          </div>
           
          <div className="d-flex justify-content-around align-items-center mb-4">
 
            <a className='text-muted' href="#!">Forgot password?</a>
          </div>

          <button disabled={!matched} type="submit" className="btn btn-primary btn-lg btn-block">Sign Up</button>
          <div className="form-outline mb-4">
             <p className='fs-5'>Have an account, Login then 😏</p>
             <button  onClick={()=>{props.changeState()}} className='btn btn-outline-info '> Log in</button>
          </div>
         
        </form>
      </div>
    </div>
  </div>
</div>


    
    </>
  )
}

export default Signup