import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Store/Slice/AuthSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async () => {
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await res.json();

    console.log(data);

    if (data.token) {
      localStorage.setItem("token", data.token);

      dispatch(
        login({
          token: data.token,
          user: username,
        })
      );

      window.location.href = "/home";
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl">

        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mb-6"
        />

        <button
          type="button"
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-400 transition"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;