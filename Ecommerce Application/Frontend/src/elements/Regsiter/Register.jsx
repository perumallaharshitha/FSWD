import "./Register.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //error state
  let [err, setErr] = useState("");
  //navigate to routes
  let navigate = useNavigate();

  //on user submit
  async function onUserRegister(newUser) {
    try {
      let res = await fetch("http://localhost:5000/user-api/user", {
        method: "POST",
        headers: { "Content-type": "application/json" ,},
        body: JSON.stringify(newUser),
      });
      let data=await res.json()
      
      if (data.message === 'user created') {
        //navigate to Login component
        navigate("/login");
      }
      else{
        setErr(data.message)
      }
    } catch (err) {
      console.log("err is ", err);
      setErr(err.message);
    }
  }


  return (
    <div className='card w-50 m-auto bg-light mt-5 mb-5'>
      <h1 className='text-secondary fs-3 m-3 text-center'>Register User</h1>
      <div className='row'>
        <div className="col-lg-12 col-sm-10 col-md-12">
          {err.length !== 0 && (
            <p className="fs-2 text-danger text-center">{err}</p>
          )}
          <form className='d-flex flex-column w-50 m-auto' onSubmit={handleSubmit(onUserRegister)}>
            <div className='d-flex flex-column mb-2'>
              <label htmlFor="firstname">Username</label>
              <input type="text" {...register("firstname", { required: true })} id="firstname" className="form-control input-field" />
              {errors.firstname && <p className="text-danger">Required</p>}
            </div>
            <div className='d-flex flex-column mb-2'>
              <label htmlFor="password">Password</label>
              <input type="password" {...register("password", { required: true })} id="password" className='form-control' />
              {errors.password && <p className="text-danger">Required</p>}
            </div>
            <div className='d-flex flex-column mb-2'>
              <label htmlFor="email">Email</label>
              <input type="email" {...register("email", { required: true })} id="email" className='form-control' />
              {errors.email && <p className="text-danger">Required</p>}
            </div>
            <div className='d-flex flex-column mb-2'>
              <label htmlFor="phno">Phone Number</label>
              <input type="number" {...register("phno", { required: true })} id="phno" className='form-control' />
              {errors.phno && <p className="text-danger">Required</p>}
            </div>
            <div className='d-flex flex-column mb-2'>
              <label htmlFor="img">Profile Image URL</label>
              <input type="text" {...register("img", { required: true })} id="img" className='form-control' />
              {errors.img && <p className="text-danger">Required</p>}
            </div>
            <div className='d-flex flex-column mb-2'>
              <label htmlFor="add">Address</label>
              <input type="text" {...register("add", { required: true })} id="add" className='form-control' />
              {errors.add && <p className="text-danger">Required</p>}
            </div>
            <button type='submit' className='btn btn-success w-25 m-auto mt-3 mb-3'>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
