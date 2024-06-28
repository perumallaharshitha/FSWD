// Login.jsx
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { userLoginContext } from "../contexts/userLoginContext"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";

function Login() {
  let { loginUser, userLoginStatus, err } = useContext(userLoginContext);
  const navigate = useNavigate();

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //on user submit
  function onUserLogin(userCred) {
    loginUser(userCred);
    console.log(userLoginStatus);
  }

  useEffect(() => {
    if (userLoginStatus === true) {
      navigate("/user-profile");
    }
  }, [userLoginStatus, navigate]);

  return (
    <div className="card w-50 m-auto mt-5 bg-light">
      <h1 className="text-center text-secondary fs-3 m-3">LOGIN</h1>
      <div className="m-auto w-50 d-flex flex-column">
        <form onSubmit={handleSubmit(onUserLogin)}>
          <div className="w-auto m-auto mt-3 mb-3">
            <label htmlFor="username">Username</label>
            <input type="text" {...register('username', { required: true })} id="username" className="form-control" autoComplete="username" />
            {errors.username && <span>Username is required</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" {...register('password', { required: true })} id="password" className="form-control" />
            {errors.password?.type === "required" && (
              <p className="text-danger lead">*Password is required</p>
            )}
          </div>
          <div className="m-auto mb-5">
            <button type="submit" className="btn btn-info text-white">Submit</button>
          </div>
        </form>
        {err && <div className="text-danger">{err}</div>}
      </div>
    </div>
  );
}

export default Login;
