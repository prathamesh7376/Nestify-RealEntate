import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="Username"
          id="Username"
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="email"
          id="email"
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="password"
          id="password"
        />
        <button className="bg-slate-900 hover:opacity-55 p-3 rounded-lg text-white uppercase">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5 text-center">
        Have and Account ?{" "}
        <Link
          to="/signin"
          className="
        text-blue-600 font-extrabold"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
