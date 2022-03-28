import React from 'react'
import { AuthContext } from '../Contexts/AuthContexts';

const Login = () => {
    const { login } = React.useContext(AuthContext);
    const [ formDetails, setFormDetails] =  React.useState({
      email: "",
      password: ""
    });
    const handleChange = (e) =>{
        const { name,value } = e.target;

        setFormDetails({
            ...formDetails,
            [name]:value
        });
    }
    const handleSubmit = (e) =>{
          e.preventDefault();
          fetch('https://masai-api-mocker.herokuapp.com/' ,{
              method: "POST",
              body: JSON.stringify(formDetails),
              headers: {"content-type":"application/json"}
          }).then((res)=>res.json())
          .then((res)=>login(res.token))
    }
    const {email,password} = formDetails
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
        name="email"
        type="text"
        placeholder='Enter Email'
        value={email}
        onChange={handleChange}
/>
<br/>
<input
        name="password"
        type="text"
        placeholder='Enter password'
        value={password}
        onChange={handleChange}
/>
<br/>
<input type="submit" value="Login"/>
        </form>
        </div>
  )
}

export  {Login}