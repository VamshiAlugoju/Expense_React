import React from 'react'
import ExpenseForm from '../../Modals/AddExpense/ExpenseForm';
import ExpenseItem from '../ExpenseItem';

import "./expensepage.css"
function ExpensePage() {

  const [showModal ,setshowModal] = React.useState(false);
  function handleModal()
  {
    setshowModal(prev=>!prev);
  }
  
  function addToList(item)
  {
     console.log(item);
  }
   

  return (
    <div>
        <h1>Expenses</h1>
        <div className='w-75 mt-5 border-bottom mx-auto'>
          <div className="row">
            <h1 className="col-4  fs-3">Name</h1>
            <h1 className="col-4 fs-3">Price</h1>
            <div className='col-4 row'>
            <h1 className=" col-6 d-inline fs-3 ">Category</h1>
              <div className='col-6'>
              <button onClick={handleModal} className='btn mt-1 btn-sm ms-3 btn-primary'>Add Expense</button>

              </div>
            </div>
         
          </div>
        </div>
        <div className='w-75 expenses_div mx-auto'>
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
 
        </div>
        {showModal && <ExpenseForm addToList={addToList} closeModal={handleModal} />}
    </div>
  )
}

export default ExpensePage