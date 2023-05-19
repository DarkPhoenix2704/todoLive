import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../appwrite";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <form
        className="flex flex-col border-gray-400 border p-8 gap-2 rounded-md"
        onSubmit={handleLogin}
      >
        <h1 className="text-xl text-center font-bold">Login</h1>
        <input
          className="border px-2 py-1 rounded-md h-12 w-64"
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="border px-2 py-1 rounded-md h-12 w-64"
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="bg-red-400 rounded-md py-2 text-white" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
