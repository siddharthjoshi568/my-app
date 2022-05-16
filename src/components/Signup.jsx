import React, { useState } from "react";

function Signup() {
 
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [profile, setProfile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isShown, setIsSHown] = useState(false);
  const [isShown1, setIsSHown1] = useState(false);
  

  function handleSubmit(e) {
    e.preventDefault();
    if(password === confirmPassword)
    {
    if (
      firstname !== "" &&
      lastname !== "" &&
      profile !== ""&&
      password !== "" &&
      confirmPassword !== "" &&
      contactNumber !== "" &&
      email !== ""
    ) {
        let ob = {
            firstname : firstname,
            lastname : lastname,
            profileImage : profile,
            email : email,
            phone : contactNumber,
            password : password,
          }
          let olddata = localStorage.getItem('userDetails');
          if(olddata==null){
            olddata = []
            olddata.push(ob)
            localStorage.setItem('userDetails', JSON.stringify(olddata));
            localStorage.setItem("currentUser", JSON.stringify(ob))
            window.location.reload();
          }else{
            let oldArr = JSON.parse(olddata)
            oldArr.push(ob)
            localStorage.setItem("userDetails", JSON.stringify(oldArr))
            localStorage.setItem("currentUser", JSON.stringify(ob))
            console.log(oldArr,'hhg')
            window.location.reload();
          }
    } else {
      //   setFlag(false);
      alert(" Please Fill Every Fields");
      //   console.log("Saved in local storage");
    }
  }
  else{
    alert("Password and confirm password doesn't match !!!");
  }
  }

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };
  const togglePassword1 = () => {
    setIsSHown1((isShown1) => !isShown1);
  };

  return (
    <div className="p-4">
       
        <form onSubmit={handleSubmit} align="center">
          <h1>Signup</h1>
          <div className="form-group">
            <label>FirstName:</label>
            <input
              type="text"
              className="form-control"  
              placeholder="Enter First Name"
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>LastName</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Profile Image</label>
            <input
              type="file"
              className="form-control"
              placeholder="Enter Profile"
              onChange={(event) => setProfile(event.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="phone"
              className="form-control"
              placeholder="Enter ContactNumber"
              onChange={(event) => setContactNumber(event.target.value)}
              required
            />
          </div>
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
              type={isShown ? "text" : "password"}
              className="form-control"
              placeholder="Enter Password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          <div className="d-flex py-2 align-items-center gap-2">
          <label htmlFor="checkbox">Show password?</label>
          <input
            id="checkbox"
            type="checkbox"
            checked={isShown}
            onChange={togglePassword}
          />
        </div>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type={isShown1 ? "text" : "password"}
              className="form-control"
              placeholder="Enter confirm Password"
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
            <div className="d-flex py-2 align-items-center gap-2">
          <label htmlFor="checkbox">Show confirm password?</label>
          <input
            id="checkbox"
            type="checkbox"
            checked={isShown1}
            onChange={togglePassword1}
          />
        </div>
          </div>


          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Signup
          </button>
          
        </form>
        
    </div>
  );
}
export default Signup;