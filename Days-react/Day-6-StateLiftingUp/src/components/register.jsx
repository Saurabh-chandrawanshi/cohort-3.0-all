import { useState } from "react"


const Register = ({setToggel}) => {
    const[formData , setFromData]= useState({
      Email:"",
      name:"",
      password:"",
    }); 
const [Users, setUsers]=useState([]);
 console.log(Users);
    const handleChange=(e)=> {
         let {name,value}=e.target;
         setFromData({...formData,[name]:value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);

        setUsers([...Users,formData])
        setFromData({
          name:"",
          Email:"",
          password:"",
        });
    };
 
  return (
    <div>
       <div className="bg-green-300 h-screen flex justify-center items-center ">
      <form
      onSubmit={ handleSubmit}
        className="bg-amber-50 flex flex-col w-90 justify-center gap-4 p-10 rounded-2xl "
        action=""
      >
        <h1 className="text-2xl font-bold">Register </h1>
         <input 
         required
         value={formData.Email}
         name="Email"
         onChange={handleChange}
          type="Email"
          className="p-2 border  rounded-xl bg-gray-300"
          placeholder="Enter your Email..."
        ></input>
        <input 
        required
        value={formData.name}
        name="name"
        onChange={handleChange}
          type="text"
          className="p-2 border  rounded-xl bg-gray-300"
          placeholder="Enter your name..."
        ></input>
        <input 
        required
        value={formData.password}
        name="Password"
        onChange={handleChange}
          type="password"
          className="p-2 border  rounded-xl bg-gray-300"
          placeholder="password"
        ></input>
        <button className="bg-blue-600  rounded-xl p-2 font-bold">Register</button>
        <p>
          Already have an account ?{" "}
          <span onClick={()=>setToggel((prev)=>!prev)} className="text-blue-400 cursor-pointer">LogIn here</span>
        </p>
      </form>
    </div>
    </div>
  )
}

export default Register;
