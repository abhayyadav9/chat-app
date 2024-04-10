// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useAuthContext } from "../context/AuthContext";

// const useSignup = () => {
// 	const [loading, setLoading] = useState(false);
// 	const { setAuthUser } = useAuthContext();

// 	const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
// 		const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
// 		if (!success) return;

// 		setLoading(true);
// 		try {
// 			const res = await fetch("/api/auth/signup", {
// 				method: "POST",
// 				headers: { "Content-Type": "application/json" },
// 				body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
// 			});

// 			const data = await res.json();
// 			console.log(data)


// 			if (data.error) {
// 				throw new Error(data.error);
// 			}
// 			localStorage.setItem("chat-user", JSON.stringify(data));
// 			setAuthUser(data);
// 		} catch (error) {
// 			toast.error(error.message);
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	return { loading, signup };
// };
// export default useSignup;



// function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
// 	if (!fullName || !username || !password || !confirmPassword || !gender) {
// 		console.log("Please fill in all fields");
// 		return false;
// 	}

// 	if (password !== confirmPassword) {
// 		toast.error("Passwords do not match");
// 		return false;
// 	}

// 	if (password.length < 6) {
// 		toast.error("Password must be at least 6 characters");
// 		return false;
// 	}

// 	return true;
// }



// src/hooks/useSignup.js

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; // Import React Hot Toast
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
    const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
      });

      const data = await res.json();
      console.log(data);

      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message); // Display error message as a toast
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    console.log("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match"); // Display error message as a toast
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters"); // Display error message as a toast
    return false;
  }

  return true;
}

export default useSignup;

