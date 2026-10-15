import React, { useRef, useState } from "react";

const From = () => {
  const [formData, setFromData] = useState({});
  const formRef = useRef({});

  const handelSubmit = (e) => {
    e.preventDefault();
    let object = {
      Name: formRef.current.name.value,
      Email: formRef.current.Email.value,
      Password: formRef.current.password.value,
      Number: formRef.current.Number.value,
      DOB: formRef.current.DOB.value,
    };
    setFromData(object);
  };
  return (
    <div className="bg-blue-400 h-screen  flex justify-center items-center flex-col gap-6">
      <form
        onSubmit={handelSubmit}
        action=""
        className="bg-white flex flex-col p-10 rounded-2xl shadow-xl gap-4"
      >
        <h1>Registration From</h1>
        <input
          ref={(e) => (formRef.current.name = e)}
          type="text"
          placeholder="Name"
          className="border p-2 rounded-2xl bg-gray-300 cursor-pointer"
        />
        <input
          ref={(e) => (formRef.current.Email = e)}
          type="text"
          placeholder="Email"
          className="border p-2 rounded-2xl bg-gray-300 cursor-pointer"
        />
        <input
          ref={(e) => (formRef.current.password = e)}
          type="Password"
          placeholder="password"
          className="border p-2 rounded-2xl cursor-pointer bg-gray-300"
        />
        <input
          ref={(e) => (formRef.current.Number = e)}
          type="Number"
          placeholder="Phone"
          className="border p-2 rounded-2xl cursor-pointer bg-gray-300"
        />

        <input
          ref={(e) => (formRef.current.DOB = e)}
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
        <div>
          <h1>name -{formData.Name}</h1>
          <h1>Email - {formData.Email}</h1>
          <h1>Password -{formData.Password}</h1>
          <h1>Number - {formData.Number}</h1>
          <h1>DOB - {formData.DOB}</h1>
        </div>
      </div>
    </div>
  );
};

export default From;
