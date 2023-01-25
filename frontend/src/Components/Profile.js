import React, {useState} from 'react'
import Header from "../Components/Header";

function Profile() {
    const [userName, setUserName] = useState('UserName')
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
      <div><form onSubmit={handleSubmit}>
      <textarea
            className="enterText form-control"
            value={userName}
            onChange={handleUserName}
            placeholder={"write UserName"}
          /><button className="myBtn btn btn-primary">save</button></form></div>
    </>
  )
}

export default Profile