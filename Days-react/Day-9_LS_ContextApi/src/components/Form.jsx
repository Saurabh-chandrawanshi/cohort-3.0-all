import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({ setUsers, setToggle, users, updatedData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updatedData,
  
  });

  const formData = (data) => {
    if(updatedData){
      setUsers((prev) => {
        return prev.map((val) =>{
          return val.id === updatedData.id ?{...data}:val;
        })
      })
    }else{
   let arr =[...users,{...data,id:nanoid() }];
   console.log(arr);
   setUsers(arr);
   localStorage.setItem("users",JSON.stringify(arr));
    };

   
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="bg-yellow-400 min-h-screen flex justify-center items-center p-4">
      <div className="flex bg-amber-50 p-8 rounded-2xl flex-col shadow-2xl w-full max-w-md">
        <h1 className="mb-4 text-2xl font-bold">Register Form</h1>

        <form onSubmit={handleSubmit(formData)} className="flex flex-col gap-4">
          <div>
            <input
              {...register("name", {
                required: "Name is required",
                maxLength: {
                  value: 20,
                  message: "Maximum 20 characters",
                },
              })}
              className="border p-2 rounded-2xl border-amber-200 w-full"
              type="text"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
              className="border p-2 rounded-2xl border-amber-200 w-full"
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("number", {
                required: "Number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit number",
                },
              })}
              className="border p-2 rounded-2xl border-amber-200 w-full"
              type="tel"
              placeholder="Number"
            />
            {errors.number && (
              <p className="text-red-600">{errors.number.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="border p-2 rounded-2xl border-amber-200 w-full"
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Date of Birth</label>
            <input
              {...register("age", {
                required: "Date of birth is required",
              })}
              className="border p-2 rounded-2xl border-amber-200 w-full"
              type="date"
            />
            {errors.age && <p className="text-red-600">{errors.age.message}</p>}
          </div>

          <div>
            <input
              {...register("image", {
                required: "Image URL is required",
                pattern: {
                  value: /^https?:\/\/.+/i,
                  message: "Enter a valid URL",
                },
              })}
              className="border p-2 rounded-2xl border-amber-200 w-full"
              type="url"
              placeholder="Image URL"
            />
            {errors.image && (
              <p className="text-red-600">{errors.image.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-yellow-400 py-2 rounded-2xl font-semibold"
          >
            Submit
          </button>

          <p>
            Already have an account?{" "}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-blue-600 underline"
            >
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
