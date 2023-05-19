import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../appwrite";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createAccount(email, password, name);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <form
        className="flex flex-col border-gray-400 border p-8 gap-2 rounded-md"
        onSubmit={handleSignup}
      >
        <h1 className="text-xl text-center font-bold">SignUp</h1>
        <input
          className="border px-2 py-1 rounded-md h-12 w-64"
          type="name"
          placeholder="Enter Your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
