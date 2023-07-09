import React from "react";
import ReactDOM from "react-dom";
function ExpenseForm(props) {
 
    

  return ReactDOM.createPortal(
    <>
      <div onClick={() => props.closeModal()} className="Modal_bg"></div>
      <div className="Modal_div">
        <form className="Modal_Form">
          <h1 className="text-center fs-1 mb-4 border-bottom">Expense</h1>
          <div className="form-outline mb-4">
            <label
              className="form-label text-start Form_Label fs-3"
              htmlfor="form1Example13"
            >
              Expense Name
            </label>
            <input
              required={true}
              type="text"
              placeholder="Anything"
              id="form1Example13"
              className="form-control Form_Input form-control-lg"
            />
          </div>

          <div className="form-outline mb-4">
            <label
              className="form-label text-start Form_Label fs-3"
              htmlfor="form1Example23"
            >
              Price
            </label>
            <input
              type="number"
              id="form1Example23"
              placeholder="2 Rs"
              className="form-control Form_Input form-control-lg"
            />
          </div>
          <div className="form-outline mb-4">
            <label htmlFor="" className="form-label text-start Form_Label fs-3"> Category</label>
          <select class="form-select" aria-label="Default select example">
            <option value="1" selected>Clothes</option>
            <option value="2">Food</option>
            <option value="3">Electricity</option>
            <option value="4">Travel</option>
          </select>
          </div>
          <button   type="submit" className="btn btn-primary btn-lg btn-block w-100">Add Expense</button>
          {/* {!isloading ?  <button   type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>  
         :
         <button className='btn btn-outline-light' ><img width="50px" src={loader} alt="" /></button> } */}
        </form>
      </div>
    </>,
    document.getElementById("FormModal")
  );
}

export default ExpenseForm;
