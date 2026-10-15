import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

const RHF = () => {
    const [userData, setUserData] = useState([]);
    let{
        register,
        handleSubmit,
        reset,
        formState:{error}
    } = useForm();

    const formSubmit = (data) =>{
           
        console.log(data);
       setUserData((prev) => [...prev,data])
        reset();
    }
  return (
    <div>
       <div className="bg-blue-400 h-screen  flex justify-center items-center flex-col gap-6">
      <form
        onSubmit={handleSubmit (formSubmit)}
        action=""
        className="bg-white flex flex-col p-10 rounded-2xl shadow-xl gap-4"
      >
        <h1>Registration From</h1>
        <input
         {...register("name")}
          type="text"
          placeholder="Name"
          className="border p-2 rounded-2xl bg-gray-300 cursor-pointer"
        />
        <input
         {...register("Email")}
          type="text"
          placeholder="Email"
          className="border p-2 rounded-2xl bg-gray-300 cursor-pointer"
        />
        <input
          {...register("password")}
          type="Password"
          placeholder="password"
          className="border p-2 rounded-2xl cursor-pointer bg-gray-300"
        />
        <input
           {...register("Number")}
          type="Number"
          placeholder="Phone"
          className="border p-2 rounded-2xl cursor-pointer bg-gray-300"
        />

        <input
           {...register("DOB")}
          type="date"
          placeholder="DOB"
          className="border p-2 rounded-2xl cursor-pointer bg-gray-300"
        />
        <button className=" bg-blue-600 border-r shadow-xl rounded-2xl p-2 cursor-pointer">
          Submit
        </button>
      </form>
      <div className="bg-white flex flex-col p-10 rounded-2xl shadow-xl gap-4">
        <h1>Output Table</h1>
      
            {userData.map((user, index) => (
                 <div key={index}>
                    <h1>name -{user.Name}</h1>
          <h1>Email - {user.Email}</h1>
          <h1>Password -{user.Password}</h1>
          <h1>Number - {user.Number}</h1>
          <h1>DOB - {user.DOB}</h1>
        </div>
            ))}
          
      </div>
    </div>
    </div>
  )
}

export default RHF
