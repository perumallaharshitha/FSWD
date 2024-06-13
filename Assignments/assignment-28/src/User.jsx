import { useForm } from "react-hook-form";
import { useState } from "react";

function User(){
    let { register, handleSubmit, formState:{errors} }=useForm();
    let [registeredusers, setRegisterdUsers]=useState([])
    console.log(errors)

    function handleFormSubmit(userObj){
        setRegisterdUsers([...registeredusers, userObj])
        
    }
    return(
        <div>
            <h1 className="text-info text-center  mb-0">USER INTERFACE</h1>
            <form 
                className="w-50 mx-auto mt-3" onSubmit={handleSubmit(handleFormSubmit)}
            >
             <div className="mb-3 ">
                <label htmlFor="username" className="mb-3">Username</label>
                <input type="text" {...register("username", {required:true, minLength:4, maxLength:8})} id="username"className="form-control" />
                {errors.username?.type==='required'&&<p className="text-danger">Username is required</p>}
                {errors.username?.type==='minLength'&&<p className="text-danger">Minimum four characters</p>}
                {errors.username?.type==='maxLength'&&<p className="text-danger">Maximum eight characters</p>}
             </div>   
             <div className="mb-3">
                <label htmlFor="dateofbirth" className="mb-3">Date Of Birth</label>
                <input type="date" {...register("dateofbirth", {required:true})} id="dateofbirth"  className="form-control" />
                {errors.username?.type==='required'&&<p className="text-danger">Date Of Birth is required</p>}
             </div>
             <div className="mb-3">
                <label htmlFor="city"  className="mb-3">City</label>
                <input type="text" {...register("city", {required:true})} id="city" className="form-control" />
                {errors.username?.type==='required'&&<p className="text-danger">City is required</p>}
             </div>
             <div className="mb-3">
                <button type="submit" className="btn btn-success">Submit</button>
             </div>
            </form>
            <div>
              <h2 className="text-center text-danger  mt-5">USER LIST</h2>
            <table className="table w-50 m-auto text-center ">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Date of Birth</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        registeredusers.map(userObj=><tr key={userObj.username}>
                            <td>{userObj.username}</td>
                            <td>{userObj.dateofbirth}</td>
                            <td>{userObj.city}</td>
                        </tr>)
                    }
                </tbody>

            </table>
            </div>
        </div>
    )
}
export default User;