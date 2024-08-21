import React, { useState } from "react";
import { Button } from "./button";
import UserInput from "./user-input";

function setCookie(name: string, value: any, days?: number) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

interface LoginProps {
  url?: string;
}

type handleChangeEmailType = (e: any) => void;

const Login: React.FC<LoginProps> = ({
  url = "https://testaccounts.vodoerp.com/api/login",
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");

  //===========================================================
  //===========================================================

  const handleChangeEmail: handleChangeEmailType = (e) => {
    setEmail(typeof e === "string" ? e : e.target.value);
  };

  //===========================================================
  //===========================================================

  const handleChangePassword: handleChangeEmailType = (e) => {
    setPassword(typeof e === "string" ? e : e.target.value);
  };

  //===========================================================
  //===========================================================

  async function handleLogin() {
    if (!email || !password) return;
    try {
      setLoading(true);
      setMsg("");
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_name: email, password }),
      });
      if (!result.ok) {
        throw new Error("Something went wrong !!");
      }
      const res: any = await result.json();
      setCookie("user_token", res.data.personal_access_token);
      setCookie("token", res.data.access_token);
      setCookie("user_id", res.data.user_id);
      if (res.data.have_business) {
        setCookie("secure_key", res.data.business.business_data.secure_key);
        setCookie(
          "business_modules_route",
          JSON.stringify(res.data.business.business_modules_route)
        );
      }
      setLoading(false);
      setMsg(res.message);
      //   console.log(res);
      await new Promise((resolve) => setTimeout(resolve, 1200));
      window.location.replace("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  //===========================================================
  //===========================================================

  return (
    <div className="flex flex-col items-center gap-3">
      <h3 className="mb-3">Login</h3>
      <UserInput
        label="UserName"
        value={email}
        onChangeFn={handleChangeEmail}
        type="text"
        name="email"
        id="email"
      />
      <UserInput
        label="Password"
        value={password}
        onChangeFn={handleChangePassword}
        type="password"
        name="password"
        id="password"
      />
      <p className="my-3 text-center">{msg}</p>
      <Button
        disabled={loading || (!email && !password)}
        className={`mt-2 cursor-pointer ${loading ? "opacity-50" : ""}`}
        onClick={handleLogin}
      >
        {loading ? "loading ..." : "Login"}
      </Button>
    </div>
  );
};

export default Login;
