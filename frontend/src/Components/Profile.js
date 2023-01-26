import React, {useState} from 'react'
<<<<<<< Updated upstream
import Header from "../Components/Header";
import '../App.css'
=======
>>>>>>> Stashed changes

function Profile() {
  const myUser = JSON.parse(localStorage.getItem("userName"))
    const [userName, setUserName] = useState(myUser)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUserName(userName)
    }

    const handleUserName = (e) => {
        setUserName(e.target.value);
      };
  return (
    <>
<<<<<<< Updated upstream
      <Header/>
      <div className='d-flex justify-content-center'><form onSubmit={handleSubmit}>
=======
      <div><form onSubmit={handleSubmit}>
>>>>>>> Stashed changes
      <textarea
            className="changeName form-control"
            value={userName}
            onChange={handleUserName}
            placeholder={"write UserName"}
          /><button className="btn btn-warning">save</button></form></div>
    </>
  )
}

export default Profile