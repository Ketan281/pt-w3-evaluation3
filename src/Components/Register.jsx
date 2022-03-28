import React from 'react'

const Register = () => {
 
     const [formData, setFormData] = React.useState({
        name:'',
        username:'',
        password:''
    })

    const handleChange = (e) =>{
        const {id,value} = e.target;
      setFormData({
          ...formData,
          [id] : value
      });
}


    const handleSubmit =(e)=>{
          e.preventDefault();
          const payloadjson = JSON.stringify(formData);
       
          fetch("http://localhost:3001/users",{
              method: "POST",
              body: payloadjson,
              headers:{
                  "content-type": "application/json"
              }
          }).then((res)=>{
              console.log(res);
              
          });
    }
React.useEffect(()=>{

},[])


  return (
      <>
    <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <input id = "name" 
        type="text" 
        placeholder='Enter Users Name' 
        onChange={handleChange}
        value={formData.name}
        />
         <br/> <br/>
        <input 
        id="username" 
        type="text" 
        placeholder='Enter unique username' 
        value={formData.username}
        onChange={handleChange}/>
         <br/> <br/>
         <input 
        id="password" 
        type="text" 
        placeholder='Enter password' 
        value={formData.password}
        onChange={handleChange}/>
         <br/> <br/>
        <input type="submit" value="REGISTER"/>
    </form>
</>
  )
}

export  {Register}