import React from 'react'
import  ReactDOM  from 'react-dom'
import axios from 'axios';
import loader from  "./pink.gif"
import {useNavigate} from "react-router-dom"

function UpdateProfile(props) {

    const Name = React.useRef();
    const Url = React.useRef();
    const [isloading,setisloading] = React.useState(false);
    const Navigate = useNavigate();

    async  function updateUser(e)
    {   
        setisloading(true);
        e.preventDefault();
        const token = localStorage.getItem("token");
        const name = Name.current.value;
        const url = Url.current.value;

        if(token && name && url)
        {
            const obj = {
                idToken:localStorage.getItem("token"),
                displayName:name,
                photoUrl:url,
                returnSecureToken:true
            }
           try{
               console.log(obj);
              const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDRgbTFD72i47aWtRsLtEWmDyNrk5uqXdU',obj);
                console.log(res)
                Navigate("/ExpensePage")
           }
           catch(err)
           {
            console.log(err);
            alert(err.response.data.error.message);
           }

        }

        setisloading(false);
    }


  return (
    ReactDOM.createPortal(<>
       <div onClick={()=>props.closeModal()} className='Modal_bg'></div>
       <div className='Modal_div'>
       <form className='Modal_Form' onSubmit={updateUser}>
        <h1 className='text-center fs-1 mb-4'>Details</h1>
          <div className="form-outline mb-4">
            <label className="form-label text-start Form_Label" for="form1Example13">Full Name</label>
            <input ref={Name}  required={true} type="text" placeholder='Jhon wick' id="form1Example13" className="form-control Form_Input form-control-lg" />
          </div>

         
          <div className="form-outline mb-4">
            <label className="form-label text-start Form_Label" for="form1Example23">Photo Url</label>
            <input ref={Url}  type="text" id="form1Example23"  placeholder='www.xyz.com' className="form-control Form_Input form-control-lg" />
          </div>

        {!isloading ?  <button   type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>  
         :
         <button className='btn btn-outline-light' ><img width="50px" src={loader} alt="" /></button> }
        </form>
       </div>

    </> , document.getElementById("updateModal"))
   
  )
}

export default UpdateProfile