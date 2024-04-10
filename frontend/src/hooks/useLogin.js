import React, { useState } from 'react';
import toast from "react-hot-toast";
import { useAuthContext } from '../context/AuthContext'; 

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  
  const login = async (username, password) => {
    try {
      const success = handleInputErrors({ username, password });
      if (!success) return;

      setLoading(true);

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Corrected header name
        body: JSON.stringify({ username, password }) // Corrected spelling of stringify
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login }; // Export login function
};

export default useLogin;

function handleInputErrors({ username, password }) {
  if (!username || !password) {
    console.log("Please fill in all fields");
    return false;
  }
  
  return true;
}
