import { FC, FormEvent, useState } from "react";

import useLogin from "@/hooks/use-login";
import PasswordSvg from "@/icons/password-svg";
import UsernameSvg from "@/icons/username-svg";

const LogIn: FC = () => {
  const [inputs, setInputs] = useState({
    username: "",
    pass: "",
  });

  const { loading, login } = useLogin();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(inputs);
    await login(inputs);
  };

  return (
    <div className="card bg-neutral shadow-xl">
      <form
        className="card-body items-center text-center"
        onSubmit={handleSubmit}
      >
        <label className="input input-bordered flex items-center gap-2">
          <UsernameSvg />
          <input
            className="grow"
            placeholder="Username"
            type="text"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <PasswordSvg />
          <input
            className="grow"
            placeholder="Password"
            type="password"
            value={inputs.pass}
            onChange={(e) => setInputs({ ...inputs, pass: e.target.value })}
          />
        </label>
        <div className="card-actions">
          <button className="btn btn-primary" disabled={loading} type="submit">
            {loading ? (
              <span className="loading loading-spinner text-primary"></span>
            ) : (
              "Log In"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
