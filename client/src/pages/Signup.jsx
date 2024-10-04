import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "", // Ensure this matches your backend
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear previous errors

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!data.success) {
        // Corrected typo
        setError(data.message);
      } else {
        console.log(data); // Handle successful signup
      }
      navigate("/signin"); // Redirect after successful signup
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="Username"
          id="username" // Ensure this is correct
          onChange={handleChange}
        />
        <input
          type="email"
          className="border p-3 rounded-lg"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="border p-3 rounded-lg"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />

        {/* Show error message if any */}
        {error && <div className="text-red-500">{error}</div>}

        <button
          disabled={loading}
          className="bg-slate-900 hover:opacity-55 p-3 rounded-lg text-white uppercase"
        >
          {loading ? "Loading" : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5 text-center">
        Have an Account?{" "}
        <Link to="/signin" className="text-blue-600 font-semibold">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
