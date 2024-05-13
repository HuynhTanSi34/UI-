import { useState } from "react";
import "./Login.scss";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [getEye, setGetEye] = useState(true);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function showPass() {
    if (getEye == true) {
      setGetEye(false);
    } else {
      setGetEye(true);
    }

    let temp = document.getElementById("pass");
    let eyes = document.getElementById("eye");
    if (temp.type === "password") {
      temp.type = "text";
      eyes.style.color = "black";
    } else {
      temp.type = "password";
      eyes.style.color = "white";
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (data.username == "" || data.password == "") {
      toast.error("Please check information", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      axios
        .post("login", data)
        .then((response) => {
          if (response.status === 200) {
            toast.success("Login success!", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            toast.error("Username or Password Error", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Username or Password Error", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };
  return (
    <>
      <form>
        <div className="login-form">
          <div className="username">
            <input
              type="text"
              className="input-user"
              placeholder=" "
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <label className="label-user">Username</label>
          </div>
          <div className="password">
            <input
              type="password"
              className="input-pass"
              id="pass"
              placeholder=" "
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <label className="label-pass">Password</label>
            <FaRegEye className="eye" onClick={showPass} id="eye" />
          </div>
          <div className="submit">
            <input onClick={handleLogin} type="submit" value="Login" />
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
export default Login;
