import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleLogin(e) {
    e.preventDefault();
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    userDetails.map(arr => 
          {
            if(email.length > 0 && password.length > 0){
              if (arr.email === email && (arr.password === password)) {
                let currentUser = {
                        firstname : arr.firstname,
                        lastname : arr.lastname,
                        profileImage : arr.profile,
                        email : arr.email,
                        phone : arr.contactNumber,
                        password : arr.password,
                      }
                localStorage.setItem("currentUser", JSON.stringify(currentUser));
                window.location.reload();
              }else{
                alert('Please check your email or password');
              }
            }
          }
          );
  }
  return (
    <div>
      <form onSubmit={handleLogin} align="center">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Login
        </button>
        
      </form>
    </div>
  );
}
export default Login;