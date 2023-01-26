import React, {useState} from 'react'
import Header from "../Components/Header";
import '../App.css'

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
      <Header/>
      <div className='d-flex justify-content-center'><form onSubmit={handleSubmit}>
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