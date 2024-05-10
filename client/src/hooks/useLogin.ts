import { useState } from "react";

import { useAuthContext } from "@/context/auth-context";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  // console.log("CHECK");

  const login = async ({ username, pass }: any) => {
    const success = handleInputErrors({ username, pass });
    if (!success) {
      console.log("not success");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, pass }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log("data", data);
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      console.log("setAuthUser Done");
    } catch (error) {
      // toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function handleInputErrors({ username, pass }: any) {
  if (!username || !pass) {
    return false;
  }
  return true;
}
