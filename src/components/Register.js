import React, { useState } from "react";

const Register = () => {
  const [inpval, setINP] = useState({
    name: "",
    email: "",
    dob: "",
    address: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  // frontend to backend
  const addinpdata = async (e) => {
    e.preventDefault();

    const { name, email, dob, address } = inpval;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        dob,
        address,
      }),
    });
    const data = await res.json();
    console.log(data);

    if(res.status === 404 || !data){
      alert("error");
    }else{
      alert("data added");
      console.log("data added")
    }
  };

  return (
    <div className="container">
      <form className="mt-5">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              onChange={setdata}
              value={inpval.name}
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              E-mail
            </label>
            <input
              onChange={setdata}
              value={inpval.email}
              name="email"
              type="email"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              DOB
            </label>
            <input
              onChange={setdata}
              value={inpval.dob}
              name="dob"
              type="number"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Residence Address
            </label>
            <input
              onChange={setdata}
              value={inpval.address}
              name="address"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button
            type="submit"
            onClick={addinpdata}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
