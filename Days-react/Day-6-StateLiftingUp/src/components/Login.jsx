const Login = ({setToggel}) => {
  return (
    <div className="bg-green-300 h-screen flex justify-center items-center ">
      <form
        className="bg-amber-50 flex flex-col w-90 justify-center gap-4 p-10 rounded-2xl "
        action="submit"
      >
        <h1 className="text-2xl font-bold">Login </h1>
        <input
          type="text"
          className="p-2 border rounded-xl bg-gray-300"
          placeholder="Enter your name..."
        ></input>
        <input
          type="password"
          className="p-2 border  rounded-xl bg-gray-300"
          placeholder="password"
        ></input>
        <button className="bg-blue-600  rounded-xl p-2 font-bold">Login</button>
        <p>
          Don't have an account ?{" "}
          <span onClick={() => setToggel((prev)=>!prev)} className="text-blue-400 cursor-pointer">Register here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
