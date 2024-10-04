import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({
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
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        // Handle errors if the response status is not OK (e.g., 400, 401)
        setError(data.message || "Invalid credentials!");
      } else {
        console.log(data); // Successful sign-in logic
        navigate("/"); // Redirect to the home page only if login is successful
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign IN</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          {loading ? "Loading" : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5 text-center">
        Dont have an Account?
        <Link to="/signup" className="text-blue-600 font-semibold">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Signin;
