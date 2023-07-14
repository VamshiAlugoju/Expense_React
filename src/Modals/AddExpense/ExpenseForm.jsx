import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
function ExpenseForm(props) {
  const name = React.useRef();
  const price = React.useRef();
  const category = React.useRef();

  async function sendData(e) {
    e.preventDefault();
    const item = {
      name: name.current.value,
      price: price.current.value,
      category: category.current.value,
    };

    try {
      const res = await axios.post(
        "https://expense-b87df-default-rtdb.firebaseio.com/expenses.json",
        { item }
      );
     props.addToList(item);
     props.closeModal()

    } catch (err) {
      alert("couldn't")
    }


  }

  return ReactDOM.createPortal(
    <>
      <div onClick={() => props.closeModal()} className="Modal_bg"></div>
      <div className="Modal_div">
        <form onSubmit={sendData} className="Modal_Form">
          <h1 className="text-center fs-1 mb-4 border-bottom">Expense</h1>
          <div className="form-outline mb-4">
            <label
              className="form-label text-start Form_Label fs-3"
              htmlfor="form1Example13"
            >
              Expense Name
            </label>
            <input
              ref={name}
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
              ref={price}
              type="number"
              id="form1Example23"
              placeholder="2 Rs"
              className="form-control Form_Input form-control-lg"
            />
          </div>
          <div className="form-outline mb-4">
            <label htmlFor="" className="form-label text-start Form_Label fs-3">
              {" "}
              Category
            </label>
            <select
              ref={category}
              class="form-select"
              aria-label="Default select example"
            >
              <option value="Clothes" selected>
                Clothes
              </option>
              <option value="Food">Food</option>
              <option value="Electricity">Electricity</option>
              <option value="Travel">Travel</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block w-100"
          >
            Add Expense
          </button>
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
