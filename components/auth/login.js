import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const router = useRouter();

  //Will trigger parent page to rerender and run the SSR logic
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const submit = () => {
    axios
      .post("/api/auth/login", {
        username: username,
        password: password,
      })
      .then(() => {
        refreshData();
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 401) {
          setInvalidLogin(true);
          setLoginError(false);
        } else {
          setLoginError(true);
          setInvalidLogin(false);
        }
      });
  };

  return (
    <div class="w-full">
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <input
          type="text"
          class="input input-bordered w-full"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label class="label"></label>
      </div>
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          type="password"
          class="input input-bordered w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label class="label"></label>
      </div>
      {loginError ? (
        <p style={{ color: "red", fontWeight:"bold" }}>Error logging in. Please try again.</p>
      ) : (
        <></>
      )}
      {invalidLogin ? (
        <p style={{ color: "red", fontWeight:"bold" }}>Invalid username or password.</p>
      ) : (
        <></>
      )}
      <div class="form-control mt-6">
        <button class="btn btn-primary" onClick={(e) => submit()}>
          Login
        </button>
      </div>
    </div>
  );
}
