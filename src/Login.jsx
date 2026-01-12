import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Later you can add authentication here

    // Navigate to Dashboard
    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin} style={styles.form}>
        <label>
          Username &nbsp; &nbsp;
          <input type="text" required style={styles.input} />
        </label>

        <label>
          Password &nbsp; &nbsp;
          <input type="password" required style={styles.input} />
        </label>

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "20px",
    border: "1px solid #ccc",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "8px",
    marginTop: "4px",
  },
  button: {
    backgroundColor: "#0b5ed7",
    color: "#fff",
    padding: "10px",
    border: "none",
    cursor: "pointer",
  },
};

export default Login;
