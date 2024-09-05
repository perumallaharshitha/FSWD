import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { userLoginContext } from "../contexts/userLoginContext"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";

function Login() {
  const { loginUser, userLoginStatus, err } = useContext(userLoginContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onUserLogin(userCred) {
    loginUser(userCred);
  }

  useEffect(() => {
    if (userLoginStatus) {
      navigate("/user-profile");
    }
  }, [userLoginStatus, navigate]);

  return (
    <div className="card w-50 m-auto mt-5 bg-light">
      <h1 className="text-center text-secondary fs-3 m-3">LOGIN</h1>
      <div className="col-11 col-sm-10 col-md-6 mx-auto">
        {err.length !== 0 && <p className="fs-1 text-danger">{err}</p>}
        <form onSubmit={handleSubmit(onUserLogin)}>
          <div className="w-auto m-auto mt-3 mb-3">
            <label htmlFor="username">Username</label>
            <input type="text" {...register('username', { required: true })} id="username" className="form-control" autoComplete="username" />
            {errors.username && <span>Username is required</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" {...register('password', { required: true })} id="password" className="form-control" />
            {errors.password && <p className="text-danger lead">*Password is required</p>}
          </div>
          <div className="m-auto mb-5">
            <button type="submit" className="btn btn-info text-white">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
