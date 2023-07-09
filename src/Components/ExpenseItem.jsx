import React from 'react'

function ExpenseItem() {
  return (
    <div className="row expense_item mt-3 fs-5 border border-info-subtle mx-auto rounded py-2">
     <p className='col-4 m-0'> Name  </p>
    <p className="col-4 m-0 ">50.99 $</p>
    <div className='col-4 row '>
    <p className=" col-6 m-0"> Food</p>
    <div className='col-3'>
    <button className='btn btn-sm px-2 btn-primary'>Edit</button>
    </div>
    <div className='col-3'>
    <button className='btn btn-sm px-2 btn-danger'>Delete</button>
    </div>
    </div>
 
  </div> 
  )
}

export default ExpenseItem