import React from 'react'
import "./dummypage.css"
import UpdateProfile from '../../../Modals/updateProfile/UpdateProfile';
function DummyPage() {

    const [Modal , setModal] = React.useState(false);

    function ShowModal()
    {
       setModal(prev=>!prev);
    }
  
  return (
    <div>
        <h2 className='mt-3'>Welcome to Expense Tracker!!!</h2>
        <p   className=' mt-1 complete_Pro mx-auto' >Your profile is incomplete.
        <p style={{cursor:"pointer"}} className='d-inline ms-2'><a onClick={ShowModal} class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">complete here</a></p>
        { Modal && < UpdateProfile closeModal={ShowModal} />}
          </p>
    </div>
  )
}

export default DummyPage