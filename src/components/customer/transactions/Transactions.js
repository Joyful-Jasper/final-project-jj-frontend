import React from "react";
import desain from "../../../assets/desain.svg";

const Transactions = () => {
  return (
    <div className="countainer">
      <div className="container-fluid" style={{ backgroundColor: "#ECECEC" }}>
        <div className="row justify-content-center d-flex mx-auto">
          <div className="col-5 my-5 py-3" style={{ backgroundColor: "#30475E" }}>
            <label htmlFor="exampleFormControlInput1" className="form-label" style={{ color: "white" }}>
              First Name
            </label>
            <input type="text" className="form-control" id="firstNameView" name="email" />
            <label htmlFor="exampleFormControlInput1" className="form-label" style={{ color: "white" }}>
              Last Name
            </label>
            <input type="text" className="form-control" id="LastNameView" name="email" />
            <label htmlFor="exampleFormControlInput1" className="form-label" style={{ color: "white" }}>
              Email
            </label>
            <input type="email" className="form-control" id="emailView" name="email" placeholder="name@example.com" />
            <label htmlFor="exampleFormControlInput1" className="form-label" style={{ color: "white" }}>
              Confirmasi Email
            </label>
            <input type="email" className="form-control" id="emailView" name="email" placeholder="name@example.com" />
          </div>
          <div className="col-5 ms-5 my-5">
            <div style={{ backgroundColor: "#30475E", color: "white" }} className="py-3 ps-3">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                  Paypal
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label class="form-check-label" for="flexRadioDefault2">
                  GoPay
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label class="form-check-label" for="flexRadioDefault2">
                  ShopeePay
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label class="form-check-label" for="flexRadioDefault2">
                  virtual Bank
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label class="form-check-label" for="flexRadioDefault2">
                  Card
                </label>
              </div>
            </div>
            <div className="row my-5 py-3" style={{ backgroundColor: "#30475E", color: "white" }}>
              <p> order summary </p>
              <div className="col">
                <img src={desain} height={40} white={30} />
              </div>
              <div className="col">
                <p>Nama Product</p>
              </div>
              <div className="col">
                <p> Total Harga </p>
                <button className="justify-content-end d-flex mx-auto" style={{ border: "none" }}>
                  Bayar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
