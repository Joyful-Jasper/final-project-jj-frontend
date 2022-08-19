import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSignUp } from "../components/SignUp";

const SignUp = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [dataUser, setDataUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  //   const [dataCheck, setDataCheck] = useState();

  const handleChange = (event) => {
    setDataUser({ ...dataUser, [event.target.name]: event.target.value });
  };
  const handleSumbit = () => {
    dispatch(addSignUp(dataUser));
    console.log(user.data);
  };

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <h1> Register </h1>
          <div className="col">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              first name
            </label>
            <input type="text" className="form-control" id="first" name="firstName" value={dataUser.firstName} onChange={handleChange} />
          </div>
          <div className="col">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              last name
            </label>
            <input type="text" className="form-control" id="last" name="lastName" value={dataUser.lastName} onChange={handleChange} />
          </div>

          <label htmlFor="exampleFormControlInput1" className="form-label pt-3">
            Email
          </label>
          <input type="email" className="form-control" id="emailView" name="email" placeholder="name@example.com" value={dataUser.email} onChange={handleChange} />
          <label htmlFor="exampleFormControlInput1" className="form-label pt-3">
            Password
          </label>
          <input type="password" className="form-control" id="password" name="password" value={dataUser.password} onChange={handleChange} />
          <button onClick={handleSumbit} />
        </div>
      </div>
    </div>
  );
};
export default SignUp;
