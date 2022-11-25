import { useState } from "react";
import styles from "./index.module.css";

interface FormProps {
  doClientSideRequest: ({}) => void;
}

const Form = ({ doClientSideRequest }: FormProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    doClientSideRequest({ email, password });
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <h1>Sign in to your account</h1>

      <div>
        <label htmlFor="username">
          <input
            type="email"
            name="username"
            placeholder="johnythedesigner@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="**********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
      </div>
      <button type="submit" className={styles.button}>
        sign in
      </button>
    </form>
  );
};

export default Form;
