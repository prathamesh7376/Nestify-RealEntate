import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; // Import necessary Firebase auth methods
import { app } from "../firebase"; // Import the initialized Firebase app
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider(); // Initialize Google Auth provider
      const auth = getAuth(app); // Get the Firebase Auth instance

      // Sign in with a popup using the Google provider
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));

      navigate("/");
    } catch (error) {
      console.log(`Could not sign in: ${error.message}`); // Log any error that occurs during sign-in
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lh uppercase"
    >
      Continue with Google
    </button>
  );
}
