import React, { useState, FormEvent } from "react";

const App: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      "The email address and password are " +
        email +
        " and " +
        password +
        " respectively."
    );
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Register</h1>
        <div className="formInput">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formInput">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter a strong password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
