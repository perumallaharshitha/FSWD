import React from 'react';
import { useForm } from "react-hook-form";
import './Regsitration.css';

function Registration() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  console.log(errors);

  function handleFormSubmit(userObj) {
    console.log(userObj);
  }

  return (
    <div className="container">
      {/* <div>
        <h1 className='text-info mb-0'>Registration Form</h1>
      </div> */}
      <form className="w-50 mx-auto mt-3" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-group mb-3">
            <h1 className='text-info  mb-3'>Registration Form</h1>
          </div>
        <div className="form-row mt-3">
          <div className="form-group mb-3">
            <label htmlFor="firstname" className="mb-3">First Name</label>
            <input type="text" {...register("firstname", { required: true, minLength: 4, maxLength: 6 })} id="firstname" className="form-control input-field" />
            {errors.firstname?.type === 'required' && <p className="text-danger">Required</p>}
            {errors.firstname?.type === 'minLength' && <p className="text-danger">Minimum four characters</p>}
            {errors.firstname?.type === 'maxLength' && <p className="text-danger">Maximum six characters</p>}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="lastname" className="mb-3">Last Name</label>
            <input type="text" {...register("lastname", { required: true, minLength: 4, maxLength: 6 })} id="lastname" className="form-control input-field" />
            {errors.lastname?.type === 'required' && <p className="text-danger">Required</p>}
            {errors.lastname?.type === 'minLength' && <p className="text-danger">Minimum four characters</p>}
            {errors.lastname?.type === 'maxLength' && <p className="text-danger">Maximum six characters</p>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group mb-3">
            <label htmlFor="birthday" className="mb-3">Birthday</label>
            <input type="date" {...register("birthday", { required: true })} id="birthday" className="form-control input-field" />
            {errors.birthday?.type === 'required' && <p className="text-danger">Required</p>}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="gender" className="mb-3">Gender</label>
            <div>
              <input type="radio" {...register("gender", { required: true })} id="gender-male" value="Male" className="form-radio gender" /> Male
              <input type="radio" {...register("gender", { required: true })} id="gender-female" value="Female" className="form-radio gender" /> Female
            </div>
            {errors.gender?.type === 'required' && <p className="text-danger">Required</p>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group mb-3">
            <label htmlFor="email" className="mb-3">Email</label>
            <input type="email" {...register("email", { required: true })} id="email" className="form-control input-field" />
            {errors.email?.type === 'required' && <p className="text-danger">Required</p>}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phno" className="mb-3">Phone Number</label>
            <input type="tel" {...register("phno", { required: true })} id="phno" className="form-control input-field" />
            {errors.phno?.type === 'required' && <p className="text-danger">Required</p>}
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="subject" className="mb-3">Subject</label>
          <select id="subject" {...register("subject", { required: true })} className="form-control input-field">
            <option value="">Choose a subject</option>
            <option value="Computer Networks">Computer Networks</option>
            <option value="Data Base Management systems">Data Base Management systems</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Data Science">Data Science</option>
            <option value="Design thinking">Design thinking</option>
            <option value="Advanced Java Programming">Advanced Java Programming</option>
          </select>
          {errors.subject?.type === 'required' && <p className="text-danger">Required</p>}
        </div>
        <div className="form-group mb-3">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
