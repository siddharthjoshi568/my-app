import React, { useEffect, useState } from 'react';

function EditProfile() {
 
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [profile, setProfile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState(true);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  },[]);
  

  function handleSubmit(e) {
    e.preventDefault();
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    userDetails.map((arr, index) => 
          {
              if (arr.email === currentUser.email && (arr.password === currentUser.password)) {
                console.log(index +" "+arr.email + " "+ arr.password +" "+currentUser.email+" "+currentUser.password);
                arr.firstname = firstname? firstname : currentUser.firstname;
                arr.lastname = lastname? lastname : currentUser.lastname;
                arr.email = email ? email : currentUser.email;
                arr.phone = contactNumber ? contactNumber : currentUser.phone;
                arr.profileImage = profile ? profile : currentUser.profileImage;
                arr.password = password ? password : email ? email : currentUser.password;
              }
            }
          );
          let user = {
            firstname : firstname? firstname : currentUser.firstname,
            lastname : lastname? lastname : currentUser.lastname,
            profileImage : profile ? profile : currentUser.profileImage,
            email : email ? email : currentUser.email,
            phone : contactNumber ? contactNumber : currentUser.phone,
            password : password ? password : currentUser.password,
          }
    localStorage.setItem("currentUser",JSON.stringify(user));
    localStorage.removeItem("userDetails");
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <div className="p-4">
       
        <form onSubmit={handleSubmit} align="center">
          <h1>Edit Profile</h1>
          <div className="form-group">
            <label>FirstName:</label>
            <input
              type="text"
              className="form-control"  
              placeholder={currentUser.firstname}
              
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>LastName</label>
            <input
              type="text"
              className="form-control"
              placeholder={currentUser.lastname}
              
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Profile Image</label>
            <input
              type="file"
              className="form-control"
              placeholder={currentUser.profileImage}
              
              onChange={(event) => setProfile(event.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="phone"
              className="form-control"
              placeholder={currentUser.phone}
              
              onChange={(event) => setContactNumber(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder={currentUser.email}
              
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              placeholder="*******"
              disabled
            />
     
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Update
          </button>
          
        </form>
        
    </div>
  );
}
export default EditProfile;