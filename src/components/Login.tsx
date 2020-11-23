import React, {
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Context } from "./Provider";
import Logo from "./Logo";
import { useHistory } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

/**
 * Login into the dashboard.
 * Sets the username and password into Context
 */
export default function Login() {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const context = useContext(Context);
  const history = useHistory();

  // check if user is already logged in
  useEffect(() => {
    axios
      .get("login/")
      .then(res => {
        if (res.status === 200) context.setIsLoggedIn(true);
      })
      .catch(err => console.error(err));
  }, [context]);

  /**
   * Sets credentials into context and rediect to dashboard
   *
   */
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    axios
      .post("login/", {
        username: usernameValue,
        password: passwordValue,
      })
      .then(res => {
        if (res.status === 200) {
          context.setIsLoggedIn(true);
          history.push("/dashboard");
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <>
      <main className="pt-24 bg-gray-100 h-screen">
        <div id="container" className="sm:max-w-sm w-full mx-auto">
          <Card className="p-4">
            <div className="mb-4">
              <Logo color="dark" />
            </div>
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col justify-center"
            >
              <label htmlFor="username">Username</label>
              <InputText
                id="username"
                className="mb-4"
                name="username"
                onChange={e =>
                  setUsernameValue(e.currentTarget.value)
                }
              />
              <label htmlFor="password">Password</label>
              <InputText
                id="password"
                className="mb-4"
                type="password"
                onChange={e =>
                  setPasswordValue(e.currentTarget.value)
                }
              />
              <Button
                label="Come come"
                type="submit"
                className="my-4 p-3"
              />
            </form>
          </Card>
        </div>
      </main>
    </>
  );
}
